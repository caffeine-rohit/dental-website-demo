import { SectionHeading } from '@/components/section-heading'
import { AppointmentForm } from '@/components/appointment-form'
import { FadeIn } from '@/components/motion-primitives'

export function AppointmentSection() {
  return (
    <section id="book" className="scroll-mt-24 bg-gradient-to-b from-background to-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Private Consultation"
          title="Book Your Consultation Today"
          description="Reserve your private consultation with Dr. Okonkwo in three simple steps. Our concierge team will confirm your appointment within 30 minutes."
        />
        <FadeIn className="mt-12">
          <AppointmentForm />
        </FadeIn>
      </div>
    </section>
  )
}
