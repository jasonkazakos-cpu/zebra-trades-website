import { Star } from "lucide-react";

// Placeholder reviews — replace with real customer testimonials once available.
const testimonials = [
  {
    quote:
      "Booked a Half Day to work through a list of jobs we'd been putting off for months. Everything was priced upfront and the finish was spot on.",
    name: "Sarah M.",
    area: "Cheshunt",
    service: "Handyman",
  },
  {
    quote:
      "Fitted our new kitchen from start to finish. Tidy, punctual and the quote didn't change once the job was under way.",
    name: "David R.",
    area: "Waltham Cross",
    service: "Kitchen Installation",
  },
  {
    quote:
      "Called about a leaking tap and they were round the same week. Fixed properly first time, fair price, no fuss.",
    name: "Priya K.",
    area: "Hoddesdon",
    service: "Plumbing",
  },
];

export default function Testimonials() {
  return (
    <div className="grid gap-6 sm:grid-cols-3">
      {testimonials.map((t) => (
        <figure
          key={t.name}
          className="flex flex-col rounded-sm border border-line bg-paper p-6"
        >
          <div className="flex gap-0.5 text-accent" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4 fill-current" strokeWidth={0} />
            ))}
          </div>
          <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-5 border-t border-line pt-4 text-sm">
            <span className="font-display font-bold uppercase tracking-tight text-ink">
              {t.name}
            </span>
            <span className="text-slate"> &middot; {t.area}</span>
            <p className="mt-0.5 font-mono text-xs uppercase tracking-wide text-slate">
              {t.service}
            </p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
