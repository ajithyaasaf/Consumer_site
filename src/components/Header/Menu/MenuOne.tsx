"use client"

import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr"

const MenuOne = () => {
  const pathname = usePathname()
  const [fixedHeader, setFixedHeader] = useState(false)
  const [openMenuMobile, setOpenMenuMobile] = useState(false)
  const [openSubNavMobile, setOpenSubNavMobile] = useState<number | null>(null)

  const handleOpenSubNavMobile = (index: number) => {
    setOpenSubNavMobile(openSubNavMobile === index ? null : index) // Toggle submenu open state
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setFixedHeader(scrollPosition > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <div
        className={`header-menu style-one bg-white ${
          fixedHeader ? "fixed" : ""
        }`}
      >
        <div className="container flex items-center justify-between h-20">
          <Link className="menu-left-block" href="/">
            <Image
              src={"/images/Logo2.png"}
              width={2000}
              height={1000}
              alt="logo"
              priority={true}
              className="w-[80px] max-sm:w-[60px]"
            />
          </Link>
          <div className="menu-center-block h-full">
            <ul className="menu-nav flex items-center h-full">
              {/* Home */}
              <li
                className={`nav-item h-full flex items-center justify-center ${
                  pathname === "/" ? "active" : ""
                }`}
              >
                <Link className="nav-link text-title" href="/">
                  <span>Home</span>
                </Link>
              </li>

              {/* About Us */}
              <li
                className={`nav-item h-full flex items-center justify-center ${
                  pathname === "/about/about-one" ? "active" : ""
                }`}
              >
                <Link className="nav-link text-title" href="/about/about-one">
                  <span>About Us</span>
                </Link>
              </li>

              {/* Membership Application Subscription */}
              <li
                className={`nav-item h-full flex items-center justify-center ${
                  pathname === "/about/about-one" ? "active" : ""
                }`}
              >
                <Link className="nav-link text-title" href="/about/about-one">
                  <span>Membership Application Subscription</span>
                </Link>
              </li>

              {/* Consumer History */}
              <li
                className={`nav-item h-full flex items-center justify-center ${
                  pathname === "/service/service-one" ? "active" : ""
                }`}
              >
                <Link
                  className="nav-link text-title"
                  href="/service/service-one"
                >
                  <span>Consumer History</span>
                </Link>
                {/* Consumer History Submenu */}
                <ul className="sub-nav">
                  <li
                    className={`sub-nav-item ${
                      pathname === "/service/service-detail" ? "active" : ""
                    }`}
                  >
                    <Link
                      className="sub-nav-link font-medium"
                      href="/service/service-detail"
                    >
                      Recent Consumer Case Success Results
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Gallery */}
              <li
                className={`nav-item h-full flex items-center justify-center ${
                  pathname === "/gallery/awarness-videos" ? "active" : ""
                }`}
              >
                <Link
                  className="nav-link text-title"
                  href="/gallery/awarness-videos"
                >
                  <span>Galleryyyyyy</span>
                </Link>
                {/* Gallery Submenu */}
                <ul className="sub-nav">
                  <li
                    className={`sub-nav-item ${
                      pathname === "/gallery/awarness-videos" ? "active" : ""
                    }`}
                  >
                    <Link
                      className="sub-nav-link font-medium"
                      href="/gallery/awarness-videos"
                    >
                      Awareness Videos
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Contact */}
              <li
                className={`nav-item h-full flex items-center justify-center ${
                  pathname === "/contact/contact-one" ? "active" : ""
                }`}
              >
                <Link
                  className="nav-link text-title"
                  href="/contact/contact-one"
                >
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="menu-right-block flex items-center">
            <div className="icon-call">
              <i
                className="icon-phone-call text-4xl"
                style={{ color: "#152152" }}
              ></i>
            </div>
            <div className="text ml-3">
              <div className="text caption1 pl-2">Call us</div>
              <div className="number text-button">+91 9791912211</div>
            </div>
            <div
              className="menu-humburger hidden pointer"
              onClick={() => setOpenMenuMobile(!openMenuMobile)}
            >
              <Icon.List className="text-2xl" weight="bold" />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div id="menu-mobile-block" className={`${openMenuMobile && "open"}`}>
          <div className="menu-mobile-main">
            <div className="container">
              <ul className="menu-nav-mobile h-full pt-1 pb-1">
                {/* Home */}
                <li
                  className={`nav-item-mobile h-full flex-column gap-2 pt-2 pb-2 pl-3 pr-3 pointer home ${
                    openSubNavMobile === 1 ? "active" : ""
                  }`}
                  onClick={() => handleOpenSubNavMobile(1)}
                >
                  <a
                    className="nav-link-mobile flex items-center justify-between"
                    href="#!"
                  >
                    <span className="body2 font-semibold">Home</span>
                  </a>
                </li>

                {/* About Us */}
                <li
                  className={`nav-item-mobile h-full flex-column gap-2 pt-4 pb-2 pl-3 pr-3 pointer about ${
                    openSubNavMobile === 2 ? "active" : ""
                  }`}
                  onClick={() => handleOpenSubNavMobile(2)}
                >
                  <a
                    className="nav-link-mobile flex items-center justify-between"
                    href="#!"
                  >
                    <span className="body2 font-semibold">About Us</span>
                  </a>
                </li>

                {/* Membership Application Subscription */}
                <li
                  className={`nav-item-mobile h-full flex-column gap-2 pt-2 pb-2 pl-3 pr-3 pointer membership ${
                    openSubNavMobile === 3 ? "active" : ""
                  }`}
                  onClick={() => handleOpenSubNavMobile(3)}
                >
                  <a
                    className="nav-link-mobile flex items-center justify-between"
                    href="#!"
                  >
                    <span className="body2 font-semibold">
                      Membership Application Subscription
                    </span>
                  </a>
                </li>

                {/* Consumer History */}
                <li
                  className={`nav-item-mobile h-full flex-column gap-2 pt-4 pb-2 pl-3 pr-3 pointer services ${
                    openSubNavMobile === 4 ? "active" : ""
                  }`}
                  onClick={() => handleOpenSubNavMobile(4)}
                >
                  <a
                    className="nav-link-mobile flex items-center justify-between"
                    href="#!"
                  >
                    <span className="body2 font-semibold">
                      Consumer History
                    </span>
                    <Icon.CaretRight className="text-base" />
                  </a>
                  <ul
                    className={`sub-nav-mobile ${
                      openSubNavMobile === 4 ? "open" : ""
                    }`}
                  >
                    <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                      <Link
                        className="sub-nav-link text-base"
                        href="/service/service-detail"
                      >
                        Recent Consumer Case Success Results
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Gallery */}
                <li
                  className={`nav-item-mobile h-full flex-column gap-2 pt-4 pb-2 pl-3 pr-3 pointer gallery ${
                    openSubNavMobile === 5 ? "active" : ""
                  }`}
                  onClick={() => handleOpenSubNavMobile(5)}
                >
                  <a
                    className="nav-link-mobile flex items-center justify-between"
                    href="#!"
                  >
                    <span className="body2 font-semibold">Gallery</span>
                    <Icon.CaretRight className="text-base" />
                  </a>
                  <ul
                    className={`sub-nav-mobile ${
                      openSubNavMobile === 5 ? "open" : ""
                    }`}
                  >
                    <li className="sub-nav-item pl-3 pr-3 pt-2 pb-2">
                      <Link
                        className="sub-nav-link text-base"
                        href="/gallery/awarnessvideos"
                      >
                        Awareness Videos
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Contact */}
                <li
                  className={`nav-item-mobile h-full flex-column gap-2 pt-2 pb-2 pl-3 pr-3 pointer contact ${
                    openSubNavMobile === 6 ? "active" : ""
                  }`}
                  onClick={() => handleOpenSubNavMobile(6)}
                >
                  <a
                    className="nav-link-mobile flex items-center justify-between"
                    href="/contact/contact-one"
                  >
                    <span className="body2 font-semibold">Contact</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MenuOne
