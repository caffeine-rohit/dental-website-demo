'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  User,
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Check,
} from 'lucide-react'
import { SERVICES, whatsappLink } from '@/lib/site-data'
import { cn } from '@/lib/utils'

const STEPS = [
  { id: 1, label: 'Personal', icon: User },
  { id: 2, label: 'Schedule', icon: CalendarDays },
  { id: 3, label: 'Confirm', icon: CheckCircle2 },
]

const TIME_SLOTS = ['09:30', '11:00', '12:30', '15:00', '16:30', '18:00']
const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

export function AppointmentForm() {
  const [step, setStep] = useState(1)
  const [patientType, setPatientType] = useState<'new' | 'returning'>('new')
  const [form, setForm] = useState({ name: '', phone: '', service: SERVICES[0].name })
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [time, setTime] = useState<string | null>(null)

  const today = new Date()
  const [viewMonth, setViewMonth] = useState({ y: today.getFullYear(), m: today.getMonth() })

  const firstDay = new Date(viewMonth.y, viewMonth.m, 1).getDay()
  const daysInMonth = new Date(viewMonth.y, viewMonth.m + 1, 0).getDate()
  const cells = [...Array(firstDay).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)]

  const canNext1 = form.name.trim() && form.phone.trim()
  const canNext2 = selectedDate && time

  const dateLabel = selectedDate
    ? selectedDate.toLocaleDateString('en-NG', { weekday: 'long', day: 'numeric', month: 'long' })
    : ''

  const isPast = (d: number) => {
    const date = new Date(viewMonth.y, viewMonth.m, d)
    const t = new Date()
    t.setHours(0, 0, 0, 0)
    return date < t
  }

  const changeMonth = (delta: number) => {
    setViewMonth((prev) => {
      const m = prev.m + delta
      if (m < 0) return { y: prev.y - 1, m: 11 }
      if (m > 11) return { y: prev.y + 1, m: 0 }
      return { ...prev, m }
    })
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-white/65 backdrop-blur-2xl supports-[backdrop-filter]:bg-white/65 shadow-[0_30px_70px_-35px_rgba(11,110,110,0.4)]">
      {/* Step indicator */}
      <div className="border-b border-border bg-secondary/40 px-6 py-6 sm:px-10">
        <div className="mx-auto flex max-w-lg items-center">
          {STEPS.map((s, i) => {
            const Icon = s.icon
            const done = step > s.id
            const current = step === s.id
            return (
              <div key={s.id} className="flex flex-1 items-center last:flex-none">
                <div className="flex flex-col items-center gap-2">
                  <span
                    className={cn(
                      'flex h-11 w-11 items-center justify-center rounded-full border-2 transition-colors',
                      done && 'border-primary bg-primary text-primary-foreground',
                      current && 'border-gold bg-card text-primary',
                      !done && !current && 'border-border bg-card text-muted-foreground',
                    )}
                  >
                    {done ? <Check className="h-5 w-5" /> : <Icon className="h-5 w-5" />}
                  </span>
                  <span
                    className={cn(
                      'label text-[10px]',
                      current || done ? 'text-primary' : 'text-muted-foreground',
                    )}
                  >
                    {s.label}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <div className="mx-2 h-0.5 flex-1 overflow-hidden rounded-full bg-border">
                    <motion.div
                      className="h-full bg-primary"
                      initial={false}
                      animate={{ width: step > s.id ? '100%' : '0%' }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <div className="p-6 sm:p-10">
        <AnimatePresence mode="wait">
          {/* STEP 1 */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col gap-6"
            >
              <div className="flex rounded-full border border-border bg-secondary/40 p-1">
                {(['new', 'returning'] as const).map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setPatientType(t)}
                    className={cn(
                      'flex-1 rounded-full px-4 py-2.5 text-sm font-semibold capitalize transition-colors',
                      patientType === t
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground/60 hover:text-foreground',
                    )}
                  >
                    {t} Patient
                  </button>
                ))}
              </div>

              <Field label="Full Name">
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Chioma Adebayo"
                  className="input"
                />
              </Field>
              <Field label="Phone Number">
                <input
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+234 ..."
                  inputMode="tel"
                  className="input"
                />
              </Field>
              <Field label="Treatment of Interest">
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="input"
                >
                  {SERVICES.map((s) => (
                    <option key={s.slug}>{s.name}</option>
                  ))}
                  <option>General Consultation</option>
                </select>
              </Field>

              <button
                type="button"
                disabled={!canNext1}
                onClick={() => setStep(2)}
                className="btn-primary"
              >
                Continue to Schedule
                <ChevronRight className="h-4 w-4" />
              </button>
            </motion.div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col gap-7"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-serif text-xl font-semibold text-foreground">
                    {MONTHS[viewMonth.m]} {viewMonth.y}
                  </span>
                  <div className="flex gap-2">
                    <button type="button" onClick={() => changeMonth(-1)} className="cal-nav" aria-label="Previous month">
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button type="button" onClick={() => changeMonth(1)} className="cal-nav" aria-label="Next month">
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-1.5">
                  {WEEKDAYS.map((d) => (
                    <span key={d} className="py-1 text-center text-xs font-medium text-muted-foreground">
                      {d}
                    </span>
                  ))}
                  {cells.map((d, i) => {
                    if (d === null) return <span key={`e-${i}`} />
                    const past = isPast(d)
                    const isSel =
                      selectedDate &&
                      selectedDate.getDate() === d &&
                      selectedDate.getMonth() === viewMonth.m &&
                      selectedDate.getFullYear() === viewMonth.y
                    return (
                      <button
                        key={d}
                        type="button"
                        disabled={past}
                        onClick={() => setSelectedDate(new Date(viewMonth.y, viewMonth.m, d))}
                        className={cn(
                          'aspect-square rounded-lg text-sm font-medium transition-colors',
                          past && 'cursor-not-allowed text-muted-foreground/30',
                          !past && !isSel && 'text-foreground hover:bg-primary/10',
                          isSel && 'bg-primary text-primary-foreground shadow-sm',
                        )}
                      >
                        {d}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div>
                <p className="label mb-3 text-xs text-primary">Available Times</p>
                <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
                  {TIME_SLOTS.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTime(t)}
                      className={cn(
                        'rounded-lg border py-2.5 text-sm font-medium transition-colors',
                        time === t
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border bg-card text-foreground/70 hover:border-primary/40',
                      )}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <button type="button" onClick={() => setStep(1)} className="btn-ghost">
                  <ChevronLeft className="h-4 w-4" />
                  Back
                </button>
                <button
                  type="button"
                  disabled={!canNext2}
                  onClick={() => setStep(3)}
                  className="btn-primary flex-1"
                >
                  Review Booking
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col gap-6"
            >
              <div className="relative overflow-hidden rounded-2xl border border-gold/30 bg-secondary/30 p-7">
                <svg
                  viewBox="0 0 24 24"
                  className="pointer-events-none absolute -right-6 -top-6 h-40 w-40 text-primary/5"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 21c-1.2-2.5-3-3.5-4.2-6.5C6.3 11.3 6.8 7 9.2 5.4c1.2-.8 2-.2 2.8.4.8-.6 1.6-1.2 2.8-.4 2.4 1.6 2.9 5.9 1.4 9.1-1.2 3-3 4-4.2 6.5Z" />
                </svg>
                <div className="relative flex flex-col gap-4">
                  <span className="label text-xs text-primary">Booking Summary</span>
                  <SummaryRow label="Patient" value={`${form.name} (${patientType})`} />
                  <SummaryRow label="Phone" value={form.phone} />
                  <SummaryRow label="Treatment" value={form.service} />
                  <SummaryRow label="Date" value={dateLabel} />
                  <SummaryRow label="Time" value={time ?? ''} />
                </div>
              </div>

              <a
                href={whatsappLink(
                  `Hi, I'd like to confirm an appointment.\nName: ${form.name}\nType: ${patientType}\nTreatment: ${form.service}\nDate: ${dateLabel}\nTime: ${time}`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary justify-center"
              >
                <CheckCircle2 className="h-4 w-4" />
                Confirm via WhatsApp
              </a>
              <button type="button" onClick={() => setStep(2)} className="btn-ghost justify-center">
                <ChevronLeft className="h-4 w-4" />
                Edit details
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        :global(.input) {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid var(--border);
          background: var(--card);
          padding: 0.75rem 1rem;
          font-size: 0.95rem;
          color: var(--foreground);
          outline: none;
          transition: border-color 0.2s;
        }
        :global(.input:focus) {
          border-color: var(--primary);
        }
        :global(.btn-primary) {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          border-radius: 9999px;
          background: var(--primary);
          padding: 0.85rem 1.5rem;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--primary-foreground);
          transition: filter 0.2s, opacity 0.2s;
        }
        :global(.btn-primary:hover) {
          filter: brightness(1.08);
        }
        :global(.btn-primary:disabled) {
          opacity: 0.45;
          cursor: not-allowed;
        }
        :global(.btn-ghost) {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          border-radius: 9999px;
          border: 1px solid var(--border);
          padding: 0.85rem 1.4rem;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--foreground);
          background: var(--card);
        }
        :global(.cal-nav) {
          display: inline-flex;
          height: 2.25rem;
          width: 2.25rem;
          align-items: center;
          justify-content: center;
          border-radius: 0.75rem;
          border: 1px solid var(--border);
          color: var(--primary);
        }
      `}</style>
    </div>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium text-foreground">{label}</span>
      {children}
    </label>
  )
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-border/60 pb-2 last:border-0 last:pb-0">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="text-sm font-semibold text-foreground">{value}</span>
    </div>
  )
}
