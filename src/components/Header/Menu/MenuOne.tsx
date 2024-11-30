"use client"
import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import * as Icon from "@phosphor-icons/react"
import { useTranslations } from "next-intl" // Import the hook for translations

const MenuOne = () => {
  const pathname = usePathname()
  const t = useTranslations("menu") // Use the "menu" namespace for translations

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

  // Navigation Items with Translations
  const navItems = [
    { label: t("home"), href: "/" },
    { label: t("about"), href: "/about/about-one" },
    { label: t("caseSuccess"), href: "/cases/case-history" },
    { label: t("consumerHistory"), href: "/service/service-one" },
    {
      label: t("gallery"),
      href: "/gallery/awareness-videos",
      submenu: [
        { label: t("awarenessVideos"), href: "/gallery/awareness-videos" },
      ],
    },
    { label: t("membershipForm"), href: "/contact/contact-one" },
  ]

  return (
    <>
      <div
        className={`header-menu style-one bg-white ${
          fixedHeader ? "fixed top-0 left-0 right-0 z-50" : ""
        }`}
      >
        <div className="container flex items-center justify-between h-20 mx-auto px-4">
          {/* Left Block: Logo and Tamil Text (Visible on Desktop) */}
          <div className="menu-left-block flex items-center gap-3">
            <Link href="/">
              <Image
                src={"/images/Logo2.png"}
                width={2000}
                height={1000}
                alt="logo"
                priority={true}
                className="w-[80px] max-sm:w-[60px]"
              />
            </Link>

            {/* Tamil Text (Visible on Desktop only) */}
            <span className="text-sm font-medium text-gray-700 hidden md:block">
              <span>தமிழ்நாடு குடிமக்கள்</span> <br />
              <span>நுகர்வோர் பாதுகாப்பு மையம்</span>
            </span>
          </div>

          {/* Center Block: Tamil Text (Visible only on Mobile) */}
          <div className="flex-1 text-start text-sm font-medium text-gray-700 md:hidden">
            <span>
              தமிழ்நாடு குடிமக்கள்
              <br /> நுகர்வோர் பாதுகாப்பு மையம்
            </span>
          </div>

          {/* Mobile Menu Hamburger Icon (Visible on Mobile) */}
          <div
            className="menu-hamburger block sm:hidden cursor-pointer"
            onClick={() => setOpenMenuMobile(!openMenuMobile)} // Ensure the toggle state works
          >
            <Icon.List className="text-2xl" weight="bold" />
          </div>

          {/* Menu Section: Navigation Items */}
          <div
            className={`menu-center-block h-full flex items-center justify-end ${
              openMenuMobile ? "block" : "hidden"
            } sm:flex`}
          >
            <ul className="menu-nav flex items-center h-full">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className={`nav-item h-full flex items-center justify-center ${
                    pathname === item.href ? "active" : ""
                  }`}
                >
                  <Link className="nav-link text-title" href={item.href}>
                    <span>{item.label}</span>
                  </Link>
                  {item.submenu && (
                    <ul className="sub-nav">
                      {item.submenu.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className={`sub-nav-item ${
                            pathname === subItem.href ? "active" : ""
                          }`}
                        >
                          <Link
                            className="sub-nav-link font-medium"
                            href={subItem.href}
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="menu-mobile-block"
          className={`menu-mobile-main ${openMenuMobile ? "open" : ""}`}
        >
          <div className="container">
            <ul className="menu-nav-mobile h-full pt-1 pb-1">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className={`nav-item-mobile h-full flex-column gap-2 pt-2 pb-2 pl-3 pr-3 cursor-pointer ${
                    openSubNavMobile === index + 1 ? "active" : ""
                  }`}
                  onClick={() => handleOpenSubNavMobile(index + 1)}
                >
                  {/* Parent link that opens submenu */}
                  <Link
                    className="nav-link-mobile flex items-center justify-between"
                    href={item.href}
                  >
                    <span className="body2 font-semibold">{item.label}</span>
                    {item.submenu && <Icon.CaretRight className="text-base" />}
                  </Link>

                  {/* Mobile Submenu */}
                  {item.submenu && (
                    <ul
                      className={`sub-nav-mobile ${
                        openSubNavMobile === index + 1 ? "open" : "hidden"
                      }`}
                    >
                      {item.submenu.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="sub-nav-item pl-3 pr-3 pt-2 pb-2"
                        >
                          <Link
                            className="sub-nav-link text-base"
                            href={subItem.href}
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        .menu-left-block {
          display: flex;
          align-items: center;
          gap: 0px; /* Ensures that there is no gap between logo and Tamil text on mobile */
        }

        .menu-center-block {
          display: flex;
          justify-content: center;
          flex: 1;
        }

        .menu-nav {
          display: flex;
          gap: 15px; /* Reduced padding between menu items */
        }

        @media (max-width: 1024px) {
          /* Menu items in the same line */
          .menu-nav {
            display: flex;
            flex-wrap: nowrap;
            gap: 15px; /* Reduced padding between menu items */
          }

          /* Mobile Fix - Ensure Tamil text stays tightly next to logo */
          .menu-left-block {
            justify-content: flex-start;
          }

          /* Hide the Tamil text in the center on desktop */
          .menu-center-block {
            display: none;
          }

          /* Space between logo and navigation menu */
          .menu-nav {
            margin-left: 20px;
          }

          /* Ensure the mobile menu icon is visible between 640px and 1024px */
          .menu-hamburger {
            display: block; /* Make sure it's visible for mobile */
          }
        }

        @media (max-width: 770px) {
          .menu-left-block {
            gap: 0px; /* No gap on mobile */
            display: flex;
            align-items: center;
          }

          .menu-left-block span {
            margin-left: 0; /* No extra margin, closer to the logo */
            text-align: left;
            margin-top: 0; /* Remove any extra margin top */
            margin-bottom: 0; /* Remove any extra margin bottom */
          }
        }

        @media (max-width: 640px) {
          /* Ensure the mobile menu icon is visible */
          .menu-hamburger {
            display: block; /* Show the menu icon at 640px */
          }

          /* Mobile Menu adjustments */
          .menu-mobile-main {
            display: block;
          }
        }

        @media (min-width: 1025px) {
          /* Hide the menu icon on large screens */
          .menu-hamburger {
            display: none; /* Hide the menu icon on large screens */
          }
        }

        @media (min-width: 770px) {
          .menu-left-block {
            gap: 10px; /* Restores the gap on desktop screens */
          }
        }
      `}</style>
    </>
  )
}

export default MenuOne
