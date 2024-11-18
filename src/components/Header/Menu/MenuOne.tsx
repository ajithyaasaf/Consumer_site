"use client"
import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import * as Icon from "@phosphor-icons/react"

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

  const navItems = [
    { label: "Home", href: "/", submenu: null },
    { label: "About", href: "/about/about-one", submenu: null },
    {
      label: "Case Success Results",
      href: "/cases/case-history",
      submenu: null,
    },
    { label: "Consumer History", href: "/service/service-one", submenu: null },
    {
      label: "Gallery",
      href: "/gallery/awareness-videos",
      submenu: [
        { label: "Awareness Videos", href: "/gallery/awareness-videos" },
      ],
    },
    { label: "Membership Form", href: "/contact/contact-one", submenu: null },
  ]

  return (
    <>
      <div
        className={`header-menu style-one bg-white ${
          fixedHeader ? "fixed top-0 left-0 right-0 z-50" : ""
        }`}
      >
        <div className="container flex items-center justify-between h-20 mx-auto px-4">
          {/* Left Block: Logo */}
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
            {/* Tamil Text (Visible on Mobile) */}
            <span className="text-sm font-medium text-gray-700 md:hidden">
              தமிழ்நாடு குடிமக்கள் நுகர்வோர் பாதுகாப்பு மையம்
            </span>
          </div>

          {/* Center Block: Tamil Text (Hidden on Mobile) */}
          <div className="flex-1 text-center text-sm font-medium text-gray-700 hidden md:block">
            <span>தமிழ்நாடு குடிமக்கள் நுகர்வோர் பாதுகாப்பு மையம்</span>
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

        {/* Styles for Responsive Behavior */}
        <style jsx>{`
          .menu-nav-mobile {
            display: none;
          }
          .menu-mobile-main.open {
            display: block; /* Show mobile menu when open */
          }
          @media (max-width: 640px) {
            .menu-nav {
              display: none; /* Hide desktop menu on mobile */
            }
            .menu-mobile-main {
              display: block; /* Ensure mobile menu is displayed */
            }
            .menu-nav-mobile {
              display: block; /* Mobile menu items should be displayed when the menu is open */
            }
          }
          @media (min-width: 641px) and (max-width: 1024px) {
            .menu-nav {
              display: flex; /* Show the desktop menu for tablets */
              flex-direction: row; /* Align items in a row */
              width: 100%; /* Ensure it takes full width */
              justify-content: space-between; /* Space items evenly */
            }
            .menu-mobile-main {
              display: none; /* Hide mobile menu on larger screens */
            }
          }
          @media (min-width: 1025px) {
            .menu-mobile-main {
              display: none; /* Hide mobile menu on larger screens */
            }
          }
        `}</style>
      </div>
    </>
  )
}

export default MenuOne
