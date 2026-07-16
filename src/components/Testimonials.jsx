import { useState } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
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

function Stars({ rating }) {
  const fullStars = Math.floor(rating)
  const hasHalf = rating % 1 !== 0

  return (
    <div className="flex items-center gap-0.5 text-amber-400">
      {Array.from({ length: fullStars }).map((_, i) => (
        <FaStar key={i} />
      ))}
      {hasHalf && <FaStarHalfAlt />}
      <span className="ml-1 text-xs text-brand-gray">{rating}</span>
    </div>
  )
}

function Testimonials() {
  const pageCount = Math.ceil(TESTIMONIALS.length / PER_PAGE)
  const [page, setPage] = useState(0)

  const visible = TESTIMONIALS.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE)
  const goTo = (index) => setPage((index + pageCount) % pageCount)

  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-6 py-24 text-center">
      <h2 className="text-3xl font-semibold text-brand-navy md:text-4xl">
        Trusted by Thousands of Happy Customer
      </h2>
      <p className="mx-auto mt-4 max-w-lg text-brand-gray">
        These are the stories of our customers who have joined us with great
        pleasure when using this crazy feature.
      </p>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {visible.map((testimonial, i) => {
          const globalIndex = page * PER_PAGE + i
          return (
            <div
              key={testimonial.name}
              className={`rounded-2xl border bg-white p-6 text-left ${
                i === 0 ? 'border-brand-red shadow-lg' : 'border-gray-100 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${AVATAR_COLORS[globalIndex % AVATAR_COLORS.length]}`}
                >
                  {initialsOf(testimonial.name)}
                </span>
                <div>
                  <p className="text-sm font-medium text-brand-navy">{testimonial.name}</p>
                  <p className="text-xs text-brand-gray">{testimonial.location}</p>
                </div>
              </div>
              <div className="mt-3">
                <Stars rating={testimonial.rating} />
              </div>
              <p className="mt-3 text-sm text-brand-gray">&ldquo;{testimonial.quote}&rdquo;</p>
            </div>
          )
        })}
      </div>

      <div className="mt-10 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={() => goTo(page - 1)}
          aria-label="Previous testimonials"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-brand-navy hover:bg-gray-50"
        >
          <HiChevronLeft />
        </button>

        <div className="flex items-center gap-2">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial page ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === page ? 'w-6 bg-brand-red' : 'w-2 bg-gray-200'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(page + 1)}
          aria-label="Next testimonials"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-red text-white hover:opacity-90"
        >
          <HiChevronRight />
        </button>
      </div>
    </section>
  )
}

export default Testimonials
