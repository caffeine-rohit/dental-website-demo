import { cn } from '@/lib/utils'
import { FadeIn } from '@/components/motion-primitives'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  invert = false,
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: 'center' | 'left'
  invert?: boolean
  className?: string
}) {
  return (
    <FadeIn
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            'label flex items-center gap-2 text-xs',
            invert ? 'text-gold' : 'text-primary',
          )}
        >
          <span className={cn('h-px w-6', invert ? 'bg-gold/60' : 'bg-primary/50')} />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'max-w-3xl text-balance font-serif text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl',
          invert ? 'text-white' : 'text-foreground',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'max-w-2xl text-pretty leading-relaxed',
            invert ? 'text-white/70' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      )}
    </FadeIn>
  )
}
