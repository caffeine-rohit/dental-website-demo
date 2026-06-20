import { SectionHeading } from '@/components/section-heading'
import { BeforeAfter } from '@/components/before-after'
import { FadeIn } from '@/components/motion-primitives'
import { BEFORE_AFTER_CASES } from '@/lib/site-data'

export function ResultsSection() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background treatment */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />
      <div className="pointer-events-none absolute left-0 top-1/3 h-80 w-80 rounded-full bg-primary/6 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-1/3 h-64 w-64 rounded-full bg-sky/8 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Patient Transformations"
          title="Extraordinary Results. Verified Patients."
          description="Drag the interactive slider or toggle views to witness the real transformations our patients experience at Élite Dental Atelier Lagos."
        />

        <FadeIn className="mt-14">
          <BeforeAfter cases={BEFORE_AFTER_CASES} />
        </FadeIn>

        {/* Bottom disclaimer */}
        <p className="mt-8 text-center text-xs text-muted-foreground">
          All results shown are from actual patients treated at Élite Dental Atelier Lagos. Individual results may vary.
        </p>
      </div>
    </section>
  )
}
