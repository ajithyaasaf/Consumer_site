"use client"

import React, { useRef } from "react"
import { useInView } from "framer-motion" // For adding scroll animations
import * as Icon from "@phosphor-icons/react" // Import necessary icons
import { ServiceType } from "@/type/ServiceType" // Import ServiceType
import { useTranslations } from "next-intl" // Import useTranslations for localization

interface Props {
  data: ServiceType[] // Correctly type this as an array of ServiceType
}

const Service: React.FC<Props> = ({ data }) => {
  const ref = useRef(null) // Reference to track the visibility of the component
  const isInView = useInView(ref, { once: true }) // Trigger animations when the component is in view
  const t = useTranslations("serviceOne") // Access translation function for "serviceOne" namespace

  // Icons for each right (customizable for each "Right")
  const iconMapping: Record<string, React.JSX.Element> = {
    "Right to Safety": (
      <Icon.ShieldCheck size={50} className="text-[#000000]" />
    ),
    "Right to be Informed": <Icon.Info size={50} className="text-[#000000]" />,
    "Right to Choose": (
      <Icon.ArrowElbowDownLeft size={50} className="text-[#000000]" />
    ),
    "Right to be Heard": (
      <Icon.Megaphone size={50} className="text-[#000000]" />
    ),
    "Right to Seek Redressal": (
      <Icon.FileText size={50} className="text-[#000000]" />
    ),
    "Right to Consumer Education": (
      <Icon.BookOpen size={50} className="text-[#000000]" />
    ),
  }

  // Additional content based on the title of the right
  const additionalContent: Record<string, React.JSX.Element> = {
    "Right to Safety": (
      <>
        <p>{t("rights.Right to Safety.desc")}</p>
        <p className="mt-4">{t("rights.Right to Safety.additional.0")}</p>
        <p>{t("rights.Right to Safety.additional.1")}</p>
      </>
    ),
    "Right to be Informed": (
      <>
        <p>{t("rights.Right to be Informed.desc")}</p>
        <p className="mt-4">{t("rights.Right to be Informed.additional.0")}</p>
        <p>{t("rights.Right to be Informed.additional.1")}</p>
      </>
    ),
    "Right to Choose": (
      <>
        <p>{t("rights.Right to Choose.desc")}</p>
        <p className="mt-4">{t("rights.Right to Choose.additional.0")}</p>
        <p>{t("rights.Right to Choose.additional.1")}</p>
      </>
    ),
    "Right to be Heard": (
      <>
        <p>{t("rights.Right to be Heard.desc")}</p>
        <p className="mt-4">{t("rights.Right to be Heard.additional.0")}</p>
        <p>{t("rights.Right to be Heard.additional.1")}</p>
      </>
    ),
    "Right to Seek Redressal": (
      <>
        <p>{t("rights.Right to Seek Redressal.desc")}</p>
        <p className="mt-4">
          {t("rights.Right to Seek Redressal.additional.0")}
        </p>
        <p>{t("rights.Right to Seek Redressal.additional.1")}</p>
      </>
    ),
    "Right to Consumer Education": (
      <>
        <p>{t("rights.Right to Consumer Education.desc")}</p>
        <p className="mt-4">
          {t("rights.Right to Consumer Education.additional.0")}
        </p>
        <p>{t("rights.Right to Consumer Education.additional.1")}</p>
      </>
    ),
  }

  return (
    <section
      className="service-block lg:mt-[100px] sm:mt-16 mt-10 py-12"
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(60px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
      }}
    >
      <div className="container">
        <h3 className="text-center text-4xl font-bold text-[#152152] mb-12">
          {t("title")}
        </h3>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-16 mt-8">
          {data.slice(0, 6).map((item, index) => {
            const icon = iconMapping[item.title] || (
              <Icon.Question size={50} className="text-[#152152]" />
            )
            const content = additionalContent[item.title] || (
              <p>{t("common.noDetails")}</p>
            )

            return (
              <div
                className="service-item p-8 bg-white rounded-lg shadow-md hover:shadow-xl cursor-pointer"
                key={index}
              >
                <div className="flex items-center gap-6">
                  <div className="icon-container text-[#49befb]">{icon}</div>
                  <div className="heading-container flex-1">
                    <h4 className="text-2xl font-semibold text-[#152152]">
                      {t(`rights.${item.title}.title`)}
                    </h4>
                  </div>
                </div>
                <p className="text-lg text-[#333] mt-6">
                  {t(`rights.${item.title}.desc`)}
                </p>

                <div className="additional-content mt-8 text-lg text-[#555]">
                  {content}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Service
