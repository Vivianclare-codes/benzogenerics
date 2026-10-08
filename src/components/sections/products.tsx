import { ArrowRight } from "lucide-react";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { Reveal } from "@/components/reveal";
import { WA_MESSAGES, waLink } from "@/lib/site";

const CATEGORIES = [
  {
    title: "Medicines",
    text: "Prescription and over-the-counter medicines for individuals and families.",
    photo: "PHOTO: medicine shelves",
  },
  {
    title: "Medical Supplies",
    text: "Syringes, gloves, IV fluids, cotton wool and other healthcare supplies.",
    photo: "PHOTO: syringes, gloves, IV supplies",
  },
  {
    title: "Hospital Consumables",
    text: "Essential consumables used by healthcare facilities and professionals.",
    photo: "PHOTO: hospital consumables",
  },
  {
    title: "Wholesale Stock",
    text: "Stock in quantity for businesses and organisations.",
    photo: "PHOTO: bulk stock",
  },
];

export function Products() {
  return (
    <section id="products" className="scroll-mt-20 bg-[#F5F5F2] py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#2F6FAE]">
            What you'll find
          </p>
          <h2 className="mt-3 max-w-xl font-heading text-[28px] font-semibold leading-tight tracking-tight text-[#10243E] sm:text-4xl">
            What you'll find at Benzo
          </h2>
        </Reveal>

        <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-6">
          {CATEGORIES.map((c, i) => (
            <li key={c.title}>
              <Reveal delay={i * 80}>
                <div className="group">
                  {/* overflow-hidden wrapper: real photos will scale inside it later */}
                  <div className="overflow-hidden rounded-xl">
                    <PhotoPlaceholder
                      label={c.photo}
                      className="aspect-[4/3] w-full rounded-none transition-transform duration-300 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-[#10243E]">
                    {c.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#4A5B70]">
                    {c.text}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal delay={200}>
          <div className="mt-10 flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3 lg:mt-14">
            <p className="text-base text-[#10243E]">Can't find what you need?</p>
            <a
              href={waLink(WA_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[44px] items-center gap-2 text-base font-medium text-[#2F6FAE] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F6FAE]"
            >
              Ask Benzo on WhatsApp
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}