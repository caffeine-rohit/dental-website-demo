import { SectionHeading } from '@/components/section-heading'
import { CountUp, FadeIn, Stagger, StaggerItem } from '@/components/motion-primitives'
import { STATS, DIFFERENTIATORS } from '@/lib/site-data'

export function WhyChooseUs() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky/5 via-background to-primary/3" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
        {/* Left — stats */}
        <div className="flex flex-col gap-8">
          <SectionHeading
            align="left"
            eyebrow="Why Élite Dental Atelier"
            title="A Standard of Care You Can Feel"
            description="Our numbers tell part of the story — the confidence, comfort and lifelong results our patients experience complete it."
          />
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-sm">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1 bg-card p-7 hover:bg-primary/3 transition-colors">
                <span className="font-serif text-4xl font-bold text-primary sm:text-5xl">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Serving areas tag */}
          <div className="flex flex-wrap gap-2">
            {['Lagos', 'Abuja', 'Accra', 'Port Harcourt', 'Nairobi', 'Dakar'].map((city) => (
              <span
                key={city}
                className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
              >
                {city}
              </span>
            ))}
          </div>
        </div>

        {/* Right — differentiators */}
        <Stagger className="grid gap-5 sm:grid-cols-2">
          {DIFFERENTIATORS.map((d) => {
            const Icon = d.icon
            return (
              <StaggerItem key={d.title}>
                <div className="group flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-md">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/8 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-serif text-lg font-semibold text-foreground">{d.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{d.detail}</p>
                  </div>
                </div>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
