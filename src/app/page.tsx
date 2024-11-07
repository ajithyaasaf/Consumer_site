import TopNavOne from "@/components/Header/TopNav/TopNavOne"
import MenuOne from "@/components/Header/Menu/MenuOne"
import SliderOne from "@/components/Slider/SliderOne"
import ServiceOne from "@/components/Section/Service/ServiceOne"
import serviceData from "@/data/service.json"
import CaseStudyOne from "@/components/Section/CaseStudy/CaseStudyOne"
import Footer from "@/components/Footer/Footer"
import CounterTwo from "@/components/Section/Counter/CounterTwo"
import PartnerAbout from "@/components/Section/Partner/PartnerAbout"
import PaymentGatewayOneFirst from "@/components/Section/PaymentGateway/PaymentGatewayOneFirst"

export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden">
        <header id="header">
          <TopNavOne />
          <MenuOne />
        </header>
        <main className="content">
          <SliderOne />
          {/* <ServiceOne data={serviceData} /> */}
          <div className="my-16 bg-gray-100">
            <PaymentGatewayOneFirst />
          </div>

          {/* Our Process */}
          {/*     <CaseStudyOne />  type of loans */}
          {/* <CounterTwo classname="bg-gray-100 my-16" /> */}
          {/* <PartnerAbout classname="bg-gray-100 my-16" /> */}
          {/* Add any necessary classname here */}
          <footer id="footer">
            <Footer />
          </footer>
        </main>
      </div>
    </>
  )
}
