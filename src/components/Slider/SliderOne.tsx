"use client"

import Image from "next/image"
import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules" // Removed Navigation and Autoplay modules
import "swiper/css/bundle"
import { useState } from "react"

const SliderOne = () => {
  const [hovered, setHovered] = useState(false)

  const buttonStyle = {
    backgroundColor: hovered ? "#0597fc" : "#152152",
    transition: "background-color 0.3s ease", // Smooth transition for the hover effect
  }

  return (
    <>
      <div className="slider-block style-one">
        {/* Removed left and right arrow navigation */}
        <div className="slider-main">
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
                <div className="bg-img relative">
                  <Image
                    src="/images/slider/Home_Banner_1.jpg"
                    width={4000}
                    height={3000}
                    alt="bgslider"
                    priority={true}
                    className="w-full h-full object-cover "
                  />
                  {/* Black overlay */}
                  {/* <div className="absolute inset-0 bg-grey"></div> */}
                </div>

                <div className="container">
                  <div className="text-content flex-columns-between">
                    <div className="heading2 text-white font-bold">
                      <div className="relative overflow-hidden">
                        <span className="block relative overflow-hidden">
                          Empower and Protect
                        </span>
                        <span className="block absolute top-0 left-0 w-full h-full">
                          Empower and Protect
                        </span>
                      </div>
                      <div className="relative overflow-hidden">
                        <span className="block relative overflow-hidden">
                          Your Consumer Rights with
                        </span>
                        <span className="block absolute top-0 left-0 w-full h-full">
                          Your Consumer Rights with
                        </span>
                      </div>
                      <div className="relative overflow-hidden">
                        <span className="text-white block relative overflow-hidden">
                          Our Platform
                        </span>
                        <span className="text-white block absolute top-0 left-0 w-full h-full">
                          Our Platform
                        </span>
                      </div>
                    </div>
                    <div className="body2 mt-3 text-white font-bold">
                      Our platform helps consumers understand and assert their
                      rights
                      <br />
                      in various transactions and services, ensuring a fair
                      experience.
                      <br />
                      We provide the tools to protect your rights and advocate
                      for justice.
                    </div>
                    <div className="button-block md:mt-10 mt-6">
                      <Link
                        className="button-main text-white"
                        style={buttonStyle}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        href="/service/service-one"
                      >
                        Discover More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Commented out second and third slides */}
            {/* <SwiperSlide>
              <div className="slider-item slider-second">
                <div className="bg-img">
                  <Image
                    src={"/images/slider/Home_Banner_2.jpg"}
                    width={4000}
                    height={3000}
                    alt="bgslider"
                    priority={true}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="container">
                  <div className="text-content flex-columns-between">
                    <div className="heading2 text-black font-bold">
                      <div className="relative overflow-hidden">
                        <span className="block relative overflow-hidden">
                          Empower Your
                        </span>
                        <span className="block absolute top-0 left-0 w-full h-full">
                          Empower Your
                        </span>
                      </div>
                      <div className="relative overflow-hidden">
                        <span className="block relative overflow-hidden">
                          Business with
                        </span>
                        <span className="block absolute top-0 left-0 w-full h-full">
                          Business with
                        </span>
                      </div>
                      <div className="relative overflow-hidden">
                        <span className="text-[#0597fc] block relative overflow-hidden">
                          Seamless Payments
                        </span>
                        <span className="text-[#0597fc] block absolute top-0 left-0 w-full h-full">
                          Seamless Payments
                        </span>
                      </div>
                    </div>
                    <div className="body2 mt-3 text-black font-bold">
                      Our platform offers secure and reliable investment <br />
                      opportunities in the rapidly growing world of
                      cryptocurrency.
                    </div>
                    <div className="button-block md:mt-10 mt-6">
                      <Link
                        className="button-main text-white"
                        style={buttonStyle}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        href="/service/service-one"
                      >
                        Discovery now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-item slider-third">
                <div className="bg-img">
                  <Image
                    src={"/images/slider/Home_Banner_3.jpg"}
                    width={4000}
                    height={3000}
                    alt="bgslider"
                    priority={true}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="container">
                  <div className="text-content flex-columns-between">
                    <div className="heading2 text-black font-bold">
                      <div className="relative overflow-hidden">
                        <span className="block relative overflow-hidden">
                          Powerful Payment
                        </span>
                        <span className="block absolute top-0 left-0 w-full h-full">
                          Powerful Payment
                        </span>
                      </div>
                      <div className="relative overflow-hidden">
                        <span className="block relative overflow-hidden">
                          Solutions for
                        </span>
                        <span className="block absolute top-0 left-0 w-full h-full">
                          Solutions for
                        </span>
                      </div>
                      <div className="relative overflow-hidden">
                        <span className="text-[#0597fc] block relative overflow-hidden">
                          Seamless Transactions
                        </span>
                        <span className="text-[#0597fc] block absolute top-0 left-0 w-full h-full">
                          Seamless Transactions
                        </span>
                      </div>
                    </div>
                    <div className="body2 mt-3 text-black font-bold">
                      Trust us to help you navigate the complex landscape and{" "}
                      <br />
                      achieve your financial goals with peace of mind.
                    </div>
                    <div className="button-block md:mt-10 mt-6">
                      <Link
                        className="button-main text-white"
                        style={buttonStyle}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        href="/service/service-one"
                      >
                        Discovery now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>
        {/* Removed arrow navigation */}
      </div>
    </>
  )
}

export default SliderOne
