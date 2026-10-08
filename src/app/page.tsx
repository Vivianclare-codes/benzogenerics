
import Image from 'next/image'
import BenzoNavbar from '../../components/benzo-navbar'

const whatsappUrl =
  'https://wa.me/2348038972269?text=Hi%20Benzo%20Generics%2C%20I%27d%20like%20to%20ask%20about%20a%20medicine.'

export default function Page() {
  return (
    <>
      <BenzoNavbar />

      <main
        id="home"
        aria-label="Benzo Generics Pharmacy"
        className="bg-[#f5f5f5] text-[#0b1b3d]"
      >
        <section
          aria-labelledby="hero-heading"
          className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(460px,1.1fr)] lg:gap-16 lg:px-12 lg:py-20"
        >
          {/* HERO CONTENT */}
          <div className="flex flex-col justify-center lg:py-8">
            <p className="mb-5 text-xs font-semibold tracking-[0.12em] text-[#1d63b8]">
              BENZO GENERICS PHARMACY
            </p>

            <h1
              id="hero-heading"
              className="max-w-[620px] text-[2.7rem] font-semibold leading-[1.08] tracking-[-0.035em] text-[#0b1b3d] sm:text-5xl lg:text-[clamp(3.2rem,4.5vw,4.6rem)]"
            >
              Your local pharmacy for medicines and healthcare supplies.
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-[#596579] sm:text-lg sm:leading-8">
              Serving individuals, families and healthcare businesses in Port Harcourt for over 15 years, with medicines, medical supplies and wholesale healthcare products.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center bg-[#1d63b8] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#315a82] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1d63b8]"
              >
                Request a Medicine
              </a>

              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center border border-[#c8d0d9] px-6 text-sm font-semibold text-[#315a82] transition-colors hover:border-[#1d63b8] hover:bg-[#ffffff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1d63b8]"
              >
                Visit Our Pharmacy
              </a>
            </div>
          </div>

          {/* PHARMACY IMAGE + LOCATION */}
          <div className="flex flex-col">
            <div className="relative aspect-[4/4.4] w-full overflow-hidden bg-[#eaebed] sm:aspect-[4/4.2] lg:aspect-[4/4.35]">
              <Image
                src="/images/benzo-storefront.jpg"
                alt="Benzo Generics Pharmacy storefront in Rumuodara, Port Harcourt"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 border-b border-[#d7dadf] py-5 sm:grid-cols-2 sm:gap-8">
              <address className="not-italic">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#1d63b8]">
                  Find us
                </p>

                <p className="mt-2 text-sm leading-6 text-[#596579]">
                  120 Okporo Road,
                  <br />
                  Rumuodara, Port Harcourt
                </p>
              </address>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#1d63b8]">
                  Talk to us
                </p>

                <a
                  href="tel:+2348038972269"
                  className="mt-2 inline-block text-sm leading-6 text-[#596579] transition-colors hover:text-[#1d63b8]"
                >
                  +234 803 897 2269
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Temporary anchor targets so navbar links work while we build */}
        <div id="about" className="hidden" />
        <div id="services" className="hidden" />
        <div id="wholesale" className="hidden" />
        <div id="contact" className="hidden" />
      </main>
    </>
  )
}

export const metadata = {
  title: 'Benzo Generics Pharmacy | Port Harcourt',
  description:
    'Benzo Generics Pharmacy — trusted retail and wholesale pharmacy services in Port Harcourt, Nigeria.',
}