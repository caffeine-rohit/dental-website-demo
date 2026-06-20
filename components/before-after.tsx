'use client'

import Image from 'next/image'
import { useCallback, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MoveHorizontal, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export type BeforeAfterCase = {
  label: string
  before: string
  after: string
  name: string
  treatment: string
  duration: string
}

export function BeforeAfter({
  cases,
  className,
}: {
  cases: BeforeAfterCase[]
  className?: string
}) {
  const [active, setActive] = useState(0)
  const current = cases[active]

  const prev = () => setActive((a) => (a === 0 ? cases.length - 1 : a - 1))
  const next = () => setActive((a) => (a === cases.length - 1 ? 0 : a + 1))

  return (
    <div className={cn('flex flex-col gap-6', className)}>
      {/* Case selector tabs */}
      {cases.length > 1 && (
        <div className="mx-auto flex flex-wrap items-center justify-center gap-2 rounded-full border border-border glass p-1.5 shadow-sm">
          {cases.map((c, i) => (
            <button
              key={c.label}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                'relative rounded-full px-6 py-2 text-sm font-medium transition-colors',
                active === i ? 'text-primary-foreground' : 'text-foreground/70 hover:text-foreground',
              )}
            >
              {active === i && (
                <motion.span
                  layoutId="ba-tab"
                  className="absolute inset-0 -z-10 rounded-full bg-primary"
                  transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                />
              )}
              {c.label}
            </button>
          ))}
        </div>
      )}

      {/* Main comparison */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <Comparison data={current} />

          {/* Navigation arrows */}
          {cases.length > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                className="absolute left-4 top-1/2 z-20 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-md transition-all hover:bg-white hover:shadow-lg"
                aria-label="Previous case"
              >
                <ChevronLeft className="h-5 w-5 text-foreground" />
              </button>
              <button
                type="button"
                onClick={next}
                className="absolute right-4 top-1/2 z-20 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-md transition-all hover:bg-white hover:shadow-lg"
                aria-label="Next case"
              >
                <ChevronRight className="h-5 w-5 text-foreground" />
              </button>
            </>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Patient info */}
      <div className="flex items-center justify-center gap-6 rounded-2xl border border-border glass px-6 py-4 shadow-sm">
        <div className="flex flex-col items-center gap-0.5">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Patient</span>
          <span className="font-semibold text-foreground">{current.name}</span>
        </div>
        <div className="h-8 w-px bg-border" />
        <div className="flex flex-col items-center gap-0.5">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Treatment</span>
          <span className="font-semibold text-foreground">{current.treatment}</span>
        </div>
        <div className="h-8 w-px bg-border" />
        <div className="flex flex-col items-center gap-0.5">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Duration</span>
          <span className="font-semibold text-primary">{current.duration}</span>
        </div>
      </div>
    </div>
  )
}

function Comparison({ data }: { data: BeforeAfterCase }) {
  const [pos, setPos] = useState(50)
  const [view, setView] = useState<'slider' | 'before' | 'after'>('slider')
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const clipPos = view === 'before' ? 0 : view === 'after' ? 100 : pos

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const next = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(100, Math.max(0, next)))
  }, [])

  const onPointerDown = (e: React.PointerEvent) => {
    setView('slider')
    dragging.current = true
    ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
    updateFromClientX(e.clientX)
  }
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return
    updateFromClientX(e.clientX)
  }
  const onPointerUp = () => {
    dragging.current = false
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Comparison image — tall and full-width */}
      <div
        ref={containerRef}
        className="relative aspect-[16/9] w-full select-none overflow-hidden rounded-2xl border border-border bg-muted shadow-[0_30px_80px_-25px_rgba(13,107,71,0.35)] cursor-ew-resize"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        {/* After (base layer) */}
        <Image
          src={data.after}
          alt={`${data.name} after ${data.treatment}`}
          fill
          sizes="(max-width: 768px) 100vw, 900px"
          className="object-cover"
          priority
        />
        <span className="absolute right-4 top-4 z-10 rounded-full bg-primary px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-sm">
          After
        </span>

        {/* Before (clipped overlay) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - clipPos}% 0 0)` }}
        >
          <Image
            src={data.before}
            alt={`${data.name} before ${data.treatment}`}
            fill
            sizes="(max-width: 768px) 100vw, 900px"
            className="object-cover"
          />
          <span className="absolute left-4 top-4 z-10 rounded-full bg-foreground/85 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-background shadow-sm">
            Before
          </span>
        </div>

        {/* Slider handle */}
        {view === 'slider' && (
          <div
            className="absolute inset-y-0 z-20"
            style={{ left: `${clipPos}%` }}
          >
            {/* Line */}
            <div className="absolute inset-y-0 left-0 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.3)]" />
            {/* Handle circle */}
            <span className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-gold bg-white text-primary shadow-xl">
              <MoveHorizontal className="h-5 w-5" />
            </span>
          </div>
        )}

        {/* Hint overlay */}
        {view === 'slider' && (
          <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-xs text-white backdrop-blur-sm">
            Drag to compare
          </div>
        )}
      </div>

      {/* View toggle */}
      <div className="mx-auto flex items-center gap-1 rounded-full border border-border glass p-1 shadow-sm">
        {(['before', 'slider', 'after'] as const).map((v) => (
          <button
            key={v}
            type="button"
            onClick={() => setView(v)}
            className={cn(
              'rounded-full px-5 py-1.5 text-xs font-semibold capitalize transition-all duration-200',
              view === v
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-foreground/60 hover:text-foreground',
            )}
          >
            {v === 'slider' ? 'Compare' : v}
          </button>
        ))}
      </div>
    </div>
  )
}
