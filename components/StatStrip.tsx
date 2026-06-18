import { siteConfig } from "@/data/site";

const stats = [
  { value: `${siteConfig.yearsTrading}`, label: "Years on the tools" },
  { value: `${siteConfig.yearsAsZebra}`, label: "Years as Zebra Trades" },
  { value: "Insured", label: "Public liability cover" },
  { value: "Local", label: `Based in ${siteConfig.baseTown}` },
];

export default function StatStrip() {
  return (
    <div className="bg-ink-soft">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 px-5 sm:px-8 sm:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center gap-1 py-7 text-center sm:items-start sm:text-left border-paper/10 ${
              i > 0 ? "border-t sm:border-t-0 sm:border-l" : ""
            } sm:px-6`}
          >
            <span className="font-display text-3xl font-bold text-accent">
              {stat.value}
            </span>
            <span className="text-xs uppercase tracking-wide text-paper/70">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
