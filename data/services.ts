export type Service = {
  slug: string;
  title: string;
  icon: string; // lucide-react icon name, mapped in components/icon-map.tsx
  swatch: string; // hex colour for the paint-swatch tag
  teaser: string; // short one-liner for compact cards
  description: string; // longer copy for the services page
  href?: string; // optional dedicated page, falls back to /contact
};

export const services: Service[] = [
  {
    slug: "handyman",
    title: "Handyman",
    icon: "Hammer",
    swatch: "#F2660B",
    teaser:
      "From a wonky shelf to a full list of odd jobs, sorted in one visit.",
    description:
      "Our handyman service covers the small jobs that pile up around the house: fixing, fitting, hanging and repairing. Book a Minimum Visit for a single task or a Half or Full Day to work through a longer list.",
    href: "/handyman",
  },
  {
    slug: "kitchen-installation",
    title: "Kitchen Installation",
    icon: "Wrench",
    swatch: "#2B5FAD",
    teaser: "Full kitchen fits, from carcasses and worktops to the final tap.",
    description:
      "We fit complete kitchens from start to finish, including units, worktops, sinks, taps and integrated appliances, working to a fixed price agreed before we begin.",
    href: "/kitchen-installation",
  },
  {
    slug: "kitchen-design-supply",
    title: "Kitchen Design & Supply",
    icon: "PencilRuler",
    swatch: "#0E9594",
    teaser: "Planning and sourcing a new kitchen that fits your space and budget.",
    description:
      "Not sure where to start? We design your new kitchen layout, recommend units and worktops, and supply everything needed, ready for our own installation team to fit.",
    href: "/kitchen-design",
  },
  {
    slug: "pergolas-gazebos",
    title: "Pergolas & Gazebos",
    icon: "Umbrella",
    swatch: "#4C9A56",
    teaser: "Built outdoor structures that make more of your garden, year-round.",
    description:
      "We design and build pergolas and gazebos to suit your garden, giving you a shaded, sheltered space to enjoy outside, built to last through British weather.",
    href: "/pergolas",
  },
  {
    slug: "plumbing",
    title: "Plumbing",
    icon: "Droplets",
    swatch: "#2F9BD6",
    teaser: "Leaks, taps, pipework and bathroom plumbing, fixed properly.",
    description:
      "From a dripping tap to a full bathroom re-pipe, our plumbing service covers repairs, replacements and installations across the home, fully insured and tidy.",
    href: "/plumbing",
  },
  {
    slug: "man-and-van",
    title: "Man and Van",
    icon: "Truck",
    swatch: "#E8A33D",
    teaser: "An extra pair of hands and a van for moves, collections and clearances.",
    description:
      "Need something moved, collected or cleared? Our man and van service helps with house moves, single-item collections and small clearances around Hertfordshire.",
    href: "/man-and-van",
  },
  {
    slug: "appliance-fitting",
    title: "Appliance Installation",
    icon: "PlugZap",
    swatch: "#8456A8",
    teaser: "Ovens, washing machines, dishwashers and more, fitted safely.",
    description:
      "We fit and connect domestic appliances, including ovens, hobs, washing machines, dishwashers and fridge-freezers, and take the old packaging away with us.",
    href: "/appliance-installation",
  },
  {
    slug: "garden-rooms",
    title: "Garden Rooms",
    icon: "Warehouse",
    swatch: "#B0623C",
    teaser: "A fully built garden room, ready to use as an office, gym or studio.",
    description:
      "We build insulated garden rooms that give you extra living space without the cost or disruption of an extension, fitted out and ready for power and lighting.",
    href: "/garden-rooms",
  },
  {
    slug: "air-conditioning",
    title: "Air Conditioning",
    icon: "Wind",
    swatch: "#3FAFC4",
    teaser: "Domestic air conditioning, supplied and installed for hot summers.",
    description:
      "We supply and install domestic air conditioning units, keeping bedrooms, living rooms and home offices comfortable through the warmer months.",
    href: "/air-conditioning",
  },
  {
    slug: "media-walls",
    title: "Media Walls",
    icon: "Flame",
    swatch: "#C2452E",
    teaser: "Bespoke media walls with electric fireplaces, storage and lighting.",
    description:
      "We design and build bespoke media walls featuring TV recesses, electric fireplaces, integrated storage and LED lighting, finished ready for decoration.",
    href: "/media-walls",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
