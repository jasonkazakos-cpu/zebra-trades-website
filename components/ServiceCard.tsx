import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServiceIcon } from "@/components/icon-map";
import type { Service } from "@/data/services";

export default function ServiceCard({
  service,
  variant = "compact",
}: {
  service: Service;
  variant?: "compact" | "full";
}) {
  const href = service.href ?? `/contact?service=${encodeURIComponent(service.title)}`;
  const ctaLabel = service.href ? "View pricing" : "Ask about this service";

  return (
    <article
      id={service.slug}
      style={{ "--card-accent": service.swatch } as React.CSSProperties}
      className="group relative flex flex-col rounded-sm border border-line bg-paper p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[var(--card-accent)] hover:shadow-[0_16px_32px_-16px_rgba(20,20,26,0.3)]"
    >
      <span
        className="absolute left-0 top-0 h-1.5 w-12 rounded-tl-sm"
        style={{ backgroundColor: service.swatch }}
        aria-hidden="true"
      />
      <div className="flex items-center gap-3">
        <span
          className="flex size-11 items-center justify-center rounded-sm"
          style={{ backgroundColor: `${service.swatch}1A` }}
        >
          <ServiceIcon
            name={service.icon}
            className="size-5"
            style={{ color: service.swatch }}
          />
        </span>
        <h3 className="font-display text-xl font-bold uppercase tracking-tight text-ink">
          {service.title}
        </h3>
      </div>

      <p className="mt-4 text-sm text-slate leading-relaxed">
        {variant === "full" ? service.description : service.teaser}
      </p>

      <Link
        href={href}
        className="mt-5 inline-flex items-center gap-1.5 self-start rounded-full border border-ink/15 px-4 py-2 text-sm font-semibold text-ink transition-colors group-hover:border-[var(--card-accent)] group-hover:text-ink"
      >
        {ctaLabel}
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </Link>
    </article>
  );
}
