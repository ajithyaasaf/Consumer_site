// ServiceOne.tsx
"use client"

import React, { useRef } from "react"
import { useInView } from "framer-motion" // For adding scroll animations
import { ServiceType } from "@/type/ServiceType" // Import the updated ServiceType
import ServiceItem from "@/components/Service/ServiceItem" // Import ServiceItem component

interface Props {
  data: ServiceType[] // Correctly type this as an array of ServiceType
}

const ServiceOne: React.FC<Props> = ({ data }) => {
  const ref = useRef(null) // Reference to track the visibility of the component
  const isInView = useInView(ref, { once: true }) // Trigger animations when the component is in view

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
          Consumer Rights
        </h3>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-16 mt-8">
          {" "}
          {/* Increased gap between items */}
          {/* Map through the data and render ServiceItem for each consumer right */}
          {data.slice(0, 6).map((item, index) => (
            <ServiceItem
              data={item}
              style="style-one"
              number={index}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceOne
