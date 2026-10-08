import BenzoNavbar from '../../components/benzo-navbar'

export default function Home() {
  return (
    <main>
      <section id="home">
        <BenzoNavbar />

        <div className="flex min-h-[70vh] items-center justify-center px-6">
          <div className="text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#0b4ea2]">
              Benzo Generics Pharmacy
            </p>

            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Your pharmacy website is coming together.
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600">
              This is a temporary placeholder while we build the website
              section by section.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}