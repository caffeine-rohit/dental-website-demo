'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Award, GraduationCap, MapPin, Globe } from 'lucide-react'
import { FadeIn } from '@/components/motion-primitives'
import { DOCTOR } from '@/lib/site-data'

export function DoctorProfile() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Sky section background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/4 via-sky/3 to-background" />
      <div className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-primary/8 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-64 w-64 rounded-full bg-gold/6 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Image */}
        <FadeIn className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-primary/15 bg-card shadow-[0_40px_100px_-30px_rgba(13,107,71,0.4)]">
            <Image
              src="/images/doctor-profile.png"
              alt={`${DOCTOR.name}, ${DOCTOR.qualification}`}
              width={620}
              height={760}
              className="h-full w-full object-cover"
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
          </div>

          {/* FICOI badge */}
          <div className="bg-white/65 backdrop-blur-2xl supports-[backdrop-filter]:bg-white/65 absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl border border-gold/30 px-5 py-3 shadow-xl">
            <Award className="h-5 w-5 text-gold" />
            <span className="whitespace-nowrap text-sm font-semibold text-foreground">FICOI Certified Implantologist</span>
          </div>

          {/* UCL badge */}
          <div className="absolute -right-3 top-8 flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-2.5 shadow-lg sm:-right-6">
            <GraduationCap className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-foreground">UCL London Alumni</span>
          </div>

          {/* Lagos badge */}
          <div className="bg-white/65 backdrop-blur-2xl supports-[backdrop-filter]:bg-white/65 absolute left-4 top-6 flex items-center gap-2 rounded-xl border border-border px-3 py-2 shadow-md sm:left-0">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-xs font-medium text-foreground">Victoria Island, Lagos</span>
          </div>
        </FadeIn>

        {/* Text */}
        <FadeIn className="flex flex-col gap-7">
          <span className="label flex items-center gap-2 text-xs text-primary">
            <span className="h-px w-8 bg-gradient-to-r from-primary to-transparent" />
            Meet Your Specialist
          </span>

          <div>
            <h2 className="text-balance font-serif text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Meet{' '}
              <span className="text-gradient">
                {DOCTOR.name.split(' ').slice(0, 2).join(' ')}
              </span>
            </h2>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              {DOCTOR.name.split(' ').slice(2).join(' ')}
            </h2>
          </div>

          <p className="font-serif text-lg font-medium text-primary">{DOCTOR.qualification}</p>

          <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
            {DOCTOR.bio}
          </p>

          {/* Credentials */}
          <div className="flex flex-wrap gap-2">
            {DOCTOR.credentials.map((c) => (
              <span
                key={c}
                className="rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary"
              >
                {c}
              </span>
            ))}
          </div>

          {/* Trained at */}
          <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm">
            <Globe className="h-5 w-5 shrink-0 text-primary" />
            <p className="text-sm text-muted-foreground">
              Trained at{' '}
              <span className="font-semibold text-foreground">University College London</span>
              {' '}·{' '}
              <span className="font-semibold text-foreground">Dubai American Dental Clinic</span>
              {' '}·{' '}
              <span className="font-semibold text-foreground">Élite Dental Atelier Lagos</span>
            </p>
          </div>

          <Link
            href="/contact#book"
            className="group mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-gold/40 bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_16px_40px_-10px_rgba(13,107,71,0.55)] hover:brightness-110"
          >
            Book a Consultation with Dr. Okonkwo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
