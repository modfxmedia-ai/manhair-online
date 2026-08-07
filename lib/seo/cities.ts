/**
 * Man Hair — Geographic (city) data model.
 * Source: ModFX Media spec, Section 5.
 *
 * COMPLIANCE GUARDRAIL (do not remove): Man Hair has exactly ONE physical
 * location, the Orange, CA salon. Every Tier 1 city page must read as
 * "serving [City] from our Orange, CA studio" + "start with a free virtual
 * consultation" and must NEVER imply a physical location in that city.
 * Do not add LocalBusiness schema to any city page — only the homepage and
 * `/locations/orange/` carry LocalBusiness schema (see components/JsonLd.tsx).
 *
 * `testimonial` is intentionally `null` for every city below. Do not
 * fabricate customer quotes attributed to a specific city — populate this
 * field only once a real, sourced local testimonial exists (see spec
 * Section 6.1 "Local testimonial — where available").
 */

export type CityTier = 1 | 2;

export type City = {
  slug: string;
  name: string;
  county: string;
  tier: CityTier;
  /** Only populated for Tier 1 (deep) pages. */
  driveTimeFromSalon?: string;
  distanceMiles?: number;
  landmarks?: string[];
  /** Unique 2-3 sentence local intro. Human-authored, not templated. */
  intro?: string;
  testimonial?: { name: string; text: string } | null;
  /** 2-3 neighboring Tier 1 city slugs for internal linking. */
  nearbyCities?: string[];
};

