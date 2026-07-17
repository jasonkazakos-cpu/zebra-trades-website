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
  seoTitle?: string;
  seoDescription?: string;
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
  {
    slug: "handyman-guide-10-simple-home-repairs",
    title: "Handyman Guide: 10 Simple Home Repairs Every Homeowner Should Know",
    excerpt: "Keeping your home in good condition doesn't always require expensive renovations. Many common household problems can be prevented with routine maintenance and by tackling small repairs before they become bigger, more costly issues.",
    category: "handyman",
    readingTime: 5,
    publishedAt: "2025-07-17",
    seoTitle: "10 Simple Handyman Repairs Every Homeowner Should Know | Zebra Trades",
    seoDescription: "Learn 10 simple handyman repairs and home maintenance tips that can save you money. Expert advice from Zebra Trades serving Hertfordshire and surrounding areas.",
    sections: [
      {
        heading: "Stop Squeaky Doors",
        body: "A squeaky door is usually caused by dry hinges. Apply a small amount of silicone spray or light machine oil to the hinge pins and open and close the door several times. Avoid using cooking oil as it attracts dirt and dust. If the door has dropped or no longer closes properly, it may need adjusting rather than just lubricating.",
      },
      {
        heading: "Tighten Loose Door Handles",
        body: "Door handles naturally work loose over time through daily use. Every few months, check the fixing screws and tighten them with a screwdriver. If the screws no longer grip properly, they may need replacing or the fixing holes may need repairing.",
      },
      {
        heading: "Fix Small Wall Holes",
        body: "Picture hooks, curtain poles and accidental knocks often leave small holes in plaster. For holes under 10mm, remove any loose material, fill with a quality decorator's filler, allow to dry completely, sand smooth, then touch up with matching paint. Small repairs completed quickly stop damage becoming more noticeable.",
      },
      {
        heading: "Keep Silicone Seals in Good Condition",
        body: "Bathroom and kitchen sealant protects against water damage. If you notice black mould, peeling silicone or gaps around baths or showers, replace the sealant before water gets behind the tiles or units.",
      },
      {
        heading: "Check Your Smoke Alarms",
        body: "Smoke alarms should be tested every month. Replace batteries when required and replace the entire alarm according to the manufacturer's recommendations — usually every 10 years. This is one of the simplest but most important maintenance jobs in any home.",
      },
      {
        heading: "Don't Ignore Sticking Doors",
        body: "If internal doors begin sticking, don't force them. The cause could be seasonal timber movement, loose hinges, house settlement or humidity. Early adjustment is usually quick and inexpensive — leaving it often leads to a bigger repair.",
      },
      {
        heading: "Prevent Flat-Pack Furniture Becoming Loose",
        body: "Wardrobes, beds and cabinets gradually loosen through everyday use. Every six months, tighten bolts, check brackets, inspect drawer runners and adjust door hinges. Regular maintenance dramatically increases furniture life.",
      },
      {
        heading: "Clean Extractor Fans",
        body: "Bathroom and kitchen extractor fans collect dust surprisingly quickly. A dirty fan removes less moisture, increasing the risk of condensation, damp and mould. Vacuum the grille regularly and clean accessible parts with a damp cloth.",
      },
      {
        heading: "Inspect External Sealants",
        body: "Take a walk around your home every spring and autumn. Check sealant around windows, doors and external pipework. If sealant has cracked or separated, replacing it early prevents water ingress and costly repairs later.",
      },
      {
        heading: "Know When to Call a Professional",
        body: "DIY can save money, but some jobs are better left to experienced tradespeople. Consider professional help for TV wall mounting, internal door fitting, kitchen installation, plumbing repairs, electrical work, heavy shelving, large flat-pack furniture and media wall construction. A properly completed installation is usually safer, lasts longer and often saves money by avoiding mistakes.",
      },
      {
        heading: "Why Choose Zebra Trades?",
        body: "At Zebra Trades, we believe in doing every job properly, whether it's fitting a single shelf or installing a complete media wall. We offer honest, transparent pricing, professional workmanship, friendly reliable service, high-quality materials, clean and tidy installations, and free no-obligation quotations. No matter the size of your project, we're here to help keep your home looking its best.",
      },
      {
        heading: "Need a Handyman in Hertfordshire?",
        body: "If you'd rather leave the hard work to a professional, Zebra Trades provides reliable handyman services throughout Hertfordshire and the surrounding areas. From door fitting and TV wall mounting to flat-pack assembly, shelving, home repairs and bespoke media wall installations, we're ready to help. Contact Zebra Trades today for a free quotation and expert advice on your next home improvement project.",
      },
    ],
    relatedSlugs: ["how-much-does-a-handyman-cost", "how-to-prepare-for-a-handyman-visit", "diy-vs-trade-tv-wall-mounting"],
  },
  {
    slug: "how-to-fix-a-dripping-tap",
    title: "How to Fix a Dripping Tap: Causes, Costs and When to Call a Plumber",
    excerpt: "A dripping tap wastes more water than most people realise and can cost you money on your water bill. Here's what causes it, what's involved in fixing it, and when it's worth calling a professional.",
    category: "plumbing",
    readingTime: 5,
    publishedAt: "2025-07-17",
    seoTitle: "How to Fix a Dripping Tap | Plumbing Guide | Zebra Trades Hertfordshire",
    seoDescription: "Find out what causes a dripping tap, how to fix it and when to call a plumber. Expert plumbing advice from Zebra Trades serving Hertfordshire.",
    sections: [
      {
        heading: "Why a Dripping Tap Is Worth Fixing Quickly",
        body: "A tap that drips once per second wastes over 30 litres of water a day — more than 10,000 litres a year. Beyond the environmental cost, if you're on a water meter that's money going straight down the drain. A dripping hot water tap also wastes the energy used to heat that water. The good news is that most dripping taps are caused by worn internal parts that are inexpensive to replace.",
      },
      {
        heading: "What Causes a Tap to Drip?",
        body: "The most common cause is a worn tap washer — a small rubber disc inside the tap body that presses against a valve seat to stop water flow. Over time the washer hardens, cracks or wears away and can no longer form a watertight seal. On newer ceramic disc taps, a cracked or worn ceramic cartridge is usually the culprit. Other causes include a damaged valve seat, worn O-rings around the cartridge or spindle, or high water pressure forcing water past worn components.",
      },
      {
        heading: "Traditional Taps vs Ceramic Disc Taps",
        body: "Traditional pillar taps use a rubber washer on a threaded spindle. They require multiple turns to open and close and the washer is straightforward to replace. Ceramic disc taps use a ceramic cartridge and only require a quarter turn to operate. They are generally more durable but when they do fail the entire cartridge usually needs replacing. Knowing which type you have helps you buy the right replacement part before starting the job.",
      },
      {
        heading: "Replacing a Tap Washer: What's Involved",
        body: "The water supply to the tap must first be isolated — either at the isolating valve beneath the sink or at the main stopcock. The tap handle and headgear are then removed to access the washer, which is unscrewed and replaced. The tap is reassembled and the water turned back on to check the repair. The parts cost pennies. The job typically takes 30–60 minutes for someone familiar with it, but can take longer if the tap is old, corroded or in an awkward location.",
      },
      {
        heading: "When to Call a Plumber",
        body: "Call a professional if you cannot locate or operate the isolating valve, if the tap is corroded and parts are seized, if the drip is coming from the base of the tap rather than the spout (indicating a worn O-ring or a more involved repair), or if you replace the washer and the tap still drips. A plumber will also advise whether an old tap is worth repairing or whether replacement is the better long-term option.",
      },
      {
        heading: "What Does a Dripping Tap Repair Cost?",
        body: "In the Hertfordshire area, a plumber call-out to repair a dripping tap typically starts from £75, covering the visit and a washer or cartridge replacement on a standard tap. If the valve seat is damaged or the tap needs replacing, expect to pay more for parts and additional labour. Getting it fixed promptly is almost always cheaper than leaving it.",
      },
    ],
    relatedSlugs: ["when-to-call-a-plumber", "how-to-prepare-for-a-handyman-visit"],
  },
  {
    slug: "how-to-bleed-a-radiator",
    title: "How to Bleed a Radiator: A Step-by-Step Guide",
    excerpt: "If your radiator is cold at the top but warm at the bottom, it almost certainly needs bleeding. Here's exactly how to do it safely, and what to do if the problem comes back.",
    category: "plumbing",
    readingTime: 4,
    publishedAt: "2025-07-17",
    seoTitle: "How to Bleed a Radiator: Step-by-Step Guide | Zebra Trades Hertfordshire",
    seoDescription: "Learn how to bleed a radiator safely and efficiently. Step-by-step plumbing guide from Zebra Trades, serving Cheshunt and Hertfordshire.",
    sections: [
      {
        heading: "Why Radiators Need Bleeding",
        body: "Air gets into central heating systems over time — through the water supply, through micro-leaks or when the system is drained and refilled. Air rises to the top of the radiator and stops hot water filling that space, leaving the top of the radiator cold while the bottom remains warm. The boiler has to work harder to heat the room and your energy bills go up. Bleeding releases the trapped air and allows the radiator to heat evenly again.",
      },
      {
        heading: "What You Will Need",
        body: "You need a radiator bleed key — a small square-ended tool available from any hardware shop for under £1 — and a cloth or small container to catch any water that drips out. Some modern radiators have a slot-head bleed valve that can be turned with a flat-head screwdriver instead.",
      },
      {
        heading: "Step 1 — Identify Which Radiators Need Bleeding",
        body: "Turn your heating on and let the system reach full temperature. Run your hand along each radiator from top to bottom. Any radiator that feels cold at the top but warm at the bottom has trapped air and needs bleeding. Make a note of which radiators need attention before turning the heating off and allowing the system to cool for at least 30 minutes — never bleed a pressurised hot system.",
      },
      {
        heading: "Step 2 — Bleed Each Radiator",
        body: "Hold your cloth beneath the bleed valve at the top corner of the radiator. Insert the bleed key and turn it slowly anti-clockwise by a quarter to half a turn. You will hear a hissing sound as air escapes. When the hissing stops and a steady trickle of water appears, close the valve immediately by turning clockwise. Do not over-tighten. Start with the radiators furthest from the boiler and work towards it.",
      },
      {
        heading: "Step 3 — Check the Boiler Pressure",
        body: "After bleeding, check the pressure gauge on your boiler. Bleeding releases trapped air and the system loses a small amount of water, which can cause pressure to drop. Most combi boilers should read between 1 and 1.5 bar when cold. If it has dropped below 1 bar, top up via the filling loop — a flexible hose usually beneath the boiler — until pressure reaches 1.2 bar, then close both valves. Check your boiler manual if you are unsure.",
      },
      {
        heading: "If the Problem Keeps Coming Back",
        body: "If you find yourself bleeding the same radiators repeatedly, air is entering the system faster than normal. Common causes include a faulty automatic air vent, a small leak drawing air in, or internal corrosion producing hydrogen gas. A plumber can diagnose the root cause and may recommend a power flush and inhibitor treatment to clean and protect the system. Leaving recurring air problems untreated accelerates corrosion and can shorten the life of your boiler.",
      },
    ],
    relatedSlugs: ["when-to-call-a-plumber", "how-to-fix-a-dripping-tap"],
  },
  {
    slug: "do-you-need-planning-permission-for-a-garden-room",
    title: "Do You Need Planning Permission for a Garden Room?",
    excerpt: "Most garden rooms fall under permitted development and don't need planning permission — but there are rules. Here's what you need to know before you build.",
    category: "garden-rooms",
    readingTime: 5,
    publishedAt: "2025-07-17",
    seoTitle: "Do You Need Planning Permission for a Garden Room? | Zebra Trades Hertfordshire",
    seoDescription: "Find out if your garden room needs planning permission. Clear guidance on permitted development rules from Zebra Trades, serving Hertfordshire.",
    sections: [
      {
        heading: "The Good News: Most Garden Rooms Don't Need Permission",
        body: "In England, garden rooms are classed as outbuildings and are usually covered by permitted development rights — meaning you can build without applying for planning permission, as long as your project falls within certain limits. The majority of residential garden rooms meet these criteria without any issue.",
      },
      {
        heading: "The Key Permitted Development Rules",
        body: "To qualify under permitted development, your garden room must not cover more than 50% of the total land area surrounding the original house (including any other outbuildings). It must be single storey with a maximum eaves height of 2.5 metres and a maximum overall height of 4 metres with a dual-pitched roof, or 3 metres for any other roof type. It must not be used as a dwelling — meaning no sleeping overnight as a permanent residence.",
      },
      {
        heading: "Siting and Boundary Rules",
        body: "If any part of your garden room is within 2 metres of your property boundary, the maximum height drops to 2.5 metres. Garden rooms must be located behind the principal elevation of the house — in most cases this means behind the front wall of the property. Side returns and rear gardens are typically fine. Front gardens are not covered by permitted development.",
      },
      {
        heading: "When You Will Need Planning Permission",
        body: "You will need to apply for planning permission if your property is a listed building, if it sits within a conservation area, a National Park, an Area of Outstanding Natural Beauty or the Broads, or if previous development has already used up your 50% allowance. Permitted development rights can also be removed by conditions attached to the original planning consent for your home — worth checking if your property is on a newer estate.",
      },
      {
        heading: "What About Building Regulations?",
        body: "Planning permission and building regulations are separate things. Most garden rooms under 15 square metres are exempt from building regulations entirely. Between 15 and 30 square metres, building regulations apply if the structure contains sleeping accommodation, or if it is not at least one metre from the boundary. Above 30 square metres, full building regulations approval is required regardless. Even where exempt, a well-built garden room should meet the spirit of the regulations for safety and longevity.",
      },
      {
        heading: "Our Advice",
        body: "Before committing to a design, check whether your permitted development rights are intact — your local planning authority can confirm this quickly. If your project is borderline, a lawful development certificate gives you a formal record that no permission was needed, which protects you when you come to sell the property. At Zebra Trades we can advise on typical requirements for garden rooms in the Hertfordshire area and help ensure your build is compliant from day one.",
      },
    ],
    relatedSlugs: ["how-much-does-a-garden-room-cost", "what-to-consider-before-building-a-garden-room"],
  },
  {
    slug: "what-to-consider-before-building-a-garden-room",
    title: "What to Consider Before Building a Garden Room",
    excerpt: "A garden room can add valuable space and increase your property value — but there are several practical decisions to make before you start. Here's what to think through first.",
    category: "garden-rooms",
    readingTime: 6,
    publishedAt: "2025-07-17",
    seoTitle: "What to Consider Before Building a Garden Room | Zebra Trades Hertfordshire",
    seoDescription: "Planning a garden room? Here's everything to consider before you build — size, insulation, electrics, foundations and more. Advice from Zebra Trades, Hertfordshire.",
    sections: [
      {
        heading: "What Will You Use It For?",
        body: "The intended use of your garden room should drive every other decision. A home office has different requirements to a gym, a studio or a games room. An office used year-round needs good insulation, heating and fast broadband. A gym needs ventilation and durable flooring. A hobby space may need extra power sockets and lighting. Being clear on the purpose before you start avoids expensive changes later.",
      },
      {
        heading: "Size and Positioning",
        body: "Consider how much space you actually need, not just what fits in the garden. A room that is too small becomes frustrating quickly. Think about natural light — south or west facing positions get the most sunlight, but heavy summer sun through glazing can overheat the space without shade or ventilation. Also consider the view from the main house, privacy from neighbours, and the distance you'll be walking from the back door in bad weather.",
      },
      {
        heading: "Insulation Is Not Optional",
        body: "If you intend to use the garden room throughout the year — including winter — insulation is essential. A poorly insulated room is expensive to heat and uncomfortable to work in. Look for insulated panels or frames with insulation between the structural timbers in the walls, floor and roof. The higher the insulation value (measured in U-values), the cheaper the running costs. Don't let a supplier skip this — cheap upfront usually means cold and costly year-round.",
      },
      {
        heading: "Foundations and Ground Conditions",
        body: "Most garden rooms are built on timber frame supports, concrete pads or screw pile foundations. The right choice depends on your garden's ground conditions, slope and any tree roots nearby. Timber bearers on concrete pads are common and cost-effective on flat ground. Screw piles are faster to install and better suited to sloped or unstable ground. A good installer will assess your specific garden before recommending a foundation type.",
      },
      {
        heading: "Electrics, Heating and Broadband",
        body: "Running power to a garden room requires a dedicated cable from your consumer unit, buried underground in conduit to a safe depth — typically 450mm under a lawn or 600mm under a drive. This must be carried out by a qualified electrician and notified to building control. Consider how many sockets you need, whether you want underfloor heating or a wall heater, and whether you need a data cable run alongside the power. Getting this right first time avoids the cost of digging up the garden later.",
      },
      {
        heading: "Budget Realistically",
        body: "Garden room costs in Hertfordshire vary significantly depending on size, specification and finish. A basic insulated timber room typically starts from around £8,000–£12,000 supply and install. Mid-range rooms with quality glazing, electrical installation and internal fit-out typically run £14,000–£22,000. Premium bespoke structures cost more. Always get a detailed written quotation that specifies what is and isn't included — particularly electrics, foundations and internal finishing — before committing.",
      },
    ],
    relatedSlugs: ["do-you-need-planning-permission-for-a-garden-room"],
  },
];
