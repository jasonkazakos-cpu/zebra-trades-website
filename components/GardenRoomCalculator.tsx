"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  SIZES,
  SPEC_LEVELS,
  EXTRAS,
  type SizeKey,
  type SpecKey,
} from "@/data/garden-room-prices";
import Button from "@/components/Button";
import { siteConfig } from "@/data/site";

function fmtGBP(n: number) {
  return n.toLocaleString("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 });
}

export default function GardenRoomCalculator() {
  const [size, setSize] = useState<SizeKey>("4x3");
  const [spec, setSpec] = useState<SpecKey>("standard");
  const [extras, setExtras] = useState<Set<string>>(new Set());

  function toggleExtra(key: string) {
    setExtras((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  }

  const selectedSize = SIZES.find((s) => s.key === size)!;
  const selectedSpec = SPEC_LEVELS.find((s) => s.key === spec)!;
  const isCustom = selectedSize.area === null;

  const selectedExtras = EXTRAS.filter((e) => extras.has(e.key));
  const extrasTotal = selectedExtras.reduce((sum, e) => sum + e.price, 0);
  const basePrice = isCustom ? 0 : selectedSize.area! * selectedSpec.ratePerSqm;
  const totalPrice = basePrice + extrasTotal;

  return (
    <div className="rounded-sm border border-line bg-paper">
      <div className="border-b border-line px-6 py-5 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Cost Calculator</p>
        <h3 className="mt-1 font-display text-2xl font-bold uppercase tracking-tight text-ink sm:text-3xl">
          Garden Room Cost Calculator
        </h3>
        <p className="mt-1 text-sm text-slate">
          Select your size, specification and extras for an instant guide price.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1fr_360px]">
        {/* Controls */}
        <div className="space-y-8 px-6 py-7 sm:px-8">

          {/* Size */}
          <fieldset>
            <legend className="font-mono text-xs uppercase tracking-[0.18em] text-slate">
              1. Garden Room Size
            </legend>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {SIZES.map((s) => (
                <button
                  key={s.key}
                  type="button"
                  onClick={() => setSize(s.key)}
                  className={`flex items-center gap-2.5 rounded-sm border px-4 py-3 text-left text-sm font-medium transition-colors ${
                    size === s.key
                      ? "border-accent bg-accent-soft text-ink"
                      : "border-line text-ink-soft hover:border-accent/50"
                  }`}
                >
                  <span
                    className={`size-4 shrink-0 rounded-full border-2 ${
                      size === s.key ? "border-accent bg-accent" : "border-line"
                    }`}
                    aria-hidden="true"
                  />
                  {s.label}
                </button>
              ))}
            </div>
          </fieldset>

          {/* Spec level */}
          <fieldset>
            <legend className="font-mono text-xs uppercase tracking-[0.18em] text-slate">
              2. Specification Level
            </legend>
            <div className="mt-3 grid gap-2 sm:grid-cols-3">
              {SPEC_LEVELS.map((level) => (
                <button
                  key={level.key}
                  type="button"
                  onClick={() => setSpec(level.key)}
                  className={`rounded-sm border px-4 py-3 text-left transition-colors ${
                    spec === level.key
                      ? "border-accent bg-accent-soft"
                      : "border-line hover:border-accent/50"
                  }`}
                >
                  <span className="block text-sm font-semibold text-ink">{level.label}</span>
                  <span className="mt-0.5 block font-mono text-xs text-slate">
                    {fmtGBP(level.ratePerSqm)} per m²
                  </span>
                </button>
              ))}
            </div>
          </fieldset>

          {/* Extras */}
          <fieldset>
            <legend className="font-mono text-xs uppercase tracking-[0.18em] text-slate">
              3. Optional Extras
            </legend>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {EXTRAS.map((extra) => {
                const checked = extras.has(extra.key);
                return (
                  <button
                    key={extra.key}
                    type="button"
                    onClick={() => toggleExtra(extra.key)}
                    className={`flex items-center justify-between gap-3 rounded-sm border px-4 py-3 text-left text-sm transition-colors ${
                      checked
                        ? "border-accent bg-accent-soft"
                        : "border-line hover:border-accent/50"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`flex size-4 shrink-0 items-center justify-center rounded border ${
                          checked ? "border-accent bg-accent" : "border-line"
                        }`}
                        aria-hidden="true"
                      >
                        {checked && (
                          <CheckCircle2 className="size-3 text-paper" strokeWidth={3} />
                        )}
                      </span>
                      <span className="text-ink">{extra.label}</span>
                    </div>
                    <span className="shrink-0 font-mono text-xs text-slate">
                      +{fmtGBP(extra.price)}
                    </span>
                  </button>
                );
              })}
            </div>
          </fieldset>
        </div>

        {/* Result */}
        <div className="flex flex-col justify-between border-t border-line bg-ink px-6 py-7 sm:px-8 lg:border-l lg:border-t-0">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-paper/55">
              Your Guide Price
            </p>

            <div className="mt-4">
              <p className="font-display text-sm uppercase tracking-tight text-paper/70">
                {selectedSize.label}
                {" · "}
                {selectedSpec.label}
              </p>

              {isCustom ? (
                <>
                  <p className="mt-2 font-display text-3xl font-bold uppercase tracking-tight text-accent">
                    Custom Quote
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-paper/70">
                    Custom garden rooms are individually quoted. Please
                    request a site survey for an accurate price.
                  </p>
                </>
              ) : (
                <p className="mt-2 font-display text-4xl font-bold uppercase tracking-tight text-accent">
                  {fmtGBP(totalPrice)}
                </p>
              )}

              {!isCustom && selectedExtras.length > 0 && (
                <ul className="mt-4 space-y-1.5">
                  {selectedExtras.map((e) => (
                    <li key={e.key} className="flex justify-between text-xs text-paper/70">
                      <span>{e.label}</span>
                      <span className="font-mono">+{fmtGBP(e.price)}</span>
                    </li>
                  ))}
                </ul>
              )}

              {!isCustom && (
                <p className="mt-4 text-[11px] leading-relaxed text-paper/60">
                  Your estimated garden room guide price is approximately{" "}
                  {fmtGBP(totalPrice)}.
                </p>
              )}
            </div>

            <p className="mt-6 rounded-sm border border-paper/10 bg-paper/5 p-4 text-[11px] leading-relaxed text-paper/60">
              This is a rough guide price only. Final pricing depends on
              foundations, ground conditions, access, electrical
              requirements, glazing, insulation, finishes and site-specific
              details. Zebra Trades will always provide a fixed quotation
              following a site survey.
            </p>
          </div>

          <div className="mt-6 space-y-2.5">
            <Link
              href={`/contact?service=${encodeURIComponent("Garden Rooms")}`}
              className="flex items-center justify-center gap-2 rounded-sm bg-accent px-5 py-3.5 font-semibold text-paper transition-colors hover:bg-accent-dark"
            >
              Request a Site Survey
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Button href={siteConfig.phoneHref} variant="ghost-light" className="w-full justify-center">
              Call {siteConfig.phoneDisplay}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
