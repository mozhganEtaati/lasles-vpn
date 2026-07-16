import mapImage from '../assets/Huge Global.png'

function GlobalNetwork() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 text-center">
      <h2 className="mx-auto max-w-sm text-3xl font-semibold text-brand-navy md:text-4xl">
        Huge Global Network of Fast VPN
      </h2>
      <p className="mx-auto mt-4 max-w-lg text-brand-gray">
        See<b> LaslesVPN</b> everywhere to make it easier for you when you move
        locations.
      </p>

      <img src={mapImage} alt="Global server network map" className="mx-auto mt-12 w-full max-w-4xl" />
    </section>
  )
}

export default GlobalNetwork
