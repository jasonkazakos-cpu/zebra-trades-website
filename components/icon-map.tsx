import {
  Hammer,
  Wrench,
  PencilRuler,
  Umbrella,
  Droplets,
  Truck,
  PlugZap,
  Warehouse,
  Wind,
  type LucideProps,
} from "lucide-react";

export const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Hammer,
  Wrench,
  PencilRuler,
  Umbrella,
  Droplets,
  Truck,
  PlugZap,
  Warehouse,
  Wind,
};

export function ServiceIcon({
  name,
  className,
  style,
}: {
  name: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const Icon = iconMap[name] ?? Hammer;
  return <Icon className={className} style={style} strokeWidth={1.75} aria-hidden="true" />;
}