/** Tier 1 — 35 deep city pages (built first). */
export const TIER1_CITIES: City[] = [
  {
    slug: "orange",
    name: "Orange",
    county: "Orange County",
    tier: 1,
    driveTimeFromSalon: "Salon location",
    distanceMiles: 0,
    landmarks: ["Old Towne Orange Plaza", "Chapman University", "The Outlets at Orange"],
    intro:
      "Orange is home, our studio sits right in the middle of Old Towne. If you're local, a virtual consultation is still the fastest way to start, we'll pick your fitting time when you book.",
    testimonial: null,
    nearbyCities: ["villa-park", "tustin", "anaheim"],
  },
  {
    slug: "anaheim",
    name: "Anaheim",
    county: "Orange County",
    tier: 1,
    driveTimeFromSalon: "10 minutes",
    distanceMiles: 4,
    landmarks: ["Disneyland Resort", "Angel Stadium", "Downtown Disney"],
    intro:
      "Anaheim clients are some of our closest neighbors, a quick hop down the 22 from our Orange studio. Start with a free virtual consultation, then come in for your fitting whenever it suits your schedule.",
    testimonial: null,
    nearbyCities: ["orange", "garden-grove", "fullerton"],
  },
  {
    slug: "santa-ana",
    name: "Santa Ana",
    county: "Orange County",
    tier: 1,
    driveTimeFromSalon: "12 minutes",
    distanceMiles: 5,
    landmarks: ["Downtown Santa Ana Artists Village", "Discovery Cube Orange County", "Santa Ana Zoo"],
    intro:
      "Santa Ana is one of the shortest drives to our Orange studio in the whole county. Book a free virtual consultation first, we'll walk you through the process before you ever set foot in the salon.",
    testimonial: null,
    nearbyCities: ["orange", "tustin", "garden-grove"],
  },
  {
    slug: "irvine",
    name: "Irvine",
    county: "Orange County",
    tier: 1,
    driveTimeFromSalon: "15 minutes",
    distanceMiles: 9,
    landmarks: ["Irvine Spectrum Center", "UC Irvine", "Woodbridge Village"],
    intro:
      "Irvine clients regularly make the short drive up to our Orange studio after their virtual consultation. Between UCI and the Spectrum, it's an easy detour to fit around a normal week.",
    testimonial: null,
    nearbyCities: ["tustin", "lake-forest", "newport-beach"],
  },
  {
    slug: "tustin",
    name: "Tustin",
    county: "Orange County",
    tier: 1,
    driveTimeFromSalon: "10 minutes",
    distanceMiles: 4,
    landmarks: ["Old Town Tustin", "The District at Tustin Legacy", "Tustin Marketplace"],
    intro:
      "Tustin sits right next door to Orange, a short, direct drive with no freeway required for most routes. Start virtual, then swing by the studio at a time that works for you.",
    testimonial: null,
    nearbyCities: ["orange", "santa-ana", "irvine"],
  },
  {
    slug: "costa-mesa",
    name: "Costa Mesa",
    county: "Orange County",
    tier: 1,
    driveTimeFromSalon: "20 minutes",
    distanceMiles: 11,
    landmarks: ["South Coast Plaza", "OC Fair & Event Center", "SoCo Collection"],
    intro:
      "Costa Mesa clients often combine a South Coast Plaza trip with their studio visit. Your first step is a free virtual consultation, no drive required until you're ready for your fitting.",
    testimonial: null,
    nearbyCities: ["newport-beach", "santa-ana", "tustin"],
  },
  {
    slug: "huntington-beach",
    name: "Huntington Beach",
    county: "Orange County",
    tier: 1,
    driveTimeFromSalon: "25 minutes",
    distanceMiles: 14,
    landmarks: ["Huntington Beach Pier", "Main Street", "Bolsa Chica State Beach"],
    intro:
      "Surf City clients trade a morning at the pier for an afternoon fitting at our Orange studio. We keep the first step easy: a free virtual consultation before any drive.",
    testimonial: null,
    nearbyCities: ["fountain-valley", "westminster", "costa-mesa"],
  },
  {
    slug: "newport-beach",
    name: "Newport Beach",
    county: "Orange County",
    tier: 1,
    driveTimeFromSalon: "22 minutes",
    distanceMiles: 12,
    landmarks: ["Fashion Island", "Balboa Pier", "Newport Harbor"],
    intro:
      "Newport Beach clients typically start remotely, a free virtual consultation fits easily around the harbor traffic, then it's a straightforward drive up to Orange for your fitting.",
    testimonial: null,
    nearbyCities: ["costa-mesa", "irvine", "laguna-beach"],
  },
  {
    slug: "fullerton",
    name: "Fullerton",
    county: "Orange County",
    tier: 1,
    driveTimeFromSalon: "15 minutes",
    distanceMiles: 8,
    landmarks: ["Cal State Fullerton", "Downtown Fullerton", "Fullerton Arboretum"],
    intro:
      "Fullerton is a straight shot down to our Orange studio, popular with clients who already commute through the area for Cal State Fullerton or downtown. Start with a free virtual consultation.",
    testimonial: null,
    nearbyCities: ["anaheim", "brea", "placentia"],
  },
  {
    slug: "garden-grove",
    name: "Garden Grove",
    county: "Orange County",
    tier: 1,
    driveTimeFromSalon: "13 minutes",
    distanceMiles: 6,
    landmarks: ["Christ Cathedral", "Garden Grove Historical Main Street"],
    intro:
      "Garden Grove clients are minutes from our Orange studio, an easy add-on to a Main Street errand run. Book your free virtual consultation first, the fitting comes after.",
    testimonial: null,
    nearbyCities: ["santa-ana", "anaheim", "westminster"],
  },
  {
    slug: "mission-viejo",
    name: "Mission Viejo",
    county: "Orange County",
    tier: 1,
    driveTimeFromSalon: "25 minutes",
    distanceMiles: 18,
    landmarks: ["Lake Mission Viejo", "The Shops at Mission Viejo"],
    intro:
      "Mission Viejo clients make the drive north to Orange after starting with a free virtual consultation, an easy trade-off for a custom-fitted result you won't find closer to home.",
    testimonial: null,
    nearbyCities: ["lake-forest", "rancho-santa-margarita", "aliso-viejo"],
  },
  {
    slug: "lake-forest",
    name: "Lake Forest",
    county: "Orange County",
    tier: 1,
    driveTimeFromSalon: "22 minutes",
    distanceMiles: 15,
    landmarks: ["Lake Forest Sports Park", "The Foothill Towne Center"],
    intro:
      "Lake Forest is our registered business address, and a familiar drive for our team, though every client fitting happens at the Orange studio. Start with a free virtual consultation to get the process moving.",
    testimonial: null,
    nearbyCities: ["mission-viejo", "irvine", "aliso-viejo"],
  },
  {
    slug: "yorba-linda",
    name: "Yorba Linda",
    county: "Orange County",
    tier: 1,
    driveTimeFromSalon: "18 minutes",
    distanceMiles: 10,
    landmarks: ["Richard Nixon Presidential Library", "Black Gold Golf Club"],
    intro:
      "Yorba Linda clients enjoy a quiet, quick drive to Orange with none of the coastal traffic. A free virtual consultation is the easiest way to see if the timing works for you.",
    testimonial: null,
    nearbyCities: ["placentia", "brea", "anaheim-hills"],
  },
  {
    slug: "anaheim-hills",
    name: "Anaheim Hills",
    county: "Orange County",
    tier: 1,
    driveTimeFromSalon: "15 minutes",
    distanceMiles: 8,
    landmarks: ["Anaheim Hills Golf Course", "Deer Canyon Park"],
    intro:
      "Anaheim Hills sits just up the road from our Orange studio, a favorite for clients who want the fitting scheduled around a weekend golf round. Start with a free virtual consultation any day of the week.",
    testimonial: null,
    nearbyCities: ["anaheim", "villa-park", "yorba-linda"],
  },
  {
    slug: "villa-park",
    name: "Villa Park",
    county: "Orange County",
    tier: 1,
    driveTimeFromSalon: "8 minutes",
    distanceMiles: 3,
    landmarks: ["Santiago Oaks Regional Park", "Villa Park High School"],
    intro:
      "Villa Park is practically next door to our Orange studio, one of the shortest drives on this whole list. Book a free virtual consultation and we can usually get you into the studio quickly after.",
    testimonial: null,
    nearbyCities: ["orange", "anaheim-hills", "anaheim"],
  },
  {
    slug: "brea",
    name: "Brea",
    county: "Orange County",
    tier: 1,
    driveTimeFromSalon: "20 minutes",
    distanceMiles: 12,
    landmarks: ["Brea Mall", "Downtown Brea Art Walk"],
    intro:
      "Brea clients typically combine a mall trip with their studio visit once their virtual consultation is done. It's a simple, mostly-surface-street drive down to Orange.",
    testimonial: null,
    nearbyCities: ["fullerton", "placentia", "yorba-linda"],
  },
  {
    slug: "placentia",
    name: "Placentia",
    county: "Orange County",
    tier: 1,
    driveTimeFromSalon: "15 minutes",
    distanceMiles: 8,
    landmarks: ["Old Town Placentia", "Tri-City Park"],
    intro:
      "Placentia is a short, easy drive to our Orange studio, popular with clients heading in after work. Start with a free virtual consultation and pick a fitting time that fits your schedule.",
    testimonial: null,
    nearbyCities: ["fullerton", "brea", "yorba-linda"],
  },
  {
    slug: "laguna-beach",
    name: "Laguna Beach",
    county: "Orange County",
    tier: 1,
    driveTimeFromSalon: "30 minutes",
    distanceMiles: 18,
    landmarks: ["Main Beach Park", "Heisler Park", "Festival of Arts grounds"],
    intro:
      "Laguna Beach clients trade a coastal drive for a custom fitting at our Orange studio. Book a free virtual consultation first, the in-person visit is worth the trip up the canyon.",
    testimonial: null,
    nearbyCities: ["newport-beach", "laguna-niguel", "aliso-viejo"],
  },
  {
    slug: "laguna-niguel",
    name: "Laguna Niguel",
    county: "Orange County",
    tier: 1,
    driveTimeFromSalon: "28 minutes",
    distanceMiles: 20,
    landmarks: ["Laguna Niguel Regional Park", "Crown Valley Community Park"],
    intro:
      "Laguna Niguel clients usually start remotely with a free virtual consultation, then make the drive up the 5 or the 73 for their fitting at our Orange studio.",
    testimonial: null,
    nearbyCities: ["aliso-viejo", "dana-point", "mission-viejo"],
  },
  {
    slug: "aliso-viejo",
    name: "Aliso Viejo",
    county: "Orange County",
    tier: 1,
    driveTimeFromSalon: "26 minutes",
    distanceMiles: 18,
    landmarks: ["Aliso Viejo Town Center", "Wood Canyon"],
    intro:
      "Aliso Viejo clients typically book their free virtual consultation on a weeknight, then head up to Orange for a weekend fitting slot.",
    testimonial: null,
    nearbyCities: ["laguna-niguel", "mission-viejo", "laguna-beach"],
  },
  {
    slug: "rancho-santa-margarita",
    name: "Rancho Santa Margarita",
    county: "Orange County",
    tier: 1,
    driveTimeFromSalon: "26 minutes",
    distanceMiles: 18,
    landmarks: ["Rancho Santa Margarita Lake", "O'Neill Regional Park"],
    intro:
      "RSM clients make the drive north along the 241 to reach our Orange studio, an easy toll-road trip once your free virtual consultation is booked.",
    testimonial: null,
    nearbyCities: ["mission-viejo", "aliso-viejo", "lake-forest"],
  },
  {
    slug: "san-juan-capistrano",
    name: "San Juan Capistrano",
    county: "Orange County",
    tier: 1,
    driveTimeFromSalon: "32 minutes",
    distanceMiles: 24,
    landmarks: ["Mission San Juan Capistrano", "Los Rios Historic District"],
    intro:
      "San Juan Capistrano clients often plan their studio visit around a Mission trip, everything else, including your first consultation, happens virtually beforehand.",
    testimonial: null,
    nearbyCities: ["dana-point", "san-clemente", "laguna-niguel"],
  },
  {
    slug: "dana-point",
    name: "Dana Point",
    county: "Orange County",
    tier: 1,
    driveTimeFromSalon: "35 minutes",
    distanceMiles: 26,
    landmarks: ["Dana Point Harbor", "Doheny State Beach"],
    intro:
      "Dana Point is one of our longer drives, which is exactly why we start every relationship with a free virtual consultation before asking anyone to make the trip north to Orange.",
    testimonial: null,
    nearbyCities: ["san-juan-capistrano", "laguna-niguel", "san-clemente"],
  },
  {
    slug: "san-clemente",
    name: "San Clemente",
    county: "Orange County",
    tier: 1,
    driveTimeFromSalon: "40 minutes",
    distanceMiles: 31,
    landmarks: ["San Clemente Pier", "Pier Bowl"],
    intro:
      "San Clemente clients are at the far southern edge of our service area, comfortably reachable for a fitting once your free virtual consultation confirms it's the right fit.",
    testimonial: null,
    nearbyCities: ["dana-point", "san-juan-capistrano"],
  },
  {
    slug: "fountain-valley",
    name: "Fountain Valley",
    county: "Orange County",
    tier: 1,
    driveTimeFromSalon: "18 minutes",
    distanceMiles: 10,
    landmarks: ["Mile Square Regional Park"],
    intro:
      "Fountain Valley clients have a straightforward drive to Orange, most book their free virtual consultation for an evening and their fitting for the following weekend.",
    testimonial: null,
    nearbyCities: ["huntington-beach", "westminster", "costa-mesa"],
  },
  {
    slug: "westminster",
    name: "Westminster",
    county: "Orange County",
    tier: 1,
    driveTimeFromSalon: "17 minutes",
    distanceMiles: 9,
    landmarks: ["Little Saigon"],
    intro:
      "Westminster clients are a quick drive from our Orange studio, close enough to fit a fitting appointment into a normal lunch break once the virtual consultation is done.",
    testimonial: null,
    nearbyCities: ["garden-grove", "fountain-valley", "huntington-beach"],
  },
  {
    slug: "cypress",
    name: "Cypress",
    county: "Orange County",
    tier: 1,
    driveTimeFromSalon: "20 minutes",
    distanceMiles: 11,
    landmarks: ["Cypress College", "Los Alamitos Race Course"],
    intro:
      "Cypress clients are a short, mostly-freeway drive from our Orange studio. Start with a free virtual consultation, we'll handle the rest from there.",
    testimonial: null,
    nearbyCities: ["buena-park", "garden-grove", "westminster"],
  },
  {
    slug: "buena-park",
    name: "Buena Park",
    county: "Orange County",
    tier: 1,
    driveTimeFromSalon: "18 minutes",
    distanceMiles: 10,
    landmarks: ["Knott's Berry Farm", "Downtown Buena Park"],
    intro:
      "Buena Park clients often build their studio visit around a Knott's Berry Farm day. Everything before that, including your first consultation, happens virtually.",
    testimonial: null,
    nearbyCities: ["fullerton", "cypress", "anaheim"],
  },
  {
    slug: "long-beach",
    name: "Long Beach",
    county: "Los Angeles County",
    tier: 1,
    driveTimeFromSalon: "30 minutes",
    distanceMiles: 20,
    landmarks: ["Aquarium of the Pacific", "The Pike Outlets", "Queen Mary"],
    intro:
      "Long Beach is our westernmost major market, a comfortable freeway drive to Orange once you're ready for your fitting. We start every Long Beach client with a free virtual consultation first.",
    testimonial: null,
    nearbyCities: ["cerritos", "whittier", "cypress"],
  },
  {
    slug: "cerritos",
    name: "Cerritos",
    county: "Los Angeles County",
    tier: 1,
    driveTimeFromSalon: "25 minutes",
    distanceMiles: 15,
    landmarks: ["Cerritos Towne Center", "Cerritos Library"],
    intro:
      "Cerritos clients make an easy freeway drive south to Orange for their fitting, after starting the process with a free virtual consultation from home.",
    testimonial: null,
    nearbyCities: ["long-beach", "whittier", "buena-park"],
  },
  {
    slug: "whittier",
    name: "Whittier",
    county: "Los Angeles County",
    tier: 1,
    driveTimeFromSalon: "28 minutes",
    distanceMiles: 17,
    landmarks: ["Uptown Whittier", "Rio Hondo College"],
    intro:
      "Whittier clients travel south into Orange County for their fitting, a trip most describe as easier than expected once the free virtual consultation is out of the way.",
    testimonial: null,
    nearbyCities: ["cerritos", "long-beach", "diamond-bar"],
  },
  {
    slug: "corona",
    name: "Corona",
    county: "Riverside County",
    tier: 1,
    driveTimeFromSalon: "28 minutes",
    distanceMiles: 20,
    landmarks: ["The Shops at Dos Lagos", "Corona Civic Center"],
    intro:
      "Corona clients cross the county line for their fitting at our Orange studio, an easy 91-freeway trip once your free virtual consultation confirms the plan.",
    testimonial: null,
    nearbyCities: ["chino-hills", "diamond-bar"],
  },
  {
    slug: "chino-hills",
    name: "Chino Hills",
    county: "San Bernardino County",
    tier: 1,
    driveTimeFromSalon: "30 minutes",
    distanceMiles: 22,
    landmarks: ["The Shoppes at Chino Hills"],
    intro:
      "Chino Hills clients make the drive down into Orange County for their fitting, most start with a free virtual consultation on a weeknight and schedule the studio visit for the weekend.",
    testimonial: null,
    nearbyCities: ["diamond-bar", "corona"],
  },
  {
    slug: "diamond-bar",
    name: "Diamond Bar",
    county: "Los Angeles County",
    tier: 1,
    driveTimeFromSalon: "26 minutes",
    distanceMiles: 18,
    landmarks: ["Diamond Bar Golf Course"],
    intro:
      "Diamond Bar clients have a straightforward freeway drive south to our Orange studio. A free virtual consultation is the easiest way to see if the timing works before you commit to the trip.",
    testimonial: null,
    nearbyCities: ["chino-hills", "whittier", "corona"],
  },
  {
    slug: "los-angeles",
    name: "Los Angeles",
    county: "Los Angeles County",
    tier: 1,
    driveTimeFromSalon: "45 minutes",
    distanceMiles: 32,
    landmarks: ["Downtown Los Angeles", "LA Live"],
    intro:
      "Los Angeles clients are our farthest regular market, comfortably served with a free virtual consultation first, then a single trip south to Orange for a full fitting, cut-in, and every future maintenance visit.",
    testimonial: null,
    nearbyCities: ["long-beach", "whittier", "diamond-bar"],
  },
];

