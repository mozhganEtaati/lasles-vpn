import { HiCheck } from 'react-icons/hi'
import { PRICING_PLANS } from '../data/pricing'

function Pricing() {
  return (
    <section id="pricing" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-semibold text-brand-navy md:text-4xl">
          Choose Your Plan
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-brand-gray">
          Let&apos;s choose the package that is best for you and explore it
          happily and cheerfully.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-2xl border bg-white p-8 text-left ${
                plan.featured
                  ? 'border-brand-red shadow-xl'
                  : 'border-gray-100 shadow-sm'
              }`}
            >
              <img src={plan.icon} alt="" className="mx-auto h-20 w-20" />
              <h3 className="mt-4 text-center text-lg font-medium text-brand-navy">
                {plan.name}
              </h3>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-brand-gray">
                    <HiCheck className="shrink-0 text-emerald-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-center text-2xl font-semibold text-brand-navy">
                {plan.price}
                {plan.period && (
                  <span className="text-sm font-normal text-brand-gray"> {plan.period}</span>
                )}
              </p>

              <button
                type="button"
                className={`mx-auto mt-6 w-40 rounded-full py-3 text-sm font-medium ${
                  plan.featured
                    ? 'bg-brand-red text-white shadow-lg shadow-brand-red/30 hover:opacity-90'
                    : 'border border-brand-red text-brand-red hover:bg-brand-red hover:text-white'
                }`}
              >
                Select
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
