import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, Check, Phone } from 'lucide-react'
import { SERVICES, CLINIC } from '@/lib/site-data'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { FadeIn, Stagger, StaggerItem } from '@/components/motion-primitives'
import { FaqSection } from '@/components/faq-section'
import { AppointmentSection } from '@/components/appointment-section'

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) return { title: 'Service Not Found' }
  return {
    title: service.name,
    description: service.description,
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) notFound()

  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3)

  return (
    <>
      <PageHero
        eyebrow="Treatment"
        title={service.name}
        description={service.description}
        crumbs={[{ label: 'Services', href: '/services' }, { label: service.name }]}
      />

      {/* Overview */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <FadeIn className="order-2 overflow-hidden rounded-3xl border border-border lg:order-1">
            <Image
              src={service.image}
              alt={`${service.name} treatment`}
              width={900}
              height={700}
              className="h-full w-full object-cover"
            />
          </FadeIn>
          <FadeIn delay={0.1} className="order-1 lg:order-2">
            <span className="label text-xs text-primary">Overview</span>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-foreground">About {service.name}</h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">{service.about}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact#book"
                className="inline-flex items-center gap-2 rounded-full border border-gold bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
              >
                Book This Treatment
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${CLINIC.phone}`}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Phone className="h-4 w-4 text-primary" />
                Ask a Question
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Candidates */}
      <section className="bg-secondary/40 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <SectionHeading eyebrow="Is It For You?" title="You May Be a Good Candidate If" />
          <Stagger className="mt-10 grid gap-4 sm:grid-cols-2">
            {service.candidates.map((c) => (
              <StaggerItem key={c}>
                <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-3.5 w-3.5 text-primary" />
                  </span>
                  <span className="text-sm leading-relaxed text-foreground">{c}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="The Journey"
            title="Your Treatment Process"
            description="A clear, comfortable path from first consultation to your final result."
          />
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <StaggerItem key={step.title}>
                <div className="relative flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                  <span className="font-serif text-4xl font-semibold text-primary/20">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-3 font-serif text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.detail}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <FaqSection
        items={service.faqs}
        eyebrow="Questions"
        title={`${service.name} FAQs`}
        showContactCard={false}
      />

      {/* Related */}
      <section className="bg-secondary/40 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Explore More" title="Related Treatments" />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {related.map((r) => {
              const Icon = r.icon
              return (
                <Link
                  key={r.slug}
                  href={`/services/${r.slug}`}
                  className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-serif text-xl font-semibold">{r.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <AppointmentSection />
    </>
  )
}
