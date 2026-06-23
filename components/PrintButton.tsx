"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-sm border border-line bg-paper px-4 py-2.5 text-sm font-semibold text-ink hover:border-ink transition-colors"
    >
      Print Comparison Guide
    </button>
  );
}
