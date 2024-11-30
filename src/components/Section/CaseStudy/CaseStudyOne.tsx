"use client"

import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr"

const CaseStudyOne = () => {
  return (
    <>
      <section className="case-study-block style-one lg:pt-[100px] sm:pt-16 pt-10">
        <div className="container">
          <div className="heading text-center">
            <h3 className="heading3">Our Process</h3>
          </div>
        </div>
        <div className="list-case-study md:mt-10 mt-6">
          <div className="list grid lg:grid-cols-4 sm:grid-cols-2 gap-y-6 sm:gap-y-10">
            {/* First Case Study */}
            <div className="w-full">
              <div className="case-study-item">
                <div className="bg-img bg-white w-full h-[400px] block"></div>
                <div className="text flex flex-col justify-between gap-3 py-6">
                  <div className="heading5">
                    <Link
                      className="text-black hover:text-white transition-colors duration-300"
                      href="/contact/contact-one"
                    >
                      Free Cibil Check
                    </Link>
                  </div>
                  <div className="body2 text-black">
                    We are committed to providing reliable and high-quality
                    financial advisory in our services.
                  </div>
                  <Link
                    className="flex items-center gap-1"
                    href="/service/service-one"
                  >
                    <div className="text-button text-black hover:text-white">
                      Read More
                    </div>
                    <Icon.CaretDoubleRight
                      weight="bold"
                      className="text-xs text-black hover:text-white mt-1 transition-colors duration-300"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Second Case Study */}
            <div className="w-full">
              <div className="case-study-item">
                <div className="bg-img bg-white w-full h-[400px] block"></div>
                <div className="text flex flex-col justify-between gap-3 py-6">
                  <div className="heading5">
                    <Link
                      className="text-black hover:text-white transition-colors duration-300"
                      href="/contact/contact-one"
                    >
                      Documentation
                    </Link>
                  </div>
                  <div className="body2 text-black">
                    With an experienced and skilled team, we bring the necessary
                    expertise to enhance work productivity.
                  </div>
                  <Link
                    className="flex items-center gap-1"
                    href="/service/service-one"
                  >
                    <div className="text-button text-black hover:text-white">
                      Read More
                    </div>
                    <Icon.CaretDoubleRight
                      weight="bold"
                      className="text-xs text-black hover:text-white mt-1 transition-colors duration-300"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Third Case Study */}
            <div className="w-full">
              <div className="case-study-item">
                <div className="bg-img bg-white w-full h-[400px] block"></div>
                <div className="text flex flex-col justify-between gap-3 py-6">
                  <div className="heading5">
                    <Link
                      className="text-black hover:text-white transition-colors duration-300"
                      href="/contact/contact-one"
                    >
                      Approval
                    </Link>
                  </div>
                  <div className="body2 text-black">
                    We constantly seek advanced solutions to address challenges
                    and deliver the highest value to our customers.
                  </div>
                  <Link
                    className="flex items-center gap-1"
                    href="/service/service-one"
                  >
                    <div className="text-button text-black hover:text-white">
                      Read More
                    </div>
                    <Icon.CaretDoubleRight
                      weight="bold"
                      className="text-xs text-black hover:text-white mt-1 transition-colors duration-300"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Fourth Case Study */}
            <div className="w-full">
              <div className="case-study-item">
                <div className="bg-img bg-white w-full h-[400px] block"></div>
                <div className="text flex flex-col justify-between gap-3 py-6">
                  <div className="heading5">
                    <Link
                      className="text-black hover:text-white transition-colors duration-300"
                      href="/contact/contact-one"
                    >
                      Sanction & Payments
                    </Link>
                  </div>
                  <div className="body2 text-black">
                    With over 21 years of serving industrial customers and over
                    3000 projects, we have the experience to solve almost.
                  </div>
                  <Link
                    className="flex items-center gap-1"
                    href="/service/service-one"
                  >
                    <div className="text-button text-black hover:text-white">
                      Read More
                    </div>
                    <Icon.CaretDoubleRight
                      weight="bold"
                      className="text-xs text-black hover:text-white mt-1 transition-colors duration-300"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        @media (max-width: 640px) {
          .case-study-block .case-study-item {
            animation: none; /* Disable moving animation */
          }
        }
      `}</style>
    </>
  )
}

export default CaseStudyOne
