import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({
  className,
  invert = false,
}: {
  className?: string
  invert?: boolean
}) {
  return (
    <Link
      href="/"
      className={cn('group flex items-center gap-3', className)}
      aria-label="Élite Dental Atelier Lagos home"
    >
      {/* Monogram mark */}
      <span
        className={cn(
          'relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border transition-all',
          invert
            ? 'border-gold/40 bg-white/10 text-gold'
            : 'border-primary/30 bg-primary text-primary-foreground',
        )}
      >
        {/* Tooth SVG */}
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
          <path
            d="M12 21c-1.2-2.5-3-3.5-4.2-6.5C6.3 11.3 6.8 7 9.2 5.4c1.2-.8 2-.2 2.8.4.8-.6 1.6-1.2 2.8-.4 2.4 1.6 2.9 5.9 1.4 9.1-1.2 3-3 4-4.2 6.5Z"
            fill="currentColor"
            opacity="0.9"
          />
        </svg>
        {/* Gold shimmer top-right */}
        <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-gold/60 blur-sm" />
      </span>

      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-serif text-lg font-bold tracking-tight',
            invert ? 'text-white' : 'text-foreground',
          )}
        >
          Élite Dental
        </span>
        <span
          className={cn(
            'label text-[10px]',
            invert ? 'text-gold/80' : 'text-primary/70',
          )}
        >
          Atelier · Lagos
        </span>
      </span>
    </Link>
  )
}
