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
    <footer className="mt-16 bg-gray-50 pt-24 pb-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <img src={logo} alt="LaslesVPN" className="h-6 w-auto" />
            <p className="mt-4 max-w-xs text-sm text-brand-gray">
              LaslesVPN is a private virtual network that has unique features
              and has high security.
            </p>
            <div className="mt-5 flex gap-3">
              {SOCIALS.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand-navy shadow-sm hover:text-brand-red"
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {LINK_COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-brand-navy">{column.title}</h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-brand-gray hover:text-brand-red">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-16 text-center text-xs text-brand-gray">
          &copy;2026 LaslesVPN
        </p>
      </div>
    </footer>
  )
}

export default Footer
