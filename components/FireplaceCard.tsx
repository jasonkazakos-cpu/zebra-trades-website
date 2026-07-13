"use client";

import { useState } from "react";
import Link from "next/link";
import { X, ZoomIn } from "lucide-react";
import type { FireplaceProduct } from "@/data/fireplaces";

function fmt(n: number) {
  return `£${n.toLocaleString("en-GB")}`;
}

export default function FireplaceCard({ fp }: { fp: FireplaceProduct }) {
  const [open, setOpen] = useState(false);

  const displayImage = fp.images.sales ?? fp.images.gallery[0] ?? null;
  const quoteHref = `/contact?service=${encodeURIComponent("Media Walls")}&product=${encodeURIComponent(fp.name)}`;
  const detailHref = `/fireplaces/${fp.slug}`;

  const hasInstallPrice = fp.pricing.supplyAndInstallFrom != null;
  const hasSupplyPrice = fp.pricing.supplyOnly != null;
  const hasPricing = hasInstallPrice || hasSupplyPrice;

  return (
    <>
      {/* Lightbox */}
      {open && displayImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setOpen(false)}
        >
          <button
            className="absolute right-4 top-4 text-white/70 hover:text-white"
            aria-label="Close"
            onClick={() => setOpen(false)}
          >
            <X className="size-8" />
          </button>
          <img
            src={displayImage}
            alt={fp.name}
            style={{ maxWidth: "100%", maxHeight: "90vh", objectFit: "contain" }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <div className="flex flex-col overflow-hidden rounded-sm border border-line bg-paper shadow-sm transition-shadow hover:shadow-md">
        {/* Sales image — clickable, full uncropped */}
        {displayImage ? (
          <button
            onClick={() => setOpen(true)}
            className="group relative bg-chalk p-4 text-left"
            aria-label={`Enlarge ${fp.name} image`}
          >
            <img
              src={displayImage}
              alt={fp.name}
              style={{ objectFit: "contain", width: "100%", display: "block" }}
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/15">
              <ZoomIn className="size-8 text-white opacity-0 drop-shadow transition-opacity group-hover:opacity-100" />
            </span>
          </button>
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
            <p className="mt-2 text-sm leading-relaxed text-slate">
              {fp.description.split("\n\n")[0]}
            </p>
          </div>

          {/* Pricing */}
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
    </>
  );
}
