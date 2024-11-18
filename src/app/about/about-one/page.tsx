import TopNavOne from "@/components/Header/TopNav/TopNavOne"
import MenuOne from "@/components/Header/Menu/MenuOne"
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem"
import AboutTwo from "@/components/Section/About/AboutTwo"
import CounterTwo from "@/components/Section/Counter/CounterTwo"
import ServiceAboutOne from "@/components/Section/Service/ServiceAboutOne"
import serviceData from "@/data/service.json"
import OurTeam from "@/components/Section/OurTeam/OurTeam"
import PartnerAbout from "@/components/Section/Partner/PartnerAbout"
import CtaOne from "@/components/Section/CTA/CtaOne"
import Footer from "@/components/Footer/Footer"

export default function AboutStyleOne() {
  return (
    <>
      <div className="overflow-x-hidden">
        <header id="header">
          <TopNavOne />
          <MenuOne />
        </header>
        <main className="content">
          <BreadcrumbItem
            link="About Us"
            img="/images/bannerimage3.jpg"
            title="About Us"
            desc="We assess your consumer rights and compare them with industry standards to develop the most effective strategy for your needs."
          />
          <AboutTwo />
          {/* <CounterTwo classname="lg:pb-[100px] sm:pb-16 pb-10" /> */}

          {/* <ServiceAboutOne data={serviceData} /> */}
          {/*  <OurTeam />
          <PartnerAbout /> */}
          {/* <CtaOne /> */}
        </main>
        <footer id="footer">
          <Footer />
        </footer>
      </div>
    </>
  )
}
