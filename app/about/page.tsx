import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Award, Globe, ShieldCheck, Heart, Target, Gem } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { FadeIn, Stagger, StaggerItem } from '@/components/motion-primitives'
import { AppointmentSection } from '@/components/appointment-section'
import { DOCTOR, TEAM, AWARDS, VALUES } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Meet Dr. Chisom Adaeze Okonkwo and the Élite Dental Atelier Lagos team — West Africa\'s most acclaimed dental institution, JCI-accredited and delivering world-class care since 2006.',
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="West Africa's Most Distinguished Dental Institution"
        description="Founded on the belief that exceptional dental care is a right, not a privilege — Élite Dental Atelier Lagos brings the world's finest techniques to Victoria Island, Lagos."
        crumbs={[{ label: 'About Us' }]}
      />

      {/* Doctor Story */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
          <FadeIn className="relative">
            <div className="overflow-hidden rounded-[2.5rem] border border-primary/15 shadow-[0_40px_100px_-30px_rgba(13,107,71,0.35)]">
              <Image
                src="/images/doctor-profile.png"
                alt={`${DOCTOR.name} — Founder of Élite Dental Atelier Lagos`}
                width={700}
                height={860}
                className="h-full w-full object-cover"
              />
            </div>
            {/* Credential badge */}
            <div className="bg-white/65 backdrop-blur-2xl supports-[backdrop-filter]:bg-white/65 absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl border border-gold/30 px-5 py-3 shadow-xl">
              <Award className="h-5 w-5 text-gold" />
              <span className="whitespace-nowrap text-sm font-semibold">UCL London · FICOI Certified</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="flex flex-col gap-7">
            <span className="label flex items-center gap-2 text-xs text-primary">
              <span className="h-px w-8 bg-gradient-to-r from-primary to-transparent" />
              Founder & Chief Prosthodontist
            </span>
            <div>
              <h2 className="font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl">
                {DOCTOR.name}
              </h2>
              <p className="mt-2 font-serif text-lg text-primary">{DOCTOR.qualification}</p>
            </div>
            <p className="text-pretty leading-relaxed text-muted-foreground">{DOCTOR.bio}</p>

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
            <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm">
              <Globe className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div className="text-sm text-muted-foreground">
                <span className="block font-semibold text-foreground">International Training</span>
                University College London · Dubai American Dental Clinic · Advanced Implantology, Seoul
              </div>
            </div>

            <Link
              href="/contact#book"
              className="group inline-flex w-fit items-center gap-2 rounded-full border border-gold/40 bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_16px_40px_-10px_rgba(13,107,71,0.55)] hover:brightness-110"
            >
              Book with Dr. Okonkwo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky/5 via-background to-primary/3" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Our Philosophy"
            title="The Principles That Guide Everything We Do"
            description="Our values are not aspirational posters on a wall — they are the invisible standard behind every patient interaction, every treatment plan, every result."
          />
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => {
              const icons = [Target, Gem, Heart, ShieldCheck]
              const Icon = icons[i % icons.length]
              return (
                <StaggerItem key={v.title}>
                  <div className="group flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:border-primary/30 hover:shadow-md">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/8 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="font-serif text-xl font-bold text-foreground">{v.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{v.detail}</p>
                  </div>
                </StaggerItem>
              )
            })}
          </Stagger>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Our Specialists"
            title="Meet the Team Behind Your Smile"
            description="Our multidisciplinary team brings together specialists trained across three continents, united by a single commitment: delivering the finest dental care in West Africa."
          />
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member) => (
              <StaggerItem key={member.name}>
                <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:border-primary/30 hover:shadow-md">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={`${member.name} — ${member.role}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
                  </div>
                  <div className="flex flex-col gap-1 p-5">
                    <h3 className="font-serif text-lg font-bold text-foreground">{member.name}</h3>
                    <p className="text-sm text-primary">{member.role}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Awards & Accreditations */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[oklch(0.20_0.06_165)]" />
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            invert
            eyebrow="Recognition"
            title="Accreditations & Awards"
            description="Our commitment to clinical excellence has earned international recognition across the most rigorous healthcare quality frameworks."
          />
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {AWARDS.map((award) => (
              <StaggerItem key={award.title}>
                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors hover:border-gold/30">
                  <Award className="mt-0.5 h-6 w-6 shrink-0 text-gold" />
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-white">{award.title}</h3>
                    <p className="mt-1 text-sm text-white/60">{award.detail}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <AppointmentSection />
    </>
  )
}
