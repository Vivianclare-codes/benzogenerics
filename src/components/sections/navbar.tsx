"use client"

import { useEffect, useState } from "react"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { WA_MESSAGES, waLink } from "@/lib/site"

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Services", "#services"],
  ["Wholesale", "#wholesale"],
  ["Contact", "#contact"],
] as const

function Logo() {
  return (
    <a href="#home" className="flex min-h-11 flex-col justify-center leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6FAE] focus-visible:ring-offset-2">
      <span className="font-heading text-xl font-semibold tracking-[0.18em] text-[#2F6FAE]">BENZO</span>
      <span className="mt-1 text-[8px] font-medium uppercase tracking-[0.24em] text-[#10243E]">Generics Pharmacy</span>
    </a>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-40 border-b bg-[#F5F5F2]/90 backdrop-blur-sm transition-colors duration-200 ${scrolled ? "border-[#10243E]/15" : "border-transparent"}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-[72px] lg:px-10">
        <Logo />

        <nav aria-label="Primary navigation" className="hidden items-center gap-8 lg:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-medium text-[#10243E] transition-colors duration-150 hover:text-[#2F6FAE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6FAE] focus-visible:ring-offset-4">
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button render={<a href={waLink(WA_MESSAGES.medicine)} target="_blank" rel="noreferrer" />} className="h-11 rounded-lg bg-[#2F6FAE] px-5 text-white hover:bg-[#245d96]">
            Request a Medicine
          </Button>
        </div>

        <Sheet>
          <SheetTrigger render={<Button variant="ghost" size="icon-lg" aria-label="Open navigation menu" className="text-[#10243E] hover:bg-[#E8EDF0] lg:hidden" />}>
            <Menu />
          </SheetTrigger>
          <SheetContent side="right" className="w-[min(85vw,380px)] bg-[#F5F5F2] p-0 text-[#10243E]">
            <SheetHeader className="border-b border-[#10243E]/10 px-6 py-5">
              <SheetTitle className="text-left text-xs font-semibold uppercase tracking-[0.2em] text-[#2F6FAE]">Menu</SheetTitle>
            </SheetHeader>
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1 px-6 py-8">
              {links.map(([label, href]) => (
                <SheetClose key={href} render={<a href={href} />} className="flex min-h-14 items-center border-b border-[#10243E]/10 text-xl font-medium text-[#10243E] transition-colors hover:text-[#2F6FAE]">
                  {label}
                </SheetClose>
              ))}
            </nav>
            <SheetFooter className="px-6 pb-6">
              <SheetClose render={<a href={waLink(WA_MESSAGES.medicine)} target="_blank" rel="noreferrer" />} className="flex h-12 w-full items-center justify-center rounded-lg bg-[#2F6FAE] px-5 text-sm font-medium text-white transition-colors duration-150 hover:bg-[#245d96]">
                Request a Medicine
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
