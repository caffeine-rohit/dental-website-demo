'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Star, ShieldCheck, ArrowRight, Phone, Award, Sparkles } from 'lucide-react'
import { CLINIC } from '@/lib/site-data'

const easing = [0.22, 1, 0.36, 1] as const

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}
const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: easing } },
}

export function Hero() {
  return (
    <section className="mesh-bg relative overflow-hidden pt-32 pb-20 sm:pt-44 sm:pb-28">
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -left-32 h-80 w-80 rounded-full bg-sky/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left Content */}
        <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col gap-7">

          {/* Eyebrow badge */}
          <motion.span
            variants={item}
            className="label inline-flex w-fit items-center gap-2 rounded-full border border-primary/25 bg-primary/6 px-4 py-2 text-[11px] text-primary"
          >
            <Award className="h-3.5 w-3.5 text-gold" />
            JCI Accredited · Victoria Island, Lagos
          </motion.span>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-balance font-serif text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[3.75rem]"
          >
            West Africa&apos;s Most{' '}
            <span className="relative">
              <span className="text-gradient">Distinguished</span>
            </span>{' '}
            Dental Institution
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground"
          >
            World-class implants, smile design and cosmetic dentistry — delivered by Dr. Chisom Adaeze Okonkwo and a team trained across London, Dubai and Lagos. 3,500+ smiles. 18 years of excellence.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact#book"
              className="group pulse-ring inline-flex items-center gap-2 rounded-full border border-gold/40 bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:shadow-[0_16px_40px_-10px_rgba(13,107,71,0.55)] hover:brightness-110"
            >
              <Sparkles className="h-4 w-4 text-gold" />
              Book Private Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={`tel:${CLINIC.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:text-primary hover:shadow-md"
            >
              <Phone className="h-4 w-4 text-primary" />
              {CLINIC.phoneDisplay}
            </a>
          </motion.div>

          {/* Trust chips */}
          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-x-7 gap-y-3 pt-1"
          >
            {[
              { icon: ShieldCheck, label: 'JCI Accredited' },
              { icon: ShieldCheck, label: 'ISO 9001:2025' },
              { icon: ShieldCheck, label: 'Pain-Free Dentistry' },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                  <b.icon className="h-3 w-3 text-primary" />
                </span>
                {b.label}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.93, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.0, ease: easing, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          {/* Main image */}
          <div className="relative overflow-hidden rounded-[2.5rem] border border-border/60 bg-card shadow-[0_40px_100px_-30px_rgba(13,107,71,0.35)]">
            <Image
              src="/images/hero-doctor.png"
              alt="Dr. Chisom Okonkwo, lead dentist at Élite Dental Atelier Lagos"
              width={720}
              height={880}
              priority
              className="h-full w-full object-cover"
            />
            {/* Subtle green overlay at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/15 via-transparent to-transparent" />
          </div>

          {/* Floating stats card — bottom left */}
          <motion.div
            initial={{ opacity: 0, x: -24, y: 24 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, ease: easing, delay: 0.8 }}
            className="animate-float bg-white/65 backdrop-blur-2xl supports-[backdrop-filter]:bg-white/65 absolute -bottom-6 -left-4 flex items-center gap-4 rounded-2xl border border-gold/30 p-4 shadow-xl sm:-left-8"
          >
            <div className="flex flex-col">
              <div className="flex items-center gap-0.5 text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                ))}
              </div>
              <span className="mt-0.5 text-xs text-muted-foreground">4.9 · 500+ Google Reviews</span>
            </div>
            <div className="h-9 w-px bg-border" />
            <div className="flex flex-col leading-tight">
              <span className="font-serif text-xl font-bold text-foreground">3,500+</span>
              <span className="text-xs text-muted-foreground">Smiles · 18 Years</span>
            </div>
          </motion.div>

          {/* Floating badge — top right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: easing, delay: 1.0 }}
            className="absolute -right-3 top-10 rounded-2xl border border-border bg-white/65 backdrop-blur-2xl supports-[backdrop-filter]:bg-white/65 px-4 py-3 text-center shadow-lg sm:-right-7"
          >
            <p className="font-serif text-2xl font-bold text-primary">99%</p>
            <p className="text-[11px] text-muted-foreground">Success Rate</p>
          </motion.div>

          {/* JCI badge — top left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: easing, delay: 1.15 }}
            className="bg-white/65 backdrop-blur-2xl supports-[backdrop-filter]:bg-white/65 absolute left-4 top-6 flex items-center gap-2 rounded-xl border border-primary/20 px-3 py-2 shadow-md sm:left-6"
          >
            <ShieldCheck className="h-4 w-4 text-primary" />
            <span className="text-xs font-semibold text-foreground">JCI Accredited</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
