"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { useTranslations } from "next-intl"

type FormData = {
  name: string
  email: string
  phone: string
  complaintType: string
  description: string
}

const ComplaintForm = () => {
  const t = useTranslations("complaintForm") // Get translations for the "complaintForm" namespace
  const [isHovered, setIsHovered] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    complaintType: "",
    description: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")
  const router = useRouter()

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target

    setFormData((prev) => ({
      ...prev,
      [name as keyof FormData]: value, // Ensure name matches a key of FormData
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate required fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.complaintType ||
      !formData.description // Removed consent check
    ) {
      setMessage(t("message.requiredFields"))
      return
    }

    setIsSubmitting(true)
    setMessage(t("message.submitting"))

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "complaint", // Add this to the body
          ...formData, // Spread the rest of the form data
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage(t("message.success"))
        setFormData({
          name: "",
          email: "",
          phone: "",
          complaintType: "",
          description: "",
        })
        // Redirect to thank you page if needed
      } else {
        setMessage(data.error || t("message.error"))
      }
    } catch (error: any) {
      setMessage(t("message.error") + " Error: " + error.message)
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="complaint-form">
      <h2 className="text-3xl font-bold text-center text-black mb-6">
        {t("title")}
      </h2>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-md mx-auto"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold">
            {t("name")} *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-surface text-secondary caption1 px-4 py-3 rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold">
            {t("email")} *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-surface text-secondary caption1 px-4 py-3 rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-semibold">
            {t("phone")} *
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-surface text-secondary caption1 px-4 py-3 rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="complaintType"
            className="block text-sm font-semibold"
          >
            {t("complaintType")} *
          </label>
          <select
            id="complaintType"
            name="complaintType"
            value={formData.complaintType}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md mt-2"
            required
          >
            <option value="">{t("selectComplaintType")}</option>
            <option value="Product Issue">{t("productIssue")}</option>
            <option value="Service Issue">{t("serviceIssue")}</option>
            <option value="Fraudulent Activity">
              {t("fraudulentActivity")}
            </option>
            <option value="Other">{t("other")}</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-semibold">
            {t("description")} *
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className="w-full bg-surface text-secondary caption1 px-4 py-3 rounded-lg"
            required
          ></textarea>
        </div>

        <div className="mb-4 button-block">
          <button
            type="submit"
            className={`button-main text-white text-button rounded-ful ${
              isSubmitting ? "opacity-50" : ""
            }`}
            style={{
              backgroundColor: isHovered ? "#0597fc" : "#050f3f",
            }}
            disabled={isSubmitting}
          >
            {isSubmitting ? t("submitting") : t("submit")}
          </button>
        </div>

        {message && <p className="text-center text-red-500">{message}</p>}
      </form>
    </div>
  )
}

export default ComplaintForm
