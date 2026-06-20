import type { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock, MessageCircle, Shield } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { FadeIn } from '@/components/motion-primitives'
import { AppointmentForm } from '@/components/appointment-form'
import { CLINIC, HOURS, whatsappLink } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Contact & Book',
  description:
    'Book your private consultation at Élite Dental Atelier Lagos. Located on Victoria Island, Lagos. Call, WhatsApp or book online — our concierge responds within 30 minutes.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Book Your Private Consultation"
        description="Our concierge team is available 7 days a week to assist you. Reach out by phone, WhatsApp or use our online booking form below — we respond within 30 minutes."
        crumbs={[{ label: 'Contact' }]}
      />

      <section id="book" className="scroll-mt-24 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">

            {/* Left — contact info */}
            <FadeIn className="flex flex-col gap-6">
              <div>
                <span className="label text-xs text-primary">Reach Us</span>
                <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">
                  We Are Here For You
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Whether you have a question about a treatment, want to know about pricing, or are ready to book — our team is ready to help. No query is too small.
                </p>
              </div>

              {/* Contact cards */}
              <div className="flex flex-col gap-4">
                <ContactCard
                  icon={MapPin}
                  label="Visit Us"
                  value={CLINIC.address}
                />
                <ContactCard
                  icon={Phone}
                  label="Concierge Line"
                  value={CLINIC.phoneDisplay}
                  href={`tel:${CLINIC.phone}`}
                />
                <ContactCard
                  icon={Mail}
                  label="Email"
                  value={CLINIC.email}
                  href={`mailto:${CLINIC.email}`}
                />
              </div>

              {/* Hours */}
              <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                <div className="mb-4 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <h3 className="font-serif text-base font-semibold">Clinic Hours</h3>
                </div>
                <ul className="flex flex-col gap-3">
                  {HOURS.map((h) => (
                    <li key={h.day} className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{h.day}</span>
                      <span className="font-semibold text-foreground">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl border border-gold/40 bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:brightness-110 hover:shadow-[0_12px_30px_-10px_rgba(13,107,71,0.5)]"
              >
                <MessageCircle className="h-4 w-4 text-gold" />
                Message Our Concierge on WhatsApp
              </a>

              {/* Privacy assurance */}
              <div className="flex items-start gap-3 rounded-2xl border border-border bg-muted/50 p-4">
                <Shield className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-xs leading-relaxed text-muted-foreground">
                  Your information is completely private and will only be used to schedule your appointment. We never share patient data with third parties.
                </p>
              </div>
            </FadeIn>

            {/* Right — booking form */}
            <FadeIn delay={0.1}>
              <div className="sticky top-28">
                <div className="mb-6">
                  <span className="label text-xs text-primary">Online Booking</span>
                  <h2 className="mt-2 font-serif text-2xl font-bold text-foreground">
                    Reserve Your Appointment
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Takes less than 2 minutes. Our concierge confirms within 30 minutes.
                  </p>
                </div>
                <AppointmentForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="relative overflow-hidden pb-20 sm:pb-28">
        <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-sky/5 blur-3xl" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
            <iframe
              src={CLINIC.mapEmbed}
              title="Élite Dental Atelier Lagos — Victoria Island location"
              className="h-[400px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            14th Floor, Landmark Towers, Victoria Island, Lagos · Valet parking available
          </p>
        </div>
      </section>
    </>
  )
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof MapPin
  label: string
  value: string
  href?: string
}) {
  const content = (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:border-primary/30 hover:shadow-md">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
        <Icon className="h-5 w-5 text-primary" />
      </span>
      <div className="flex flex-col">
        <span className="label text-[10px] text-muted-foreground">{label}</span>
        <span className="text-sm font-medium text-foreground">{value}</span>
      </div>
    </div>
  )
  return href ? (
    <a href={href} className="block">
      {content}
    </a>
  ) : (
    content
  )
}
