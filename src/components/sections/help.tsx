import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { WA_MESSAGES, waLink } from "@/lib/site";

const PATHS = [
  {
    title: "Need a medicine?",
    text: "Ask about availability and quantity.",
    cta: "Request a Medicine",
    message: WA_MESSAGES.medicine,
  },
  {
    title: "Need medical supplies?",
    text: "Tell us what supplies you need.",
    cta: "Ask About Supplies",
    message: WA_MESSAGES.supplies,
  },
  {
    title: "Buying for a business?",
    text: "Talk to us about wholesale quantities.",
    cta: "Wholesale Enquiry",
    message: WA_MESSAGES.wholesale,
  },
  {
    title: "Have a prescription?",
    text: "Send it to our pharmacist for review.",
    cta: "Send Prescription",
    message: WA_MESSAGES.prescription,
  },
];

export function Help() {
  return (
    <section id="services" className="scroll-mt-20 bg-[#F5F5F2] py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#2F6FAE]">
            How can we help?
          </p>
          <h2 className="mt-3 max-w-xl font-heading text-[28px] font-semibold leading-tight tracking-tight text-[#10243E] sm:text-4xl">
            Tell us what you need.
          </h2>
        </Reveal>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-5">
          {PATHS.map((p, i) => (
            <li key={p.title}>
              <Reveal delay={i * 80} className="h-full">
                <a
                  href={waLink(p.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full min-h-[44px] flex-col rounded-xl border border-[#E8EDF0] bg-white p-6 transition-colors duration-200 hover:border-[#2F6FAE] focus-visible:border-[#2F6FAE] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F6FAE] active:bg-[#F5F9FC]"
                >
                  <span className="text-sm font-medium text-[#2F6FAE]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-heading text-lg font-semibold text-[#10243E]">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#4A5B70]">
                    {p.text}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 pt-1 text-sm font-medium text-[#2F6FAE] lg:mt-auto">
                    {p.cta}
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1"
                      aria-hidden
                    />
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal delay={200}>
          <p className="mt-8 text-sm text-[#4A5B70]">
            Every option opens WhatsApp with your message ready to send.
          </p>
        </Reveal>
      </div>
    </section>
  );
}