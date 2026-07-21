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
  {
    slug: "pergola-vs-gazebo-which-is-right-for-your-garden",
    title: "Pergola vs Gazebo: Which Is Right for Your Garden?",
    excerpt: "Pergolas and gazebos both add outdoor living space, but they suit different gardens and different needs. Here's an honest comparison to help you choose.",
    category: "pergolas",
    readingTime: 5,
    publishedAt: "2025-07-17",
    seoTitle: "Pergola vs Gazebo: Which Is Right for Your Garden? | Zebra Trades Hertfordshire",
    seoDescription: "Pergola or gazebo? Compare styles, costs, shelter and planning rules to find the right outdoor structure for your garden. Advice from Zebra Trades, Hertfordshire.",
    sections: [
      {
        heading: "What Is a Pergola?",
        body: "A pergola is an open overhead structure supported by posts, with horizontal beams and cross-rafters forming a roof framework. It provides partial shade and can be used to define an outdoor dining or seating area, frame a garden path, or create a sheltered link between the house and a garden building. Because the roof is open, a pergola does not provide full weather protection — though roof panels, polycarbonate sheets or retractable canopies can be added to increase shelter.",
      },
      {
        heading: "What Is a Gazebo?",
        body: "A gazebo is a freestanding structure with a solid or semi-solid roof, typically octagonal or square in shape, with open or partially open sides. Unlike a pergola, a gazebo provides full overhead shelter from rain and direct sun. Gazebos are well suited to gardens where the structure will be used as a destination — a sheltered seating spot, an outdoor bar or a focal point in the landscape.",
      },
      {
        heading: "Shelter and Usability",
        body: "If weather protection is your priority, a gazebo wins outright — the solid roof keeps you dry in light to moderate rain. A standard pergola offers shade from sun but little protection from rain. However, a pergola fitted with a louvred or polycarbonate roof panel system bridges the gap and is increasingly popular for year-round outdoor dining. Think about how you actually want to use the space, and in what seasons, before deciding.",
      },
      {
        heading: "Appearance and Garden Fit",
        body: "Pergolas tend to suit longer, narrower spaces and work well attached to the house wall to create a covered terrace. They have a lighter, more architectural appearance and can be dressed with climbing plants to soften the structure over time. Gazebos suit larger, more open gardens and work best as freestanding features positioned away from the house. Their presence is more prominent — which can be a positive if you want a strong focal point or a drawback in a smaller garden.",
      },
      {
        heading: "Materials and Longevity",
        body: "Both structures are available in timber, powder-coated aluminium or composite materials. Softwood pergolas are the most affordable but require regular treating or painting to prevent rot. Hardwood and composite options last longer with less maintenance. Aluminium gazebos and pergolas require virtually no maintenance and are particularly well suited to the UK climate. Expect a quality timber structure to last 15–25 years with proper care; aluminium structures typically last 25 years or more.",
      },
      {
        heading: "Cost Comparison",
        body: "In the Hertfordshire area, a quality timber or aluminium pergola typically costs from £2,500 to £6,000 supply and install depending on size and specification. A freestanding gazebo ranges from £3,000 to £8,000 installed. Larger bespoke structures, louvred pergola systems or those with integrated lighting and electrical connections cost more. Always obtain a written quotation that includes groundwork, fixings and any electrical work separately.",
      },
    ],
    relatedSlugs: ["do-you-need-planning-permission-for-a-pergola-or-gazebo"],
  },
  {
    slug: "do-you-need-planning-permission-for-a-pergola-or-gazebo",
    title: "Do You Need Planning Permission for a Pergola or Gazebo?",
    excerpt: "Most pergolas and gazebos in residential gardens don't need planning permission — but size, position and location all matter. Here's what the rules say.",
    category: "pergolas",
    readingTime: 4,
    publishedAt: "2025-07-17",
    seoTitle: "Do You Need Planning Permission for a Pergola or Gazebo? | Zebra Trades Hertfordshire",
    seoDescription: "Find out if your pergola or gazebo needs planning permission. Clear guidance on permitted development rules from Zebra Trades, serving Hertfordshire.",
    sections: [
      {
        heading: "Pergolas and Gazebos Are Classed as Outbuildings",
        body: "In England, pergolas and gazebos are treated as outbuildings under the Town and Country Planning (General Permitted Development) Order. This means that in most cases they are covered by permitted development rights and do not require a planning application, as long as your project stays within the set limits.",
      },
      {
        heading: "The Permitted Development Rules That Apply",
        body: "Your structure must not cover more than 50% of the total land area surrounding the original house, including all other outbuildings. It must be single storey. Maximum eaves height is 2.5 metres. Maximum overall height is 4 metres for a dual-pitched roof or 3 metres for any other roof type — including flat and mono-pitch roofs. The structure must not be positioned forward of the principal elevation of the house, and must not be used as a dwelling.",
      },
      {
        heading: "The 2-Metre Boundary Rule",
        body: "If any part of the structure is within 2 metres of your property boundary, the maximum permitted height drops to 2.5 metres overall. This catches many standard gazebos and larger pergolas positioned near fences or walls, so check your distances carefully before finalising your design. Moving a structure a metre further from the boundary can sometimes bring it back within permitted development.",
      },
      {
        heading: "Open Pergolas vs Solid-Roof Structures",
        body: "A pergola with a fully open roof framework — beams and rafters with no covering — is generally treated more leniently than a solid-roofed gazebo because it is not an enclosed structure. However, adding a solid, watertight roof covering typically brings the structure within the same outbuilding rules. If in doubt, contact your local planning authority before building rather than after.",
      },
      {
        heading: "When Planning Permission Is Required",
        body: "You will need to apply for planning permission if your property is a listed building or sits within a conservation area, a National Park, an Area of Outstanding Natural Beauty or the Broads. Permitted development rights can also be removed by conditions on the original planning consent for your property — common on newer developments. Check with your local planning authority if you are unsure.",
      },
      {
        heading: "Getting Peace of Mind",
        body: "If your project is straightforward and clearly within permitted development limits, you can proceed without any formal application. If there is any doubt — particularly if you are near a boundary, in a restricted area or on a property with planning conditions — a lawful development certificate provides written confirmation from the council that no permission was needed. This costs a small fee but protects you when you come to sell. At Zebra Trades we can help you understand the rules before any work begins.",
      },
    ],
    relatedSlugs: ["pergola-vs-gazebo-which-is-right-for-your-garden"],
  },
  {
    slug: "how-to-choose-the-right-garden-fence",
    title: "How to Choose the Right Garden Fence: Panels, Posts and Materials Explained",
    excerpt: "With so many fencing options available, it's easy to make the wrong choice. Here's a practical guide to panels, posts and materials to help you pick a fence that looks good and lasts.",
    category: "fencing",
    readingTime: 6,
    publishedAt: "2025-07-17",
    seoTitle: "How to Choose the Right Garden Fence | Fencing Guide | Zebra Trades Hertfordshire",
    seoDescription: "Choosing a garden fence? Compare panel styles, post types and materials to find the best option for your garden. Expert advice from Zebra Trades, Hertfordshire.",
    sections: [
      {
        heading: "Start With the Purpose",
        body: "Before choosing a style, be clear on what you need your fence to do. Privacy fencing needs to be close-boarded and tall enough to screen sight lines. A boundary marker between properties can be lighter and more decorative. A fence containing pets or children needs to be solid at the base with no gaps. A front garden fence often benefits from a more open, attractive design. Matching the fence to its purpose avoids replacing it too soon.",
      },
      {
        heading: "Panel Styles Explained",
        body: "Lap panels are the most common and affordable option — overlapping horizontal slats create a solid screen but they are the least durable style. Closeboard or featherboard fencing uses vertical boards nailed to arris rails and is significantly stronger and longer-lasting than lap panels. Slatted or hit-and-miss panels offer a contemporary look with partial privacy and better wind resistance. Picket fencing is open and decorative, suited to front gardens. Trellis panels are lightweight and best used as a topper rather than a full fence.",
      },
      {
        heading: "Post Materials: Concrete vs Timber vs Metal",
        body: "Posts are the foundation of any fence and failing posts are the most common reason fences fall down prematurely. Concrete posts last significantly longer than timber and are worth the extra cost in most situations — particularly for closeboard fencing. Softwood timber posts should be pressure-treated to ground contact specification (UC4 rated) and will typically last 10–15 years if installed correctly. Steel or aluminium posts are used with contemporary panel systems and offer excellent longevity with minimal maintenance.",
      },
      {
        heading: "Height Considerations",
        body: "Standard fence panels are available in heights from 0.9 metres to 1.8 metres. A 1.8-metre fence provides good privacy for most rear gardens. On sloped ground, panels are typically stepped down in stages — a professional installer will account for the gradient so posts and panels align correctly. Note that fences over 2 metres high require planning permission, and front garden fences adjoining a highway are limited to 1 metre without permission.",
      },
      {
        heading: "Gravel Boards — Worth the Investment",
        body: "A gravel board is a horizontal board fitted at the base of a fence between the posts, keeping the main fence panel off the ground. This is one of the most cost-effective ways to extend fence life — ground contact rots timber panels quickly, particularly at the base. Concrete gravel boards are the most durable and highly recommended. Timber gravel boards are a reasonable alternative if pressure-treated to UC4 standard.",
      },
      {
        heading: "What Does Professional Fence Installation Cost?",
        body: "In the Hertfordshire area, professional fence installation typically costs from £80–£120 per metre supply and install for standard lap or closeboard fencing, depending on height and ground conditions. Concrete posts and gravel boards add to the cost but significantly extend the fence's life. Rocky ground, removal of an old fence or access difficulties will affect the final price. Always get a written quote that specifies post type, panel style, gravel boards and any groundwork included.",
      },
    ],
    relatedSlugs: ["do-you-need-planning-permission-for-a-fence-or-gate"],
  },
  {
    slug: "do-you-need-planning-permission-for-a-fence-or-gate",
    title: "Do You Need Planning Permission for a Fence or Gate?",
    excerpt: "Most garden fences and gates don't need planning permission — but height limits and location matter more than most people realise. Here's what the rules say.",
    category: "fencing",
    readingTime: 4,
    publishedAt: "2025-07-17",
    seoTitle: "Do You Need Planning Permission for a Fence or Gate? | Zebra Trades Hertfordshire",
    seoDescription: "Find out if your fence or gate needs planning permission. Clear guidance on height limits and permitted development rules from Zebra Trades, Hertfordshire.",
    sections: [
      {
        heading: "The General Rule",
        body: "In England, you do not need planning permission to erect a fence, wall or gate in most residential gardens, provided it falls within the permitted development height limits. These limits depend on where the fence is positioned relative to your property and the highway.",
      },
      {
        heading: "Height Limits You Need to Know",
        body: "For fences, walls and gates adjacent to a highway used by vehicles — including roads, footpaths and bridleways — the maximum permitted height is 1 metre without planning permission. For all other boundaries, including rear gardens and the sides of the property where they do not adjoin a highway, the maximum permitted height is 2 metres. A fence at exactly 2 metres does not need permission; anything over 2 metres does.",
      },
      {
        heading: "Front Gardens and Visibility",
        body: "Front garden fencing is where most disputes and planning issues arise. Even within the 1-metre height limit adjacent to a highway, local authorities and highways departments may have concerns about visibility splays — the clear sight lines drivers need when exiting your driveway. If you are planning a front garden fence near a driveway access, it is worth checking with your local authority before installation.",
      },
      {
        heading: "Listed Buildings and Conservation Areas",
        body: "If your property is a listed building, you will need listed building consent before erecting any fence or gate, regardless of height. Within a conservation area, permitted development rights for fences and gates are more restricted and you should contact your local planning authority before proceeding. These rules exist to protect the character of the area and are enforced.",
      },
      {
        heading: "Boundary Disputes and Party Fence Agreements",
        body: "Planning permission and boundary ownership are separate matters. Before installing or replacing a boundary fence, be clear on which boundary belongs to your property — check your title deeds or Land Registry records if unsure. Where a fence sits on or near a shared boundary, it is always worth discussing the plans with your neighbour before work begins. Most boundary issues that end up in dispute could have been avoided with a brief conversation.",
      },
      {
        heading: "When to Check Before You Build",
        body: "If you are in any doubt — whether due to your location, the height of the proposed fence, proximity to a highway or any planning conditions on your property — contact your local planning authority before work starts. Enforcement action against an unpermitted fence can require you to remove it at your own cost. At Zebra Trades we can advise on standard requirements for fencing in the Hertfordshire area and flag anything that needs checking before installation begins.",
      },
    ],
    relatedSlugs: ["how-to-choose-the-right-garden-fence"],
  },
  {
    slug: "home-maintenance-checklist-spring-and-summer",
    title: "Home Maintenance Checklist: Spring and Summer",
    excerpt: "Warmer months are the best time to tackle outdoor repairs and inspect your property after winter. Here's a practical checklist to work through each spring and summer.",
    category: "home-maintenance",
    readingTime: 5,
    publishedAt: "2025-07-17",
    seoTitle: "Home Maintenance Checklist: Spring & Summer | Zebra Trades Hertfordshire",
    seoDescription: "A practical spring and summer home maintenance checklist to keep your property in top condition. Expert advice from Zebra Trades, serving Hertfordshire.",
    sections: [
      {
        heading: "Check Your Roof and Gutters",
        body: "Winter weather takes a toll on roofs and guttering. In spring, walk around the outside of your property and look for missing or slipped roof tiles, cracked ridge tiles and any sagging or damaged guttering. Blocked gutters overflow and direct water down external walls, leading to damp and damage internally. Clear leaves and debris from gutters and downpipes, check that all joints are watertight, and ensure downpipes are discharging correctly away from the building.",
      },
      {
        heading: "Inspect External Sealants and Pointing",
        body: "Check the sealant around all ground-floor windows, doors and external pipework. Sealant that has cracked, pulled away or gone black with mould should be replaced before water gets into the wall. Also look at the mortar pointing between bricks on chimney stacks and exposed wall sections — crumbling or missing pointing lets water in and leads to expensive repairs if left. Spring is the ideal time to spot and address these issues before summer rain arrives.",
      },
      {
        heading: "Service Your Boiler and Heating",
        body: "Spring is an ideal time to book a boiler service — engineers are less busy than in autumn when the heating season begins. An annual service keeps your boiler running efficiently, extends its life and ensures it is safe. While the heating is off for summer, bleed any radiators that underperformed over winter and top up the system pressure if needed. Check thermostatic radiator valves move freely — they can seize if left in a fixed position over summer.",
      },
      {
        heading: "Inspect Fences, Gates and Outbuildings",
        body: "Walk the boundary of your garden and check fences for rotten posts, broken panels and leaning sections. A fence that fails in a storm can cause damage and may be your responsibility to repair or replace. Check gate hinges and latches for rust or looseness. Inspect any sheds, summerhouses or garden rooms for signs of water ingress, rot at the base of frames or damaged roofing felt. Early intervention is almost always cheaper than a full repair.",
      },
      {
        heading: "Outdoor Taps, Pipes and Drainage",
        body: "Restore any outdoor taps that were isolated over winter — check for splits in the pipe caused by freezing before fully opening the supply. Pour water down external drains to check they are flowing freely. Clear any blockages from drain grates. If you have a patio or decking, check that surface water is draining away from the house and not pooling against the external wall.",
      },
      {
        heading: "Refresh External Paintwork and Timber",
        body: "Dry spring and summer weather is the window for external decorating. Check painted timber window frames, soffits, fascias and external doors for cracking, peeling or bare wood. Sand, prime and repaint any areas where the coating has broken down — exposed bare timber rots quickly. External masonry paint on rendered walls should also be inspected for cracks and bare patches where damp could get in.",
      },
    ],
    relatedSlugs: ["home-maintenance-checklist-autumn-and-winter"],
  },
  {
    slug: "how-much-does-a-garden-room-cost",
    title: "How Much Does a Garden Room Cost in Hertfordshire?",
    excerpt: "Garden room prices vary widely depending on size, specification and finish. Here's a transparent breakdown to help you set a realistic budget.",
    category: "costs",
    readingTime: 6,
    publishedAt: "2025-07-21",
    seoTitle: "How Much Does a Garden Room Cost? | Hertfordshire Prices | Zebra Trades",
    seoDescription: "Find out how much a garden room costs in Hertfordshire. Transparent price breakdowns for different sizes and specifications from Zebra Trades.",
    sections: [
      {
        heading: "Why Garden Room Costs Vary So Much",
        body: "Garden room prices range from under £10,000 to over £50,000. The difference comes down to size, insulation specification, glazing, foundations, electrics, internal finishing and whether the build includes bespoke joinery or a standard modular design. Unlike a kitchen or bathroom where the components are largely standardised, every garden room is a bespoke structure — so the specification you choose has a significant impact on cost.",
      },
      {
        heading: "Entry-Level Garden Rooms: From £8,000–£12,000",
        body: "At the lower end of the market you'll find smaller garden rooms in the 10–15 square metre range, typically with standard timber cladding, basic insulation (sufficient for occasional use but not ideal for a year-round office), single glazed or budget double-glazed doors and windows, and minimal interior finishing. These can represent good value for storage or occasional use, but may fall short if you need the space every day through winter.",
      },
      {
        heading: "Mid-Range Garden Rooms: £14,000–£25,000",
        body: "The majority of residential garden rooms fall in this range. A quality mid-range garden room at 15–25 square metres will include well-insulated walls, floor and roof (typically 90–100mm of high-performance insulation), double-glazed aluminium or timber-framed doors and windows, a dedicated electrical supply and consumer unit, internal plastered or boarded walls and ceiling, and a choice of flooring. This specification is comfortable for year-round use as a home office, gym or hobby room.",
      },
      {
        heading: "Premium and Bespoke Garden Rooms: £25,000+",
        body: "Premium garden rooms at 25 square metres and above, or those with particularly high specifications, carry higher costs. Factors that push the price up include aluminium bi-fold or slide-and-fold door systems, underfloor heating, bespoke internal joinery (fitted desks, shelving or kitchenettes), feature roofing such as lantern lights or sedum (living) roofs, high-end external cladding (larch, cedar or composite), and planning consent costs where applicable.",
      },
      {
        heading: "Costs That Are Often Missed",
        body: "Several items are commonly excluded from initial garden room quotes and catch customers by surprise. Groundwork and foundations — concrete pads or screw piles — are a significant cost that varies by garden condition. The electrical supply cable buried from your house to the garden room is often priced separately. Internal decoration, flooring and blinds are rarely included in the structure price. Planning fees, if applicable, are an additional cost. Always ask your installer what is and isn't included before comparing quotes.",
      },
      {
        heading: "What Does Zebra Trades Charge for a Garden Room?",
        body: "At Zebra Trades, our garden rooms are priced individually based on size, specification and site conditions. We provide fully itemised written quotes so you can see exactly what you're paying for. As a guide, a well-specified 4m × 3m garden room with electrics, insulation and internal finishing typically starts from around £15,000–£18,000 supply and install in Hertfordshire. Contact us for a free survey and written quotation based on your specific requirements.",
      },
    ],
    relatedSlugs: ["do-you-need-planning-permission-for-a-garden-room", "what-to-consider-before-building-a-garden-room"],
  },
  {
    slug: "how-much-does-a-media-wall-cost",
    title: "How Much Does a Media Wall Cost in Hertfordshire?",
    excerpt: "A bespoke media wall transforms a living room — but what should you budget? Here's a clear breakdown of media wall costs with and without an electric fireplace.",
    category: "costs",
    readingTime: 5,
    publishedAt: "2025-07-21",
    seoTitle: "How Much Does a Media Wall Cost? | Hertfordshire Prices | Zebra Trades",
    seoDescription: "Media wall cost guide for Hertfordshire homeowners. Find out what a bespoke media wall with electric fireplace costs from Zebra Trades.",
    sections: [
      {
        heading: "What Is a Media Wall?",
        body: "A media wall is a bespoke feature wall built to house a TV, electric fireplace, storage and integrated LED lighting in a single cohesive design. They're typically built from studwork framing with MDF or similar sheet material cladding, painted or clad in a chosen finish. A well-designed media wall becomes the focal point of the living room and is one of the most impactful home improvements available at a mid-range budget.",
      },
      {
        heading: "Media Wall Without a Fireplace: From £1,200–£2,500",
        body: "A media wall without an electric fireplace — typically a TV recess with storage alcoves, floating shelving and LED lighting — starts from around £1,200–£1,500 for a straightforward design in a standard-sized room. More elaborate designs with floor-to-ceiling panelling, bespoke joinery and built-in storage cabinets sit in the £2,000–£2,500 range. Material costs and the complexity of the design are the main variables.",
      },
      {
        heading: "Media Wall With an Electric Fireplace: From £2,500–£5,000+",
        body: "Adding a high-quality electric fireplace to a media wall is where the real wow factor comes in — and the cost increases accordingly. The fireplace unit itself (at Zebra Trades we supply and fit Firez electric fireplaces from £1,299 to £3,199 for the unit alone), plus the construction of the wall and electrical connection, typically brings total project costs to £2,500–£4,500 for a standard installation. Larger walls, premium fireplace models or complex designs with feature cladding can reach £5,000–£7,000.",
      },
      {
        heading: "What's Included in a Zebra Trades Media Wall Quote",
        body: "Our media wall quotes include all labour and materials for the stud wall construction, MDF cladding, cutting and finishing, electric fireplace supply and installation, TV recess preparation, LED strip lighting installation, and a clean painted finish. We work from your brief and provide a design consultation before quoting. Decorating beyond the wall itself, plastering of adjacent walls and specialist wall claddings (stone, tiles, veneer panels) are priced separately if required.",
      },
      {
        heading: "How to Get an Accurate Quote",
        body: "Media wall costs are highly dependent on the specific design, room dimensions and fireplace model chosen. The best way to get an accurate price is to share a photo or sketch of your room, your approximate wall width, and any reference images of styles you like. Contact Zebra Trades for a free design consultation and written quotation — we cover the whole of Hertfordshire and surrounding areas.",
      },
    ],
    relatedSlugs: ["how-much-does-a-handyman-cost"],
  },
  {
    slug: "how-much-does-a-pergola-cost",
    title: "How Much Does a Pergola Cost in Hertfordshire?",
    excerpt: "Pergola prices vary depending on size, material and specification. Here's an honest breakdown of what to expect from timber and aluminium pergolas in the Hertfordshire area.",
    category: "costs",
    readingTime: 5,
    publishedAt: "2025-07-21",
    seoTitle: "How Much Does a Pergola Cost? | Hertfordshire Prices | Zebra Trades",
    seoDescription: "Find out how much a pergola costs in Hertfordshire. Transparent price guide for timber and aluminium pergolas from Zebra Trades.",
    sections: [
      {
        heading: "Key Factors That Affect Pergola Cost",
        body: "The cost of a pergola depends on four main factors: size (footprint and height), material (pressure-treated softwood, hardwood, composite or aluminium), roof type (open rafters, polycarbonate panels or louvred blades), and any additional features such as integrated lighting, electrical connections, climbing plant support wires, privacy screens or gates. Each of these adds cost but also adds value and usability.",
      },
      {
        heading: "Timber Pergolas: From £2,000–£5,000",
        body: "A pressure-treated softwood pergola at a typical patio size (3m × 3m to 4m × 4m) with open rafter roof, installed on an existing patio, typically costs between £2,000 and £3,500 supply and install in the Hertfordshire area. A larger structure (5m × 4m and above), or one with hardwood timber rather than softwood, sits in the £3,500–£5,000 range. Timber pergolas require regular maintenance — oiling or staining every 2–3 years — to maintain appearance and prevent deterioration.",
      },
      {
        heading: "Aluminium Pergolas: From £4,000–£9,000",
        body: "Powder-coated aluminium pergolas are significantly more expensive than timber but require virtually no maintenance and have a contemporary, architectural appearance that many homeowners prefer. A louvred roof aluminium pergola — where the blades can be adjusted to control light and ventilation — at a standard patio size starts from around £4,000–£5,500. Larger structures with built-in lighting, side privacy screens and integrated drainage typically cost £6,000–£9,000 or more.",
      },
      {
        heading: "Wall-Mounted vs Freestanding",
        body: "A wall-mounted pergola (fixed to the house wall on one side) is typically less expensive than a fully freestanding structure because it requires fewer posts and less material. However, fixings into the house wall must be done correctly to avoid water ingress — an important consideration in the UK climate. Freestanding structures allow more flexibility in positioning and are often preferred for larger gardens where the pergola is sited away from the house.",
      },
      {
        heading: "Additional Costs to Budget For",
        body: "If a new patio or base is needed, this adds cost — typically £800–£2,500 depending on size and material (porcelain, paving or concrete). Electrical connection for integrated lighting or an outdoor socket adds £300–£600 depending on the distance from your consumer unit. Climbing plant support wires or a trellis infill can add £150–£400. Always ask for a fully itemised quote so you know exactly what is and isn't included.",
      },
      {
        heading: "How to Get a Quote From Zebra Trades",
        body: "We supply and install timber and aluminium pergolas across Hertfordshire, Essex and surrounding areas. For a free site survey and written quotation, contact us with your garden dimensions and any reference photos you have. We'll come to you, assess the site and provide a fixed-price written quote with no obligation to proceed.",
      },
    ],
    relatedSlugs: ["pergola-vs-gazebo-which-is-right-for-your-garden", "do-you-need-planning-permission-for-a-pergola-or-gazebo"],
  },
  {
    slug: "how-to-choose-kitchen-worktops",
    title: "How to Choose Kitchen Worktops: Materials, Costs and Maintenance",
    excerpt: "Your worktop is one of the hardest-working surfaces in the home. Here's an honest guide to the main materials — laminate, quartz, granite and solid wood — to help you choose well.",
    category: "kitchen-installation",
    readingTime: 6,
    publishedAt: "2025-07-21",
    seoTitle: "How to Choose Kitchen Worktops: Materials & Costs | Zebra Trades Hertfordshire",
    seoDescription: "Compare kitchen worktop materials — laminate, quartz, granite and wood. Costs, durability and maintenance explained. Advice from Zebra Trades, Hertfordshire.",
    sections: [
      {
        heading: "Laminate Worktops: Best Budget Option",
        body: "Laminate worktops are the most affordable option and have improved significantly in quality in recent years. Modern high-pressure laminate (HPL) worktops convincingly replicate the look of stone, concrete and wood at a fraction of the cost. They're easy to clean, resistant to most stains and available in hundreds of finishes. The main drawbacks are that they can be damaged by prolonged exposure to moisture at joints and cut edges, are not heat-proof (always use a trivet), and cannot be sanded or refinished if scratched. Expect to pay £80–£180 per metre for mid-range laminate supply and fit.",
      },
      {
        heading: "Quartz Worktops: The Modern Choice",
        body: "Engineered quartz (brands include Silestone, Caesarstone and Kompas) is the most popular premium worktop material for new kitchens. It is non-porous, highly stain-resistant, available in a consistent range of colours and patterns, and does not require sealing. It is more heat-resistant than laminate but not heat-proof — sudden thermal shock from a very hot pan can crack a quartz surface. Quartz worktops are templated after units are installed, fabricated off-site and then fitted. Supply and installation typically costs £400–£700+ per metre depending on the brand and edge profile chosen.",
      },
      {
        heading: "Granite Worktops: Natural Stone",
        body: "Natural granite has been a premium kitchen worktop material for decades and remains popular for its unique appearance — no two granite slabs are identical. It is extremely hard-wearing and heat-resistant, but is porous and must be sealed annually to prevent staining. The supply process is the same as quartz — template, fabricate, fit — and costs are similar: £350–£650 per metre depending on the origin and pattern of the stone. Granite is heavier than quartz, which occasionally requires reinforcement of cabinet carcasses for longer unsupported runs.",
      },
      {
        heading: "Solid Wood Worktops: Warmth and Character",
        body: "Solid oak, walnut and beech worktops add warmth and character that no synthetic material fully replicates. They can be sanded and refinished if scratched, which extends their life significantly. However, they require regular oiling (typically every 3–6 months for work surfaces in regular use), must never be left wet, and can move or crack if not properly conditioned and maintained. They're best suited to less heavily used sections of a kitchen, or to homeowners who are prepared to carry out proper maintenance. Expect to pay £180–£350 per metre supply and fit.",
      },
      {
        heading: "Sintered Stone: The Premium Alternative",
        body: "Sintered stone surfaces (Dekton, Neolith) are made by compressing natural minerals under extreme heat and pressure. The result is an ultra-hard, heat-proof, UV-stable surface with virtually zero porosity. They require no sealing, are scratch-resistant and can be used inside and out. The main disadvantage is cost — typically £600–£900+ per metre — and the fact that repairs if chipped are almost impossible to do invisibly. For a long-term, low-maintenance kitchen in a high-end renovation, sintered stone is worth serious consideration.",
      },
      {
        heading: "Which Should You Choose?",
        body: "For most kitchens, quartz offers the best balance of looks, durability and maintenance requirements. Laminate is the right choice if budget is the priority. Solid wood suits traditional or country-style kitchens where the natural material is part of the design intent. Granite suits homeowners who want the unique character of natural stone and don't mind annual sealing. Sintered stone suits high-use kitchens where performance is paramount. At Zebra Trades, we can advise on worktop choice as part of your kitchen planning and work with all the main worktop suppliers.",
      },
    ],
    relatedSlugs: ["how-to-plan-a-new-kitchen", "how-much-does-kitchen-installation-cost", "howdens-vs-wren-kitchens"],
  },
  {
    slug: "how-to-install-a-dishwasher",
    title: "How to Install a Dishwasher: What's Involved and When to Get Help",
    excerpt: "Installing a dishwasher looks straightforward but there are a few things that can go wrong. Here's what a professional installation involves and what to check first.",
    category: "appliance-installation",
    readingTime: 4,
    publishedAt: "2025-07-21",
    seoTitle: "How to Install a Dishwasher | Appliance Installation Guide | Zebra Trades",
    seoDescription: "Find out what dishwasher installation involves, what can go wrong with DIY and when to call a professional. Advice from Zebra Trades, Hertfordshire.",
    sections: [
      {
        heading: "Before the Dishwasher Arrives",
        body: "Before your new dishwasher is delivered, check that you have a cold water inlet supply within reach (usually the hot or cold supply under the kitchen sink), a waste outlet to connect the drain hose (either a spare entry on the sink waste trap or a standpipe), a 13-amp fused spur or socket nearby, and sufficient space in the cabinet aperture. Standard undercounter dishwashers are 45cm or 60cm wide, 85cm tall and 55–60cm deep — measure your opening carefully, including the door swing clearance.",
      },
      {
        heading: "What a Professional Installation Includes",
        body: "A proper dishwasher installation involves: connecting the inlet hose to the cold water supply using an appropriate fitting, connecting the drain hose to the sink waste (and fitting an anti-siphon loop or air gap where required), levelling the machine on its adjustable feet so the door closes correctly, checking all connections for leaks, running a short test cycle, and adjusting the door hinges and kick plate if needed. For integrated dishwashers, the door panel and hinges also need to be fitted and adjusted.",
      },
      {
        heading: "Why DIY Dishwasher Installation Often Goes Wrong",
        body: "The most common DIY installation errors are: using incorrect or incompatible fittings on the cold water supply, failing to install a proper anti-siphon loop on the drain hose (which can cause grey water to siphon back into the machine), over-tightening compression fittings and cracking them, and not checking under the machine during the first full cycle. A slow drip at a poorly made joint can go unnoticed for months and cause significant damage to the cabinet carcass and floor.",
      },
      {
        heading: "Integrated vs Freestanding",
        body: "Freestanding dishwashers are the easiest to install — they sit in a floor space and just need connecting. Integrated dishwashers fit inside a kitchen cabinet and require a furniture door panel to be fitted to the dishwasher door. The hinge mechanism must be correctly set so the furniture door opens and closes squarely with the machine door. This adds time to the installation and requires some adjustment skill to get right.",
      },
      {
        heading: "When to Call a Professional",
        body: "If there is no existing cold water supply near the dishwasher position, new pipework will be needed — this is a plumbing job. If the waste needs to be taken further than a standard drain hose allows, an extension or a pump-assisted drain may be needed. If you are installing in a new position rather than replacing an existing machine, the job almost always needs a plumber and possibly an electrician. Zebra Trades handles dishwasher and appliance installations throughout Hertfordshire — contact us for a free quote.",
      },
    ],
    relatedSlugs: ["how-to-install-a-washing-machine", "how-much-does-a-handyman-cost"],
  },
  {
    slug: "what-is-a-media-wall",
    title: "What Is a Media Wall? Everything You Need to Know",
    excerpt: "Media walls have become one of the most popular home improvements in the UK. Here's what they are, what they typically include, and whether one is right for your living room.",
    category: "diy-vs-trade",
    readingTime: 5,
    publishedAt: "2025-07-21",
    seoTitle: "What Is a Media Wall? | Everything You Need to Know | Zebra Trades",
    seoDescription: "What is a media wall? Learn what they include, how they're built and whether one is right for your home. Expert guide from Zebra Trades, Hertfordshire.",
    sections: [
      {
        heading: "The Basic Idea",
        body: "A media wall is a built-in feature wall designed to house a TV, electric fireplace, storage and lighting in a single cohesive unit. Unlike a freestanding TV stand or a bracket-mounted TV on a bare wall, a media wall integrates all the elements of a modern living room focal point into a structured, custom-built design. The result is a cleaner look, better cable management and a feature that adds genuine value to the room.",
      },
      {
        heading: "What a Media Wall Typically Contains",
        body: "Most media walls include one or more of the following: a recessed TV section (with the TV mounted flush within the wall rather than protruding from it), an electric fireplace positioned below the TV, open display shelving or closed storage cabinets on either side, LED strip lighting behind panels or within alcoves for ambient effect, and a painted or clad surface finish — often with feature panelling such as fluted MDF, slat wall or stone-effect tiles in the fireplace surround.",
      },
      {
        heading: "Electric Fireplaces vs Gas Fires",
        body: "Almost all modern media walls use electric fireplaces rather than gas fires. Electric fires are far easier to incorporate into a stud wall — they require only a standard electrical connection, no gas supply, no flue and no building regulations notification. Modern electric fireplaces use LED technology to produce a convincing flame effect and can provide genuine heat output of up to 2kW. They are available in a huge range of sizes and frame finishes to suit any design.",
      },
      {
        heading: "Is a Media Wall Structural?",
        body: "A media wall is not a structural element. It is typically built as a stud frame (timber or metal) fixed to the floor and ceiling in front of the existing wall, then clad with MDF or plasterboard. The fireplace unit sits within a purpose-made opening in the frame. Because the wall is non-structural, it can be built in any position and removed in the future without affecting the fabric of the building — making it a relatively low-risk improvement.",
      },
      {
        heading: "Can You Build a Media Wall Yourself?",
        body: "A media wall is technically within the capability of a skilled and confident DIYer who is comfortable with basic carpentry and has some experience with stud walling. However, the quality of the finish — particularly around the fireplace opening, the panelling joints and the LED lighting recesses — requires good carpentry skills. The electrical connection for the fireplace must be made to a fused spur, which should be done by a qualified electrician. Most homeowners find that the value added by a professionally built media wall justifies the cost of having it done properly.",
      },
      {
        heading: "How Much Does a Media Wall Cost?",
        body: "In the Hertfordshire area, a bespoke media wall with electric fireplace typically costs from £2,500 to £5,000 supply and install depending on size, design complexity and the fireplace model chosen. A media wall without a fireplace starts from around £1,200–£2,500. At Zebra Trades we provide free consultations and written quotes — contact us to discuss your design ideas.",
      },
    ],
    relatedSlugs: ["how-much-does-a-media-wall-cost", "how-much-does-a-handyman-cost"],
  },
  {
    slug: "home-maintenance-checklist-autumn-and-winter",
    title: "Home Maintenance Checklist: Autumn and Winter",
    excerpt: "Getting your home ready before the cold sets in can prevent a lot of expensive problems. Here's what to check and action every autumn before winter arrives.",
    category: "home-maintenance",
    readingTime: 5,
    publishedAt: "2025-07-17",
    seoTitle: "Home Maintenance Checklist: Autumn & Winter | Zebra Trades Hertfordshire",
    seoDescription: "A practical autumn and winter home maintenance checklist to protect your property from cold weather damage. Advice from Zebra Trades, Hertfordshire.",
    sections: [
      {
        heading: "Clear Gutters Before the Leaves Fall",
        body: "Autumn leaves block gutters quickly. A blocked gutter in a heavy downpour overflows and drives water into the roof space, down the external wall or into the foundations. Clear gutters and downpipes in late autumn once most leaves have fallen, and check all joints are secure. If your gutters block every year, gutter guards are a worthwhile investment that reduce the frequency of clearing.",
      },
      {
        heading: "Protect Your Pipes From Freezing",
        body: "Burst pipes caused by freezing are one of the most costly winter home emergencies. Lag any exposed pipes in unheated spaces — lofts, garages and under-floor voids — with pipe insulation, which is inexpensive and simple to fit. Isolate and drain outdoor taps before the first frost, and know where your main stopcock is so you can turn the water off quickly if a pipe does freeze or burst.",
      },
      {
        heading: "Get Your Boiler Serviced",
        body: "If you did not service your boiler in spring, book it in early autumn before the heating season begins. Boiler engineers are significantly harder to book in November and December when demand peaks. A service also confirms your boiler is ready for the cold months ahead — the last thing you want is a breakdown on the coldest night of the year. Check that your thermostat and programmer are working correctly before you need them.",
      },
      {
        heading: "Check Your Roof Before Winter Storms",
        body: "A quick visual inspection of your roof in autumn can save significant repair costs. Look for missing, cracked or slipped tiles that could let water in during winter storms. Check the flashing around chimney stacks, skylights and roof valleys — failed flashing is a common source of roof leaks. If you spot anything of concern, get it looked at before winter weather makes the problem worse and access to the roof more difficult.",
      },
      {
        heading: "Draught-Proof Doors and Windows",
        body: "Draughts waste heat and push up energy bills. Check the seals around external doors and windows and replace any worn or compressed draught strips. Letter boxes, keyholes and cat flaps all let cold air in and can be fitted with draught-excluding covers inexpensively. Check loft hatch seals too — a poorly sealed loft hatch allows warm air to escape directly into the cold roof space, where it condenses and can cause damp.",
      },
      {
        heading: "Test Smoke and Carbon Monoxide Alarms",
        body: "With heating systems, fires and candles used more heavily in winter, autumn is a good time to test every smoke alarm and carbon monoxide detector in the property. Replace batteries in any alarm that hasn't had them changed in the past 12 months. Carbon monoxide alarms are particularly important when gas boilers, fires and wood burners are in regular use — CO is odourless and invisible, making a working detector essential.",
      },
    ],
    relatedSlugs: ["home-maintenance-checklist-spring-and-summer"],
  },
];
