'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CalendarHeart, Phone, MessageCircle, X, Sparkles } from 'lucide-react'
import { CLINIC, whatsappLink } from '@/lib/site-data'

export function StickyBar() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 28 }}
          className="fixed inset-x-3 bottom-3 z-50 sm:inset-x-auto sm:right-5 sm:bottom-5 sm:max-w-sm"
        >
          <div className="flex items-center gap-3 rounded-2xl border border-primary/20 bg-white/65 p-3 shadow-[0_20px_50px_-15px_rgba(13,107,71,0.4)] backdrop-blur-2xl">
            {/* Text */}
            <div className="hidden flex-1 pl-2 sm:block">
              <p className="text-xs text-muted-foreground">Ready for your transformation?</p>
              <p className="font-serif text-base font-semibold text-primary">Book a Consultation Today</p>
            </div>

            <div className="flex flex-1 items-center gap-2 sm:flex-none">
              {/* Book button */}
              <Link
                href="/contact#book"
                className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-primary px-3 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:flex-none"
              >
                <Sparkles className="h-3.5 w-3.5 text-gold" />
                <span className="hidden sm:inline">Book</span>
                <span className="sm:hidden">Book Now</span>
              </Link>

              {/* Phone */}
              <a
                href={`tel:${CLINIC.phone}`}
                aria-label="Call concierge"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-primary transition-colors hover:bg-primary/8"
              >
                <Phone className="h-4 w-4" />
              </a>

              {/* WhatsApp */}
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Concierge"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gold text-gold-foreground transition-all hover:brightness-105 hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>

            {/* Dismiss */}
            <button
              type="button"
              onClick={() => setDismissed(true)}
              aria-label="Dismiss"
              className="inline-flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
