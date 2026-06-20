'use client'

import { motion } from 'framer-motion'
import { Star, Quote, MapPin } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Stagger, StaggerItem } from '@/components/motion-primitives'
import { TESTIMONIALS } from '@/lib/site-data'
import { cn } from '@/lib/utils'

const FLAG_MAP: Record<string, string> = {
  'Lagos, Nigeria': '🇳🇬',
  'Accra, Ghana': '🇬🇭',
  'Abuja, Nigeria': '🇳🇬',
  'Port Harcourt, Nigeria': '🇳🇬',
  'Dakar, Senegal': '🇸🇳',
  'Nairobi, Kenya': '🇰🇪',
}

export function Testimonials() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-96 rounded-bl-full bg-primary/4 blur-3xl" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-64 w-64 rounded-full bg-sky/6 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative">
          <SectionHeading
            eyebrow="Patient Stories"
            title="Trusted Across West Africa"
            description="Authentic words from patients who flew from Lagos, Accra, Abuja and beyond to experience excellence at Élite Dental Atelier."
          />
          {/* Rating pill */}
          <div className="mt-6 flex justify-center lg:absolute lg:right-0 lg:top-0 lg:mt-0">
            <div className="glass flex items-center gap-3 rounded-full border border-gold/30 px-5 py-2.5 shadow-sm">
              <div className="flex text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-sm font-medium text-foreground">
                4.9 / 5 · 500+ Google Reviews
              </span>
            </div>
          </div>
        </div>

        <Stagger className="mt-14 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <StaggerItem
              key={t.name}
              className={cn(t.featured && 'sm:col-span-2')}
            >
              <motion.figure
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className={cn(
                  'flex h-full flex-col gap-5 rounded-2xl border p-7',
                  t.featured
                    ? 'shimmer-glow border-gold/40 shadow-[0_24px_60px_-25px_rgba(201,168,76,0.4)]'
                    : 'bg-card border-border shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300',
                )}
              >
                {/* Stars + quote icon */}
                <div className="flex items-center justify-between">
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <Quote className="h-7 w-7 text-primary/15" />
                </div>

                {/* Quote */}
                <blockquote
                  className={cn(
                    'text-pretty leading-relaxed text-foreground/80',
                    t.featured ? 'font-serif text-xl sm:text-2xl text-foreground' : 'text-sm',
                  )}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <figcaption className="mt-auto flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-sky text-sm font-bold text-white shadow-sm">
                    {t.name.charAt(0)}
                  </span>
                  <span className="flex flex-col leading-tight">
                    <span className="text-sm font-semibold text-foreground">{t.name}</span>
                    <span className="text-xs text-muted-foreground">{t.treatment}</span>
                  </span>
                  {/* Location flag */}
                  <span className="ml-auto flex items-center gap-1.5 rounded-full border border-border bg-muted/50 px-2.5 py-1 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {FLAG_MAP[t.location] || '🌍'} {t.location.split(',')[0]}
                  </span>
                </figcaption>
              </motion.figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
