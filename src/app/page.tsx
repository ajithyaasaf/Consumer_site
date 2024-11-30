// pages/index.tsx

import TopNavOne from "@/components/Header/TopNav/TopNavOne"
import MenuOne from "@/components/Header/Menu/MenuOne"
import SliderOne from "@/components/Slider/SliderOne"
import PaymentGatewayOneFirst from "@/components/Section/PaymentGateway/PaymentGatewayOneFirst"
import Footer from "@/components/Footer/Footer"
import BallAnimation from "@/components/BallAnimation"
import serviceData from "@/data/service.json"
import ServiceOne from "@/components/Section/Service/ServiceOne"

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
          <div className="my-16 bg-gray-100">
            <PaymentGatewayOneFirst />
          </div>

          <ServiceOne data={serviceData} />

          <footer id="footer">
            <Footer />
          </footer>
        </main>

        {/* Floating Ball Animation */}
        <BallAnimation />
      </div>
    </>
  )
}
