"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { Reveal } from "@/components/reveal";
import { WA_MESSAGES, waLink } from "@/lib/site";

const POINTS = [
  "Bulk medicine supply",
  "Medical consumables",
  "Hospital supplies",
  "Large orders for businesses and organisations",
];

const HEADING_TEXT = "Healthcare supplies at the scale your business needs.";

export function Wholesale() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setTypedText(HEADING_TEXT.slice(0, index));

      if (index >= HEADING_TEXT.length) {
        window.clearInterval(timer);
      }
    }, 32);

    return () => window.clearInterval(timer);
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      id="wholesale"
      className="scroll-mt-20 bg-[#10243E] py-16 text-white lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#9CC2E8]">
            Wholesale
          </p>
          <h2 className="mt-3 max-w-2xl font-heading text-[28px] font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-[40px]">
            <span className="inline-block min-h-[1.25em]">
              {typedText}
              {typedText.length < HEADING_TEXT.length && (
                <span className="ml-0.5 inline-block h-[0.9em] w-[2px] animate-pulse bg-[#9CC2E8] align-middle" />
              )}
            </span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#C9D6E4] sm:text-lg">
            Benzo Generics supplies medicines and medical supplies to healthcare
            businesses and other organisations in Port Harcourt and beyond.
          </p>
        </Reveal>

        {/* Large photo: 4:3 on phones, wide on desktop */}
        <Reveal delay={100} className="mt-10">
          <div className="overflow-hidden rounded-xl">
            <PhotoPlaceholder
              label="LARGE PHOTO: real bulk stock, cartons, staff handling wholesale orders"
              alt="LARGE PHOTO: real bulk stock, cartons, staff handling wholesale orders"
              src="/image/benzo-wholesale.jpg"
              className="aspect-[4/3] w-full rounded-none border-[#9CC2E8]/50 bg-[#1B3556] object-cover text-[#C9D6E4] lg:aspect-[21/9]"
            />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
            {POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3 text-[15px] leading-snug">
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#9CC2E8]"
                  aria-hidden
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={200}>
          <a
            href={waLink(WA_MESSAGES.wholesale)}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-lg bg-[#2F6FAE] px-8 text-[15px] font-medium text-white shadow-lg shadow-[#2F6FAE]/20 transition-colors duration-150 hover:bg-[#245F9A] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
          >
            Make a Wholesale Enquiry
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden
            />
          </a>
          <p className="mt-3 text-sm text-[#9CC2E8]">
            Opens WhatsApp with your enquiry ready to fill in.
          </p>
        </Reveal>
      </div>
    </section>
  );
}