import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-[#F5F5F2] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-8 lg:px-8">
        <div className="grid overflow-hidden rounded-[28px] border border-[#D7DADF] bg-white shadow-[0_18px_45px_rgba(16,36,62,0.06)] md:grid-cols-[1fr_1.05fr] md:items-center">
          <Reveal>
            <div className="relative h-full min-h-[280px] overflow-hidden bg-[#E8EDF0] md:min-h-[420px]">
              <PhotoPlaceholder
                label="PHOTO: my uncle / the pharmacist / the team working inside the pharmacy"
                className="h-full w-full rounded-none"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#10243E]/55 to-transparent" />
              <div className="absolute bottom-4 left-4 rounded-full border border-white/30 bg-[#10243E]/75 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.12em] text-white backdrop-blur-sm">
                Port Harcourt
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-14">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2F6FAE]">
                About Benzo
              </p>
              <h2 className="mt-3 max-w-xl font-heading text-[28px] font-semibold leading-[1.2] tracking-tight text-[#10243E] sm:text-4xl">
                A pharmacy built around reliable access to medicines and healthcare
                supplies.
              </h2>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-[#4A5B70]">
                <p>[Story: how Benzo started and why.]</p>
                <p>[Story: how it grew and what it is known for.]</p>
              </div>

              <div className="mt-7 border-t border-[#DCE8F1] pt-5">
                <p className="font-heading text-lg font-semibold text-[#10243E]">
                  15+ years serving Port Harcourt.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}