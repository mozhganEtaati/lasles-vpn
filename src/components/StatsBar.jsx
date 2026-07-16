import { HiUser, HiLocationMarker } from 'react-icons/hi'
import { BiSolidServer } from 'react-icons/bi'

const STATS = [
  { icon: HiUser, value: '90+', label: 'Users' },
  { icon: HiLocationMarker, value: '30+', label: 'Locations' },
  { icon: BiSolidServer, value: '50+', label: 'Servers' },
]

function StatsBar() {
  return (
    <section className="mx-auto -mt-12 max-w-5xl px-6">
      <div className="grid grid-cols-1 rounded-2xl bg-white px-8 py-6 shadow-[0_12px_60px_rgba(13,16,37,0.08)] sm:grid-cols-3">
        {STATS.map(({ icon: Icon, value, label }, i) => (
          <div
            key={label}
            className={`relative flex items-center justify-center gap-5 py-4 ${
              i > 0
                ? 'sm:before:absolute sm:before:left-0 sm:before:top-1/2 sm:before:h-14 sm:before:w-px sm:before:-translate-y-1/2 sm:before:bg-gray-200 sm:before:content-[""]'
                : ''
            }`}
          >
            <span className="flex h-[55px] w-[55px] shrink-0 items-center justify-center rounded-full bg-[#ffecec] text-brand-red">
              <Icon className="text-2xl" />
            </span>
            <div className="w-24 text-left sm:w-auto">
              <p className="text-xl font-semibold text-brand-navy">{value}</p>
              <p className="text-sm text-brand-gray">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatsBar
