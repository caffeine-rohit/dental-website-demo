import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SERVICES } from '@/lib/site-data'
import { PageHero } from '@/components/page-hero'
import { FadeIn, Stagger, StaggerItem } from '@/components/motion-primitives'
import { AppointmentSection } from '@/components/appointment-section'

export const metadata: Metadata = {
  title: 'Treatments',
  description:
    'Explore the full range of treatments at Élite Dental Atelier Lagos — dental implants, porcelain veneers, invisible aligners, smile design, whitening and full mouth rehabilitation, delivered with JCI-accredited precision.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="World-Class Treatments"
        title="Every Treatment. Exceptional Quality."
        description="From a single implant to a complete smile transformation — every procedure at Élite Dental Atelier Lagos is delivered with JCI-accredited precision and a deeply personal touch."
        crumbs={[{ label: 'Treatments' }]}
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => {
              const Icon = service.icon
              return (
                <StaggerItem key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_50px_-24px_rgba(11,110,110,0.4)]"
                  >
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-7 w-7" />
                    </span>
                    <h2 className="mt-6 font-serif text-2xl font-semibold">{service.name}</h2>
                    <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </StaggerItem>
              )
            })}
          </Stagger>

          <FadeIn className="mt-12 text-center text-sm text-muted-foreground">
            Not sure which treatment is right for you?{' '}
            <a href="/contact#book" className="font-semibold text-primary hover:underline">Book a private consultation</a>{' '}
            and Dr. Okonkwo's team will guide you to the perfect plan.
          </FadeIn>
        </div>
      </section>

      <AppointmentSection />
    </>
  )
}
