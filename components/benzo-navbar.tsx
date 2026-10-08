'use client'

import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Wholesale', href: '#wholesale' },
  { label: 'Contact', href: '#contact' },
]

const whatsappUrl =
  'https://wa.me/2348038972269?text=Hi%20Benzo%20Generics%2C%20I%27d%20like%20to%20ask%20about%20a%20medicine.'

export function BenzoNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12"
      >
        {/* Brand */}
        <a
          href="#home"
          onClick={closeMenu}
          className="group flex shrink-0 items-center text-slate-950"
          aria-label="Benzo Generics Pharmacy home"
        >
          <span className="flex flex-col leading-none">
            <span className="text-[15px] font-semibold tracking-[-0.025em] sm:text-base">
              Benzo Generics
            </span>

            <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.22em] text-[#0b4ea2]">
              Pharmacy
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-9 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative py-2 text-[13px] font-medium text-slate-600 transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#0b4ea2] after:transition-all after:duration-300 hover:text-[#0b4ea2] hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-7 lg:flex">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-11 items-center gap-3 bg-[#0b4ea2] px-5 text-[13px] font-semibold text-white transition-colors hover:bg-[#083d80] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b4ea2] focus-visible:ring-offset-2"
          >
            Request a Medicine

            <ArrowUpRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={
            isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
          }
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center border border-slate-200 text-slate-900 transition-colors hover:border-[#0b4ea2] hover:text-[#0b4ea2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b4ea2] focus-visible:ring-offset-2 lg:hidden"
        >
          {isMenuOpen ? (
            <X aria-hidden="true" className="h-5 w-5" />
          ) : (
            <Menu aria-hidden="true" className="h-5 w-5" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-slate-100 bg-white transition-[max-height,opacity] duration-300 lg:hidden ${
          isMenuOpen
            ? 'max-h-[420px] opacity-100'
            : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="mx-auto max-w-[1440px] px-5 pb-6 pt-2 sm:px-8">
          <div className="flex flex-col">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                tabIndex={isMenuOpen ? 0 : -1}
                className="border-b border-slate-100 py-4 text-sm font-medium text-slate-700 transition-colors hover:text-[#0b4ea2]"
              >
                {item.label}
              </a>
            ))}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              tabIndex={isMenuOpen ? 0 : -1}
              className="mt-5 inline-flex h-12 items-center justify-between bg-[#0b4ea2] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#083d80] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b4ea2] focus-visible:ring-offset-2"
            >
              Request a Medicine

              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default BenzoNavbar