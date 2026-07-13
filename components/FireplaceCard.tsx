import Link from "next/link";
import type { FireplaceProduct } from "@/data/fireplaces";

function fmt(n: number) {
  return `£${n.toLocaleString("en-GB")}`;
}

export default function FireplaceCard({ fp }: { fp: FireplaceProduct }) {
  const quoteHref = `/contact?service=${encodeURIComponent("Media Walls")}&product=${encodeURIComponent(fp.name)}`;
  const detailHref = `/media-walls/${fp.slug}`;

  return (
    <div className="flex flex-col overflow-hidden rounded-sm border border-line bg-paper shadow-sm transition-shadow hover:shadow-md">
      {/* Sales image — full, uncropped */}
      <div className="bg-chalk p-4">
        <img
          src={fp.images.sales}
          alt={fp.name}
          style={{ objectFit: "contain", width: "100%", display: "block" }}
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate">
            {fp.brand} &middot; {fp.category}
          </p>
          <h3 className="mt-1 font-display text-lg font-bold uppercase leading-tight tracking-tight text-ink">
            {fp.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate">
            {fp.description.split("\n\n")[0]}
          </p>
        </div>

        {/* Pricing */}
        <div className="grid grid-cols-2 gap-2 rounded-sm border border-line bg-chalk p-4">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-widest text-slate">Supply &amp; Install</p>
            <p className="mt-0.5 font-display text-lg font-bold text-ink">From {fmt(fp.pricing.supplyAndInstallFrom)}</p>
          </div>
          <div>
            <p className="font-mono text-[9px] uppercase tracking-widest text-slate">Supply Only</p>
            <p className="mt-0.5 font-display text-lg font-bold text-ink">{fmt(fp.pricing.supplyOnly)}</p>
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
