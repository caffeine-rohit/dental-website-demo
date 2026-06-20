import { Hero } from '@/components/home/hero'
import { TrustBar } from '@/components/home/trust-bar'
import { ServicesSection } from '@/components/home/services-section'
import { ResultsSection } from '@/components/home/results-section'
import { WhyChooseUs } from '@/components/home/why-choose-us'
import { DoctorProfile } from '@/components/home/doctor-profile'
import { Testimonials } from '@/components/home/testimonials'
import { Technology } from '@/components/home/technology'
import { FaqSection } from '@/components/faq-section'
import { AppointmentSection } from '@/components/appointment-section'
import { LocationSection } from '@/components/location-section'
import { FAQS, FAQ_CATEGORIES } from '@/lib/site-data'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesSection />
      <ResultsSection />
      <WhyChooseUs />
      <DoctorProfile />
      <Testimonials />
      <Technology />
      <FaqSection
        items={FAQS}
        categories={FAQ_CATEGORIES}
        description="Everything you need to know about our treatments, pricing, first visit and the latest diagnostic technology at Élite Dental Atelier Lagos."
      />
      <AppointmentSection />
      <LocationSection />
    </>
  )
}
