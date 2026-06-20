'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SectionHeading } from '@/components/section-heading'
import { TECHNOLOGY } from '@/lib/site-data'
import { cn } from '@/lib/utils'

const TABS = Object.keys(TECHNOLOGY) as (keyof typeof TECHNOLOGY)[]

export function Technology() {
  const [active, setActive] = useState<keyof typeof TECHNOLOGY>(TABS[0])
  const items = TECHNOLOGY[active]

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* Premium deep green section — brand defining dark accent */}
      <div className="absolute inset-0 bg-[oklch(0.20_0.06_165)]" />
      <div className="pointer-events-none absolute right-0 -top-20 h-[500px] w-[500px] rounded-full bg-primary/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 left-0 h-80 w-80 rounded-full bg-sky/10 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          invert
          eyebrow="Innovation & Technology"
          title="A Clinic Built for 2030"
          description="Every diagnostic tool, treatment protocol and patient comfort system is engineered to the highest global standard — so you receive safer, faster and more precise care."
        />

        {/* Tab selector */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 p-1.5 backdrop-blur mx-auto w-fit">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActive(tab)}
              className={cn(
                'relative rounded-full px-6 py-2.5 text-sm font-medium transition-colors',
                active === tab ? 'text-foreground' : 'text-white/60 hover:text-white',
              )}
            >
              {active === tab && (
                <motion.span
                  layoutId="tech-tab"
                  className="absolute inset-0 -z-10 rounded-full bg-white"
                  transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                />
              )}
              {tab}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 grid gap-5 md:grid-cols-3"
          >
            {items.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="group flex flex-col gap-4 rounded-2xl border border-white/8 bg-white/5 p-7 backdrop-blur transition-all duration-300 hover:border-gold/40 hover:bg-white/8"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold transition-colors group-hover:bg-gold/25">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-white/60">{item.detail}</p>
                </div>
              )
            })}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <div className="mt-14 flex justify-center">
          <div className="glass rounded-2xl border border-white/10 px-8 py-5 text-center">
            <p className="text-sm text-white/70">
              The only private dental practice in West Africa with full{' '}
              <span className="font-semibold text-white">3D CBCT · CAD/CAM · Dental Microscope Suite</span>{' '}
              under one roof.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
