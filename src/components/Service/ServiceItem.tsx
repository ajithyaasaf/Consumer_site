"use client"

import React, { useState } from "react"
import * as Icon from "@phosphor-icons/react" // Import necessary icons
import { ServiceType } from "@/type/ServiceType" // Import ServiceType

interface Props {
  data: ServiceType // Data for each right
  style: string
  number: number
}

// Define the keys of the icon mapping explicitly
type IconMappingKeys =
  | "Right to Safety"
  | "Right to be Informed"
  | "Right to Choose"
  | "Right to be Heard"
  | "Right to Seek Redressal"
  | "Right to Consumer Education"

const ServiceItem: React.FC<Props> = ({ data, style, number }) => {
  // Icons for each right (customizable for each "Right")
  const iconMapping: Record<IconMappingKeys, React.JSX.Element> = {
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
  const additionalContent = {
    "Right to Safety": (
      <>
        <p>
          The Right to Safety ensures that consumers are protected from goods
          and services that are hazardous to health or life.
        </p>
        <p className="mt-4">
          This right empowers consumers to demand safe products and practices,
          and to seek compensation for any harm caused by unsafe products.
        </p>
      </>
    ),
    "Right to be Informed": (
      <>
        <p>
          The Right to be Informed ensures that consumers are given accurate and
          truthful information about products or services before making a
          purchase.
        </p>
        <p className="mt-4">
          This right protects consumers from deceptive practices and helps them
          make informed choices about the products and services they purchase.
        </p>
      </>
    ),
    "Right to Choose": (
      <>
        <p>
          The Right to Choose allows consumers to select from a variety of
          products and services at competitive prices.
        </p>
        <p className="mt-4">
          This right encourages healthy competition and prevents monopolies,
          ensuring consumers have access to multiple options.
        </p>
      </>
    ),
    "Right to be Heard": (
      <>
        <p>
          The Right to be Heard ensures that consumers&apos; concerns and
          complaints are taken into account by businesses, authorities, and
          other decision-makers.
        </p>
        <p className="mt-4">
          This right gives consumers a voice, promoting fair treatment and the
          opportunity to advocate for their needs.
        </p>
      </>
    ),
    "Right to Seek Redressal": (
      <>
        <p>
          The Right to Seek Redressal provides consumers with the ability to
          seek compensation for goods or services that do not meet quality
          standards.
        </p>
        <p className="mt-4">
          This right allows consumers to take legal action if they are wronged
          and ensures accountability for businesses.
        </p>
      </>
    ),
    "Right to Consumer Education": (
      <>
        <p>
          The Right to Consumer Education empowers individuals with the
          knowledge and skills they need to make informed decisions and to
          understand their rights.
        </p>
        <p className="mt-4">
          It helps consumers understand how markets function, their role in the
          economy, and how to protect their interests.
        </p>
      </>
    ),
  }

  // Since data.title is one of the above keys, we can safely index into iconMapping
  const icon = iconMapping[data.title as IconMappingKeys] || (
    <Icon.Question size={50} className="text-[#152152]" />
  )

  return (
    <div className="service-item p-8 bg-white rounded-lg shadow-md hover:shadow-xl cursor-pointer">
      <div className="flex items-center gap-6">
        {/* Render icon based on title */}
        <div className="icon-container text-[#49befb]">{icon}</div>
        <div className="heading-container flex-1">
          <h4 className="text-2xl font-semibold text-[#152152]">
            {data.title}
          </h4>
        </div>
      </div>
      <p className="text-lg text-[#333] mt-6">{data.desc}</p>

      {/* Add relevant additional content */}
      <div className="additional-content mt-8 text-lg text-[#555]">
        {additionalContent[data.title as IconMappingKeys] || (
          <p>More details on this right coming soon...</p>
        )}
      </div>
    </div>
  )
}

export default ServiceItem
