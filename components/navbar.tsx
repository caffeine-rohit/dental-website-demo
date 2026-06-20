'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, CalendarHeart, ChevronDown, Phone, MessageCircle } from 'lucide-react'
import { Logo } from '@/components/logo'
import { SERVICES, whatsappLink, CLINIC } from '@/lib/site-data'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setServicesOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled || open
          ? 'bg-white/65 backdrop-blur-2xl border-b border-border/60 py-3 shadow-[0_8px_30px_-12px_rgba(13,107,71,0.2)]'
          : 'border-b border-transparent py-5',
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Logo />

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'relative rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    active
                      ? 'text-primary'
                      : 'text-foreground/70 hover:text-foreground',
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-primary/8"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </Link>
              </li>
            )
          })}

          {/* Services dropdown */}
          <li className="relative">
            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
              className={cn(
                'relative flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors',
                pathname.startsWith('/services') ? 'text-primary' : 'text-foreground/70 hover:text-foreground',
              )}
            >
              Treatments
              <ChevronDown className={cn('h-3.5 w-3.5 transition-transform', servicesOpen && 'rotate-180')} />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  className="absolute left-0 top-full mt-2 min-w-[220px] overflow-hidden rounded-2xl border border-border bg-white/65 backdrop-blur-2xl supports-[backdrop-filter]:bg-white/65 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)]"
                >
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="flex items-start gap-3 px-5 py-3.5 text-sm text-foreground/75 transition-colors hover:bg-primary/5 hover:text-primary"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-primary/8">
                        <s.icon className="h-3.5 w-3.5 text-primary" />
                      </span>
                      <span className="font-medium">{s.name}</span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        </ul>

        {/* Desktop right */}
        <div className="flex items-center gap-2">
          <a
            href={`tel:${CLINIC.phone}`}
            className="hidden items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-primary sm:inline-flex lg:hidden xl:inline-flex"
          >
            <Phone className="h-3.5 w-3.5" />
            <span className="hidden xl:inline">{CLINIC.phoneDisplay}</span>
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-sm font-semibold text-primary transition-all hover:bg-gold/20 sm:inline-flex"
          >
            <MessageCircle className="h-3.5 w-3.5 text-gold" />
            WhatsApp
          </a>
          <Link
            href="/contact#book"
            className="hidden items-center gap-2 rounded-full border border-gold/40 bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:shadow-[0_8px_24px_-6px_rgba(13,107,71,0.5)] hover:brightness-110 sm:inline-flex"
          >
            <CalendarHeart className="h-4 w-4 text-gold" />
            Book Consultation
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden lg:hidden"
          >
            <ul className="mx-auto mt-3 flex max-w-7xl flex-col gap-1 px-5 pb-4 sm:px-8">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-primary/8 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="block rounded-xl px-4 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-primary/8 hover:text-primary"
                >
                  Treatments
                </Link>
              </li>
              <li>
                <Link
                  href="/contact#book"
                  className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-gold/40 bg-primary px-4 py-3 text-base font-semibold text-primary-foreground"
                >
                  <CalendarHeart className="h-4 w-4 text-gold" />
                  Book Consultation
                </Link>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-gold/30 bg-gold/10 px-4 py-3 text-base font-semibold text-primary"
                >
                  <MessageCircle className="h-4 w-4 text-gold" />
                  WhatsApp Concierge
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
