import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Credibility } from "@/components/sections/credibility";
import { Help } from "@/components/sections/help";
import { About } from "@/components/sections/about";
import { Products } from "@/components/sections/products";
import { Wholesale } from "@/components/sections/wholesale";
import { Visit } from "@/components/sections/visit";
import { Footer } from "@/components/sections/footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
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
  );
}

export const metadata = {
  title: 'Benzo Generics Pharmacy | Port Harcourt',
  description:
    'Benzo Generics Pharmacy — trusted retail and wholesale pharmacy services in Port Harcourt, Nigeria.',
}