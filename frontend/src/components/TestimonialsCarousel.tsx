import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import SectionHeading from './SectionHeading'
import { Testimonial } from '../types'

type TestimonialsCarouselProps = {
  testimonials: Testimonial[]
  loading: boolean
}

const testimonialsToDisplay = (items: Testimonial[], loading: boolean) => {
  if (loading) {
    return Array.from({ length: 3 }).map(() => null as Testimonial | null)
  }
  if (items.length === 0) {
    return [null]
  }
  return items as (Testimonial | null)[]
}

const transition = { duration: 0.5, ease: 'easeInOut' }

const TestimonialsCarousel = ({ testimonials, loading }: TestimonialsCarouselProps) => {
  const slides = useMemo(() => testimonialsToDisplay(testimonials, loading), [testimonials, loading])
  const [index, setIndex] = useState(0)

  const active = slides[index % slides.length]

  const next = () => setIndex((value) => (value + 1) % slides.length)
  const prev = () => setIndex((value) => (value - 1 + slides.length) % slides.length)

  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="px-6">
      <SectionHeading
        eyebrow="Echoes"
        title="Voices who carry our fabric stories"
        description="A living exchange between creatives, technologists, and night roamers wrapped in Appizzo silhouettes."
        anchor="testimonials-heading"
      />
      <div className="mx-auto mt-16 flex max-w-4xl flex-col gap-8 rounded-3xl border border-glow/15 bg-night/80 p-8 backdrop-blur">
        <div className="flex justify-between text-xs uppercase tracking-[0.3em] text-glow/60">
          <button
            type="button"
            onClick={prev}
            disabled={loading || slides.length <= 1}
            className="rounded-full border border-glow/20 px-4 py-2 text-glow/70 transition hover:text-glow disabled:opacity-40"
          >
            Previous
          </button>
          <span>{String((index % slides.length) + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}</span>
          <button
            type="button"
            onClick={next}
            disabled={loading || slides.length <= 1}
            className="rounded-full border border-glow/20 px-4 py-2 text-glow/70 transition hover:text-glow disabled:opacity-40"
          >
            Next
          </button>
        </div>
        <div className="relative min-h-[220px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={active?.id ?? `skeleton-${index % slides.length}`}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={transition}
              className="space-y-4 rounded-3xl border border-glow/15 bg-night/70 p-8 text-glow/80"
            >
              {active ? (
                <>
                  <p className="text-base text-glow/90">“{active.message}”</p>
                  <div className="text-sm font-semibold text-glow">
                    <p>{active.name}</p>
                    <p className="text-glow/60">{active.role}</p>
                  </div>
                  {active.spotlight && (
                    <span className="inline-flex items-center rounded-full border border-ember/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-ember">
                      Spotlight
                    </span>
                  )}
                </>
              ) : (
                <div className="space-y-4">
                  <div className="h-6 w-3/4 rounded-full bg-glow/20" />
                  <div className="h-20 rounded-2xl bg-glow/15" />
                  <div className="h-5 w-1/3 rounded-full bg-glow/20" />
                  <div className="h-5 w-24 rounded-full bg-ember/20" />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsCarousel
