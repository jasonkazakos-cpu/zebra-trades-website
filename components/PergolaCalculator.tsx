"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  PERGOLA_TYPES,
  PERGOLA_SIZES,
  BASE_PRICES,
  EXTRAS,
  type TypeKey,
  type SizeKey,
} from "@/data/pergola-prices";

function fmt(n: number) {
  return "From £" + n.toLocaleString("en-GB");
}

export default function PergolaCalculator() {
  const [type, setType] = useState<TypeKey>("timber");
  const [size, setSize] = useState<SizeKey>("medium");
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

  const basePrice = BASE_PRICES[type][size];
  const selectedExtras = EXTRAS.filter((e) => extras.has(e.key));
  const hasQuotedExtras = selectedExtras.some((e) => e.price === null);
  const fixedExtrasTotal = selectedExtras.reduce<number>((sum, e) => sum + (e.price ?? 0), 0);
  const isBaseQuoted = basePrice === null;
  const totalPrice = isBaseQuoted ? null : basePrice + fixedExtrasTotal;

  return (
    <div className="rounded-sm border border-line bg-paper">
      {/* Header */}
      <div className="border-b border-line px-6 py-5 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Guide Price Calculator</p>
        <h3 className="mt-1 font-display text-2xl font-bold uppercase tracking-tight text-ink sm:text-3xl">
          Rough Pergola Price Guide
        </h3>
        <p className="mt-1 text-sm text-slate">
          Select your options below for an instant guide price.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1fr_340px]">
        {/* Left — controls */}
        <div className="space-y-8 px-6 py-7 sm:px-8">

          {/* Type */}
          <fieldset>
            <legend className="font-mono text-xs uppercase tracking-[0.18em] text-slate">
              1. Pergola Type
            </legend>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {PERGOLA_TYPES.map((t) => (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => setType(t.key)}
                  className={`flex items-center gap-2.5 rounded-sm border px-4 py-3 text-left text-sm font-medium transition-colors ${
                    type === t.key
                      ? "border-accent bg-accent-soft text-ink"
                      : "border-line text-ink-soft hover:border-accent/50"
                  }`}
                >
                  <span
                    className={`size-4 shrink-0 rounded-full border-2 ${
                      type === t.key ? "border-accent bg-accent" : "border-line"
                    }`}
                    aria-hidden="true"
                  />
                  {t.label}
                </button>
              ))}
            </div>
          </fieldset>

          {/* Size */}
          <fieldset>
            <legend className="font-mono text-xs uppercase tracking-[0.18em] text-slate">
              2. Approximate Size
            </legend>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {PERGOLA_SIZES.map((s) => (
                <button
                  key={s.key}
                  type="button"
                  onClick={() => setSize(s.key)}
                  className={`rounded-sm border px-3 py-3 text-center text-sm transition-colors ${
                    size === s.key
                      ? "border-accent bg-accent-soft"
                      : "border-line hover:border-accent/50"
                  }`}
                >
                  <span className="block font-semibold text-ink">{s.label}</span>
                  <span className="mt-0.5 block text-[11px] text-slate">{s.sublabel}</span>
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
                      {extra.price !== null ? `+£${extra.price.toLocaleString("en-GB")}` : "Quoted"}
                    </span>
                  </button>
                );
              })}
            </div>
          </fieldset>
        </div>

        {/* Right — result */}
        <div className="flex flex-col justify-between border-t border-line bg-ink px-6 py-7 sm:px-8 lg:border-l lg:border-t-0">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-paper/55">
              Your Guide Price
            </p>

            <div className="mt-4">
              <p className="font-display text-sm uppercase tracking-tight text-paper/70">
                {PERGOLA_TYPES.find((t) => t.key === type)?.label}
                {" · "}
                {PERGOLA_SIZES.find((s) => s.key === size)?.label}
              </p>

              {isBaseQuoted ? (
                <p className="mt-2 font-display text-4xl font-bold uppercase tracking-tight text-accent">
                  Custom Quote
                </p>
              ) : (
                <p className="mt-2 font-display text-4xl font-bold uppercase tracking-tight text-accent">
                  {fmt(totalPrice!)}
                </p>
              )}

              {!isBaseQuoted && hasQuotedExtras && (
                <p className="mt-1 text-xs text-paper/60">
                  + some extras require a site survey to price
                </p>
              )}

              {selectedExtras.length > 0 && (
                <ul className="mt-4 space-y-1.5">
                  {selectedExtras.map((e) => (
                    <li key={e.key} className="flex justify-between text-xs text-paper/70">
                      <span>{e.label}</span>
                      <span className="font-mono">
                        {e.price !== null ? `+£${e.price.toLocaleString("en-GB")}` : "Quoted"}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <p className="mt-6 rounded-sm border border-paper/10 bg-paper/5 p-4 text-[11px] leading-relaxed text-paper/60">
              This is a rough guide price only. Final pricing depends on access,
              ground conditions, materials, size, electrical requirements and
              installation complexity. Zebra Trades will provide a clear fixed
              quotation following a site survey.
            </p>
          </div>

          <Link
            href={`/contact?service=${encodeURIComponent("Pergolas & Gazebos")}`}
            className="mt-6 flex items-center justify-center gap-2 rounded-sm bg-accent px-5 py-3.5 font-semibold text-paper transition-colors hover:bg-accent-dark"
          >
            Request a Site Survey
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
