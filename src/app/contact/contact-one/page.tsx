"use client"

import React, { useState } from "react"
import emailjs from "emailjs-com"
import TopNavOne from "@/components/Header/TopNav/TopNavOne"
import MenuOne from "@/components/Header/Menu/MenuOne"
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem"
import CtaOne from "@/components/Section/CTA/CtaOne"
import Footer from "@/components/Footer/Footer"
import * as Icon from "@phosphor-icons/react/dist/ssr"

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
        setSuccessMessage(
          "Your membership request has been submitted successfully!"
        )
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
        setErrorMessage("Failed to send your message. Please try again.")
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
            link="Membership Form"
            img="/images/banner/about.jpg"
            title="Membership Form"
            desc="Fill out the form below to apply for membership."
          />
          <div className="form-contact style-one lg:py-[100px] sm:py-16 py-10">
            <div className="container flex items-center justify-center">
              <div className="xm:w-5/6 w-full flex max-xl:flex-col xl:items-center gap-y-8">
                {/* Left Side Section (Membership Info, Phone, Email, etc.) */}
                <div className="w-full xl:w-2/5 xl:pr-20">
                  <div className="contact-info bg-gray-50 p-6 rounded-lg shadow-2xl">
                    <div className="heading mb-6">
                      <div className="heading5 text-xl font-semibold">
                        Our Contact Info
                      </div>
                      <div className="body3 text-secondary mt-2 text-sm">
                        Apply for membership and join our community today.
                      </div>
                    </div>
                    <ul className="list-none space-y-6">
                      <li className="flex items-center gap-4 hover:text-blue-600 transition-all duration-300">
                        <Icon.Phone className="text-xl text-blue-500" />
                        <div>
                          <div className="caption1 text-sm text-gray-700">
                            Phone Number
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
                            Email Address
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
                            Address
                          </div>
                          <div className="body3 text-secondary text-sm">
                            10, கல்பாலம் ரோடு, கோரிப்பாளையம், மதுரை - 625 002
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Right Side Section (Form) */}
                <div className="w-full xl:w-3/5 xl:pl-20">
                  <form
                    onSubmit={handleSubmit}
                    className="form-block flex flex-col justify-between gap-5"
                  >
                    <div className="heading mb-6">
                      <div className="heading5 text-xl font-semibold">
                        Apply for Membership
                      </div>
                      <div className="body3 text-secondary mt-2 text-sm">
                        Fill out the details below to become a member.
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="w-full">
                        <input
                          name="name"
                          className="w-full bg-surface text-secondary caption1 px-4 py-3 rounded-lg"
                          type="text"
                          placeholder="Name"
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
                          placeholder="Phone No"
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
                          placeholder="Email"
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
                          placeholder="Your Address"
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
                          placeholder="Your Profession"
                          value={formData.profession}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-span-2">
                        <div className="flex items-center gap-3">
                          <label className="text-sm">
                            Are you willing to join?
                          </label>
                          <input
                            type="radio"
                            name="willingToJoin"
                            value="yes"
                            checked={formData.willingToJoin === "yes"}
                            onChange={handleChange}
                          />
                          <label>Yes</label>
                          <input
                            type="radio"
                            name="willingToJoin"
                            value="no"
                            checked={formData.willingToJoin === "no"}
                            onChange={handleChange}
                          />
                          <label>No</label>
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
                        Submit Request
                      </button>
                    </div>

                    {successMessage && (
                      <div style={{ color: "green" }} className="mt-2">
                        {successMessage}
                      </div>
                    )}
                    {errorMessage && (
                      <div style={{ color: "red" }} className="mt-2">
                        {errorMessage}
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer id="footer">
          <Footer />
        </footer>
      </div>
    </>
  )
}
