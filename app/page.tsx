import Nav from "@/components/nav"
import Hero from "@/components/hero"
import StatsCards from "@/components/stats-cards"
import ServicesTimeline from "@/components/services-timeline"
import { SoftwaresSection } from "@/components/softwares-section"
// import FeaturesGrid from "@/components/features-grid"
import Testimonials from "@/components/testimonials"
import { WhyChooseUs } from "@/components/why-choose-us"
import { FooterContact } from "@/components/footer-contact"

export default function Page() {
  return (
    <main className="font-sans">
      <Nav />
      <Hero />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <StatsCards />
      </section>
      <section id="services" className="px-4 sm:px-6 lg:px-8">
        <ServicesTimeline />
      </section>
      <SoftwaresSection />
      {/* <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <FeaturesGrid />
      </section> */}
      <WhyChooseUs />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <Testimonials />
      </section>
      <FooterContact />
    </main>
  )
}
