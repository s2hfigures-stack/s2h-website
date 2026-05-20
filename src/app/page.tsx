import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Products from '@/components/sections/Products'
import { HowItWorks, WhyUs, CTABanner, WhatsAppFloat } from '@/components/sections/Sections'
import Marquee from '@/components/ui/Marquee'
import LoadingScreen from '@/components/ui/LoadingScreen'
import MobileOrderBar from '@/components/ui/MobileOrderBar'
import CustomCursor from '@/components/ui/CustomCursor'

export default function Home() {
  return (
    <>
      <CustomCursor />
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Products />
        <Marquee />
        <HowItWorks />
        <WhyUs />
        <CTABanner />
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileOrderBar />
    </>
  )
}
