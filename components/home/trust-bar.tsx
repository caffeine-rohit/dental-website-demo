import { Star } from 'lucide-react'
import { TRUST_BADGES } from '@/lib/site-data'

export function TrustBar() {
  const items = [...TRUST_BADGES, ...TRUST_BADGES]
  return (
    <section className="border-y border-border bg-primary text-primary-foreground">
      <div className="group relative flex overflow-hidden py-5">
        <div className="flex shrink-0 animate-marquee items-center gap-12 pr-12 group-hover:[animation-play-state:paused]">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3 whitespace-nowrap">
              <Star className="h-4 w-4 fill-gold text-gold" />
              <span className="label text-sm text-primary-foreground/90">{item}</span>
              <span className="ml-9 h-1.5 w-1.5 rounded-full bg-gold/60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
