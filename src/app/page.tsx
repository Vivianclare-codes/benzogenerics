
import { About } from '@/components/sections/about'
import { Credibility } from '@/components/sections/credibility'
import { Footer } from '@/components/sections/footer'
import { Help } from '@/components/sections/help'
import { Hero } from '@/components/sections/hero'
import { Navbar } from '@/components/sections/navbar'
import { Products } from '@/components/sections/products'
import { Visit } from '@/components/sections/visit'
import { Wholesale } from '@/components/sections/wholesale'



export default function Page() {
  return (
    <>
      <Navbar />
      <main className="bg-[#f5f5f5] text-slate-950">
        <Hero />
        <Credibility />
        <Help />
        <About />
        <Products />
        <Wholesale />
        <Visit />
      </main>
      <Footer />
    </>
  )
}

export const metadata = {
  title: 'Benzo Generics Pharmacy | Port Harcourt',
  description:
    'Benzo Generics Pharmacy — trusted retail and wholesale pharmacy services in Port Harcourt, Nigeria.',
}