export type Service = {
  slug: string;
  title: string;
  icon: string; // lucide-react icon name, mapped in components/icon-map.tsx
  swatch: string; // hex colour for the paint-swatch tag
  teaser: string; // short one-liner for compact cards
  description: string; // longer copy for the services page
  href?: string; // optional dedicated page, falls back to /contact
  // Fields used by service+location dynamic pages
  locationSlug?: string; // override slug used in /[service]/[location] routing
  tagline?: string;
  bullets?: string[];
};

export const services: Service[] = [
  {
    slug: "handyman",
    title: "Handyman",
    icon: "Hammer",
    swatch: "#F2660B",
    teaser: "From a wonky shelf to a full list of odd jobs, sorted in one visit.",
    description: "Our handyman service covers the small jobs that pile up around the house: fixing, fitting, hanging and repairing. Book a Minimum Visit for a single task or a Half or Full Day to work through a longer list.",
    href: "/handyman",
    tagline: "Reliable handyman services — odd jobs, repairs and installations done properly.",
    bullets: ["TV wall mounting", "Flat-pack furniture assembly", "Door fitting and adjustment", "Shelf and picture hanging", "General home repairs", "Half-day and full-day packages"],
  },
  {
    slug: "kitchen-installation",
    title: "Kitchen Installation",
    icon: "Wrench",
    swatch: "#2B5FAD",
    teaser: "Full kitchen fits, from carcasses and worktops to the final tap.",
    description: "We fit complete kitchens from start to finish, including units, worktops, sinks, taps and integrated appliances, working to a fixed price agreed before we begin.",
    href: "/kitchen-installation",
    tagline: "Professional kitchen fitting from strip-out to final fix.",
    bullets: ["Full strip-out and disposal", "Unit and worktop installation", "Sink and waste connection", "Appliance installation", "Works with all major suppliers", "Fixed-price quotations"],
  },
  {
    slug: "pergolas-gazebos",
    locationSlug: "pergolas",
    title: "Pergolas & Gazebos",
    icon: "Umbrella",
    swatch: "#4C9A56",
    teaser: "Built outdoor structures that make more of your garden, year-round.",
    description: "We design and build pergolas and gazebos to suit your garden, giving you a shaded, sheltered space to enjoy outside, built to last through British weather.",
    href: "/pergolas",
    tagline: "Timber and aluminium pergolas and gazebos — designed and built for your garden.",
    bullets: ["Timber and aluminium options", "Freestanding and wall-mounted", "Louvred roof systems", "Integrated lighting available", "Permitted development guidance", "Built to last"],
  },
  {
    slug: "plumbing",
    title: "Plumbing",
    icon: "Droplets",
    swatch: "#2F9BD6",
    teaser: "Leaks, taps, pipework and bathroom plumbing, fixed properly.",
    description: "From a dripping tap to a full bathroom re-pipe, our plumbing service covers repairs, replacements and installations across the home, fully insured and tidy.",
    href: "/plumbing",
    tagline: "General plumbing repairs and installations — taps, toilets, radiators and more.",
    bullets: ["Tap repair and replacement", "Toilet installation", "Radiator repairs and bleeding", "Isolation valve fitting", "Leak investigation", "No hidden call-out charges"],
  },
  {
    slug: "appliance-fitting",
    locationSlug: "appliance-installation",
    title: "Appliance Installation",
    icon: "PlugZap",
    swatch: "#8456A8",
    teaser: "Ovens, washing machines, dishwashers and more, fitted safely.",
    description: "We fit and connect domestic appliances, including ovens, hobs, washing machines, dishwashers and fridge-freezers, and take the old packaging away with us.",
    href: "/appliance-installation",
    tagline: "Professional fitting of washing machines, dishwashers, ovens, hobs and more.",
    bullets: ["Washing machine installation", "Dishwasher fitting", "Electric oven and hob installation", "Integrated appliance fitting", "Transit bolt removal included", "Connection tested before handover"],
  },
  {
    slug: "garden-rooms",
    title: "Garden Rooms",
    icon: "Warehouse",
    swatch: "#B0623C",
    teaser: "A fully built garden room, ready to use as an office, gym or studio.",
    description: "We build insulated garden rooms that give you extra living space without the cost or disruption of an extension, fitted out and ready for power and lighting.",
    href: "/garden-rooms",
    tagline: "Fully insulated garden rooms for home offices, studios and leisure spaces.",
    bullets: ["Fully insulated for year-round use", "Suitable for offices, studios and gyms", "Electrical connection included", "Interior finishing available", "Permitted development advice", "Adds value to your property"],
  },
  {
    slug: "media-walls",
    title: "Media Walls",
    icon: "Flame",
    swatch: "#C2452E",
    teaser: "Bespoke media walls with electric fireplaces, storage and lighting.",
    description: "We design and build bespoke media walls featuring TV recesses, electric fireplaces, integrated storage and LED lighting, finished ready for decoration.",
    href: "/media-walls",
    tagline: "Bespoke media wall construction with electric fireplaces, TV recesses and LED lighting.",
    bullets: ["Bespoke media wall construction", "Electric fireplace installation", "TV recess and mounting", "LED lighting integration", "Hidden cable management", "Supply and install packages"],
  },
  {
    slug: "air-conditioning",
    title: "Air Conditioning",
    icon: "Wind",
    swatch: "#2F9BD6",
    teaser: "Domestic air conditioning supply and installation from qualified engineers.",
    description: "We supply and install domestic split-system air conditioning units suitable for living rooms, bedrooms, home offices and garden rooms. Cooling and heating function available.",
    href: "/services",
    tagline: "Domestic air conditioning supply and installation from qualified engineers.",
    bullets: ["Split-system installation", "Cooling and heating function", "Suitable for all room types", "Qualified engineers", "Supply and install packages", "Garden room installations"],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
