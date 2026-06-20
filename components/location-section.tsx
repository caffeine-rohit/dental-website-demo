'use client'

import { MapPin, Phone, Mail, Clock, MessageCircle, Building2 } from 'lucide-react'
import { CLINIC, HOURS, whatsappLink } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'
import { FadeIn } from '@/components/motion-primitives'

export function LocationSection() {
  return (
    <section id="location" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-sky/6 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Visit Our Clinic"
          title="Find Your Way to Victoria Island"
          description="Situated in the heart of Lagos's premier business and lifestyle district, Élite Dental Atelier is easily accessible from across the city and beyond."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.35fr]">
          <FadeIn className="flex flex-col gap-5">
            {/* Address card */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <Building2 className="h-4 w-4 text-primary" />
                <h3 className="font-serif text-lg font-semibold">Our Location</h3>
              </div>
              <div className="flex flex-col gap-4">
                <InfoRow icon={MapPin} label="Address" value={CLINIC.address} />
                <InfoRow icon={Phone} label="Concierge Line" value={CLINIC.phoneDisplay} href={`tel:${CLINIC.phone}`} />
                <InfoRow icon={Mail} label="Email" value={CLINIC.email} href={`mailto:${CLINIC.email}`} />
              </div>
            </div>

            {/* Hours card */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <h3 className="font-serif text-lg font-semibold">Clinic Hours</h3>
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
              className="flex items-center justify-center gap-2 rounded-2xl border border-gold/40 bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:shadow-[0_12px_30px_-10px_rgba(13,107,71,0.5)] hover:brightness-110"
            >
              <MessageCircle className="h-4 w-4 text-gold" />
              Message Our Concierge on WhatsApp
            </a>
          </FadeIn>

          {/* Map */}
          <FadeIn delay={0.1} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <iframe
              src={CLINIC.mapEmbed}
              title="Élite Dental Atelier Lagos — Victoria Island location map"
              className="h-full min-h-[440px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

function InfoRow({
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
    <div className="flex items-start gap-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
        <Icon className="h-5 w-5 text-primary" />
      </span>
      <div className="flex flex-col">
        <span className="label text-[11px] text-muted-foreground">{label}</span>
        <span className="text-sm font-medium leading-relaxed text-foreground">{value}</span>
      </div>
    </div>
  )
  return href ? (
    <a href={href} className="transition-opacity hover:opacity-70">
      {content}
    </a>
  ) : (
    content
  )
}
