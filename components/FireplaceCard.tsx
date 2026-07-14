"use client";

import Link from "next/link";
import type { FireplaceProduct } from "@/data/fireplaces";

function fmt(n: number) {
  return `£${n.toLocaleString("en-GB")}`;
}

export default function FireplaceCard({ fp }: { fp: FireplaceProduct }) {
  const displayImage = fp.images.main ?? fp.images.sales ?? fp.images.gallery[0] ?? null;
  const quoteHref = `/contact?service=${encodeURIComponent("Media Walls")}&product=${encodeURIComponent(fp.name)}`;
  const detailHref = `/fireplaces/${fp.slug}`;

  const hasInstallPrice = fp.pricing.supplyAndInstallFrom != null;
  const hasSupplyPrice = fp.pricing.supplyOnly != null;
  const hasPricing = hasInstallPrice || hasSupplyPrice;

  const blurb = fp.shortDescription ?? fp.description.split("\n\n")[0];

  return (
    <div className="flex flex-col overflow-hidden rounded-sm border border-line bg-paper shadow-sm transition-shadow hover:shadow-md">
      {displayImage ? (
        <Link
          href={detailHref}
          className="group relative block bg-chalk p-4"
          aria-label={`View ${fp.name} details`}
        >
          <img
            src={displayImage}
            alt={fp.name}
            style={{ objectFit: "contain", width: "100%", display: "block" }}
          />
          <span className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/5" />
          {hasInstallPrice && (
            <span className="absolute bottom-3 left-3 rounded-sm bg-ink/80 px-3 py-1.5 backdrop-blur-sm">
              <span className="block font-mono text-[9px] uppercase tracking-widest text-white/60">From</span>
              <span className="block font-display text-base font-bold leading-tight text-white">{fmt(fp.pricing.supplyAndInstallFrom!)}</span>
            </span>
          )}
        </Link>
      ) : (
        <div className="flex h-48 items-center justify-center bg-chalk">
          <p className="font-mono text-xs uppercase tracking-widest text-slate">Image Coming Soon</p>
        </div>
      )}

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate">
            {fp.brand} &middot; {fp.category}
          </p>
          <h3 className="mt-1 font-display text-lg font-bold uppercase leading-tight tracking-tight text-ink">
            {fp.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate">{blurb}</p>
        </div>

        {hasPricing ? (
          <div className="grid grid-cols-2 gap-2 rounded-sm border border-line bg-chalk p-4">
            {hasInstallPrice && (
              <div>
                <p className="font-mono text-[9px] uppercase tracking-widest text-slate">Supply &amp; Install</p>
                <p className="mt-0.5 font-display text-lg font-bold text-ink">From {fmt(fp.pricing.supplyAndInstallFrom!)}</p>
              </div>
            )}
            {hasSupplyPrice && (
              <div>
                <p className="font-mono text-[9px] uppercase tracking-widest text-slate">Supply Only</p>
                <p className="mt-0.5 font-display text-lg font-bold text-ink">{fmt(fp.pricing.supplyOnly!)}</p>
              </div>
            )}
          </div>
        ) : (
          <div className="rounded-sm border border-line bg-chalk p-4">
            <p className="text-sm font-medium text-slate">Contact us for pricing</p>
          </div>
        )}

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
