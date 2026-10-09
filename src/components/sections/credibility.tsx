import { MapPin, Phone, ShoppingBag, Users } from "lucide-react";
import { Reveal } from "@/components/reveal";

const ITEMS = [
  { title: "20+ years", caption: "Serving Port Harcourt", icon: Users },
  {
    title: "Retail + wholesale",
    caption: "For individuals and healthcare businesses",
    icon: ShoppingBag,
  },
  { title: "Rumuodara", caption: "120 Okporo Road", icon: MapPin },
  { title: "Trusted care", caption: "Friendly local support", icon: Phone },
];

export function Credibility() {
  return (
    <section aria-label="About Benzo at a glance" className="relative overflow-hidden bg-[#E8EDF0] py-6 sm:py-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2F6FAE]/30 to-transparent" />
      <Reveal>
        <div className="mx-auto max-w-6xl px-4 sm:px-8 lg:px-8">
          <div className="mb-4 flex items-center justify-between lg:hidden">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.14em] text-[#2F6FAE]">
              Why people choose Benzo
            </p>
            <span className="h-2 w-2 rounded-full bg-[#2F6FAE] shadow-[0_0_14px_rgba(47,111,174,0.45)]" />
          </div>

          <div className="relative hidden lg:grid lg:grid-cols-4 lg:gap-0">
            {ITEMS.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group flex min-h-32 items-center border-l border-[#2F6FAE]/20 px-8 py-5 first:border-l-0 first:pl-0 last:pr-0"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#2F6FAE] text-white shadow-lg shadow-[#2F6FAE]/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <dt className="font-heading text-lg font-semibold text-[#10243E]">
                        {item.title}
                      </dt>
                      <dd className="mt-1 text-sm leading-snug text-[#4A5B70]">
                        {item.caption}
                      </dd>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative overflow-hidden lg:hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-[#E8EDF0] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-[#E8EDF0] to-transparent" />
            <div className="credibility-marquee flex min-w-max items-center gap-3 motion-reduce:animate-none">
              {[...ITEMS, ...ITEMS].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={`${item.title}-${index}`}
                    aria-hidden={index >= ITEMS.length}
                    className="group w-[220px] shrink-0 rounded-2xl border border-white/70 bg-white/80 p-4 shadow-[0_10px_30px_rgba(16,36,62,0.08)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#2F6FAE]/30 hover:shadow-[0_14px_32px_rgba(47,111,174,0.15)]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2F6FAE] text-white shadow-md shadow-[#2F6FAE]/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <dt className="font-heading text-base font-semibold text-[#10243E]">
                          {item.title}
                        </dt>
                        <dd className="mt-0.5 text-xs leading-snug text-[#4A5B70]">
                          {item.caption}
                        </dd>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}