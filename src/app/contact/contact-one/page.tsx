"use client"

import React, { useState } from "react"
import emailjs from "emailjs-com"
import TopNavOne from "@/components/Header/TopNav/TopNavOne"
import MenuOne from "@/components/Header/Menu/MenuOne"
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem"
import CtaOne from "@/components/Section/CTA/CtaOne"
import Footer from "@/components/Footer/Footer"
import * as Icon from "@phosphor-icons/react/dist/ssr"

export default function ContactStyleOne() {
  const [isHovered, setIsHovered] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    selectedFile: null as File | null,
    message: "",
    address: "",
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

  // Handle file upload change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData({ ...formData, selectedFile: file })
  }

  // Convert file to Base64
  const getBase64 = (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader()
      reader.onloadend = () => resolve(reader.result as string)
      reader.onerror = (error) => reject(error)
      reader.readAsDataURL(file)
    })
  }

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formData.selectedFile) {
      setErrorMessage("Please select a file to upload.")
      return
    }

    // Convert the selected file to Base64
    const fileBase64 = await getBase64(formData.selectedFile)

    // EmailJS service details
    const serviceID = "your_service_id"
    const templateID = "your_template_id"
    const userID = "your_user_id"

    // Prepare the data for EmailJS
    const templateParams = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      message: formData.message,
      address: formData.address,
      file: fileBase64, // Base64 file content
      fileName: formData.selectedFile.name, // Send file name if necessary
    }

    // Send the email using EmailJS
    emailjs.send(serviceID, templateID, templateParams, userID).then(
      (response) => {
        console.log("Email sent successfully", response)
        setSuccessMessage("Your details have been submitted successfully!")
        setFormData({
          name: "",
          phone: "",
          email: "",
          selectedFile: null,
          message: "",
          address: "",
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
          <MenuOne />
        </header>
        <main className="content">
          <BreadcrumbItem
            link="Contact us"
            img="/images/banner/about.jpg"
            title="Contact us"
            desc="Explore our Contact Us page for prompt assistance from our dedicated team."
          />
          <div className="form-contact style-one lg:py-[100px] sm:py-16 py-10">
            <div className="container flex items-center justify-center">
              <div className="xm:w-5/6 w-full flex max-xl:flex-col xl:items-center gap-y-8">
                {/* Left Side Section (Address, Phone, Email) */}
                <div className="w-full xl:w-2/5 xl:pr-20">
                  <div className="contact-info">
                    <div className="heading">
                      <div className="heading5">Contact Info</div>
                      <div className="body3 text-secondary mt-2">
                        Get in touch with us for more information.
                      </div>
                    </div>
                    <ul className="list-none">
                      <li className="flex items-center gap-4 mt-6">
                        <Icon.Phone className="text-xl" />
                        <div>
                          <div className="caption1">Phone Number</div>
                          <div className="body3">+91 93 44 10 8771</div>
                        </div>
                      </li>
                      <li className="flex items-center gap-4 mt-6">
                        <Icon.Envelope className="text-xl" />
                        <div>
                          <div className="caption1">Email Address</div>
                          <div className="body3">
                            tnccpctamilnadu2012@gmail.com
                          </div>
                        </div>
                      </li>
                      <li className="flex items-center gap-4 mt-6">
                        <Icon.MapPin className="text-xl" />
                        <div>
                          <div className="caption1">Address</div>
                          <div className="body3">
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
                    <div className="heading">
                      <div className="heading5">Your Rights Matter</div>
                      <div className="body3 text-secondary mt-2">
                        We are here to support you in asserting and protecting
                        your rights. Reach out to us for expert guidance and
                        assistance within 24 hours.
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
                          type="file"
                          name="selectedFile"
                          className="w-full bg-surface text-secondary caption1 pl-3 py-3 rounded-lg"
                          onChange={handleFileChange}
                          required
                        />
                      </div>
                      <div className="col-span-2 w-full">
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
                      <div className="col-span-2 w-full">
                        <textarea
                          name="message"
                          className="w-full bg-surface text-secondary caption1 px-4 py-3 rounded-lg"
                          rows={4}
                          placeholder="Type your Case"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
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
                        Submit request
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
