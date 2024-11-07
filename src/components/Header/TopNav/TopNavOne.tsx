import React from "react"
import Image from "next/image"
import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr"

const TopNavOne = () => {
  return (
    <>
      <div className="top-nav style-one bg-dark">
        <div className="container flex items-center justify-between h-[44px]">
          <div className="left-block flex items-center">
            <div className="location flex items-center max-lg:hidden">
              <Icon.MapPin className="text-white text-xl" />
              <span className="ml-2 caption1 text-white">
                10, கல்பாலம் ரோடு, கோரிப்பாளையம், மதுரை - 625 002
              </span>
            </div>
            <div className="mail lg:ml-7 flex items-center">
              <Icon.Envelope className="text-white text-xl" />
              <span className="ml-2 caption1 text-white">
                tnccpctamilnadu2012@gmail.com
              </span>
            </div>
          </div>
          <div className="right-block flex items-center gap-5">
            <div className="line h-6 w-px bg-grey max-sm:hidden"> </div>
            <div className="select-block relative">
              <select className="border-none outline-none bg-dark text-white p-2 caption2">
                <option value="English">English</option>
                <option value="France">Tamil</option>
              </select>
              <Icon.CaretDown
                weight="bold"
                className="text-xs text-white icon -right-2"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopNavOne
