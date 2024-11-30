"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr"
import { useTranslations } from "next-intl" // Import the useTranslations hook

const TopNavOne = () => {
  const [locale, setLocale] = useState("en") // State to track the current language
  const t = useTranslations() // Use next-intl's useTranslations hook to get translations

  // Load the locale from the cookie on initial load
  useEffect(() => {
    const savedLocale = document.cookie.replace(
      /(?:(?:^|.*;\s*)locale\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    )
    if (savedLocale) {
      setLocale(savedLocale)
    }
  }, [])

  // Function to handle language change
  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedLanguage = event.target.value
    setLocale(selectedLanguage)

    // Save the selected language to the cookie
    document.cookie = `locale=${selectedLanguage}; path=/; max-age=31536000` // 1 year expiration

    // Reload the page to apply the language change
    window.location.reload()
  }

  return (
    <div className="top-nav style-one bg-dark">
      <div className="container flex items-center justify-between h-[44px]">
        <div className="left-block flex items-center">
          <div className="location flex items-center max-lg:hidden">
            <Icon.MapPin className="text-white text-xl" />
            <span className="ml-2 caption1 text-white">
              {t("address")} {/* Use the translated address */}
            </span>
          </div>
          <div className="mail lg:ml-7 flex items-center">
            <Icon.Envelope className="text-white text-xl" />
            <span className="ml-2 caption1 text-white">
              {t("email")} {/* Use the translated email */}
            </span>
          </div>
        </div>
        <div className="right-block flex items-center gap-5">
          <div className="line h-6 w-px bg-grey max-sm:hidden"></div>
          {/* Language Selector Dropdown */}
          <div className="select-block relative">
            <select
              className="border-none outline-none bg-dark text-white p-2 caption2"
              value={locale} // Bind the selected language
              onChange={handleLanguageChange} // Handle language change
            >
              <option value="en">English</option>
              <option value="ta">Tamil</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopNavOne
