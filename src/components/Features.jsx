import { HiCheckCircle } from 'react-icons/hi'
import featuresIllustration from '../assets/Illustration 2.png'

const FEATURES = [
  'Powerful online protection.',
  'Internet without borders.',
  'Supercharged VPN',
  'No specific time limits.',
]

function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <img
          src={featuresIllustration}
          alt="LaslesVPN features"
          className="mx-auto w-full max-w-sm md:max-w-md"
        />

        <div>
          <h2 className="text-3xl font-semibold text-brand-navy md:text-4xl">
            We Provide Many
            <br />
            Features You Can Use
          </h2>
          <p className="mt-4 max-w-md text-brand-gray">
            You can explore the features that we provide with fun and have
            their own functions each feature.
          </p>

          <ul className="mt-6 space-y-3">
            {FEATURES.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <HiCheckCircle className="shrink-0 text-lg text-emerald-500" />
                <span className="text-sm text-brand-navy">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Features
