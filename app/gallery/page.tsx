import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { FadeIn, Stagger, StaggerItem } from '@/components/motion-primitives'
import { AppointmentSection } from '@/components/appointment-section'
import { GALLERY } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Explore our clinic spaces, technology and patient transformations. Élite Dental Atelier Lagos — where world-class dentistry meets luxurious surroundings.',
}

const CLINIC_IMAGES = [
  { src: '/images/clinic-interior.png', caption: 'Our Main Treatment Suite — Victoria Island' },
  { src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80', caption: 'Reception & Concierge Lounge' },
  { src: 'https://images.unsplash.com/photo-1581585099522-f6ac2efe5b30?auto=format&fit=crop&w=900&q=80', caption: 'Advanced Diagnostics Suite' },
  { src: '/images/doctor-profile.png', caption: 'Dr. Chisom Adaeze Okonkwo, MDS (UCL)' },
]

const TRANSFORMATION_IMAGES = [
  { src: '/images/after-smile.png', label: 'Porcelain Veneers', patient: 'Adaora N., Lagos' },
  { src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80', label: 'Smile Design', patient: 'Kwame A., Accra' },
  { src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80', label: 'Dental Implants', patient: 'Seun A., Lagos' },
  { src: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=900&q=80', label: 'Laser Whitening', patient: 'Fatima R., Abuja' },
  { src: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=900&q=80', label: 'Full Mouth Rehab', patient: 'Chidi O., Port Harcourt' },
  { src: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=80', label: 'Invisible Aligners', patient: 'Amara D., Dakar' },
]

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A Clinic Built for Excellence"
        description="Step inside Élite Dental Atelier Lagos — our state-of-the-art facility, our extraordinary team, and the transformations we are privileged to deliver."
        crumbs={[{ label: 'Gallery' }]}
      />

      {/* Clinic Spaces */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Our Facility"
            title="Where Luxury Meets Precision"
            description="Designed by award-winning architects, our Victoria Island clinic combines the warmth of a private members club with the precision of a world-class medical centre."
          />

          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CLINIC_IMAGES.map((img, i) => (
              <StaggerItem key={img.src} className={i === 0 ? 'sm:col-span-2 sm:row-span-2' : ''}>
                <div className="group relative h-full min-h-[220px] overflow-hidden rounded-2xl border border-border bg-muted shadow-sm">
                  <Image
                    src={img.src}
                    alt={img.caption}
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <p className="absolute bottom-3 left-3 right-3 translate-y-2 text-xs font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {img.caption}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Transformations */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Patient Transformations"
            title="Real Results From Real Patients"
            description="Every smile in our gallery belongs to a real patient — a real life changed. These are among our most memorable transformations."
          />

          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TRANSFORMATION_IMAGES.map((img) => (
              <StaggerItem key={img.src}>
                <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-muted shadow-sm">
                  <Image
                    src={img.src}
                    alt={`${img.label} — ${img.patient}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="label block text-[10px] text-gold">{img.label}</span>
                    <p className="text-sm font-semibold text-white">{img.patient}</p>
                  </div>
                  {/* Treatment badge */}
                  <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-primary shadow-sm">
                    <Sparkles className="h-3 w-3 text-gold" />
                    {img.label}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
          <FadeIn>
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
              Your Transformation Starts Here
            </h2>
            <p className="mt-4 text-muted-foreground">
              Book your private consultation and let us design the smile you have always deserved.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact#book"
                className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-[0_12px_30px_-10px_rgba(13,107,71,0.5)]"
              >
                <Sparkles className="h-4 w-4 text-gold" />
                Book a Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-8 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/30 hover:text-primary"
              >
                View All Treatments
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
