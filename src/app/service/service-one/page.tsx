"use client"

import TopNavOne from "@/components/Header/TopNav/TopNavOne"
import MenuOne from "@/components/Header/Menu/MenuOne"
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem"
import Footer from "@/components/Footer/Footer"
import { useState } from "react"
import { useTranslations } from "next-intl"

export default function HistoryPage() {
  const t = useTranslations("historyPage") // Fetch translations for the "historyPage" namespace
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
      <div className="overflow-x-hidden">
        {/* Header */}
        <header id="header">
          <TopNavOne />
          <MenuOne />
        </header>

        <main className="content">
          {/* Breadcrumb */}
          <BreadcrumbItem
            link={t("breadcrumb.link")}
            img="/images/banner4.jpg"
            title={t("breadcrumb.link")}
            desc={t("breadcrumb.desc")}
          />

          {/* Main Content: History Section */}
          <div className="mt-[100px]">
            <div className="container px-4 lg:px-8">
              <div className="flex flex-col gap-12">
                {/* Main Heading */}
                <div className="w-full text-center">
                  <h1 className="heading3 text-3xl sm:text-4xl font-bold text-gray-900">
                    {t("heading")}
                  </h1>
                </div>

                {/* History Content */}
                <div className="w-full text-justify">
                  <p className="body2 text-secondary">
                    {t("content.paragraph1")}
                  </p>
                  <p className="body2 text-secondary mt-4">
                    {t("content.paragraph2")}
                  </p>

                  {/* Key Provisions */}
                  <h3 className="text-2xl sm:text-3xl font-semibold text-primary mt-8">
                    {t("content.keyProvisions")}
                  </h3>
                  <p className="body2 text-secondary mt-4">
                    {t("content.keyProvisionsDesc")}
                  </p>

                  {/* Dispute Redressal */}
                  <h3 className="text-2xl sm:text-3xl font-semibold text-primary mt-8">
                    {t("content.disputeRedressal")}
                  </h3>
                  <p className="body2 text-secondary mt-4">
                    {t("content.disputeRedressalDesc")}
                  </p>

                  {/* Call-to-Action */}
                  <div className="text-center mt-10">
                    <a
                      className="button-main inline-block py-3 px-9 rounded-full transition duration-300 ease-in-out"
                      style={{
                        backgroundColor: isHovered ? "#0597fc" : "#0f2054",
                        color: "#fff",
                      }}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      href="/contact/contact-one"
                    >
                      {t("content.cta")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
        </main>

        <footer id="footer" className="mt-16">
          <Footer />
        </footer>
      </div>
    </>
  )
}
