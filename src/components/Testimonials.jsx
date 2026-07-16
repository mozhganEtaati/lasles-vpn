import { useState } from 'react'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'
import { FaStar } from 'react-icons/fa'
import { TESTIMONIALS } from '../data/testimonials'

const PER_PAGE = 3

const AVATAR_COLORS = [
  'bg-rose-100 text-rose-600',
  'bg-amber-100 text-amber-600',
  'bg-emerald-100 text-emerald-600',
  'bg-sky-100 text-sky-600',
  'bg-violet-100 text-violet-600',
  'bg-teal-100 text-teal-600',
]

function initialsOf(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function Rating({ rating }) {
  return (
    <div className="flex shrink-0 items-center gap-1.5 text-sm">
      <span className="font-medium text-brand-navy">{rating}</span>
      <FaStar className="text-amber-400" />
    </div>
  )
}

function Testimonials() {
  // Slide a window of PER_PAGE cards one card at a time, so the dot count
  // matches the Figma design (one indicator per slide position).
  const pageCount = Math.max(1, TESTIMONIALS.length - PER_PAGE + 1)
  const [page, setPage] = useState(0)

  const visible = TESTIMONIALS.slice(page, page + PER_PAGE)
  const goTo = (index) => setPage((index + pageCount) % pageCount)

  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-6 pt-6 pb-24 text-center">
      <h2 className="mx-auto max-w-md text-3xl font-semibold text-brand-navy md:text-4xl">
        Trusted by Thousands of Happy Customer
      </h2>
      <p className="mx-auto mt-4 max-w-lg text-brand-gray">
        These are the stories of our customers who have joined us with great
        pleasure when using this crazy feature.
      </p>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {visible.map((testimonial, i) => {
          const globalIndex = page + i
          return (
            <div
              key={testimonial.name}
              className={`rounded-2xl border bg-white p-6 text-left transition-colors duration-300 ${
                i === 0 ? 'border-brand-red shadow-lg' : 'border-gray-100 shadow-sm'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  {testimonial.avatar ? (
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="h-12 w-12 shrink-0 rounded-full object-cover"
                    />
                  ) : (
                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${AVATAR_COLORS[globalIndex % AVATAR_COLORS.length]}`}
                    >
                      {initialsOf(testimonial.name)}
                    </span>
                  )}
                  <div>
                    <p className="text-sm font-medium text-brand-navy">{testimonial.name}</p>
                    <p className="text-xs text-brand-gray">{testimonial.location}</p>
                  </div>
                </div>
                <Rating rating={testimonial.rating} />
              </div>
              <p className="mt-5 text-sm text-brand-gray">&ldquo;{testimonial.quote}&rdquo;</p>
            </div>
          )
        })}
      </div>

      <div className="mt-10 flex items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial page ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                i === page ? 'w-7 bg-brand-red' : 'w-2.5 bg-gray-300'
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-5">
          <button
            type="button"
            onClick={() => goTo(page - 1)}
            aria-label="Previous testimonials"
            className="flex h-[60px] w-[60px] items-center justify-center rounded-full border-[1.5px] border-brand-red text-[26px] text-brand-red hover:bg-brand-red hover:text-white"
          >
            <HiArrowLeft />
          </button>

          <button
            type="button"
            onClick={() => goTo(page + 1)}
            aria-label="Next testimonials"
            className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-brand-red text-[26px] text-white shadow-[0_18px_40px_4px_rgba(245,56,56,0.4)] hover:opacity-90"
          >
            <HiArrowRight />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
