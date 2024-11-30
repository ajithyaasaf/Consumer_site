"use client"

import React, { useState } from "react"
import emailjs from "emailjs-com"
import TopNavOne from "@/components/Header/TopNav/TopNavOne"
import MenuOne from "@/components/Header/Menu/MenuOne"
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem"
import Footer from "@/components/Footer/Footer"
import * as Icon from "@phosphor-icons/react/dist/ssr"
import { useTranslations } from "next-intl"

export default function MembershipForm() {
  const [isHovered, setIsHovered] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    profession: "",
    willingToJoin: "", // 'yes' or 'no'
  })

  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const t = useTranslations() // Use translations based on active locale

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // EmailJS service details
    const serviceID = "your_service_id"
    const templateID = "your_template_id"
    const public_Id = "9VMEM3abPPM9o7lOD"

    // Prepare the data for EmailJS
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      profession: formData.profession,
      willingToJoin: formData.willingToJoin,
    }

    // Send the email using EmailJS
    emailjs.send(serviceID, templateID, templateParams, public_Id).then(
      (response) => {
        console.log("Email sent successfully", response)
        setSuccessMessage(t("applyForMembership.successMessage"))
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          profession: "",
          willingToJoin: "",
        })
        setTimeout(() => setSuccessMessage(""), 3000)
      },
      (error) => {
        console.error("Error sending email:", error)
        setErrorMessage(t("applyForMembership.errorMessage"))
      }
    )
  }

  return (
    <>
      <div className="overflow-x-hidden">
        <header id="header">
          <TopNavOne />
          <MenuOne />
        </header>
        <main className="content">
          <BreadcrumbItem
            link={t("applyForMembership.title")}
            img="/images/banner4.jpg"
            title={t("applyForMembership.title")}
            desc={t("applyForMembership.description")}
          />
          <div className="form-contact style-one lg:py-[100px] sm:py-16 py-10">
            <div className="container flex items-center justify-center">
              <div className="xm:w-5/6 w-full flex max-xl:flex-col xl:items-center gap-y-8">
                {/* Left Side Section */}
                <div className="w-full xl:w-2/5 xl:pr-20">
                  <div className="contact-info bg-gray-50 p-6 rounded-lg shadow-2xl">
                    <div className="heading mb-6">
                      <div className="heading5 text-xl font-semibold">
                        {t("contactInfo.title")}
                      </div>
                      <div className="body3 text-secondary mt-2 text-sm">
                        {t("contactInfo.description")}
                      </div>
                    </div>
                    <ul className="list-none space-y-6">
                      <li className="flex items-center gap-4 hover:text-blue-600 transition-all duration-300">
                        <Icon.Phone className="text-xl text-blue-500" />
                        <div>
                          <div className="caption1 text-sm text-gray-700">
                            {t("contactInfo.phone")}
                          </div>
                          <div className="body3 text-secondary text-sm">
                            +91 93 44 10 8771
                          </div>
                        </div>
                      </li>
                      <li className="flex items-center gap-4 hover:text-blue-600 transition-all duration-300">
                        <Icon.Envelope className="text-xl text-blue-500" />
                        <div>
                          <div className="caption1 text-sm text-gray-700">
                            {t("contactInfo.email")}
                          </div>
                          <div className="body3 text-secondary text-sm">
                            tnccpctamilnadu2012@gmail.com
                          </div>
                        </div>
                      </li>
                      <li className="flex items-center gap-4 hover:text-blue-600 transition-all duration-300">
                        <Icon.MapPin className="text-xl text-blue-500" />
                        <div>
                          <div className="caption1 text-sm text-gray-700">
                            {t("contactInfo.address")}
                          </div>
                          <div className="body3 text-secondary text-sm">
                            10, கல்பாலம் ரோடு, கோரிப்பாளையம், மதுரை - 625 002
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Right Side Section */}
                <div className="w-full xl:w-3/5 xl:pl-20">
                  <form
                    onSubmit={handleSubmit}
                    className="form-block flex flex-col justify-between gap-5"
                  >
                    <div className="heading mb-6">
                      <div className="heading5 text-xl font-semibold">
                        {t("applyForMembership.title")}
                      </div>
                      <div className="body3 text-secondary mt-2 text-sm">
                        {t("applyForMembership.description")}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="w-full">
                        <input
                          name="name"
                          className="w-full bg-surface text-secondary caption1 px-4 py-3 rounded-lg"
                          type="text"
                          placeholder={t("applyForMembership.name")}
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="w-full">
                        <input
                          name="phone"
                          className="w-full bg-surface text-secondary caption1 px-4 py-3 rounded-lg"
                          type="number"
                          placeholder={t("applyForMembership.phone")}
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-span-2">
                        <input
                          name="email"
                          className="w-full bg-surface text-secondary caption1 px-4 py-3 rounded-lg"
                          type="email"
                          placeholder={t("applyForMembership.email")}
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-span-2">
                        <input
                          name="address"
                          className="w-full bg-surface text-secondary caption1 px-4 py-3 rounded-lg"
                          type="text"
                          placeholder={t("applyForMembership.address")}
                          value={formData.address}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-span-2">
                        <input
                          name="profession"
                          className="w-full bg-surface text-secondary caption1 px-4 py-3 rounded-lg"
                          type="text"
                          placeholder={t("applyForMembership.profession")}
                          value={formData.profession}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-span-2">
                        <div className="flex items-center gap-3">
                          <label className="text-sm">
                            {t("applyForMembership.willingToJoin")}
                          </label>
                          <input
                            type="radio"
                            name="willingToJoin"
                            value="yes"
                            checked={formData.willingToJoin === "yes"}
                            onChange={handleChange}
                          />
                          <label>{t("applyForMembership.yes")}</label>
                          <input
                            type="radio"
                            name="willingToJoin"
                            value="no"
                            checked={formData.willingToJoin === "no"}
                            onChange={handleChange}
                          />
                          <label>{t("applyForMembership.no")}</label>
                        </div>
                      </div>
                    </div>

                    <div className="button-block">
                      <button
                        type="submit"
                        className="button-main text-white text-button rounded-full"
                        style={{
                          backgroundColor: isHovered ? "#0597fc" : "#050f3f",
                        }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                      >
                        {t("applyForMembership.submitButton")}
                      </button>
                    </div>

                    {/* Success and Error Messages */}
                    {successMessage && (
                      <div className="text-green-500 mt-4">
                        {successMessage}
                      </div>
                    )}
                    {errorMessage && (
                      <div className="text-red-500 mt-4">{errorMessage}</div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
