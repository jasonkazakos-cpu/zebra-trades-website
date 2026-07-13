"use client";

import { useState } from "react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import CtaBand from "@/components/CtaBand";
import { siteConfig } from "@/data/site";
import { fireplaces } from "@/data/fireplaces";
import { X, ZoomIn } from "lucide-react";

const fp = fireplaces.find((f) => f.slug === "media-wall-1250")!;
const quoteHref = `/contact?service=${encodeURIComponent("Media Walls")}&product=${encodeURIComponent(fp.name)}`;

function fmt(n: number) {
  return `£${n.toLocaleString("en-GB")}`;
}

export default function MediaWall1250Page() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute right-4 top-4 text-white/70 hover:text-white"
            aria-label="Close"
            onClick={() => setLightbox(null)}
          >
            <X className="size-8" />
          </button>
          <img
            src={lightbox}
            alt="Enlarged view"
            style={{ maxWidth: "100%", maxHeight: "90vh", objectFit: "contain" }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* 1 — Hero sales image */}
      <section className="bg-ink">
        <Container className="py-8 sm:py-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {fp.brand} &middot; {fp.category}
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold uppercase leading-tight tracking-tight text-paper sm:text-4xl lg:text-5xl">
            {fp.name}
          </h1>
        </Container>
        <div className="w-full bg-chalk">
          <img
            src={fp.images.sales}
            alt={`${fp.name} sales image`}
            style={{ width: "100%", display: "block", objectFit: "contain" }}
          />
        </div>
      </section>

      {/* 2 — Description */}
      <section className="bg-paper">
        <Container className="py-12 sm:py-16">
          <SectionHeading eyebrow="About This Fireplace" title="Product Description" />
          <div className="mt-6 max-w-2xl space-y-4">
            {fp.description.split("\n\n").map((para, i) => (
              <p key={i} className="text-base leading-relaxed text-slate">{para}</p>
            ))}
            <p className="text-base leading-relaxed text-slate">{fp.closingText}</p>
          </div>
        </Container>
      </section>

      {/* 3 — Pricing */}
      <section className="bg-chalk">
        <Container className="py-12 sm:py-16">
          <SectionHeading eyebrow="Pricing" title="Supply &amp; Install Options" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 max-w-xl">
            <div className="rounded-sm border border-line bg-paper p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-slate">Supply &amp; Install</p>
              <p className="mt-2 font-display text-3xl font-bold text-ink">From {fmt(fp.pricing.supplyAndInstallFrom)}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                Fireplace supplied and professionally fitted by Zebra Trades as part of your bespoke media wall.
              </p>
            </div>
            <div className="rounded-sm border border-line bg-paper p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-slate">Supply Only</p>
              <p className="mt-2 font-display text-3xl font-bold text-ink">{fmt(fp.pricing.supplyOnly)}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                Fireplace unit supplied. Installation arranged separately.
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href={quoteHref} variant="primary">Get a Free Quote</Button>
            <Button href={siteConfig.phoneHref} variant="secondary">
              Call {siteConfig.phoneDisplay}
            </Button>
          </div>
        </Container>
      </section>

      {/* 4 — Premium Features */}
      <section className="bg-paper">
        <Container className="py-12 sm:py-16">
          <SectionHeading eyebrow="Included" title="Premium Features" />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 max-w-2xl">
            {fp.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-slate">
                <span className="mt-0.5 size-2 shrink-0 rounded-full bg-accent" />
                {f}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 5 — Gallery */}
      <section className="bg-chalk">
        <Container className="py-12 sm:py-16">
          <SectionHeading eyebrow="Gallery" title="See It In Situ" subtitle="Click any image to enlarge." />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {fp.images.gallery.map((src, i) => (
              <button
                key={src}
                onClick={() => setLightbox(src)}
                className="group relative overflow-hidden rounded-sm border border-line bg-paper"
                aria-label={`Enlarge scene image ${i + 1}`}
              >
                <img
                  src={src}
                  alt={`${fp.name} scene ${i + 1}`}
                  style={{ width: "100%", display: "block", objectFit: "contain" }}
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/20">
                  <ZoomIn className="size-8 text-white opacity-0 drop-shadow transition-opacity group-hover:opacity-100" />
                </span>
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* 6 — Technical Specification */}
      <section className="bg-paper">
        <Container className="py-12 sm:py-16">
          <SectionHeading eyebrow="Specification" title="Technical Specification" subtitle="Click to zoom." />
          <div className="mt-8">
            <div className="grid gap-4 sm:grid-cols-3 mb-8 max-w-lg">
              <div className="rounded-sm border border-line bg-chalk p-4">
                <p className="font-mono text-[9px] uppercase tracking-widest text-slate">Width</p>
                <p className="mt-1 font-display text-lg font-bold text-ink">{fp.dimensionsMm.width}mm</p>
              </div>
              <div className="rounded-sm border border-line bg-chalk p-4">
                <p className="font-mono text-[9px] uppercase tracking-widest text-slate">Height</p>
                <p className="mt-1 font-display text-lg font-bold text-ink">{fp.dimensionsMm.height}mm</p>
              </div>
              <div className="rounded-sm border border-line bg-chalk p-4">
                <p className="font-mono text-[9px] uppercase tracking-widest text-slate">Depth</p>
                <p className="mt-1 font-display text-lg font-bold text-ink">{fp.dimensionsMm.depth}mm</p>
              </div>
            </div>
            <button
              onClick={() => setLightbox(fp.images.specSheet)}
              className="group relative block w-full overflow-x-auto rounded-sm border border-line"
              aria-label="Zoom specification sheet"
            >
              <img
                src={fp.images.specSheet}
                alt={`${fp.name} specification sheet`}
                style={{ width: "100%", minWidth: "600px", display: "block", objectFit: "contain" }}
              />
              <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/10">
                <span className="flex items-center gap-2 rounded-sm bg-black/60 px-4 py-2 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <ZoomIn className="size-4" /> Click to zoom
                </span>
              </span>
            </button>
          </div>
        </Container>
      </section>

      {/* 7 — CTA */}
      <CtaBand
        title={`Interested in the ${fp.name}?`}
        subtitle={`Contact Zebra Trades for a free survey and fixed-price quote. Covering ${siteConfig.baseTown} and ${siteConfig.county}.`}
        buttonLabel="Get a Free Quote"
        quoteHref={quoteHref}
      />
    </>
  );
}
