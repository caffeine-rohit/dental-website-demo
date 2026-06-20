import Link from 'next/link'
import { MapPin, Phone, Mail, MessageCircle, ExternalLink } from 'lucide-react'
import { Logo } from '@/components/logo'
import { CLINIC, SERVICES, whatsappLink } from '@/lib/site-data'

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Treatments', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
  { label: 'Book Appointment', href: '/contact#book' },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[oklch(0.15_0.04_165)] text-white/80">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-0 h-80 w-80 rounded-full bg-gold/8 blur-3xl" />

      {/* Serving line */}
      <div className="relative border-b border-white/8">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-5 py-3 sm:px-8">
          <span className="text-xs text-white/40">Serving clients from</span>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            {['🇳🇬 Lagos', '🇳🇬 Abuja', '🇬🇭 Accra', '🇸🇳 Dakar', '🇿🇦 Johannesburg', '🇰🇪 Nairobi'].map((city) => (
              <span key={city} className="text-xs font-medium text-white/60">{city}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand column */}
        <div className="flex flex-col gap-5">
          <Logo invert />
          <p className="max-w-xs text-sm leading-relaxed text-white/55">
            West Africa&apos;s most distinguished dental institution. JCI-accredited, delivering world-class care from Victoria Island, Lagos.
          </p>
          <div className="flex flex-wrap gap-2">
            {['JCI Accredited', 'ISO 9001:2025', '4.9★ Google', 'WAPCAS Certified'].map((b) => (
              <span
                key={b}
                className="rounded-full border border-white/12 px-3 py-1 text-xs text-white/60"
              >
                {b}
              </span>
            ))}
          </div>
          {/* Social links */}
          <div className="flex items-center gap-2 pt-1">
            {[
              { label: 'Instagram', href: CLINIC.instagram },
              { label: 'Facebook', href: CLINIC.facebook },
              { label: 'LinkedIn', href: CLINIC.linkedin },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-9 w-auto items-center gap-1.5 rounded-full border border-white/12 px-3 text-xs text-white/55 transition-colors hover:border-gold/40 hover:text-gold"
              >
                <ExternalLink className="h-3 w-3" />
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="label mb-5 text-xs text-gold">Quick Links</h3>
          <ul className="flex flex-col gap-3 text-sm">
            {QUICK_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-white/55 transition-colors hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Treatments */}
        <div>
          <h3 className="label mb-5 text-xs text-gold">Treatments</h3>
          <ul className="flex flex-col gap-3 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-white/55 transition-colors hover:text-white"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="label mb-5 text-xs text-gold">Concierge</h3>
          <ul className="flex flex-col gap-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span className="text-white/55">{CLINIC.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={`tel:${CLINIC.phone}`} className="text-white/55 hover:text-white">
                {CLINIC.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={`mailto:${CLINIC.email}`} className="text-white/55 hover:text-white">
                {CLINIC.email}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-gold-foreground transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-6px_rgba(201,168,76,0.6)]"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Concierge
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-white/40 sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} {CLINIC.name}. All rights reserved.</p>
          <p className="font-serif text-sm italic text-white/30">{CLINIC.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
