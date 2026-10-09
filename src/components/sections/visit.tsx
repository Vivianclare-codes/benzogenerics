import { ArrowRight, MapPin, Phone } from "lucide-react";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { Reveal } from "@/components/reveal";
import { SITE, WA_MESSAGES, waLink } from "@/lib/site";

export function Visit() {
  return (
    <section id="visit" className="relative scroll-mt-20 bg-[#F5F5F2] py-16 lg:py-24">
      {/* Second anchor so the navbar's "Contact" link lands here too */}
      <span id="contact" className="absolute -top-20" aria-hidden />

      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16">
        {/* Text (first on mobile) */}
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#2F6FAE]">
            Visit Benzo
          </p>
          <h2 className="mt-3 font-heading text-[28px] font-semibold leading-tight tracking-tight text-[#10243E] sm:text-4xl">
            Find us on Okporo Road.
          </h2>

          <address className="mt-6 flex items-start gap-3 not-italic text-base leading-relaxed text-[#4A5B70]">
            <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#2F6FAE]" aria-hidden />
            <span>
              {SITE.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </span>
          </address>

          <a
            href={`tel:${SITE.phoneTel}`}
            className="mt-4 inline-flex min-h-[44px] items-center gap-3 text-base font-medium text-[#10243E] transition-colors duration-150 hover:text-[#2F6FAE] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F6FAE]"
          >
            <Phone className="h-5 w-5 shrink-0 text-[#2F6FAE]" aria-hidden />
            Call: {SITE.phoneDisplay}
          </a>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg bg-[#2F6FAE] px-8 text-[15px] font-medium text-white transition-colors duration-150 hover:bg-[#265c92] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F6FAE]"
            >
              Get Directions
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden
              />
            </a>
            <a
              href={waLink(WA_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center text-[15px] font-medium text-[#2F6FAE] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F6FAE]"
            >
              Or message us on WhatsApp
            </a>
          </div>
        </Reveal>

        {/* Photo */}
        <Reveal delay={120}>
          <div className="overflow-hidden rounded-xl">
            <PhotoPlaceholder
              label="PHOTO: storefront / entrance from the road"
              alt="PHOTO: storefront / entrance from the road"
              src="/image/benzo-exterior.jpg"
              className="aspect-[4/3] w-full rounded-none object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}