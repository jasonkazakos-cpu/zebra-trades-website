// All pergola guide prices in one place — update here to reflect across the site.

export type SizeKey = "small" | "medium" | "large" | "xl";
export type TypeKey = "timber" | "aluminium" | "louvered" | "wall-mounted" | "freestanding";

export const PERGOLA_TYPES: { key: TypeKey; label: string }[] = [
  { key: "timber", label: "Timber Pergola" },
  { key: "aluminium", label: "Aluminium Pergola" },
  { key: "louvered", label: "Louvered Roof Pergola" },
  { key: "wall-mounted", label: "Wall Mounted Pergola" },
  { key: "freestanding", label: "Freestanding Pergola" },
];

export const PERGOLA_SIZES: { key: SizeKey; label: string; sublabel: string }[] = [
  { key: "small", label: "Small", sublabel: "Up to 3m × 3m" },
  { key: "medium", label: "Medium", sublabel: "Up to 4m × 3m" },
  { key: "large", label: "Large", sublabel: "Up to 6m × 3m" },
  { key: "xl", label: "Extra Large / Custom", sublabel: "Custom size" },
];

// null = "Quoted"
export const BASE_PRICES: Record<TypeKey, Record<SizeKey, number | null>> = {
  timber: { small: 1495, medium: 2495, large: 3495, xl: null },
  aluminium: { small: 2995, medium: 4495, large: 6495, xl: null },
  louvered: { small: 4995, medium: 6995, large: 9995, xl: null },
  "wall-mounted": { small: 2495, medium: 3995, large: 5995, xl: null },
  freestanding: { small: 2995, medium: 4995, large: 7495, xl: null },
};

export type Extra = {
  key: string;
  label: string;
  price: number | null; // null = "Quoted"
};

export const EXTRAS: Extra[] = [
  { key: "side-screens", label: "Side Screens", price: 750 },
  { key: "led-lighting", label: "LED Lighting", price: 350 },
  { key: "infrared-heater", label: "Infrared Heater", price: 450 },
  { key: "guttering", label: "Guttering", price: 250 },
  { key: "electrical-supply", label: "Electrical Supply", price: null },
  { key: "composite-decking", label: "Composite Decking Base", price: null },
  { key: "patio-prep", label: "Patio Preparation", price: null },
];

export const GALLERY_ITEMS: { label: string; typeKey: TypeKey; description: string; image?: string; priceOverride?: string }[] = [
  { label: "Timber Garden Pergola", typeKey: "timber", description: "A classic timber pergola — ideal for climbing plants and natural charm.", image: "/images/pergolas/timber-pergola-small-hertfordshire.jpg" },
  { label: "Aluminium Pergola", typeKey: "aluminium", description: "Low-maintenance aluminium frames in a range of powder-coated finishes. Large size with flexible additions.", image: "/images/pergolas/aluminium-pergola-large-cuffley.jpg", priceOverride: "From £4,495 Installed" },
  { label: "Wall Mounted Pergola — Budget Range", typeKey: "wall-mounted", description: "Fixed to the house wall — perfect for extending your outdoor living space.", image: "/images/pergolas/wall-mounted-pergola-aluminium-hertfordshire.jpg", priceOverride: "From £3,495 Installed" },
  { label: "Louvered Roof Pergola", typeKey: "louvered", description: "Adjustable louvres give you full control of shade and ventilation." },
  { label: "Freestanding Pergola", typeKey: "freestanding", description: "A completely self-supporting structure, positioned anywhere in your garden." },
  { label: "Premium Outdoor Living Package", typeKey: "louvered", description: "Louvered roof pergola with lighting, heating, side screens and electrical supply." },
];
