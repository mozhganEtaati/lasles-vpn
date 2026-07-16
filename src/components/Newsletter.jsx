function Newsletter() {
  return (
    <section className="relative z-10 mx-auto -mb-24 max-w-6xl px-6">
      <div className="flex flex-col items-center justify-between gap-6 rounded-[10px] bg-white px-14 py-14 shadow-[0_20px_60px_rgba(13,16,45,0.1)] md:flex-row">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold text-brand-navy md:text-3xl">
            Subscribe Now for
            <br />
            Get Special Features!
          </h2>
          <p className="mt-2 text-brand-gray">
            Let&apos;s subscribe with us and find the fun.
          </p>
        </div>

        <button
          type="button"
          className="shrink-0 rounded-[10px] bg-brand-red px-12 py-4 text-base font-bold text-white shadow-[0_10px_28px_rgba(245,56,56,0.35)] hover:opacity-90"
        >
          Subscribe Now
        </button>
      </div>
    </section>
  )
}

export default Newsletter
