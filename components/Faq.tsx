"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/data/site";

export type FaqItem = {
  question: string;
  answer: string;
};

const defaultFaqs: FaqItem[] = [
  {
    question: "Do you provide free quotations?",
    answer:
      "Yes. Every job starts with a free, no-obligation quote, agreed in writing before any work begins.",
  },
  {
    question: "Are materials included?",
    answer:
      "Materials aren't included in the package price unless agreed upfront. We're happy to use materials you've already bought, or source what's needed and confirm the cost with you first.",
  },
  {
    question: "Do you offer evening or weekend appointments?",
    answer:
      "We're available Monday to Saturday — get in touch to check availability for evenings or weekends, as this can vary depending on the job.",
  },
  {
    question: "What areas do you cover?",
    answer: `We're based in ${siteConfig.baseTown} and cover towns across ${siteConfig.county}, including ${siteConfig.areas.slice(1).join(", ")}. Get in touch if you're nearby and not sure.`,
  },
  {
    question: "Are you insured?",
    answer:
      "Yes. Every job we carry out is covered by public liability insurance, so you can have work done at home with complete peace of mind.",
  },
];

export default function Faq({ faqs = defaultFaqs }: { faqs?: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={faq.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="font-display text-base font-bold uppercase tracking-tight text-ink sm:text-lg">
                {faq.question}
              </span>
              <ChevronDown
                className={`size-5 shrink-0 text-accent transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
                strokeWidth={1.75}
                aria-hidden="true"
              />
            </button>
            {isOpen && (
              <p className="pb-5 pr-8 text-sm leading-relaxed text-slate sm:text-base">
                {faq.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
