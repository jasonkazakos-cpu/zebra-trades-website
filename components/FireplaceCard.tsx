import Link from "next/link";
import type { Fireplace } from "@/data/fireplaces";

function fmt(amount: number) {
  return `£${amount.toLocaleString("en-GB")}`;
}

type Props = { fireplace: Fireplace };

export default function FireplaceCard({ fireplace }: Props) {
  const quoteHref = `/contact?service=${encodeURIComponent("Media Walls")}&product=${encodeURIComponent(fireplace.name)}`;
  const detailHref = `/fireplaces/${fireplace.slug}`;

  return (
    <div className="flex flex-col overflow-hidden rounded-sm border border-line bg-paper shadow-sm transition-shadow hover:shadow-md">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-chalk">
        <img
          src={fireplace.image}
          alt={fireplace.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate">
            {fireplace.brand} &middot; {fireplace.category}
          </p>
          <h3 className="mt-1 font-display text-base font-bold uppercase leading-tight tracking-tight text-ink">
            {fireplace.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate line-clamp-3">
            {fireplace.description.split("\n\n")[0]}
          </p>
        </div>

        {/* Pricing */}
        <div className="mt-auto grid grid-cols-2 gap-2 rounded-sm border border-line bg-chalk p-3">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-widest text-slate">Supply &amp; Install</p>
            <p className="mt-0.5 font-display text-base font-bold text-ink">
              From {fmt(fireplace.pricing.supplyAndInstallFrom)}
            </p>
          </div>
          <div>
            <p className="font-mono text-[9px] uppercase tracking-widest text-slate">Supply Only</p>
            <p className="mt-0.5 font-display text-base font-bold text-ink">
              {fmt(fireplace.pricing.supplyOnly)}
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex gap-2">
          <Link
            href={detailHref}
            className="flex-1 rounded-sm border border-line bg-paper px-4 py-2.5 text-center font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:border-accent hover:text-accent-dark"
          >
            View Details
          </Link>
          <Link
            href={quoteHref}
            className="flex-1 rounded-sm bg-accent px-4 py-2.5 text-center font-mono text-xs uppercase tracking-widest text-paper transition-opacity hover:opacity-90"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
