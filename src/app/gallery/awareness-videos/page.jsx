"use client"

import React from "react"
import Footer from "@/components/Footer/Footer"
import MenuOne from "@/components/Header/Menu/MenuOne"
import TopNavOne from "@/components/Header/TopNav/TopNavOne"
import { useTranslations } from "next-intl"

const AwarenessVideos = () => {
  const t = useTranslations("awarenessVideos") // Fetch translations for the "awarenessVideos" namespace
  const videoUrls = [
    "https://www.youtube.com/embed/K-arO5Bu8pg",
    "https://www.youtube.com/embed/K-i9hiEhHng",
    "https://www.youtube.com/embed/fKGoT1T7aTU",
    "https://www.youtube.com/embed/6qLvhtrSO0o",
    "https://www.youtube.com/embed/yZgfcLYRVik",
    "https://www.youtube.com/embed/Wvmm1POTzgM",
  ]

  return (
    <>
      <TopNavOne />
      <MenuOne />
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-semibold text-center text-gray-800 mt-28 mb-10">
          {t("title")} {/* Translated title */}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {videoUrls.map((videoUrl, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl mb-10"
            >
              <div className="relative pb-[56.25%]">
                {" "}
                {/* 16:9 aspect ratio */}
                <iframe
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  src={videoUrl}
                  title={t("videoTitle", { index: index + 1 })} // Translated title with dynamic index
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AwarenessVideos
