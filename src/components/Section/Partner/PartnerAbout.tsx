"use client"

import React from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css/bundle"

interface Props {
  classname?: string // Accept classname as a prop
}

const PartnerAbout: React.FC<Props> = ({ classname }) => {
  return (
    <div className={`partner-block md:py-[100px] py-[32px] ${classname}`}>
      <div className="container">
        <div className="list-partner">
          <Swiper
            spaceBetween={12}
            slidesPerView={2}
            loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
            }}
            breakpoints={{
              500: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
              680: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
              992: {
                slidesPerView: 4,
                spaceBetween: 16,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 16,
              },
            }}
          >
            <SwiperSlide>
              <div className="partner-item relative flex items-center justify-center md:h-16 h-10">
                <Image
                  src={"/images/partner/lh.png"}
                  width={500}
                  height={500}
                  alt="Partner 1"
                  className="h-full w-auto duration-500 relative object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="partner-item relative flex items-center justify-center md:h-16 h-10">
                <Image
                  src={"/images/partner/shang.png"}
                  width={500}
                  height={500}
                  alt="Partner 2"
                  className="h-full w-auto duration-500 relative object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="partner-item relative flex items-center justify-center md:h-16 h-10">
                <Image
                  src={"/images/partner/pana.png"}
                  width={500}
                  height={500}
                  alt="Partner 3"
                  className="h-full w-auto duration-500 relative object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="partner-item relative flex items-center justify-center md:h-16 h-10">
                <Image
                  src={"/images/partner/masa.png"}
                  width={500}
                  height={500}
                  alt="Partner 4"
                  className="h-full w-auto duration-500 relative object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="partner-item relative flex items-center justify-center md:h-16 h-10">
                <Image
                  src={"/images/partner/van.png"}
                  width={500}
                  height={500}
                  alt="Partner 5"
                  className="h-full w-auto duration-500 relative object-cover"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default PartnerAbout
