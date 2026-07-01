import type { LucideIcon } from "lucide-react";
import { Wrench, Award, FileSignature, ShieldCheck, Hammer, MapPin, UserCheck, Sparkles, PackageCheck, BadgeCheck } from "lucide-react";
import { siteConfig } from "@/data/site";

export type ValueItem = {
  icon: LucideIcon;
  title: string;
  body: string;
};

const defaultItems: ValueItem[] = [
  {
    icon: Wrench,
    title: `${siteConfig.yearsTrading} Years Trade Experience`,
    body: "Decades of hands-on trade work behind every job we take on, big or small.",
  },
  {
    icon: Award,
    title: `Established ${siteConfig.yearsAsZebra} Years`,
    body: "Zebra Trades has been a trusted name across Cheshunt and Hertfordshire since day one.",
  },
  {
    icon: FileSignature,
    title: "Transparent Pricing",
    body: "Written, fixed-price quotes agreed before we start — no verbal estimates, no surprises.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Service",
    body: "We turn up when we say we will and keep you informed from quote to completion.",
  },
  {
    icon: Hammer,
    title: "Quality Workmanship",
    body: "Every job finished to a high standard, with a tidy site and proper attention to detail.",
  },
  {
    icon: MapPin,
    title: "Local Hertfordshire Business",
    body: "A genuinely local team, based in Cheshunt and working across Hertfordshire every week.",
  },
  {
    icon: BadgeCheck,
    title: "DBS Checked",
    body: "All work carried out by DBS checked tradespeople — safe, professional and trustworthy in your home.",
  },
];

export { Wrench, Award, FileSignature, ShieldCheck, Hammer, MapPin, UserCheck, Sparkles, PackageCheck, BadgeCheck };

export default function ValueProps({ items = defaultItems }: { items?: ValueItem[] }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div key={item.title}>
          <span className="flex size-11 items-center justify-center rounded-sm bg-accent-soft">
            <item.icon className="size-5 text-accent-dark" strokeWidth={1.75} aria-hidden="true" />
          </span>
          <h3 className="mt-4 font-display text-lg font-bold uppercase tracking-tight text-ink">
            {item.title}
          </h3>
          <p className="mt-2 text-sm text-slate leading-relaxed">{item.body}</p>
        </div>
      ))}
    </div>
  );
}
