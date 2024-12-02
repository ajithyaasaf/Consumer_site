"use client"

import { useState } from "react"
import Image from "next/image"
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
            <div
              className="image-container w-full overflow-hidden rounded-3xl relative"
              style={{ height: "500px" }}
            >
              <Image
                src="/images/Logo3.jpg"
                alt="TNCCPC LOGO"
                layout="fill" // Ensures the image fills the container
                objectFit="cover" // Ensures the image covers the div area without stretching
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col lg:pl-20">
            <div className="heading3">About Us</div>
            <div className="nav-infor mt-8">
              <div className="list-nav flex items-center gap-10 border-b border-line w-fit">
                {["History"].map((item, index) => (
                  <div
                    key={index} // Added key prop here to avoid the warning/error
                    className={`text-button-sm has-line-before line-2px line-blue cursor-pointer capitalize ${
                      tabActive === item ? "active" : ""
                    }`}
                    onClick={() => handleTabActive(item)} // Added onClick handler to change active tab
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
                    The Tamil Nadu Citizen Consumer Protection Centre (TNCCPC)
                    was established to empower consumers and promote consumer
                    rights across the state. Our commitment is to provide
                    education and resources that enable consumers to make
                    informed decisions.
                  </p>
                  <h3 className="mt-4 heading7">Our Mission</h3>
                  <p>
                    Our mission is to ensure that every consumer in Tamil Nadu
                    is aware of their rights and can exercise them effectively.
                    We engage with communities, providing training and resources
                    to help consumers navigate their rights and
                    responsibilities.
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
              consumers in the state. TNCCPC’s core activities encompass
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
              TNCCPC is dedicated to serving the interests of consumers across
              Tamil Nadu, empowering them to make informed choices and exercise
              their rights effectively.
            </p>
          </div>
          {/* Section 2 Image: Hidden on mobile (sm and below), visible on large screens (lg) */}
          <div className="w-full lg:w-1/2 hidden lg:block">
            <div
              className="image-container w-full overflow-hidden rounded-3xl relative"
              style={{ height: "500px" }}
            >
              <Image
                src="/images/about1.jpg"
                alt="TNCCPC"
                layout="fill" // Ensures the image fills the container
                objectFit="cover" // Ensures the image covers the div area without stretching
              />
            </div>
          </div>
        </div>

        {/* Section 3: Left image, right content */}
        <div className="row flex flex-col lg:flex-row gap-6 mt-16">
          <div className="w-full lg:w-1/2">
            <div
              className="image-container w-full overflow-hidden rounded-3xl relative"
              style={{ height: "500px" }}
            >
              <Image
                src="/images/about2.jpg"
                alt="Consumer Rights"
                layout="fill" // Ensures the image fills the container
                objectFit="cover" // Ensures the image covers the div area without stretching
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
      </div>
    </div>
  )
}

export default AboutTwo
