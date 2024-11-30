"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import emailjs from "emailjs-com"
import { useTranslations } from "next-intl"

const ComplaintForm = () => {
  const t = useTranslations("complaintForm") // Get translations for the "complaintForm" namespace
  const [isHovered, setIsHovered] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    complaintType: "",
    description: "",
    consent: false,
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
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.complaintType ||
      !formData.description ||
      !formData.consent
    ) {
      setMessage(t("message.requiredFields"))
      return
    }

    setIsSubmitting(true)
    setMessage(t("message.submitting"))

    try {
      const result = await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        e.target as HTMLFormElement,
        "YOUR_USER_ID"
      )

      if (result.status === 200) {
        setMessage(t("message.success"))
        setFormData({
          name: "",
          email: "",
          phone: "",
          complaintType: "",
          description: "",
          consent: false,
        })
        router.push("/thank-you") // Redirect to thank you page if needed
      } else {
        setMessage(t("message.error"))
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
