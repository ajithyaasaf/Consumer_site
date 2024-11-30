"use client"
import { useState } from "react"
import Image from "next/image"
import TopNavOne from "@/components/Header/TopNav/TopNavOne"
import MenuOne from "@/components/Header/Menu/MenuOne"
import Footer from "@/components/Footer/Footer"
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem"
import { useTranslations } from "next-intl" // Import useTranslations hook

export default function AboutStyleOne() {
  const [tabActive, setTabActive] = useState<string>("about us")
  const t = useTranslations("about") // Get the translations for the "about" section

  const handleTabActive = (item: string) => {
    setTabActive(item)
  }

  return (
    <>
      <div className="overflow-x-hidden">
        <header id="header">
          <TopNavOne />
          <MenuOne />
        </header>
        <main className="content">
          {/* Breadcrumb Section */}
          <BreadcrumbItem
            link={t("breadcrumbLink")} // Translated breadcrumb link
            img="/images/banner4.jpg"
            title={t("breadcrumbTitle")} // Translated breadcrumb title
            desc={t("breadcrumbDesc")} // Translated breadcrumb description
          />

          {/* About Section */}
          <div className="about-block lg:py-[100px] sm:py-16 py-10 bg-white">
            <div className="container">
              <div className="row flex flex-col lg:flex-row gap-6">
                {/* Left side logo, right side content */}
                <div className="w-full lg:w-1/2">
                  <div
                    className="image-container w-full overflow-hidden rounded-3xl relative"
                    style={{ height: "500px" }}
                  >
                    <Image
                      src="/images/Logo3.jpg"
                      alt={t("logoAlt")} // Translated logo alt text
                      layout="fill"
                      objectFit="contain" // Ensure the image fits without cropping
                      className="w-full h-full object-contain" // Adjust object fit for responsiveness
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col lg:pl-20">
                  <div className="heading3">{t("aboutUsTitle")}</div>{" "}
                  {/* Translated heading */}
                  <div className="nav-infor mt-8">
                    <div className="list-nav flex items-center gap-10 border-b border-line w-fit">
                      {["History"].map((item, index) => (
                        <div
                          key={index}
                          className={`text-button-sm has-line-before line-2px line-blue cursor-pointer capitalize ${
                            tabActive === item ? "active" : ""
                          }`}
                          onClick={() => handleTabActive(item)}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                    <div
                      className={`description item-filter ${
                        tabActive === "about us" ? "show" : "hide"
                      }`}
                    >
                      <div className="title text-secondary mt-4">
                        <p>{t("aboutDescription")}</p>{" "}
                        {/* Translated about us description */}
                        <h3 className="mt-4 heading7">
                          {t("ourMission")}
                        </h3>{" "}
                        {/* Translated mission heading */}
                        <p>{t("missionDescription")}</p>{" "}
                        {/* Translated mission description */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Left content, right image */}
              <div className="row flex flex-col lg:flex-row gap-6 mt-16">
                <div className="w-full lg:w-1/2 flex flex-col">
                  <h2 className="text-3xl font-semibold">
                    {t("tnccpcTitle")} {/* Translated title */}
                  </h2>
                  <p className="mt-4 text-lg">{t("tnccpcDescription1")}</p>{" "}
                  {/* Translated description */}
                  <p className="mt-4">{t("tnccpcDescription2")}</p>{" "}
                  {/* Translated description */}
                  <h3 className="mt-6 font-semibold text-xl">
                    {t("keyObjectives")}
                  </h3>{" "}
                  {/* Translated objectives heading */}
                  <ul className="list-disc list-inside mt-4">
                    <li>{t("objective1")}</li> {/* Translated objective item */}
                    <li>{t("objective2")}</li> {/* Translated objective item */}
                    <li>{t("objective3")}</li> {/* Translated objective item */}
                    <li>{t("objective4")}</li> {/* Translated objective item */}
                    <li>{t("objective5")}</li> {/* Translated objective item */}
                  </ul>
                  <p className="mt-6">{t("tnccpcClosingDescription")}</p>{" "}
                  {/* Translated closing description */}
                </div>

                {/* Section 2 Image: Hidden on mobile (sm and below), visible on large screens (lg) */}
                <div className="w-full lg:w-1/2 hidden lg:block">
                  <div
                    className="image-container w-full overflow-hidden rounded-3xl relative"
                    style={{ height: "500px" }}
                  >
                    <Image
                      src="/images/about1.jpg"
                      alt={t("tnccpcImageAlt")} // Translated image alt text
                      layout="fill"
                      objectFit="cover"
                      className="w-full h-full object-cover" // Ensure image cover without distortion
                    />
                  </div>
                </div>
              </div>

              {/* Section 3: Left image, right content */}
              <div className="row flex flex-col lg:flex-row gap-6 mt-16">
                <div className="w-full lg:w-1/2">
                  <div
                    className="image-container w-full overflow-hidden rounded-3xl relative"
                    style={{ height: "500px" }}
                  >
                    <Image
                      src="/images/about2.jpg"
                      alt={t("consumerRightsImageAlt")} // Translated image alt text
                      layout="fill"
                      objectFit="cover"
                      className="w-full h-full object-cover" // Ensure image cover without distortion
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col">
                  <h3 className="mt-6 font-semibold text-xl">
                    {t("consumerRightsViolations")} {/* Translated heading */}
                  </h3>
                  <p className="mt-4">{t("consumerRightsDescription1")}</p>{" "}
                  {/* Translated description */}
                  <p className="mt-4">{t("consumerRightsDescription2")}</p>{" "}
                  {/* Translated description */}
                  <ul className="list-disc list-inside mt-4">
                    <li>{t("violation1")}</li> {/* Translated violation */}
                    <li>{t("violation2")}</li> {/* Translated violation */}
                    <li>{t("violation3")}</li> {/* Translated violation */}
                    <li>{t("violation4")}</li> {/* Translated violation */}
                    <li>{t("violation5")}</li> {/* Translated violation */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer id="footer">
          <Footer />
        </footer>
      </div>
    </>
  )
}
