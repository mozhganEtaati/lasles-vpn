function Newsletter() {
  return (
    <section className="mx-auto max-w-6xl px-6">
      <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-white p-10 shadow-xl md:flex-row">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold text-brand-navy md:text-3xl">
            Subscribe Now for Get Special Features!
          </h2>
          <p className="mt-2 text-brand-gray">
            Let&apos;s subscribe with us and find the fun.
          </p>
        </div>

        <button
          type="button"
          className="shrink-0 rounded-full bg-brand-red px-8 py-3.5 text-sm font-medium text-white shadow-lg shadow-brand-red/30 hover:opacity-90"
        >
          Subscribe Now
        </button>
      </div>
    </section>
  )
}

export default Newsletter
