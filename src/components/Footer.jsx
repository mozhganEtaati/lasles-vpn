import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import logo from '../assets/Logo.png'

const LINK_COLUMNS = [
  {
    title: 'Product',
    links: ['Download', 'Pricing', 'Locations', 'Server', 'Countries', 'Blog'],
  },
  {
    title: 'Engage',
    links: ['LaslesVPN?', 'FAQ', 'Tutorials', 'About Us', 'Privacy Policy', 'Terms of Service'],
  },
  {
    title: 'Earn Money',
    links: ['Affiliate', 'Become Partner'],
  },
]

const SOCIALS = [
  { Icon: FaFacebookF, label: 'Facebook' },
  { Icon: FaTwitter, label: 'Twitter' },
  { Icon: FaInstagram, label: 'Instagram' },
]

function Footer() {
  return (
    <footer className="bg-gray-50 pt-44 pb-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <img src={logo} alt="LaslesVPN" className="h-8 w-auto" />
            <p className="mt-4 max-w-xs text-sm text-brand-gray">
              <b>LaslesVPN </b>is a private virtual network that has unique features
              and has high security.
            </p>
            <div className="mt-5 flex gap-3">
              {SOCIALS.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand-red shadow-[0_8px_20px_rgba(13,16,45,0.08)] hover:opacity-80"
                >
                  <Icon className="text-base" />
                </a>
              ))}
            </div>

            <p className="mt-8 text-sm text-gray-400">&copy;2020Lasles<b>VPN</b></p>
          </div>

          {LINK_COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-brand-navy">{column.title}</h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-500 hover:text-brand-red">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
