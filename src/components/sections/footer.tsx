import { SITE, WA_MESSAGES, waLink } from "@/lib/site";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Wholesale", href: "#wholesale" },
  { label: "Contact", href: "#contact" },
];

const linkClass =
  "inline-flex min-h-[44px] items-center text-[15px] text-[#C9D6E4] transition-colors duration-150 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:min-h-0";

export function Footer() {
  return (
    <footer className="bg-[#10243E] text-[#C9D6E4]">
      <div className="mx-auto max-w-6xl px-5 pb-8 pt-12 sm:px-8 lg:pt-16">
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-16">
          {/* Logo */}
          <div>
            <a href="#home" aria-label="Benzo Generics Pharmacy, back to top">
              <span className="block font-heading text-2xl font-semibold tracking-[0.06em] text-white">
                BENZO
              </span>
              <span className="block text-[10px] uppercase tracking-[0.18em]">
                Generics Pharmacy
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Medicines and healthcare supplies for individuals, families and
              healthcare businesses in Port Harcourt.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#9CC2E8]">
              Navigate
            </p>
            <ul className="mt-3 flex flex-col lg:gap-2">
              {LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className={linkClass}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#9CC2E8]">
              Contact
            </p>
            <address className="mt-3 text-[15px] not-italic leading-relaxed">
              {SITE.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <ul className="mt-2 flex flex-col lg:gap-2">
              <li>
                <a href={`tel:${SITE.phoneTel}`} className={linkClass}>
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={waLink(WA_MESSAGES.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Message us on WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Get directions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}