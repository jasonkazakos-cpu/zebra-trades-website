import { ServiceIcon } from "@/components/icon-map";

export type PricingItem = {
  name: string;
  price: string;
};

export type PricingCategory = {
  title: string;
  icon: string;
  items: PricingItem[];
};

export default function PricingCategoryCard({
  category,
}: {
  category: PricingCategory;
}) {
  return (
    <div className="rounded-sm border border-line bg-paper p-7">
      <div className="flex items-center gap-3">
        <span className="flex size-11 items-center justify-center rounded-sm bg-accent-soft">
          <ServiceIcon name={category.icon} className="size-5 text-accent-dark" />
        </span>
        <h3 className="font-display text-lg font-bold uppercase tracking-tight text-ink">
          {category.title}
        </h3>
      </div>

      <div className="mt-5 grid gap-x-8 sm:grid-cols-2">
        {category.items.map((item) => (
          <div
            key={item.name}
            className="flex items-baseline justify-between gap-4 border-b border-line py-2.5 text-sm"
          >
            <span className="text-ink-soft">{item.name}</span>
            <span className="whitespace-nowrap font-mono font-semibold text-ink">
              {item.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
