"use client";

import { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import { X, ZoomIn } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import CtaBand from "@/components/CtaBand";
import { fireplaces } from "@/data/fireplaces";
import { siteConfig } from "@/data/site";

function fmt(n: number) {
  return `£${n.toLocaleString("en-GB")}`;
}

function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <button className="absolute right-4 top-4 text-white/70 hover:text-white" aria-label="Close" onClick={onClose}>
        <X className="size-8" />
      </button>
      <img
        src={src}
        alt={alt}
        style={{ maxWidth: "100%", maxHeight: "90vh", objectFit: "contain" }}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

function ClickImg({ src, alt, style }: { src: string; alt: string; style?: React.CSSProperties }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && <Lightbox src={src} alt={alt} onClose={() => setOpen(false)} />}
      <button
        onClick={() => setOpen(true)}
        className="group relative block w-full text-left"
        aria-label={`Enlarge: ${alt}`}
      >
        <img src={src} alt={alt} style={{ display: "block", width: "100%", objectFit: "contain", ...style }} />
        <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/10">
          <ZoomIn className="size-8 text-white opacity-0 drop-shadow transition-opacity group-hover:opacity-100" />
        </span>
      </button>
    </>
  );
}

export default function FireplaceProductClient({ slug }: { slug: string }) {
  const fp = fireplaces.find((f) => f.slug === slug);
  if (!fp) return notFound();

  const quoteHref = `/contact?service=${encodeURIComponent("Media Walls")}&product=${encodeURIComponent(fp.name)}`;
  const heroImage = fp.images.sales ?? fp.images.gallery[0] ?? null;
  const specImage = fp.images.specSheet ?? fp.images.specification ?? null;
  const hasInstall = fp.pricing.supplyAndInstallFrom != null;
  const hasSupply = fp.pricing.supplyOnly != null;
  const hasPricing = hasInstall || hasSupply;

  return (
    <>
      {/* 1 — Hero */}
      <section className="bg-ink">
        <Container className="py-8 sm:py-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {fp.brand} &middot; {fp.category}
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold uppercase leading-tight tracking-tight text-paper sm:text-4xl lg:text-5xl">
            {fp.name}
          </h1>
        </Container>
        {heroImage && (
          <div className="bg-chalk">
            <ClickImg src={heroImage} alt={`${fp.name} promotional image`} />
          </div>
        )}
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
          {hasPricing ? (
            <div className="mt-8 grid gap-4 sm:grid-cols-2 max-w-xl">
              {hasInstall && (
                <div className="rounded-sm border border-line bg-paper p-6">
                  <p className="font-mono text-xs uppercase tracking-widest text-slate">Supply &amp; Install</p>
                  <p className="mt-2 font-display text-3xl font-bold text-ink">From {fmt(fp.pricing.supplyAndInstallFrom!)}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate">Professionally fitted by Zebra Trades as part of your bespoke media wall.</p>
                </div>
              )}
              {hasSupply && (
                <div className="rounded-sm border border-line bg-paper p-6">
                  <p className="font-mono text-xs uppercase tracking-widest text-slate">Supply Only</p>
                  <p className="mt-2 font-display text-3xl font-bold text-ink">{fmt(fp.pricing.supplyOnly!)}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate">Unit supplied. Installation arranged separately.</p>
                </div>
              )}
            </div>
          ) : (
            <div className="mt-8 max-w-xl rounded-sm border border-line bg-paper p-6">
              <p className="font-display text-lg font-bold uppercase tracking-tight text-ink">Contact Us for Pricing</p>
              <p className="mt-2 text-sm leading-relaxed text-slate">Pricing for this fireplace is available on request. Get in touch for a free quote.</p>
            </div>
          )}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href={quoteHref} variant="primary">Get a Free Quote</Button>
            <Button href={siteConfig.phoneHref} variant="secondary">Call {siteConfig.phoneDisplay}</Button>
          </div>
        </Container>
      </section>

      {/* 4 — Features */}
      <section className="bg-paper">
        <Container className="py-12 sm:py-16">
          <SectionHeading eyebrow="Included" title="Premium Features" />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 max-w-2xl">
            {fp.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-slate">
                <span className="mt-1.5 size-2 shrink-0 rounded-full bg-accent" />
                {f}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 5 — Gallery */}
      {fp.images.gallery.length > 0 && (
        <section className="bg-chalk">
          <Container className="py-12 sm:py-16">
            <SectionHeading eyebrow="Gallery" title="See It In Situ" subtitle="Click any image to enlarge." />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {fp.images.gallery.map((src, i) => (
                <div key={src} className="overflow-hidden rounded-sm border border-line bg-paper">
                  <ClickImg src={src} alt={`${fp.name} scene ${i + 1}`} />
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 6 — Spec sheet */}
      {specImage ? (
        <section className="bg-paper">
          <Container className="py-12 sm:py-16">
            <SectionHeading eyebrow="Specification" title="Technical Specification" subtitle="Click to zoom." />
            <div className="mt-6 grid gap-4 sm:grid-cols-3 mb-8 max-w-lg">
              {[
                { label: "Width", val: `${fp.dimensionsMm.width}mm` },
                { label: "Height", val: `${fp.dimensionsMm.height}mm` },
                { label: "Depth", val: `${fp.dimensionsMm.depth}mm` },
              ].map(({ label, val }) => (
                <div key={label} className="rounded-sm border border-line bg-chalk p-4">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-slate">{label}</p>
                  <p className="mt-1 font-display text-lg font-bold text-ink">{val}</p>
                </div>
              ))}
            </div>
            <div className="overflow-x-auto rounded-sm border border-line">
              <ClickImg src={specImage} alt={`${fp.name} specification sheet`} style={{ minWidth: "600px" }} />
            </div>
          </Container>
        </section>
      ) : (
        <section className="bg-paper">
          <Container className="py-12 sm:py-16">
            <SectionHeading eyebrow="Specification" title="Dimensions" />
            <div className="mt-6 grid gap-4 sm:grid-cols-3 max-w-lg">
              {[
                { label: "Width", val: `${fp.dimensionsMm.width}mm` },
                { label: "Height", val: `${fp.dimensionsMm.height}mm` },
                { label: "Depth", val: `${fp.dimensionsMm.depth}mm` },
              ].map(({ label, val }) => (
                <div key={label} className="rounded-sm border border-line bg-chalk p-4">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-slate">{label}</p>
                  <p className="mt-1 font-display text-lg font-bold text-ink">{val}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

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
