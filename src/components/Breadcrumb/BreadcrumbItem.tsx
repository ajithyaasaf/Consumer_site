import React from "react"
import Image from "next/image"
import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr"

interface Props {
  link: string
  img: string
  title: string
  desc: string
}

const BreadcrumbItem: React.FC<Props> = ({ link, img, title, desc }) => {
  return (
    <div className="breadcrumb-block w-full lg:h-[400px] sm:h-[360px] h-[320px] relative">
      {/* Background Image */}
      <div className="bg-img w-full h-full absolute top-0 left-0 z-[-1]">
        <Image
          src={img}
          width={4000}
          height={3000}
          alt="banner"
          className="w-full h-full object-cover"
        />
        {/* Full-screen overlay */}
        <div className="overlay absolute inset-0 w-[1999px]  blur-sm"></div>
      </div>

      {/* Content Container */}
      <div className="container relative h-full flex items-center px-4">
        {/* Breadcrumb Navigation */}
        <div className="heading-nav flex items-center gap-1 absolute top-8 left-4 py-1.5 px-4 rounded-full bg-line z-10">
          <Link className="hover:underline caption1 text-white" href="/">
            Home
          </Link>
          <Icon.CaretDoubleRight className="text-white" />
          <div className="caption1 text-white">{link}</div>
        </div>

        {/* Title and Description */}
        <div className="text-nav xl:w-1/2 md:w-3/5 z-10">
          <div className="heading3 text-white">{title}</div>
          <div className="sub-heading mt-4 text-white font-normal">{desc}</div>
        </div>
      </div>
    </div>
  )
}

export default BreadcrumbItem
