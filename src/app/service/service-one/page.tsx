"use client"

import TopNavOne from "@/components/Header/TopNav/TopNavOne"
import MenuOne from "@/components/Header/Menu/MenuOne"
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem"
import Footer from "@/components/Footer/Footer"
import { useState } from "react"

export default function HistoryPage() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
      <div className="overflow-x-hidden">
        {/* Header */}
        <header id="header">
          <TopNavOne />
          <MenuOne />
        </header>

        <main className="content">
          {/* Breadcrumb */}
          <BreadcrumbItem
            link="History of the Consumer Protection Act"
            img="/images/banner/services.jpg"
            title="History of the Consumer Protection Act"
            desc="Learn about the important legislation that protects consumers in India."
          />

          {/* Main Content: History Section */}
          <div className="mt-[100px]">
            <div className="container px-4 lg:px-8">
              <div className="flex flex-col gap-12">
                {/* Main Heading */}
                <div className="w-full text-center">
                  <h1 className="heading3 text-3xl sm:text-4xl font-bold text-gray-900">
                    The Consumer Protection Act, 1986: A Milestone for Consumers
                  </h1>
                </div>

                {/* History Content */}
                <div className="w-full text-justify">
                  <p className="body2 text-secondary">
                    The Consumer Protection Act, 1986 (hereinafter referred to
                    as the Act) is one of the benevolent social legislations
                    intended to protect the large body of consumers from
                    exploitation. The Act has come as a panacea for consumers
                    all over the country and has assumed the shape of
                    practically the most important legislation enacted in the
                    country during the last few years. It has become the vehicle
                    for enabling people to secure speedy and inexpensive
                    redressal of their grievances.
                  </p>
                  <p className="body2 text-secondary mt-4">
                    With the enactment of this law, consumers now feel that they
                    are in a position to declare &quot;sellers beware,&quot;
                    whereas previously, the consumers were at the receiving end
                    and generally told &quot;buyers beware.&quot;
                  </p>

                  {/* Key Provisions */}
                  <h3 className="text-2xl sm:text-3xl font-semibold text-primary mt-8">
                    Key Provisions of the Act
                  </h3>
                  <p className="body2 text-secondary mt-4">
                    The Act postulates the establishment of the Central Consumer
                    Protection Council and the State Consumer Protection
                    Councils for the purpose of spreading consumer awareness.
                    The Central Council is headed by the Minister-in-charge of
                    Consumer Affairs in the Central Government, while at the
                    State level, it is the Minister-in-charge of Consumer
                    Affairs in the State Government who heads the State Council.
                  </p>

                  {/* Dispute Redressal */}
                  <h3 className="text-2xl sm:text-3xl font-semibold text-primary mt-8">
                    Consumer Dispute Redressal Mechanism
                  </h3>
                  <p className="body2 text-secondary mt-4">
                    To provide cheap, speedy, and simple redressal to consumer
                    disputes, quasi-judicial machinery has been set up at each
                    District, State, and National levels called District Forums,
                    State Consumer Disputes Redressal Commission, and National
                    Consumer Disputes Redressal Commission, respectively.
                  </p>

                  {/* Call-to-Action */}
                  <div className="text-center mt-10">
                    <a
                      className="button-main inline-block py-3 px-9 rounded-full transition duration-300 ease-in-out"
                      style={{
                        backgroundColor: isHovered ? "#0597fc" : "#0f2054",
                        color: "#fff",
                      }}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      href="/contact/contact-one"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
        </main>

        <footer id="footer" className="mt-16">
          <Footer />
        </footer>
      </div>
    </>
  )
}
