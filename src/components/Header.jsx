import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import logo from '../assets/Logo.png'

const NAV_LINKS = ['About', 'Features', 'Pricing', 'Testimonials', 'Help']

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
      <img src={logo} alt="LaslesVPN" className="h-6 w-auto" />

      <nav className="hidden items-center gap-8 md:flex">
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-sm text-brand-gray hover:text-brand-navy"
          >
            {link}
          </a>
        ))}
      </nav>

      <div className="hidden items-center gap-6 md:flex">
        <a href="#signin" className="text-sm font-medium text-brand-navy">
          Sign In
        </a>
        <a
          href="#signup"
          className="rounded-full border border-brand-red px-5 py-2 text-sm font-medium text-brand-red hover:bg-brand-red hover:text-white"
        >
          Sign Up
        </a>
      </div>

      <button
        type="button"
        className="text-2xl text-brand-navy md:hidden"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <HiX /> : <HiMenu />}
      </button>

      {menuOpen && (
        <div className="absolute top-16 right-6 left-6 z-20 flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-lg md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-brand-gray"
            >
              {link}
            </a>
          ))}
          <hr className="border-gray-100" />
          <a href="#signin" className="text-sm font-medium text-brand-navy">
            Sign In
          </a>
          <a
            href="#signup"
            className="rounded-full border border-brand-red px-5 py-2 text-center text-sm font-medium text-brand-red"
          >
            Sign Up
          </a>
        </div>
      )}
    </header>
  )
}

export default Header
