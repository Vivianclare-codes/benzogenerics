import { MapPin, Phone } from "lucide-react";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { SITE, WA_MESSAGES, waLink } from "@/lib/site";

// Staggered page-load entrance. Uses the .animate-fade-up class from globals.css.
const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

export function Hero() {
  return (
    <section id="home" className="bg-[#F5F5F2]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-14 pt-6 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-14 lg:pb-20 lg:pt-10">
        {/* Text */}
        <div>
          <p
            className="animate-fade-up text-xs font-medium uppercase tracking-[0.16em] text-[#2F6FAE]"
            style={delay(0)}
          >
            Benzo Generics Pharmacy
          </p>

          <h1
            className="animate-fade-up mt-4 font-heading text-[34px] font-semibold leading-[1.1] tracking-tight text-[#10243E] sm:text-5xl lg:text-[52px]"
            style={delay(100)}
          >
            Your local pharmacy for medicines and healthcare supplies.
          </h1>

          <p
            className="animate-fade-up mt-5 max-w-md text-base leading-relaxed text-[#4A5B70] sm:text-lg"
            style={delay(200)}
          >
            Serving individuals, families and healthcare businesses in Port
            Harcourt for over 20 years.
          </p>

          <div
            className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row"
            style={delay(300)}
          >
            <a
              href={waLink(WA_MESSAGES.medicine)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-[#2F6FAE] px-6 text-[15px] font-medium text-white transition-colors duration-150 hover:bg-[#265c92] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F6FAE]"
            >
              Request a Medicine
            </a>
            <a
              href="#visit"
              className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-[#2F6FAE] px-6 text-[15px] font-medium text-[#2F6FAE] transition-colors duration-150 hover:bg-[#DCE8F1] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F6FAE]"
            >
              Visit Our Pharmacy
            </a>
          </div>

          <div
            className="animate-fade-up mt-8 grid gap-4 border-t border-[#DCE8F1] pt-5 text-sm text-[#4A5B70] sm:grid-cols-2"
            style={delay(400)}
          >
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#2F6FAE]" aria-hidden />
              <span>
                {SITE.addressLines[0]}, {SITE.addressLines[1]}
              </span>
            </div>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="flex min-h-[44px] items-start gap-3 transition-colors duration-150 hover:text-[#2F6FAE] sm:min-h-0"
            >
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#2F6FAE]" aria-hidden />
              <span>{SITE.phoneDisplay}</span>
            </a>
          </div>
        </div>

        {/* Image (swap for next/image when the real storefront photo is ready) */}
        <div className="animate-fade-up" style={delay(550)}>
          <PhotoPlaceholder
            label="PHOTO: real storefront exterior of Benzo on Okporo Road"
            alt="PHOTO: real storefront exterior of Benzo on Okporo Road"
            src="/image/benzo-exterior.jpg"
            className="aspect-[4/5] w-full rounded-xl object-cover lg:aspect-auto lg:h-[540px]"
          />
        </div>
      </div>
    </section>
  );
}