/**
 * Tier 2 — 89 standard city pages (Phase 3).
 * Lighter pages (400+ words), still genuinely unique per city: real
 * landmark, real approximate drive time/distance, and a short local intro.
 * Per spec Section 5.4, Tier 2 cities do NOT get city x service pages.
 */
export const TIER2_CITIES: City[] = [
  { slug: "laguna-hills", name: "Laguna Hills", county: "Orange County", tier: 2, driveTimeFromSalon: "30 minutes", distanceMiles: 20, landmarks: ["Laguna Hills Community Center"], intro: "Laguna Hills sits about 20 miles south of our Orange studio, tucked between Laguna Niguel and Mission Viejo. Start with a free virtual consultation, then plan your fitting for whenever the drive up the 5 works best.", nearbyCities: ["mission-viejo", "laguna-niguel"] },
  { slug: "laguna-woods", name: "Laguna Woods", county: "Orange County", tier: 2, driveTimeFromSalon: "32 minutes", distanceMiles: 22, landmarks: ["Laguna Woods Village"], intro: "Laguna Woods clients, many from the Village community, travel about 32 minutes to our Orange studio. A free virtual consultation is the easiest way to get the process moving before any drive.", nearbyCities: ["laguna-niguel", "mission-viejo"] },
  { slug: "seal-beach", name: "Seal Beach", county: "Orange County", tier: 2, driveTimeFromSalon: "25 minutes", distanceMiles: 16, landmarks: ["Seal Beach Pier", "Old Ranch Country Club"], intro: "Seal Beach, right on the coast near the pier, is about 25 minutes from our Orange studio. Book your free virtual consultation online, we'll schedule the in-person fitting around your week.", nearbyCities: ["cypress", "westminster"] },
  { slug: "los-alamitos", name: "Los Alamitos", county: "Orange County", tier: 2, driveTimeFromSalon: "22 minutes", distanceMiles: 14, landmarks: ["Joint Forces Training Base Los Alamitos"], intro: "Los Alamitos is a quick, mostly-surface-street drive to our Orange studio. We start every relationship here with a free virtual consultation, long before anyone gets in the car.", nearbyCities: ["cypress", "buena-park"] },
  { slug: "la-palma", name: "La Palma", county: "Orange County", tier: 2, driveTimeFromSalon: "20 minutes", distanceMiles: 12, landmarks: ["La Palma Park"], intro: "La Palma is one of the smaller, closer-in cities we serve, about 20 minutes from our Orange studio. Your first step is a free virtual consultation, the studio visit comes later.", nearbyCities: ["cypress", "buena-park"] },
  { slug: "stanton", name: "Stanton", county: "Orange County", tier: 2, driveTimeFromSalon: "19 minutes", distanceMiles: 11, landmarks: ["Stanton Central Park"], intro: "Stanton clients have an easy, direct drive to our Orange studio. Book a free virtual consultation first, then we'll find a fitting time that works for you.", nearbyCities: ["garden-grove", "westminster"] },
  { slug: "la-habra", name: "La Habra", county: "Orange County", tier: 2, driveTimeFromSalon: "22 minutes", distanceMiles: 14, landmarks: ["La Habra Children's Museum"], intro: "La Habra sits near the LA County line, about 22 minutes from our Orange studio. A free virtual consultation is the easiest first step before making the trip in.", nearbyCities: ["fullerton", "brea"] },
  { slug: "coto-de-caza", name: "Coto de Caza", county: "Orange County", tier: 2, driveTimeFromSalon: "35 minutes", distanceMiles: 24, landmarks: ["Coto de Caza Golf & Racquet Club"], intro: "Coto de Caza is one of our farther southern communities, roughly 35 minutes from our Orange studio. We start every Coto de Caza client with a free virtual consultation before any drive is needed.", nearbyCities: ["mission-viejo", "rancho-santa-margarita"] },
  { slug: "ladera-ranch", name: "Ladera Ranch", county: "Orange County", tier: 2, driveTimeFromSalon: "32 minutes", distanceMiles: 22, landmarks: ["Founders Park"], intro: "Ladera Ranch, one of south OC's master-planned communities, is about 32 minutes from our Orange studio. From there it's a simple trip up for your custom fitting once your free virtual consultation is booked.", nearbyCities: ["mission-viejo", "san-juan-capistrano"] },
  { slug: "north-tustin", name: "North Tustin", county: "Orange County", tier: 2, driveTimeFromSalon: "12 minutes", distanceMiles: 7, landmarks: ["Peters Canyon Regional Park"], intro: "North Tustin, the unincorporated hillside community above Tustin, is one of the shortest drives to our Orange studio. Book your free virtual consultation online, we'll schedule the rest around your week.", nearbyCities: ["tustin", "orange"] },
  { slug: "rossmoor", name: "Rossmoor", county: "Orange County", tier: 2, driveTimeFromSalon: "20 minutes", distanceMiles: 13, landmarks: ["Rossmoor Center"], intro: "Rossmoor clients make an easy, quick drive to our Orange studio. Your first step is always a free virtual consultation, the studio visit comes later, on your schedule.", nearbyCities: ["cypress", "westminster"] },
  { slug: "midway-city", name: "Midway City", county: "Orange County", tier: 2, driveTimeFromSalon: "16 minutes", distanceMiles: 9, landmarks: ["Bolsa Avenue business district"], intro: "Midway City, the small unincorporated community between Westminster and Santa Ana, is a short drive to our Orange studio. Start with a free virtual consultation, then plan your fitting whenever suits you.", nearbyCities: ["westminster", "garden-grove"] },
  { slug: "foothill-ranch", name: "Foothill Ranch", county: "Orange County", tier: 2, driveTimeFromSalon: "25 minutes", distanceMiles: 17, landmarks: ["Foothill Ranch Towne Centre"], intro: "Foothill Ranch is about 25 minutes from our Orange studio, close enough for a fitting appointment on a normal weekend. We start every relationship with a free virtual consultation first.", nearbyCities: ["lake-forest", "mission-viejo"] },
  { slug: "portola-hills", name: "Portola Hills", county: "Orange County", tier: 2, driveTimeFromSalon: "27 minutes", distanceMiles: 19, landmarks: ["Whiting Ranch Wilderness Park"], intro: "Portola Hills, tucked against Whiting Ranch, is roughly 27 minutes from our Orange studio. Book your free virtual consultation online, the drive up comes only once you're ready for your fitting.", nearbyCities: ["lake-forest", "rancho-santa-margarita"] },
  { slug: "trabuco-canyon", name: "Trabuco Canyon", county: "Orange County", tier: 2, driveTimeFromSalon: "30 minutes", distanceMiles: 21, landmarks: ["O'Neill Regional Park"], intro: "Trabuco Canyon, the quiet rural canyon community near O'Neill Regional Park, is about 30 minutes from our Orange studio. A free virtual consultation is the easiest way to start before making the drive in.", nearbyCities: ["rancho-santa-margarita", "mission-viejo"] },
  { slug: "las-flores", name: "Las Flores", county: "Orange County", tier: 2, driveTimeFromSalon: "33 minutes", distanceMiles: 23, landmarks: ["Wagon Wheel Canyon Community Park"], intro: "Las Flores clients travel about 33 minutes to reach our Orange studio. We start every relationship here virtually, a free consultation first, a fitting appointment once the timing works.", nearbyCities: ["rancho-santa-margarita", "san-juan-capistrano"] },
  { slug: "dove-canyon", name: "Dove Canyon", county: "Orange County", tier: 2, driveTimeFromSalon: "35 minutes", distanceMiles: 25, landmarks: ["Dove Canyon Golf Club"], intro: "Dove Canyon, the gated golf community south of Rancho Santa Margarita, is one of our farther drives at about 35 minutes. Book a free virtual consultation first, the trip up to Orange comes later.", nearbyCities: ["rancho-santa-margarita", "mission-viejo"] },
  { slug: "corona-del-mar", name: "Corona del Mar", county: "Orange County", tier: 2, driveTimeFromSalon: "24 minutes", distanceMiles: 13, landmarks: ["Corona del Mar State Beach"], intro: "Corona del Mar clients trade a beach morning for an afternoon fitting at our Orange studio, about 24 minutes inland. Start with a free virtual consultation, no drive required until you're ready.", nearbyCities: ["newport-beach", "costa-mesa"] },
  { slug: "newport-coast", name: "Newport Coast", county: "Orange County", tier: 2, driveTimeFromSalon: "25 minutes", distanceMiles: 14, landmarks: ["Crystal Cove State Park"], intro: "Newport Coast, along the bluffs above Crystal Cove, is about 25 minutes from our Orange studio. A free virtual consultation is the easiest first step before the drive inland.", nearbyCities: ["newport-beach", "laguna-beach"] },
  { slug: "balboa-island", name: "Balboa Island", county: "Orange County", tier: 2, driveTimeFromSalon: "24 minutes", distanceMiles: 13, landmarks: ["Balboa Island Ferry"], intro: "Balboa Island clients make the short hop off the island and inland to our Orange studio, about 24 minutes door to door. Book your free virtual consultation first, the fitting comes after.", nearbyCities: ["newport-beach", "costa-mesa"] },
  { slug: "capistrano-beach", name: "Capistrano Beach", county: "Orange County", tier: 2, driveTimeFromSalon: "37 minutes", distanceMiles: 27, landmarks: ["Capistrano Beach Park"], intro: "Capistrano Beach, just south of Dana Point Harbor, is about 37 minutes from our Orange studio. We start every client here virtually, a free consultation first, an in-person fitting once you're ready.", nearbyCities: ["dana-point", "san-juan-capistrano"] },
  { slug: "sunset-beach", name: "Sunset Beach", county: "Orange County", tier: 2, driveTimeFromSalon: "26 minutes", distanceMiles: 16, landmarks: ["Sunset Beach Historic District"], intro: "Sunset Beach, the narrow beach community between Huntington Beach and Seal Beach, is about 26 minutes from our Orange studio. Book a free virtual consultation online to get started.", nearbyCities: ["huntington-beach", "westminster"] },
  { slug: "silverado", name: "Silverado", county: "Orange County", tier: 2, driveTimeFromSalon: "24 minutes", distanceMiles: 14, landmarks: ["Silverado Canyon"], intro: "Silverado, up in the canyon community east of Orange, is about 24 minutes from our studio. A free virtual consultation is the easiest way to start before the canyon drive down.", nearbyCities: ["orange", "villa-park"] },
  { slug: "orange-park-acres", name: "Orange Park Acres", county: "Orange County", tier: 2, driveTimeFromSalon: "10 minutes", distanceMiles: 5, landmarks: ["Orange Park Acres equestrian trails"], intro: "Orange Park Acres, the horse-property enclave inside Orange, is one of the shortest drives to our studio on this whole list. Start with a free virtual consultation, then swing by whenever suits you.", nearbyCities: ["orange", "villa-park"] },
  { slug: "cowan-heights", name: "Cowan Heights", county: "Orange County", tier: 2, driveTimeFromSalon: "11 minutes", distanceMiles: 6, landmarks: ["North Tustin foothills"], intro: "Cowan Heights, in the North Tustin foothills, is a short drive to our Orange studio. Book your free virtual consultation first, we'll schedule the fitting around your week.", nearbyCities: ["tustin", "orange"] },
  { slug: "talega", name: "Talega", county: "Orange County", tier: 2, driveTimeFromSalon: "42 minutes", distanceMiles: 33, landmarks: ["Talega Golf Club"], intro: "Talega, the master-planned community in north San Clemente, is one of our longer drives at about 42 minutes. That's exactly why we start every relationship with a free virtual consultation first.", nearbyCities: ["san-clemente", "dana-point"] },
  { slug: "lakewood", name: "Lakewood", county: "Los Angeles County", tier: 2, driveTimeFromSalon: "30 minutes", distanceMiles: 22, landmarks: ["Lakewood Center"], intro: "Lakewood clients travel about 30 minutes down to our Orange studio, often combining the trip with a Lakewood Center errand. Start with a free virtual consultation to get the process moving.", nearbyCities: ["long-beach", "cerritos"] },
  { slug: "bellflower", name: "Bellflower", county: "Los Angeles County", tier: 2, driveTimeFromSalon: "32 minutes", distanceMiles: 24, landmarks: ["Bellflower Town Center"], intro: "Bellflower is about 32 minutes from our Orange studio, a straightforward freeway drive once you're ready for a fitting. Book your free virtual consultation online first.", nearbyCities: ["cerritos", "long-beach"] },
  { slug: "norwalk", name: "Norwalk", county: "Los Angeles County", tier: 2, driveTimeFromSalon: "28 minutes", distanceMiles: 20, landmarks: ["Cerritos College"], intro: "Norwalk clients, many near Cerritos College, make the drive south to Orange for their fitting. We start every relationship here with a free virtual consultation first.", nearbyCities: ["cerritos", "buena-park"] },
  { slug: "la-mirada", name: "La Mirada", county: "Los Angeles County", tier: 2, driveTimeFromSalon: "25 minutes", distanceMiles: 18, landmarks: ["La Mirada Theatre for the Performing Arts"], intro: "La Mirada, home to the Theatre for the Performing Arts, is about 25 minutes from our Orange studio. A free virtual consultation is the easiest way to see if the timing works before the drive.", nearbyCities: ["buena-park", "fullerton"] },
  { slug: "artesia", name: "Artesia", county: "Los Angeles County", tier: 2, driveTimeFromSalon: "27 minutes", distanceMiles: 19, landmarks: ["Little India, Pioneer Boulevard"], intro: "Artesia, home to the Little India district, is about 27 minutes from our Orange studio. Book a free virtual consultation first, the studio visit comes once you're ready.", nearbyCities: ["cerritos", "buena-park"] },
  { slug: "hawaiian-gardens", name: "Hawaiian Gardens", county: "Los Angeles County", tier: 2, driveTimeFromSalon: "28 minutes", distanceMiles: 20, landmarks: ["Hawaiian Gardens Casino"], intro: "Hawaiian Gardens clients make a straightforward freeway drive south to Orange for their fitting. We start every relationship virtually, a free consultation first.", nearbyCities: ["cerritos", "long-beach"] },
  { slug: "downey", name: "Downey", county: "Los Angeles County", tier: 2, driveTimeFromSalon: "32 minutes", distanceMiles: 24, landmarks: ["Downey Theatre", "the original McDonald's site"], intro: "Downey is about 32 minutes from our Orange studio, an easy trip for clients already familiar with the 5 freeway corridor. Start with a free virtual consultation to get things moving.", nearbyCities: ["whittier", "cerritos"] },
  { slug: "pico-rivera", name: "Pico Rivera", county: "Los Angeles County", tier: 2, driveTimeFromSalon: "34 minutes", distanceMiles: 26, landmarks: ["Pico Rivera Sports Arena"], intro: "Pico Rivera clients travel about 34 minutes to reach our Orange studio. Book your free virtual consultation online, the fitting comes after, on your schedule.", nearbyCities: ["whittier", "downey"] },
  { slug: "santa-fe-springs", name: "Santa Fe Springs", county: "Los Angeles County", tier: 2, driveTimeFromSalon: "30 minutes", distanceMiles: 22, landmarks: ["Heritage Park"], intro: "Santa Fe Springs is about 30 minutes from our Orange studio, a simple freeway trip once you're ready for your fitting. A free virtual consultation is always the first step.", nearbyCities: ["whittier", "buena-park"] },
  { slug: "signal-hill", name: "Signal Hill", county: "Los Angeles County", tier: 2, driveTimeFromSalon: "30 minutes", distanceMiles: 22, landmarks: ["Signal Hill overlook"], intro: "Signal Hill, the hilltop city inside Long Beach, is about 30 minutes from our Orange studio. Start with a free virtual consultation, then plan your fitting around your week.", nearbyCities: ["long-beach", "cerritos"] },
  { slug: "la-habra-heights", name: "La Habra Heights", county: "Los Angeles County", tier: 2, driveTimeFromSalon: "24 minutes", distanceMiles: 16, landmarks: ["hillside equestrian trails"], intro: "La Habra Heights clients make an easy drive down to our Orange studio, close enough for a weekend fitting slot. Book your free virtual consultation first.", nearbyCities: ["fullerton", "brea"] },
  { slug: "walnut", name: "Walnut", county: "Los Angeles County", tier: 2, driveTimeFromSalon: "36 minutes", distanceMiles: 28, landmarks: ["Mt. San Antonio College"], intro: "Walnut is about 36 minutes from our Orange studio, comfortably reachable for a fitting once your free virtual consultation confirms the plan.", nearbyCities: ["diamond-bar", "whittier"] },
  { slug: "rowland-heights", name: "Rowland Heights", county: "Los Angeles County", tier: 2, driveTimeFromSalon: "35 minutes", distanceMiles: 27, landmarks: ["Peter F. Schabarum Regional Park"], intro: "Rowland Heights clients travel about 35 minutes south to our Orange studio. We start every relationship here with a free virtual consultation, long before anyone drives in.", nearbyCities: ["diamond-bar", "whittier"] },
  { slug: "hacienda-heights", name: "Hacienda Heights", county: "Los Angeles County", tier: 2, driveTimeFromSalon: "33 minutes", distanceMiles: 25, landmarks: ["Hsi Lai Temple"], intro: "Hacienda Heights, home to the Hsi Lai Temple, is about 33 minutes from our Orange studio. A free virtual consultation is the easiest first step before the drive south.", nearbyCities: ["diamond-bar", "whittier"] },
  { slug: "west-covina", name: "West Covina", county: "Los Angeles County", tier: 2, driveTimeFromSalon: "38 minutes", distanceMiles: 30, landmarks: ["Westfield West Covina"], intro: "West Covina clients make a longer, straightforward freeway trip to our Orange studio. Book a free virtual consultation first, then plan the drive around your fitting.", nearbyCities: ["diamond-bar", "whittier"] },
  { slug: "la-puente", name: "La Puente", county: "Los Angeles County", tier: 2, driveTimeFromSalon: "36 minutes", distanceMiles: 28, landmarks: ["near the City of Industry business corridor"], intro: "La Puente is about 36 minutes from our Orange studio. We start every relationship virtually, a free consultation first, the fitting once you're ready to make the drive.", nearbyCities: ["diamond-bar", "whittier"] },
  { slug: "industry", name: "Industry", county: "Los Angeles County", tier: 2, driveTimeFromSalon: "35 minutes", distanceMiles: 27, landmarks: ["Puente Hills Mall area"], intro: "The City of Industry is about 35 minutes from our Orange studio, an easy trip for clients who already commute through the corridor. Start with a free virtual consultation.", nearbyCities: ["diamond-bar", "whittier"] },
  { slug: "torrance", name: "Torrance", county: "Los Angeles County", tier: 2, driveTimeFromSalon: "40 minutes", distanceMiles: 32, landmarks: ["Del Amo Fashion Center"], intro: "Torrance clients travel about 40 minutes to reach our Orange studio, often pairing the trip with a Del Amo stop. Book your free virtual consultation online first.", nearbyCities: ["long-beach", "cerritos"] },
  { slug: "carson", name: "Carson", county: "Los Angeles County", tier: 2, driveTimeFromSalon: "34 minutes", distanceMiles: 26, landmarks: ["Dignity Health Sports Park"], intro: "Carson is about 34 minutes from our Orange studio, a simple freeway drive once you're ready for your fitting. A free virtual consultation is always step one.", nearbyCities: ["long-beach", "cerritos"] },
  { slug: "san-pedro", name: "San Pedro", county: "Los Angeles County", tier: 2, driveTimeFromSalon: "40 minutes", distanceMiles: 30, landmarks: ["Port of Los Angeles", "Cabrillo Beach"], intro: "San Pedro clients make the longer harbor-side drive to our Orange studio, about 40 minutes. We start every relationship virtually, a free consultation first.", nearbyCities: ["long-beach", "torrance"] },
  { slug: "palos-verdes-estates", name: "Palos Verdes Estates", county: "Los Angeles County", tier: 2, driveTimeFromSalon: "44 minutes", distanceMiles: 34, landmarks: ["Palos Verdes coastal bluffs"], intro: "Palos Verdes Estates is one of our farther western markets, about 44 minutes from our Orange studio. Book a free virtual consultation first, the drive comes later.", nearbyCities: ["torrance", "long-beach"] },
  { slug: "rancho-palos-verdes", name: "Rancho Palos Verdes", county: "Los Angeles County", tier: 2, driveTimeFromSalon: "43 minutes", distanceMiles: 33, landmarks: ["Terranea Resort", "Wayfarers Chapel"], intro: "Rancho Palos Verdes clients travel about 43 minutes to our Orange studio. A free virtual consultation is the easiest way to start before making that drive.", nearbyCities: ["torrance", "long-beach"] },
  { slug: "manhattan-beach", name: "Manhattan Beach", county: "Los Angeles County", tier: 2, driveTimeFromSalon: "45 minutes", distanceMiles: 35, landmarks: ["Manhattan Beach Pier"], intro: "Manhattan Beach is about 45 minutes from our Orange studio, comfortably reachable for a fitting once your free virtual consultation confirms the plan.", nearbyCities: ["torrance", "long-beach"] },
  { slug: "redondo-beach", name: "Redondo Beach", county: "Los Angeles County", tier: 2, driveTimeFromSalon: "43 minutes", distanceMiles: 33, landmarks: ["Redondo Beach Pier and Harbor"], intro: "Redondo Beach clients make the drive from the harbor down to our Orange studio, about 43 minutes. Start with a free virtual consultation, no drive required until you're ready.", nearbyCities: ["torrance", "long-beach"] },
  { slug: "el-segundo", name: "El Segundo", county: "Los Angeles County", tier: 2, driveTimeFromSalon: "46 minutes", distanceMiles: 36, landmarks: ["the aerospace corridor near LAX"], intro: "El Segundo is one of our farthest west markets, about 46 minutes from our Orange studio. We start every relationship here virtually, a free consultation first, always.", nearbyCities: ["torrance", "long-beach"] },
  { slug: "compton", name: "Compton", county: "Los Angeles County", tier: 2, driveTimeFromSalon: "33 minutes", distanceMiles: 25, landmarks: ["near the 91/110 interchange"], intro: "Compton clients make a straightforward freeway drive to our Orange studio, about 33 minutes. Book your free virtual consultation online first, the fitting comes after.", nearbyCities: ["long-beach", "cerritos"] },
  { slug: "paramount", name: "Paramount", county: "Los Angeles County", tier: 2, driveTimeFromSalon: "32 minutes", distanceMiles: 24, landmarks: ["Paramount's industrial corridor"], intro: "Paramount is about 32 minutes from our Orange studio. A free virtual consultation is the easiest first step before the drive down.", nearbyCities: ["long-beach", "cerritos"] },
  { slug: "south-gate", name: "South Gate", county: "Los Angeles County", tier: 2, driveTimeFromSalon: "33 minutes", distanceMiles: 25, landmarks: ["South Gate Park"], intro: "South Gate clients travel about 33 minutes to reach our Orange studio. We start every relationship virtually, a free consultation first, an in-person fitting once you're ready.", nearbyCities: ["long-beach", "downey"] },
  { slug: "lynwood", name: "Lynwood", county: "Los Angeles County", tier: 2, driveTimeFromSalon: "34 minutes", distanceMiles: 26, landmarks: ["near the 105/710 interchange"], intro: "Lynwood is about 34 minutes from our Orange studio, a simple freeway trip once you're ready for your fitting. Book a free virtual consultation first.", nearbyCities: ["long-beach", "downey"] },
  { slug: "montebello", name: "Montebello", county: "Los Angeles County", tier: 2, driveTimeFromSalon: "36 minutes", distanceMiles: 28, landmarks: ["Montebello Town Center"], intro: "Montebello clients make the drive south to our Orange studio, about 36 minutes. Start with a free virtual consultation, then plan your fitting around your week.", nearbyCities: ["whittier", "downey"] },
  { slug: "pasadena", name: "Pasadena", county: "Los Angeles County", tier: 2, driveTimeFromSalon: "46 minutes", distanceMiles: 36, landmarks: ["the Rose Bowl", "Old Pasadena"], intro: "Pasadena is one of our farther northern markets, about 46 minutes from our Orange studio. A free virtual consultation is always the first step before making that drive.", nearbyCities: ["whittier", "diamond-bar"] },
  { slug: "glendale", name: "Glendale", county: "Los Angeles County", tier: 2, driveTimeFromSalon: "48 minutes", distanceMiles: 38, landmarks: ["the Americana at Brand", "Glendale Galleria"], intro: "Glendale clients travel about 48 minutes to our Orange studio. We start every relationship here virtually, a free consultation first, long before the drive south.", nearbyCities: ["whittier", "diamond-bar"] },
  { slug: "burbank", name: "Burbank", county: "Los Angeles County", tier: 2, driveTimeFromSalon: "47 minutes", distanceMiles: 37, landmarks: ["the Warner Bros. and Disney studio lots"], intro: "Burbank, home to the studio lots, is about 47 minutes from our Orange studio. Book your free virtual consultation online first, the drive comes later.", nearbyCities: ["whittier", "diamond-bar"] },
  { slug: "beverly-hills", name: "Beverly Hills", county: "Los Angeles County", tier: 2, driveTimeFromSalon: "50 minutes", distanceMiles: 40, landmarks: ["Rodeo Drive"], intro: "Beverly Hills is one of our farthest west markets, about 50 minutes from our Orange studio. A free virtual consultation is the easiest way to start before making that drive.", nearbyCities: ["long-beach", "torrance"] },
  { slug: "santa-monica", name: "Santa Monica", county: "Los Angeles County", tier: 2, driveTimeFromSalon: "52 minutes", distanceMiles: 40, landmarks: ["Santa Monica Pier"], intro: "Santa Monica clients travel about 52 minutes to our Orange studio, usually after starting the process with a free virtual consultation from home.", nearbyCities: ["long-beach", "torrance"] },
  { slug: "culver-city", name: "Culver City", county: "Los Angeles County", tier: 2, driveTimeFromSalon: "48 minutes", distanceMiles: 36, landmarks: ["Sony Pictures Studios"], intro: "Culver City is about 48 minutes from our Orange studio. Start with a free virtual consultation, no drive required until you're ready for your fitting.", nearbyCities: ["long-beach", "torrance"] },
  { slug: "pomona", name: "Pomona", county: "Los Angeles County", tier: 2, driveTimeFromSalon: "38 minutes", distanceMiles: 30, landmarks: ["Fairplex"], intro: "Pomona, home to Fairplex, is about 38 minutes from our Orange studio. Book a free virtual consultation first, the studio visit comes after.", nearbyCities: ["diamond-bar", "whittier"] },
  { slug: "covina", name: "Covina", county: "Los Angeles County", tier: 2, driveTimeFromSalon: "37 minutes", distanceMiles: 29, landmarks: ["Downtown Covina"], intro: "Covina clients travel about 37 minutes to reach our Orange studio. We start every relationship virtually, a free consultation first, always.", nearbyCities: ["diamond-bar", "whittier"] },
  { slug: "glendora", name: "Glendora", county: "Los Angeles County", tier: 2, driveTimeFromSalon: "38 minutes", distanceMiles: 30, landmarks: ["the historic Route 66 downtown"], intro: "Glendora, along the old Route 66 corridor, is about 38 minutes from our Orange studio. A free virtual consultation is the easiest first step before the drive south.", nearbyCities: ["diamond-bar", "whittier"] },
  { slug: "azusa", name: "Azusa", county: "Los Angeles County", tier: 2, driveTimeFromSalon: "39 minutes", distanceMiles: 31, landmarks: ["Citrus College", "the San Gabriel Canyon"], intro: "Azusa is about 39 minutes from our Orange studio. Book your free virtual consultation online, then plan the drive around your fitting.", nearbyCities: ["diamond-bar", "whittier"] },
  { slug: "baldwin-park", name: "Baldwin Park", county: "Los Angeles County", tier: 2, driveTimeFromSalon: "37 minutes", distanceMiles: 29, landmarks: ["the original In-N-Out Burger site"], intro: "Baldwin Park clients travel about 37 minutes to our Orange studio. Start with a free virtual consultation, the fitting comes later, on your schedule.", nearbyCities: ["diamond-bar", "whittier"] },
  { slug: "el-monte", name: "El Monte", county: "Los Angeles County", tier: 2, driveTimeFromSalon: "36 minutes", distanceMiles: 28, landmarks: ["El Monte Historical Museum"], intro: "El Monte is about 36 minutes from our Orange studio, a simple freeway trip once your free virtual consultation confirms the plan.", nearbyCities: ["diamond-bar", "whittier"] },
  { slug: "alhambra", name: "Alhambra", county: "Los Angeles County", tier: 2, driveTimeFromSalon: "39 minutes", distanceMiles: 30, landmarks: ["near South Pasadena"], intro: "Alhambra clients make the drive south to our Orange studio, about 39 minutes. We start every relationship here virtually, a free consultation first.", nearbyCities: ["whittier", "diamond-bar"] },
  { slug: "monterey-park", name: "Monterey Park", county: "Los Angeles County", tier: 2, driveTimeFromSalon: "37 minutes", distanceMiles: 29, landmarks: ["one of the region's first suburban Chinatowns"], intro: "Monterey Park is about 37 minutes from our Orange studio. Book a free virtual consultation first, the studio visit comes after, on your schedule.", nearbyCities: ["whittier", "diamond-bar"] },
  { slug: "norco", name: "Norco", county: "Riverside County", tier: 2, driveTimeFromSalon: "36 minutes", distanceMiles: 28, landmarks: ["Norco's equestrian trails, \u201cHorsetown USA\u201d"], intro: "Norco, known for its horse properties, is about 36 minutes from our Orange studio. A free virtual consultation is the easiest first step before crossing into Orange County.", nearbyCities: ["corona", "chino-hills"] },
  { slug: "eastvale", name: "Eastvale", county: "Riverside County", tier: 2, driveTimeFromSalon: "34 minutes", distanceMiles: 26, landmarks: ["Eastvale's newer master-planned neighborhoods"], intro: "Eastvale clients travel about 34 minutes to our Orange studio. Start with a free virtual consultation, then plan your fitting around your week.", nearbyCities: ["chino-hills", "corona"] },
  { slug: "riverside", name: "Riverside", county: "Riverside County", tier: 2, driveTimeFromSalon: "38 minutes", distanceMiles: 30, landmarks: ["the historic Mission Inn"], intro: "Riverside, home to the historic Mission Inn, is about 38 minutes from our Orange studio. Book your free virtual consultation online first, the drive comes later.", nearbyCities: ["corona", "chino-hills"] },
  { slug: "lake-elsinore", name: "Lake Elsinore", county: "Riverside County", tier: 2, driveTimeFromSalon: "40 minutes", distanceMiles: 32, landmarks: ["Lake Elsinore itself"], intro: "Lake Elsinore is about 40 minutes from our Orange studio. We start every relationship here virtually, a free consultation first, always before the drive.", nearbyCities: ["corona", "rancho-santa-margarita"] },
  { slug: "temescal-valley", name: "Temescal Valley", county: "Riverside County", tier: 2, driveTimeFromSalon: "34 minutes", distanceMiles: 26, landmarks: ["Glen Ivy Hot Springs"], intro: "Temescal Valley, near Glen Ivy Hot Springs, is about 34 minutes from our Orange studio. A free virtual consultation is always step one.", nearbyCities: ["corona", "chino-hills"] },
  { slug: "chino", name: "Chino", county: "San Bernardino County", tier: 2, driveTimeFromSalon: "32 minutes", distanceMiles: 24, landmarks: ["Chino's dairy-farm heritage"], intro: "Chino clients travel about 32 minutes to reach our Orange studio. Book a free virtual consultation first, the fitting comes after, on your schedule.", nearbyCities: ["chino-hills", "diamond-bar"] },
  { slug: "ontario", name: "Ontario", county: "San Bernardino County", tier: 2, driveTimeFromSalon: "36 minutes", distanceMiles: 28, landmarks: ["Ontario Mills"], intro: "Ontario, home to Ontario Mills, is about 36 minutes from our Orange studio. A free virtual consultation is the easiest first step before the drive down.", nearbyCities: ["chino-hills", "diamond-bar"] },
  { slug: "montclair", name: "Montclair", county: "San Bernardino County", tier: 2, driveTimeFromSalon: "35 minutes", distanceMiles: 27, landmarks: ["Montclair Place"], intro: "Montclair clients make the drive south to our Orange studio, about 35 minutes. Start with a free virtual consultation, then plan the trip around your fitting.", nearbyCities: ["chino-hills", "diamond-bar"] },
  { slug: "upland", name: "Upland", county: "San Bernardino County", tier: 2, driveTimeFromSalon: "37 minutes", distanceMiles: 29, landmarks: ["the historic Route 66 corridor"], intro: "Upland is about 37 minutes from our Orange studio. We start every relationship here virtually, a free consultation first, long before the drive south.", nearbyCities: ["chino-hills", "diamond-bar"] },
  { slug: "oceanside", name: "Oceanside", county: "San Diego County", tier: 2, driveTimeFromSalon: "65 minutes", distanceMiles: 55, landmarks: ["Oceanside Pier"], intro: "Oceanside is one of our farthest southern markets, about 65 minutes from our Orange studio. A free virtual consultation makes the distance easy, the drive only happens once for your fitting.", nearbyCities: ["san-clemente", "dana-point"] },
  { slug: "carlsbad", name: "Carlsbad", county: "San Diego County", tier: 2, driveTimeFromSalon: "60 minutes", distanceMiles: 50, landmarks: ["LEGOLAND California"], intro: "Carlsbad clients travel about 60 minutes north to our Orange studio. We start every relationship here virtually, a free consultation first, always.", nearbyCities: ["san-clemente", "dana-point"] },
  { slug: "vista", name: "Vista", county: "San Diego County", tier: 2, driveTimeFromSalon: "62 minutes", distanceMiles: 52, landmarks: ["the Moonlight Amphitheatre"], intro: "Vista is about 62 minutes from our Orange studio. Book your free virtual consultation online first, the single drive north comes only for your fitting.", nearbyCities: ["san-clemente", "dana-point"] },
  { slug: "san-marcos", name: "San Marcos", county: "San Diego County", tier: 2, driveTimeFromSalon: "60 minutes", distanceMiles: 50, landmarks: ["Cal State San Marcos"], intro: "San Marcos clients make the longer drive north to our Orange studio, about 60 minutes. A free virtual consultation is always the first step.", nearbyCities: ["san-clemente", "dana-point"] },
  { slug: "encinitas", name: "Encinitas", county: "San Diego County", tier: 2, driveTimeFromSalon: "63 minutes", distanceMiles: 53, landmarks: ["Swami's Beach"], intro: "Encinitas is about 63 minutes from our Orange studio. We start every relationship virtually, a free consultation first, the single trip north comes later.", nearbyCities: ["san-clemente", "dana-point"] },
  { slug: "escondido", name: "Escondido", county: "San Diego County", tier: 2, driveTimeFromSalon: "58 minutes", distanceMiles: 48, landmarks: ["San Diego Zoo Safari Park"], intro: "Escondido, near the Safari Park, is about 58 minutes from our Orange studio. Book a free virtual consultation first, the drive comes only once, for your fitting.", nearbyCities: ["san-clemente", "temecula"] },
  { slug: "fallbrook", name: "Fallbrook", county: "San Diego County", tier: 2, driveTimeFromSalon: "55 minutes", distanceMiles: 45, landmarks: ["the \u201cAvocado Capital of the World\u201d groves"], intro: "Fallbrook clients travel about 55 minutes to reach our Orange studio. A free virtual consultation is the easiest way to start before that single drive north.", nearbyCities: ["temecula", "san-clemente"] },
  { slug: "temecula", name: "Temecula", county: "Riverside County", tier: 2, driveTimeFromSalon: "48 minutes", distanceMiles: 38, landmarks: ["Temecula Valley Wine Country"], intro: "Temecula, in the heart of wine country, is about 48 minutes from our Orange studio. Start with a free virtual consultation, then plan the drive around your fitting.", nearbyCities: ["murrieta", "san-clemente"] },
  { slug: "murrieta", name: "Murrieta", county: "Riverside County", tier: 2, driveTimeFromSalon: "50 minutes", distanceMiles: 40, landmarks: ["Murrieta's master-planned neighborhoods"], intro: "Murrieta clients make about a 50-minute drive to our Orange studio. We start every relationship virtually, a free consultation first, always.", nearbyCities: ["temecula", "san-clemente"] },
  { slug: "san-diego", name: "San Diego", county: "San Diego County", tier: 2, driveTimeFromSalon: "85 minutes", distanceMiles: 75, landmarks: ["Balboa Park", "the Gaslamp Quarter"], intro: "San Diego is our farthest regular market, about 85 minutes from our Orange studio. A free virtual consultation makes that distance easy, the single drive north happens only for your fitting and cut-in.", nearbyCities: ["san-clemente", "dana-point"] },
];

export function getCity(slug: string): City | undefined {
  return TIER1_CITIES.find((c) => c.slug === slug) ?? TIER2_CITIES.find((c) => c.slug === slug);
}

/** All 124 city pages (Tier 1 + Tier 2), for the /locations/ hub and sitemap. */
export const ALL_CITIES: City[] = [...TIER1_CITIES, ...TIER2_CITIES];
