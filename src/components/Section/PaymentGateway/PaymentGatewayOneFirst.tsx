"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { useTranslations } from "next-intl" // Import the translation hook

const PaymentGatewayOneFirst = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const t = useTranslations("paymentGateway") // Use the "paymentGateway" namespace for translations

  return (
    <section className="payment-gateway-one style-first lg:mt-[100px] sm:mt-16 mt-10 bg-surface relative">
      <div className="bg-img lg:absolute top-0 left-0 lg:w-1/2 w-full h-full flex-shrink-0">
        <Image
          className="w-full h-full object-cover"
          width={5000}
          height={5000}
          src="/images/Logo3.jpg"
          alt=""
        />
      </div>
      <div className="container w-full lg:py-[150px] pt-14 py-16">
        <div className="w-full flex items-center lg:justify-end" ref={ref}>
          <div
            className="payment-infor lg:w-1/2 xl:pl-20 lg:pl-10"
            style={{
              transform: isInView ? "none" : "translateX(60px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
            }}
          >
            <div className="text lg:mt-14 mt-5">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bold text-black leading-tight text-center">
                {t("coreActivitiesTitle")}
              </h3>

              <div className="body3 text-black font-semibold lg:mt-6 mt-4">
                {t("coreActivitiesDescription")}
                <br />
                <br />
                {t("missionDescription")}
              </div>
            </div>
            <div className="button-block flex items-center max-sm:flex-wrap sm:gap-6 gap-3 lg:mt-12 mt-8 w-fit">
              <div className="relative">
                <Link
                  className="button-main box-shadow hover:bg-black hover:text-white text-on-surface bg-white flex items-center gap-2 rounded-full relative z-[1]"
                  href="/contact/contact-one"
                >
                  <span className="whitespace-nowrap">(+91) 93 44 10 8771</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PaymentGatewayOneFirst
