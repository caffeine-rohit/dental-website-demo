'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Stagger, StaggerItem } from '@/components/motion-primitives'
import { SERVICES } from '@/lib/site-data'


export function ServicesSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Treatments"
          title="World-Class Care Under One Roof"
          description="From a single implant to a complete smile transformation, every treatment is delivered with JCI-accredited precision and a deeply personal approach by West Africa's finest dental team."
        />

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon
            return (
              <StaggerItem key={service.slug}>
                <Link href={`/services/${service.slug}`} className="group block h-full">
                  <motion.article
                    whileHover={{ y: -6 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                    className="luxury-card relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-sm transition-all hover:border-primary/30"
                  >
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-7 w-7" />
                    </span>
                    <div className="mt-6 flex flex-1 flex-col gap-3">
                      <h3 className="font-serif text-2xl font-semibold text-foreground">{service.name}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground flex-1">
                        {service.short}
                      </p>
                      <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                        Explore Treatment
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </motion.article>
                </Link>
              </StaggerItem>
            )
          })}
        </Stagger>

        {/* All services CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/6 px-8 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            View All Treatments
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
