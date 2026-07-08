export type GuideCategory = {
  slug: string;
  label: string;
  icon: string;
  description: string;
};

export type Guide = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingTime: number;
  publishedAt: string;
  sections: { heading: string; body: string }[];
  relatedSlugs?: string[];
};

export const categories: GuideCategory[] = [
  { slug: "handyman", label: "Handyman", icon: "Hammer", description: "Practical tips on door fitting, flat-pack assembly, TV mounting and general home repairs." },
  { slug: "kitchen-installation", label: "Kitchen Installation", icon: "CookingPot", description: "Everything you need to know before fitting a new kitchen, from planning to sign-off." },
  { slug: "plumbing", label: "Plumbing", icon: "Droplets", description: "Guidance on taps, toilets, radiators, leaks and when to call a plumber." },
  { slug: "appliance-installation", label: "Appliance Installation", icon: "PlugZap", description: "How to prepare for appliance deliveries and what's involved in professional fitting." },
  { slug: "garden-rooms", label: "Garden Rooms", icon: "TreePine", description: "Planning, insulation, electrics and what to expect when adding a garden room." },
  { slug: "pergolas", label: "Pergolas & Gazebos", icon: "Sun", description: "Choosing the right structure, foundations, and maintenance for outdoor shade." },
  { slug: "fencing", label: "Fencing & Gates", icon: "Fence", description: "Post types, panel styles, heights and how to get a fence that lasts." },
  { slug: "costs", label: "Costs & Pricing", icon: "BadgePoundSterling", description: "Transparent breakdowns of typical trade costs across all our services." },
  { slug: "diy-vs-trade", label: "DIY vs Trade", icon: "ShieldCheck", description: "When to tackle it yourself and when it pays to bring in a professional." },
  { slug: "home-maintenance", label: "Home Maintenance", icon: "Wrench", description: "Seasonal checklists and preventative tips to keep your home in good shape." },
];

