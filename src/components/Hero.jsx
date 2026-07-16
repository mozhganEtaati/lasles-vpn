import heroIllustration from '../assets/Illustration 1.png'

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-10 pb-24 md:pt-16">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <h1 className="text-4xl leading-tight font-bold text-brand-navy md:text-5xl">
            Want anything to be easy with <b>LaslesVPN</b>.
          </h1>
          <p className="mt-6 max-w-md text-brand-gray">
            Provide a network for all your needs with ease and fun using 
            <b> LaslesVPN</b> discover interesting features from us.
          </p>
          <a
            href="#signup"
            className="mt-8 inline-block rounded-[10px] bg-brand-red px-18 py-4 text-base font-bold text-white shadow-[0_10px_28px_rgba(245,56,56,0.35)] hover:opacity-90"
          >
            Get Started
          </a>
        </div>

        <div className="mx-auto w-full max-w-sm md:max-w-md">
          <img src={heroIllustration} alt="LaslesVPN" className="w-full" />
        </div>
      </div>
    </section>
  )
}

export default Hero
