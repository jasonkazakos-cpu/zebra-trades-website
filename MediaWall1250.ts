export const MediaWall1250 = {
  id: "MediaWall1250",
  slug: "media-wall-1250",
  name: "Media Wall 1250",
  brand: "FIREZ",
  model: "1250",
  category: "Media Wall Electric Fire",
  collection: "Media Walls",
  featured: true,
  images: {
    sales: "/images/media-walls/MediaWall1250/MediaWall1250-Sales.jpg",
    gallery: [
      "/images/media-walls/MediaWall1250/MediaWall1250-Scene-1.jpg",
      "/images/media-walls/MediaWall1250/MediaWall1250-Scene-2.jpg",
    ],
    specSheet:
      "/images/media-walls/MediaWall1250/MediaWall1250-Spec-Sheet.jpg",
  },
  pricing: {
    supplyAndInstallFrom: 3390,
    supplyOnly: 1590,
    currency: "GBP",
  },
  description: `The Media Wall 1250 is the perfect choice for homeowners looking to create a stunning media wall without overwhelming the room. Its sleek proportions make it ideal for smaller living spaces while still delivering an impressive centrepiece.

Featuring one of the most realistic 3D reflective flame effects available, the Media Wall 1250 creates the warmth and ambience of a real wood-burning fire—without the mess, maintenance or inconvenience.`,
  features: [
    "Ultra-realistic 3D flame technology",
    "Remote control included",
    "Smartphone app control",
    "Alexa voice control compatibility",
    "Manual push-button controls",
    "Multiple flame colour options",
    "Adjustable ember bed and overhead lighting colours",
    "Choice of 1, 2 or 3-sided panoramic glass",
    "High-definition interchangeable log fuel bed included",
    "Optional upgrade to a deluxe real log fuel bed",
    "2.0kW heater",
    "Full manufacturer warranty",
  ],
  dimensionsMm: {
    height: 616.5,
    width: 1280,
    depth: 333,
  },
  heatOutputKw: 2.0,
  glassOptions: [1, 2, 3],
  closingText: `Whether you're creating a contemporary feature wall or a cosy living room focal point, the Media Wall 1250 offers exceptional flexibility and style. Customise the flame colours and lighting to match your mood and enjoy a fireplace that's beautiful all year round—even without the heat.`,
  callToAction:
    "Available from Zebra Trades with supply only or professional installation.",
} as const;

export default MediaWall1250;
