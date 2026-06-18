import { services } from "@/data/services";

export default function SwatchStrip({
  className = "",
  height = "h-2",
}: {
  className?: string;
  height?: string;
}) {
  return (
    <div
      className={`flex w-full overflow-hidden ${height} ${className}`}
      role="presentation"
      aria-hidden="true"
    >
      {services.map((service) => (
        <span
          key={service.slug}
          className="flex-1"
          style={{ backgroundColor: service.swatch }}
        />
      ))}
    </div>
  );
}
