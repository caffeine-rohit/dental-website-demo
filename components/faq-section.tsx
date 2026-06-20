'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus, MessageCircle } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'
import { whatsappLink } from '@/lib/site-data'

type Item = { q: string; a: string; category?: string }

export function FaqSection({
  items,
  categories,
  eyebrow = 'Answers',
  title = 'Frequently Asked Questions',
  description,
  showContactCard = true,
}: {
  items: Item[]
  categories?: readonly string[]
  eyebrow?: string
  title?: string
  description?: string
  showContactCard?: boolean
}) {
  const [activeCat, setActiveCat] = useState<string | 'All'>(categories ? categories[0] : 'All')
  const [open, setOpen] = useState<number | null>(0)

  const filtered = useMemo(() => {
    if (!categories) return items
    return items.filter((i) => i.category === activeCat)
  }, [items, categories, activeCat])

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        {categories && (
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCat(cat)
                  setOpen(0)
                }}
                className={cn(
                  'rounded-full border px-4 py-1.5 text-sm font-medium transition-colors',
                  activeCat === cat
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border bg-card text-foreground/70 hover:border-primary/40 hover:text-primary',
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <div className="mt-10 flex flex-col gap-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => {
              const isOpen = open === i
              return (
                <motion.div
                  key={item.q}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className={cn(
                    'overflow-hidden rounded-2xl border bg-card transition-colors',
                    isOpen ? 'border-primary/30 shadow-sm' : 'border-border',
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-2xl font-semibold text-primary/30 tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="flex-1 text-base font-medium text-foreground">{item.q}</span>
                    <span
                      className={cn(
                        'flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300',
                        isOpen
                          ? 'rotate-45 border-primary bg-primary text-primary-foreground'
                          : 'border-border text-primary',
                      )}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="px-5 pb-6 pl-[3.75rem] pr-6 text-sm leading-relaxed text-muted-foreground">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {showContactCard && (
          <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center sm:flex-row sm:text-left">
            <div>
              <p className="font-serif text-xl font-semibold text-foreground">Still have questions?</p>
              <p className="text-sm text-muted-foreground">Our care team is happy to help — reach out anytime.</p>
            </div>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
