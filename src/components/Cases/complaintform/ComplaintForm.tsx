// components/ComplaintForm.tsx

"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import emailjs from "emailjs-com"

const ComplaintForm = () => {
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
      setMessage("Please fill all required fields and agree to the terms.")
      return
    }

    setIsSubmitting(true)
    setMessage("Submitting...")

    try {
      const result = await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        e.target as HTMLFormElement,
        "YOUR_USER_ID"
      )

      if (result.status === 200) {
        setMessage("Your complaint has been successfully submitted!")
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
        setMessage("Something went wrong. Please try again later.")
      }
    } catch (error: any) {
      setMessage(
        "Failed to send message. Please try again. Error: " + error.message
      )
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="complaint-form">
      <h2 className="text-3xl font-bold text-center text-black mb-6">
        File a Complaint
      </h2>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-md mx-auto"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold">
            Full Name *
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
            Email Address *
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
            Phone Number *
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
            Complaint Type *
          </label>
          <select
            id="complaintType"
            name="complaintType"
            value={formData.complaintType}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md mt-2"
            required
          >
            <option value="">Select Complaint Type</option>
            <option value="Product Issue">Product Issue</option>
            <option value="Service Issue">Service Issue</option>
            <option value="Fraudulent Activity">Fraudulent Activity</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-semibold">
            Complaint Description *
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

        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mr-2"
            required
          />
          <label htmlFor="consent" className="text-sm font-semibold">
            I agree to the terms and conditions *
          </label>
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
            {isSubmitting ? "Submitting..." : "Submit Complaint"}
          </button>
        </div>

        {message && <p className="text-center text-red-500">{message}</p>}
      </form>
    </div>
  )
}

export default ComplaintForm
