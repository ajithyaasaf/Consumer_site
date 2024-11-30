import * as Icon from "@phosphor-icons/react/dist/ssr"
import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "next-intl" // Import useTranslations hook

const Footer = () => {
  const t = useTranslations("footer") // Get the footer translations

  return (
    <div className="style-one">
      <div className="footer-block bg-dark pt-[60px]">
        <div className="container">
          <div className="flex max-lg:flex-col max-lg:items-start gap-y-10 pb-10">
            <div className="lg:w-1/4">
              <div className="footer-company-infor flex flex-col justify-between gap-5">
                {/* Reduced Logo Size */}
                <Image
                  width={60} // Reduced width
                  height={60} // Reduced height
                  className="footer-logo w-[80px]"
                  src="/images/Logo2.png"
                  alt="Logo"
                />
                <div className="text caption1 text-white">
                  {t("companyDescription")}
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="footer-navigate flex items-center justify-center gap-20">
                <div className="footer-nav-item">
                  <div className="item-heading text-button-sm text-white">
                    {t("consumerResources")}
                  </div>
                  <ul className="list-nav mt-1">
                    <li className="mt-3">
                      <Link
                        className="caption1 has-line-before line-white text-surface hover-underline"
                        href="/about/about-one"
                      >
                        {t("aboutUs")}
                      </Link>
                    </li>
                    <li className="mt-3">
                      <Link
                        className="caption1 has-line-before line-white text-surface hover-underline"
                        href="/cases/case-history"
                      >
                        {t("caseResults")}
                      </Link>
                    </li>
                    <li className="mt-3">
                      <Link
                        className="caption1 has-line-before line-white text-surface hover-underline"
                        href="/gallery/awareness-videos"
                      >
                        {t("gallery")}
                      </Link>
                    </li>
                    <li className="mt-3">
                      <Link
                        className="caption1 has-line-before line-white text-surface hover-underline"
                        href="/contact/contact-one"
                      >
                        {t("membershipForm")}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:w-1/4">
              <div className="company-contact">
                <div className="heading text-button-sm text-white">
                  {t("contactUs")}
                </div>
                <div className="mt-3 text-surface">
                  {/* Display phone number above the address */}
                  <div>{t("contactPhone")}</div> {/* Phone number */}
                </div>
                <div className="mt-2 flex items-center">
                  <Icon.MapPin weight="light" className="text-surface" />
                  <div className="caption1 text-surface ml-2">
                    {t("contactAddress")}
                  </div>
                </div>
                <div className="mt-2">
                  <Link
                    className="caption1 text-surface hover-underline"
                    href="/contact/contact-one"
                  >
                    {t("getInTouch")}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="border-line"></div>

          <div className="footer-bottom flex items-center justify-between pt-3 pb-3">
            <div className="left-block flex items-center">
              <div className="copy-right text-surface caption1">
                {t("copyright")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
