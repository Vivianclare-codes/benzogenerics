"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { WA_MESSAGES, waLink } from "@/lib/site";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Wholesale", href: "#wholesale" },
  { label: "Contact", href: "#contact" },
];

function Logo() {
  return (
    <a
      href="#home"
      aria-label="Benzo Generics Pharmacy, back to top"
      className="block leading-none"
    >
      <span className="block font-heading text-[1.7rem] font-black tracking-[0.08em] text-[#10243E] drop-shadow-[0_1px_0_rgba(47,111,174,0.15)]">
        BENZO
      </span>
      <span className="mt-1.5 block text-[9px] font-semibold uppercase tracking-[0.2em] text-[#2F6FAE]">
        Generics Pharmacy
      </span>
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Show the bottom border only after the page has scrolled a little
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-[#F5F5F2]/80 backdrop-blur-xl shadow-[0_6px_18px_rgba(16,36,62,0.04)] transition-all duration-200 ${
        scrolled ? "border-[#D7E4EF] shadow-[0_6px_20px_rgba(16,36,62,0.08)]" : "border-transparent shadow-none"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Logo />

        {/* Desktop links */}
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-sm font-medium tracking-[0.02em] text-[#10243E] transition-colors duration-150 hover:text-[#2F6FAE] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2F6FAE]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          {/* Desktop CTA */}
          <a
            href={waLink(WA_MESSAGES.medicine)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-[44px] items-center rounded-lg bg-[#2F6FAE] px-5 text-sm font-semibold text-white shadow-[0_10px_20px_rgba(47,111,174,0.18)] transition-all duration-150 hover:bg-[#265c92] hover:shadow-[0_12px_22px_rgba(47,111,174,0.22)] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F6FAE] lg:inline-flex"
          >
            Request a Medicine
          </a>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>
              <button
                type="button"
                aria-label="Open menu"
                className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#D7E4EF] bg-white/80 text-[#10243E] shadow-[0_8px_18px_rgba(16,36,62,0.06)] transition-all duration-150 hover:border-[#B9D4E8] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2F6FAE] lg:hidden"
              >
                <Menu className="h-5 w-5" aria-hidden />
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="flex w-[85%] max-w-sm flex-col bg-[#F5F5F2] p-0">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <SheetDescription className="sr-only">
                Site navigation
              </SheetDescription>

              <div className="px-6 pb-4 pt-6">
                <Logo />
              </div>

              <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-6">
                <ul className="divide-y divide-[#DCE8F1] border-y border-[#DCE8F1]">
                  {LINKS.map((l) => (
                    <li key={l.label}>
                      <SheetClose>
                        <a
                          href={l.href}
                          className="flex min-h-[56px] items-center font-heading text-xl font-medium text-[#10243E] transition-colors duration-150 active:text-[#2F6FAE]"
                        >
                          {l.label}
                        </a>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="p-6">
                <SheetClose>
                  <a
                    href={waLink(WA_MESSAGES.medicine)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-[52px] w-full items-center justify-center rounded-lg bg-[#2F6FAE] text-[15px] font-medium text-white transition-colors duration-150 active:scale-[0.98] active:bg-[#265c92]"
                  >
                    Request a Medicine
                  </a>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}