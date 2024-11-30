"use client"

import Image from "next/image"
import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css/bundle"
import { useState } from "react"
import { useTranslations } from "next-intl" // Import the translation hook

const SliderOne = () => {
  const [hovered, setHovered] = useState(false)
  const t = useTranslations("slider") // Use the "slider" namespace for translations

  const buttonStyle = {
    backgroundColor: hovered ? "#0597fc" : "#152152",
    transition: "background-color 0.3s ease", // Smooth transition for the hover effect
  }

  return (
    <>
      <div className="slider-block style-one">
        <div className="slider-main h-[600px] md:h-[600px] lg:h-[730px]">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            speed={400}
            modules={[Pagination]} // Only using Pagination now
            className="h-full relative"
          >
            {/* First Slide */}
            <SwiperSlide>
              <div className="slider-item slider-first">
                <div className="bg-img relative h-full">
                  <Image
                    src="/images/slider/Home_Banner_1.jpg"
                    width={4000}
                    height={3000}
                    alt="bgslider"
                    priority={true}
                    className="w-full h-full object-cover"
                  />
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-dark bg-opacity-50 md:bg-opacity-30"></div>
                </div>

                <div className="container">
                  <div className="text-content flex-columns-between">
                    <div className="heading2 text-white font-bold">
                      <div className="relative overflow-hidden">
                        <span className="block relative overflow-hidden">
                          {t("empowerAndProtect")}
                        </span>
                        <span className="block absolute top-0 left-0 w-full h-full">
                          {t("empowerAndProtect")}
                        </span>
                      </div>
                      <div className="relative overflow-hidden">
                        <span className="block relative overflow-hidden">
                          {t("yourConsumerRightsWith")}
                        </span>
                        <span className="block absolute top-0 left-0 w-full h-full">
                          {t("yourConsumerRightsWith")}
                        </span>
                      </div>
                      <div className="relative overflow-hidden">
                        <span className="text-white block relative overflow-hidden">
                          {t("ourPlatform")}
                        </span>
                        <span className="text-white block absolute top-0 left-0 w-full h-full">
                          {t("ourPlatform")}
                        </span>
                      </div>
                    </div>
                    <div className="body2 mt-3 text-white font-bold">
                      {t("platformDescription")}
                    </div>
                    <div className="button-block md:mt-10 mt-6">
                      <Link
                        className="button-main text-white"
                        style={buttonStyle}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        href="/service/service-one"
                      >
                        {t("knowMore")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Additional Slides can follow the same pattern if needed */}
            {/* You can uncomment and use additional slides with similar translations */}
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default SliderOne
