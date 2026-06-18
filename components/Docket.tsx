export default function Docket() {
  return (
    <div className="relative mx-auto w-full max-w-sm rotate-1 rounded-md bg-ink text-paper shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45)]">
      <div className="relative px-6 pb-5 pt-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/45">
          Job Docket &middot; No. 00128
        </p>
        <p className="mt-2 font-display text-2xl font-bold uppercase tracking-tight leading-tight">
          Black &amp; White Pricing
        </p>
        <span
          className="absolute -left-3 bottom-[-9px] size-[18px] rounded-full bg-chalk"
          aria-hidden="true"
        />
        <span
          className="absolute -right-3 bottom-[-9px] size-[18px] rounded-full bg-chalk"
          aria-hidden="true"
        />
      </div>

      <div className="border-t border-dashed border-paper/25 px-6 py-6">
        <dl className="space-y-4 font-mono text-sm">
          <div className="flex items-center justify-between border-b border-paper/10 pb-3">
            <dt className="text-paper/55 uppercase text-xs tracking-wide">Quote</dt>
            <dd className="font-semibold">Agreed in writing</dd>
          </div>
          <div className="flex items-center justify-between border-b border-paper/10 pb-3">
            <dt className="text-paper/55 uppercase text-xs tracking-wide">Extras</dt>
            <dd className="font-semibold">None without asking</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-paper/55 uppercase text-xs tracking-wide">Start date</dt>
            <dd className="font-semibold">Confirmed with you</dd>
          </div>
        </dl>

        <div
          className="mt-6 inline-flex -rotate-6 items-center rounded-sm border-2 border-accent px-3 py-1.5 font-display text-sm font-bold uppercase tracking-[0.15em] text-accent"
          aria-hidden="true"
        >
          Fixed Price
        </div>
      </div>
    </div>
  );
}