export const guides: Guide[] = [
  {
    slug: "how-much-does-a-handyman-cost",
    title: "How Much Does a Handyman Cost in Hertfordshire?",
    excerpt: "From a single odd job to a full day on site — a transparent breakdown of handyman pricing in Cheshunt and across Hertfordshire.",
    category: "costs",
    readingTime: 5,
    publishedAt: "2025-01-10",
    sections: [
      {
        heading: "What Affects Handyman Pricing?",
        body: "Handyman costs vary depending on the type of job, how long it takes and whether specialist tools or materials are needed. Most handymen charge either a fixed price per job or an hourly rate, with a minimum call-out to cover travel and set-up time.",
      },
      {
        heading: "Typical Handyman Rates in Hertfordshire",
        body: "In the Cheshunt and Hertfordshire area, expect to pay a minimum call-out of around £65–£85 for a single job. Hourly rates beyond the first hour typically sit between £40–£55. At Zebra Trades, our minimum visit is £75 and additional labour is charged at £45 per hour.",
      },
      {
        heading: "Fixed-Price Jobs vs Day Rates",
        body: "Many handymen — including Zebra Trades — offer fixed prices for common jobs like door fitting (from £120), TV wall mounting (from £120) and flat-pack assembly (from £75). If you have a list of jobs, booking a half-day (£185) or full-day (£320) visit often works out better value than paying per task.",
      },
      {
        heading: "What's Included?",
        body: "A good handyman will agree the price with you before starting. Standard fittings (screws, rawlplugs, fixings) are usually included. Specialist materials — replacement locks, timber, panel board — are typically charged separately and confirmed upfront.",
      },
      {
        heading: "Getting a Fair Quote",
        body: "Always ask for a written quote before work starts. Reputable tradespeople are fully insured and will be happy to provide one. Be wary of anyone who refuses to confirm a price in advance or asks for large cash payments upfront.",
      },
    ],
    relatedSlugs: ["how-to-prepare-for-a-handyman-visit", "diy-vs-trade-tv-wall-mounting"],
  },
  {
    slug: "how-to-prepare-for-a-handyman-visit",
    title: "How to Prepare for a Handyman Visit",
    excerpt: "A few simple steps before your handyman arrives can save time and help the job go smoothly — here's what to do.",
    category: "handyman",
    readingTime: 4,
    publishedAt: "2025-01-17",
    sections: [
      {
        heading: "Make a Clear List",
        body: "Write down every job you'd like done in priority order. If you're booking a half-day or full-day visit, the tradesperson will work through as much as possible — a clear list means nothing gets forgotten.",
      },
      {
        heading: "Have Materials Ready Where Possible",
        body: "If you've already bought a replacement tap, door handle or blind, have it out of its packaging and in the room where it needs fitting. This saves time and avoids the job being delayed.",
      },
      {
        heading: "Clear Access to the Work Area",
        body: "Move furniture, ornaments or appliances away from the area to be worked on. For loft jobs, clear a path to the hatch. For outdoor fencing, make sure the gate or panel area is accessible.",
      },
      {
        heading: "Know Where Your Stopcock Is",
        body: "If any plumbing is involved — even just replacing a tap — know where your main water stopcock is located. It's usually under the kitchen sink or in a cupboard near the front door.",
      },
      {
        heading: "Be There or Nominate Someone",
        body: "Someone over 18 should be present for the visit. If you can't be there, a family member or neighbour can let the tradesperson in — just make sure they know which jobs need doing.",
      },
    ],
    relatedSlugs: ["how-much-does-a-handyman-cost", "diy-vs-trade-tv-wall-mounting"],
  },
  {
    slug: "diy-vs-trade-tv-wall-mounting",
    title: "TV Wall Mounting: DIY vs Calling a Professional",
    excerpt: "Mounting a TV looks straightforward but there are several ways it can go wrong — here's when DIY makes sense and when it's worth getting help.",
    category: "diy-vs-trade",
    readingTime: 5,
    publishedAt: "2025-01-24",
    sections: [
      {
        heading: "When DIY TV Mounting is Fine",
        body: "If you're mounting a TV under 55 inches onto a solid brick or block wall, and you're confident using a drill and stud finder, DIY is perfectly reasonable. You'll need a spirit level, the right wall plugs for your wall type, and a bracket rated for your TV's weight and VESA pattern.",
      },
      {
        heading: "When to Call a Professional",
        body: "Plasterboard (stud) walls need specialist fixings or reinforcement — a standard wall plug will pull straight through. TVs over 55 inches on plasterboard often need noggins added inside the wall. If you're not sure what's behind your wall, or if cable management behind the wall is needed, it's worth calling in a professional.",
      },
      {
        heading: "The Hidden Cable Problem",
        body: "Many customers want cables hidden inside the wall for a clean finish. This involves cutting channels in plaster, which requires skill to do neatly and safely without hitting cables or pipes. A handyman can do this as part of the mounting job.",
      },
      {
        heading: "What Does Professional TV Mounting Cost?",
        body: "In the Hertfordshire area, professional TV mounting typically costs from £120 for a standard installation on plasterboard or brick for TVs up to 55 inches, and from £140 for larger screens. This includes the bracket (or you can supply your own), levelling and basic cable tidying.",
      },
      {
        heading: "Our Recommendation",
        body: "If it's a straightforward brick wall and a TV under 50 inches, confident DIYers can absolutely do this themselves. For anything on plasterboard, over 55 inches, or where cables need to be hidden inside the wall, the professional cost is modest and avoids the risk of a TV coming off the wall.",
      },
    ],
    relatedSlugs: ["how-much-does-a-handyman-cost", "how-to-prepare-for-a-handyman-visit"],
  },
  {
    slug: "how-to-plan-a-new-kitchen",
    title: "How to Plan a New Kitchen: A Step-by-Step Guide",
    excerpt: "From measuring up to choosing worktops — a practical guide to planning a kitchen installation without the stress.",
    category: "kitchen-installation",
    readingTime: 7,
    publishedAt: "2025-02-07",
    sections: [
      {
        heading: "Start With a Measured Survey",
        body: "Accurate measurements are the foundation of any kitchen project. Measure the full width and height of each wall, mark the position of doors, windows, radiators, gas and water supplies, and any soil pipes. It's worth doing this twice and having a professional check before ordering anything.",
      },
      {
        heading: "Choose Your Layout First",
        body: "The most common kitchen layouts are galley (two runs of units facing each other), L-shape, U-shape and island. Your layout is determined by the size and shape of the room. Choose this before selecting units — the layout drives everything else.",
      },
      {
        heading: "Setting Your Budget",
        body: "Kitchen costs vary widely. A flatpack kitchen from a retailer like Howdens or Wren fitted by a professional installer typically costs less than a fully bespoke cabinet order. Budget separately for units, worktops, appliances, plumbing, electrics and fitting labour — they're all separate costs.",
      },
      {
        heading: "Order of Work",
        body: "A kitchen installation follows a set sequence: strip out, first fix plumbing and electrics, plastering if needed, unit installation, worktop templating and fitting, second fix plumbing, second fix electrics, appliance installation, tiling, finishing. Skipping or reversing steps causes problems.",
      },
      {
        heading: "Lead Times to Plan For",
        body: "Flatpack kitchens from Howdens or Wickes can often be delivered within a week. Rigid or painted kitchens may take 4–8 weeks. Quartz or granite worktops need templating after units are fitted, then a 2–3 week fabrication lead time. Plan the full sequence before booking your fitter.",
      },
      {
        heading: "What a Kitchen Fitter Does",
        body: "A professional kitchen fitter assembles and installs carcasses, doors and drawers, scribes units to uneven walls, cuts and fits worktops, installs sinks, and connects appliances. They do not carry out gas work (which requires a Gas Safe engineer) or structural electrical work (which requires a qualified electrician).",
      },
    ],
    relatedSlugs: ["how-much-does-kitchen-installation-cost", "howdens-vs-wren-kitchens"],
  },
  {
    slug: "how-much-does-kitchen-installation-cost",
    title: "How Much Does Kitchen Installation Cost in Hertfordshire?",
    excerpt: "A transparent guide to kitchen fitting costs in the Cheshunt area — what's included, what isn't, and how to budget accurately.",
    category: "costs",
    readingTime: 6,
    publishedAt: "2025-02-14",
    sections: [
      {
        heading: "What Does Kitchen Fitting Cost?",
        body: "Kitchen installation costs in Hertfordshire vary depending on the size of the kitchen and scope of work. A standard 10-unit kitchen typically costs from £900–£1,400 in labour alone for strip-out and installation. Larger kitchens or those with complex layouts, islands or extensive modifications cost more.",
      },
      {
        heading: "What's Included in a Fitting Quote",
        body: "A fitting quote from Zebra Trades includes: strip-out and disposal of the old kitchen, assembly and installation of all base and wall units, worktop cutting and fitting (laminate), sink installation and waste connection, and appliance connections (electric only). Gas connections require a separate Gas Safe engineer.",
      },
      {
        heading: "What's Not Included",
        body: "Kitchen fitting labour does not include: the cost of units, worktops or appliances themselves; plasterwork; tiling; rewiring or consumer unit upgrades; gas work; or structural changes. These are all priced separately.",
      },
      {
        heading: "Worktop Costs",
        body: "Laminate worktops cut and fitted by the fitter are included in most standard fitting quotes. Quartz, granite or solid wood worktops are templated and fabricated by specialist worktop companies — expect to pay separately for template, fabrication and fitting, typically £400–£900+ depending on material and length.",
      },
      {
        heading: "How to Get an Accurate Quote",
        body: "To get an accurate quote, share your kitchen plan (a drawing with dimensions and unit positions), the supplier your units are from, and the worktop material. The fitter can then quote per carcass, per worktop run and for any additional carpentry or modification work.",
      },
    ],
    relatedSlugs: ["how-to-plan-a-new-kitchen", "howdens-vs-wren-kitchens"],
  },
  {
    slug: "howdens-vs-wren-kitchens",
    title: "Howdens vs Wren: Which Kitchen Brand Is Right for You?",
    excerpt: "The two most popular kitchen suppliers in the UK — compared honestly so you can make the right choice for your home and budget.",
    category: "kitchen-installation",
    readingTime: 6,
    publishedAt: "2025-02-21",
    sections: [
      {
        heading: "How They Work",
        body: "Howdens sells trade-only through local depots — you buy through a fitter who has a trade account. Wren sells direct to consumers through showrooms. Both supply flatpack and rigid units in a wide range of styles.",
      },
      {
        heading: "Price Comparison",
        body: "Howdens pricing is trade-only and varies by depot and relationship. Wren's pricing is displayed in showrooms and online with regular promotions. Neither is inherently cheaper — the final price depends on your specific layout and choices. Always price both before committing.",
      },
      {
        heading: "Quality",
        body: "Both Howdens and Wren produce well-made kitchens at their respective price points. Howdens cabinets are generally considered to have a slight edge on carcass quality at the entry level, but Wren offers more door styles and finishes in their showroom range. Both come with warranties.",
      },
      {
        heading: "Lead Times",
        body: "Howdens depots typically hold stock locally, meaning shorter lead times — sometimes 1–2 weeks. Wren kitchens are often made to order, with lead times of 4–8 weeks. If speed is important, Howdens has the advantage.",
      },
      {
        heading: "Design Support",
        body: "Wren offers free in-store design consultations. Howdens design is done through your fitter, who will plan the layout based on your measurements. If you want to see the design in 3D before committing, both offer this — Wren in-store, Howdens through your fitter's software.",
      },
      {
        heading: "Our Recommendation",
        body: "If you're working with a professional fitter and lead time matters, Howdens is a solid choice. If you want to browse a showroom, see samples in person and manage the purchase yourself, Wren gives you more control. We install both — and many other brands.",
      },
    ],
    relatedSlugs: ["how-to-plan-a-new-kitchen", "how-much-does-kitchen-installation-cost"],
  },
  {
    slug: "when-to-call-a-plumber",
    title: "When to Call a Plumber and When to DIY",
    excerpt: "Some plumbing jobs are straightforward DIY; others carry real risk if you get them wrong. Here's how to tell the difference.",
    category: "diy-vs-trade",
    readingTime: 5,
    publishedAt: "2025-03-07",
    sections: [
      {
        heading: "Jobs You Can Safely DIY",
        body: "Replacing a toilet seat, changing a showerhead, unblocking a slow-draining sink with a plunger or drain cleaner, or re-sealing around a bath are all jobs most competent DIYers can tackle safely. No specialist tools or knowledge are needed.",
      },
      {
        heading: "Jobs That Need a Plumber",
        body: "Replacing a tap washer or isolating valve, repairing a leaking pipe, installing a new toilet or replacing a shower valve — these jobs require isolating the water supply correctly and working with compression or push-fit fittings. A leak caused by incorrect fitting can cause significant damage before it's noticed.",
      },
      {
        heading: "Jobs That Must Go to a Specialist",
        body: "Any work on a gas boiler or gas supply must be carried out by a Gas Safe registered engineer — it's a legal requirement. Mains pressure systems, unvented cylinders and anything involving the cold mains supply should also be handled by a qualified plumber.",
      },
      {
        heading: "The Cost of Getting It Wrong",
        body: "A plumber fixing a problem caused by incorrect DIY work will cost more than if they'd done the job in the first place — because they first have to undo the incorrect work. Insurance policies may also not cover water damage caused by DIY plumbing that wasn't done correctly.",
      },
      {
        heading: "What Plumber Call-Out Costs Look Like",
        body: "In the Cheshunt and Hertfordshire area, a minimum plumber call-out is typically £75, covering a single job like a tap washer or minor leak repair. More involved work — shower valve replacement, toilet installation — typically costs £175–£325 in labour.",
      },
    ],
    relatedSlugs: ["how-much-does-a-handyman-cost", "how-to-prepare-for-a-handyman-visit"],
  },
  {
    slug: "how-to-install-a-washing-machine",
    title: "How to Install a Washing Machine: What's Involved",
    excerpt: "A look at what professional washing machine installation involves — and what to check before your new machine arrives.",
    category: "appliance-installation",
    readingTime: 4,
    publishedAt: "2025-03-14",
    sections: [
      {
        heading: "Before the Machine Arrives",
        body: "Check that your existing water supply (hot and/or cold inlet) and waste outlet are accessible and in working order. Measure the space — standard washing machines are 60cm wide, 85cm tall and 55–65cm deep. Check that the door clearance will allow the machine to be slid in and connected.",
      },
      {
        heading: "What Installation Involves",
        body: "A professional installation includes connecting the inlet hose to the water supply, connecting the waste to the standpipe or sink waste, levelling the machine, removing the transit bolts (essential — missed transit bolts cause the machine to vibrate violently and can damage the drum), and running a short test cycle.",
      },
      {
        heading: "Transit Bolts — Don't Forget",
        body: "Transit bolts are fitted inside the drum at the factory to protect the drum during transport. They must be removed before the machine is run. Your installation engineer will do this as standard, but if you're fitting the machine yourself, check the manual — the bolts are usually red or yellow and accessed from the back.",
      },
      {
        heading: "Integrated Machines",
        body: "Integrated washing machines fit inside a kitchen cabinet with a door panel that matches the rest of the kitchen. Installation takes longer because the door hinge, door panel and cable routing all need to be fitted correctly. Expect to pay a little more for integrated appliance installation.",
      },
      {
        heading: "Do You Need a Plumber?",
        body: "A standard washing machine installation to existing connections is not a plumbing job — a general handyman or appliance installer can do it. If new pipework is needed, or the existing supply is not accessible, a plumber will be needed for that part of the job.",
      },
    ],
    relatedSlugs: ["how-much-does-a-handyman-cost"],
  },
];
