import * as Icon from "@phosphor-icons/react/dist/ssr"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
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
                  className="footer-logo w-[65px]"
                  src="/images/Logo2.png"
                  alt="Logo"
                />
                <div className="text caption1 text-white">
                  We are committed to empowering consumers with the knowledge,
                  resources, and support they need to protect their rights.
                </div>
                {/*      <div className="list-social flex items-center gap-2.5 style-one">
                  <Link
                    className="item rounded-full w-7 h-7 border-2 border-grey flex items-center justify-center"
                    href="https://www.facebook.com/profile.php?id=61566147273973"
                    target="_blank"
                  >
                    <i className="icon-facebook text-sm"></i>
                  </Link>
                  <Link
                    className="item rounded-full w-7 h-7 border-2 border-grey flex items-center justify-center"
                    href="https://www.instagram.com/jpfinserv/"
                    target="_blank"
                  >
                    <i className="icon-insta text-xs"></i>
                  </Link>
                </div> */}
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="footer-navigate flex items-center justify-center gap-20">
                <div className="footer-nav-item">
                  <div className="item-heading text-button-sm text-white">
                    Consumer Resources
                  </div>
                  <ul className="list-nav mt-1">
                    <li className="mt-3">
                      <Link
                        className="caption1 has-line-before line-white text-surface hover-underline"
                        href="/about/about-one"
                      >
                        About Us
                      </Link>
                    </li>
                    <li className="mt-3">
                      <Link
                        className="caption1 has-line-before line-white text-surface hover-underline"
                        href="/consumer-rights"
                      >
                        Consumer Rights
                      </Link>
                    </li>
                    <li className="mt-3">
                      <Link
                        className="caption1 has-line-before line-white text-surface hover-underline"
                        href="/complaints"
                      >
                        Submit a Complaint
                      </Link>
                    </li>
                    <li className="mt-3">
                      <Link
                        className="caption1 has-line-before line-white text-surface hover-underline"
                        href="/contact/contact-one"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:w-1/4">
              <div className="company-contact">
                <div className="heading text-button-sm text-white">
                  Contact Us
                </div>
                <div className="mt-3 text-surface">
                  If you need assistance or have questions regarding your
                  consumer rights, we're here to help!
                </div>
                <div className="mt-2 flex items-center">
                  <Icon.MapPin weight="light" className="text-surface" />
                  <div className="caption1 text-surface ml-2">
                    10, கல்பாலம் ரோடு, கோரிப்பாளையம், மதுரை - 625 002
                  </div>
                </div>
                <div className="mt-2">
                  <Link
                    className="caption1 text-surface hover-underline"
                    href="/contact/contact-one"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="border-line"></div>

          <div className="footer-bottom flex items-center justify-between pt-3 pb-3">
            <div className="left-block flex items-center">
              <div className="copy-right text-surface caption1">
                ©2024 Designed and devloped by{" "}
                <a href="https://godivatech.com/">Godiva tech.</a> All Rights
                Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
