import { HiUser, HiLocationMarker } from 'react-icons/hi'
import { BiSolidServer } from 'react-icons/bi'

const STATS = [
  { icon: HiUser, value: '90+', label: 'Users' },
  { icon: HiLocationMarker, value: '30+', label: 'Locations' },
  { icon: BiSolidServer, value: '50+', label: 'Servers' },
]

function StatsBar() {
  return (
    <section className="mx-auto -mt-16 max-w-5xl px-6">
      <div className="grid grid-cols-1 divide-y divide-gray-100 rounded-2xl bg-white shadow-xl sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {STATS.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex items-center justify-center gap-4 px-8 py-8">
            <span className="flex h-[55px] w-[55px] shrink-0 items-center justify-center rounded-full bg-[#ffecec] text-brand-red">
              <Icon className="text-2xl" />
            </span>
            <div className="text-left">
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
