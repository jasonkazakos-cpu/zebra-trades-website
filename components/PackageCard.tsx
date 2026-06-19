import { Clock, Ruler, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export type Package = {
  name: string;
  price: string;
  bestFor?: string;
  duration?: string;
  size?: string;
  description?: string;
  features?: string[];
  featuresLabel?: string;
  serviceLabel?: string;
};

export default function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <div className="flex flex-col rounded-sm border border-line bg-paper p-7">
      {pkg.duration && (
        <span className="inline-flex items-center gap-1.5 self-start rounded-full bg-accent-soft px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-accent-dark">
          <Clock className="size-3.5" strokeWidth={2} aria-hidden="true" />
          {pkg.duration}
        </span>
      )}

      <h3 className={`font-display text-2xl font-bold uppercase tracking-tight text-ink ${pkg.duration ? "mt-5" : ""}`}>
        {pkg.name}
      </h3>
      <p className="mt-1 font-display text-3xl font-bold text-accent">
        {pkg.price}
      </p>
      {pkg.size && (
        <p className="mt-3 flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-slate">
          <Ruler className="size-3.5 shrink-0" strokeWidth={2} aria-hidden="true" />
          Typical size: {pkg.size}
        </p>
      )}
      {pkg.bestFor && (
        <p className={`text-sm font-medium text-slate ${pkg.size ? "mt-2" : "mt-3"}`}>{pkg.bestFor}</p>
      )}
      {pkg.description && (
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{pkg.description}</p>
      )}

      {pkg.features && pkg.features.length > 0 && (
        <div className="mt-6">
          {pkg.featuresLabel && (
            <p className="mb-2 font-mono text-xs uppercase tracking-wide text-slate">
              {pkg.featuresLabel}
            </p>
          )}
          <ul className="space-y-3">
            {pkg.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-soft">
                <CheckCircle2
                  className="mt-0.5 size-4 shrink-0 text-accent"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      <Link
        href={`/contact?service=${encodeURIComponent(pkg.serviceLabel ?? "Handyman")}&package=${encodeURIComponent(pkg.name)}`}
        className="mt-6 inline-flex items-center justify-center rounded-sm border border-ink/20 px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
      >
        Enquire About This
      </Link>
    </div>
  );
}
