"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr"

const AboutTwo = () => {
  const [tabActive, setTabActive] = useState<string>("about us")
  const [isHovered, setIsHovered] = useState(false)

  const handleTabActive = (item: string) => {
    setTabActive(item)
  }

  return (
    <div className="about-block lg:py-[100px] sm:py-16 py-10 bg-white">
      <div className="container">
        <div className="row flex flex-col lg:flex-row gap-6">
          {/* Left side logo, right side content */}
          <div className="w-full lg:w-1/2">
            <div className="bg-img w-full overflow-hidden rounded-3xl">
              <Image
                src="/images/Logo3.jpg"
                width={4000}
                height={4000}
                alt="TNCCPC LOGO"
                className="w-full h-full block"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col lg:pl-20">
            <div className="heading3">About Us</div>
            <div className="nav-infor mt-8">
              <div className="list-nav flex items-center gap-10 border-b border-line w-fit">
                {["History"].map((item, index) => (
                  <div
                    className={`text-button-sm has-line-before line-2px line-blue cursor-pointer capitalize ${
                      tabActive === item ? "active" : ""
                    }`}
                    key={index}
                    onClick={() => handleTabActive(item)}
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div
                className={`description item-filter ${
                  tabActive === "about us" ? "show" : "hide"
                }`}
              >
                <div className="title text-secondary mt-4">
                  <p>
                    Founded in 2009 by Mr. Jaya Prakash, JP FinServ is a trusted
                    financial services company committed to making borrowing
                    easy, quick, and accessible. With over a decade of
                    experience, we have helped thousands of customers achieve
                    their financial goals by providing a diverse range of loan
                    products tailored to meet various needs.
                  </p>

                  <h3 className="mt-4">Our Journey and Success</h3>
                  <p>
                    Since its inception, JP FinServ has grown significantly,
                    having disbursed over 2,500 loans to date. Currently, we
                    manage a portfolio of more than 1,200 active loans,
                    reflecting our commitment to supporting our clients with
                    reliable financial solutions. We understand the unique needs
                    of each borrower, which is why we offer loans with simple
                    eligibility requirements, even for clients without Income
                    Tax Returns (ITR).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Left content, right image */}
        <div className="row flex flex-col lg:flex-row gap-6 mt-16">
          <div className="w-full lg:w-1/2 flex flex-col">
            <h2 className="text-3xl font-semibold">
              Tamil Nadu Citizen Consumer Protection Centre (TNCCPC)
            </h2>
            <p className="mt-4 text-lg">
              The mission of the Government of Tamil Nadu is to empower all
              consumers in the state. TNCPO’s core activities encompass
              education, research, awareness campaigns, and advocacy. We
              collaborate with grassroots social organizations to increase
              public participation, especially among marginalized and
              underprivileged communities, in addressing socio-economic
              concerns, gender equality, and ecological sustainability.
            </p>
            <p className="mt-4">
              Our overarching mission aligns with the Government of Tamil Nadu’s
              commitment to ensuring equitable transactions in the purchase of
              goods and services within the state, upholding consumer rights for
              all.
            </p>
            <h3 className="mt-6 font-semibold text-xl">Our Key Objectives:</h3>
            <ul className="list-disc list-inside mt-4">
              <li>
                Educating consumers about their rights under the Consumer
                Protection Act of 1986.
              </li>
              <li>
                Fostering community collaboration for responsible citizenship.
              </li>
              <li>
                Equipping consumers with knowledge to effectively address
                consumer issues.
              </li>
              <li>
                Establishing Citizen Consumer Clubs, with a special focus on
                empowering women.
              </li>
              <li>
                Imparting awareness of product standards, quality, and market
                dynamics.
              </li>
            </ul>
            <p className="mt-6">
              TNCPO is dedicated to serving the interests of consumers across
              Tamil Nadu, empowering them to make informed choices and exercise
              their rights effectively.
            </p>
          </div>

          {/* Section 2 Image: Hidden on mobile (sm and below), visible on large screens (lg) */}
          <div className="w-full lg:w-1/2 hidden lg:block">
            <div className="bg-img w-full overflow-hidden rounded-3xl">
              <Image
                src="/images/Logo3.jpg" // Reusing the same image here
                width={4000}
                height={4000}
                alt="TNCCPC"
                className="w-full h-full block"
              />
            </div>
          </div>
        </div>

        {/* Section 3: Left image, right content */}
        <div className="row flex flex-col lg:flex-row gap-6 mt-16">
          <div className="w-full lg:w-1/2">
            <div className="bg-img w-full overflow-hidden rounded-3xl">
              <Image
                src="/images/Logo3.jpg" // Reusing the same image here
                width={4000}
                height={4000}
                alt="Consumer Rights"
                className="w-full h-full block"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col">
            <h3 className="mt-6 font-semibold text-xl">
              Consumer Rights Violations:
            </h3>
            <p className="mt-4">
              Consumer rights violations are prevalent in India, primarily due
              to a lack of awareness and understanding of laws. Many consumers,
              especially in economically disadvantaged areas, remain uninformed
              about their rights, making them vulnerable to exploitation by
              unscrupulous producers and retailers.
            </p>

            <p className="mt-4">
              Below are common instances of consumer rights violations:
            </p>

            <ul className="list-disc list-inside mt-4">
              <li>
                Under Weighing: Sellers provide less quantity than paid for.
              </li>
              <li>Adulteration: Products mixed with substandard substances.</li>
              <li>
                Failure to Provide Proper Bills: No valid receipt or bill.
              </li>
              <li>
                Cheating on Contract Terms: Deception by not adhering to terms.
              </li>
              <li>Price Gouging: Charging more than MRP.</li>
            </ul>
          </div>
        </div>

        {/* Contact Buttons */}
        {/* <div className="button-block flex items-center gap-5 md:mt-10 mt-6 pb-2">
          <a
            className="button-main text-white text-button rounded-full"
            style={{
              backgroundColor: isHovered ? "#0597fc" : "#152152",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            href="/contact/contact-one" // Updated URL
          >
            Get started
          </a>
          <a
            className="button-main text-on-surface hover:bg-black hover:text-white hover:border-transparent bg-white text-button rounded-full border-2 border-blue flex items-center gap-2"
            href="/contact/contact-one"
          >
            <i className="ph ph-phone text-xl"></i>
            <span>(+91) 97919 12211</span>
          </a>
        </div> */}
      </div>
    </div>
  )
}

export default AboutTwo
