import { PortfolioItem, ServiceOffering, ClientOrder, SeasonalBloom, DeliveryRegion } from '../types';

export const BUSINESS_INFO = {
  name: "Power's Petals",
  tagline: "Bespoke Floral Design · West London",
  established: 2014,
  phonePrimary: "0845 5080607",
  phoneSecondary: "020 8995 5650",
  email: "info@powerspetals.com",
  studioAddress: "Grove Park Studios, 188 Sutton Court Road, Chiswick, London W4 3HR",
  areasServed: ["West London"],
  hours: "Monday – Saturday: 8:00 AM – 6:30 PM (Consultations by Appointment)",
  vanName: "Our Custom Piaggio Floral Van",
};

export const ORIGINAL_ASSETS = {
  logoBanner: "/images/Main_Header_transparent.png",
  logoBannerOriginal: "/images/Main_Header.gif",
  triptych: "/images/powers-petal.gif",
  bouquet: "/images/bouquet-original.jpg",
  piaggioTruck: "/images/piaggio-truck.jpg",
  sympathySpray: "/images/sympathy-spray.jpg",
};

export const SERVICES: ServiceOffering[] = [
  {
    id: "weddings",
    title: "Luxury Weddings & Bridal Floristry",
    subtitle: "From intimate chapel ceremonies to grand venue marquees",
    description: "Every love story is unique. We curate bespoke bridal bouquets, cascading floral arches, romantic table runners, and buttonholes using fresh seasonal stems conditioned to perfection.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Complimentary floral mood board & venue walkthrough",
      "Signature bridal bouquets with silk ribbon binding",
      "Ceremony arches, chuppahs & aisle meadows",
      "Full on-day setup, room flip & post-event breakdown"
    ],
    startingPrice: "£950",
    tag: "Most Requested"
  },
  {
    id: "sympathy",
    title: "Dignified Sympathy & Memorial Tributes",
    subtitle: "Heartfelt farewell sprays, casket blankets & bespoke named tributes",
    description: "Crafted with empathy and reverence. Our florists work closely with bereaved families and local funeral directors across Chiswick and West London to deliver tender, graceful farewell arrangements.",
    image: "/images/sympathy-spray.jpg",
    features: [
      "Direct coordination with funeral directors & chapels",
      "Full 4ft–6ft casket sprays & eco-friendly woodland tributes",
      "Custom letters, wreaths, pillows & bespoke emblems",
      "White-glove delivery in our climate-conditioned vehicle"
    ],
    startingPrice: "£140",
    tag: "Direct Director Liaison"
  },
  {
    id: "events",
    title: "Events, Galas & Private Dining",
    subtitle: "Immersive floral installations for milestone celebrations & corporate galas",
    description: "Transform your venue into a botanical sanctuary. We design dramatic suspended floral clouds, grand urns, and scented tablescapes for private estates, Chiswick houses, and Thames riverside venues.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Scalable installations for 20 to 500+ guests",
      "Candlelit tablescapes & elevated luxury candelabras",
      "Corporate weekly reception subscriptions",
      "Sustainable oasis-free foam-free design techniques"
    ],
    startingPrice: "£450",
    tag: "West London"
  },
  {
    id: "piaggio-delivery",
    title: "The Iconic Piaggio Delivery & Pop-Up",
    subtitle: "Our beloved custom 3-wheeled mobile flower truck",
    description: "Instantly recognisable across Chiswick and West London, our custom dark blue Piaggio is equipped for temperature-controlled deliveries and luxury experiential pop-ups for outdoor weddings.",
    image: "/images/piaggio-truck.jpg",
    features: [
      "Hand-delivered presentation bouquets in Chiswick & West London",
      "Available for hire as a wedding flower truck or photo-booth backdrop",
      "Fresh daily station flower runs & private client visits",
      "Custom branding and seasonal bloom styling available"
    ],
    startingPrice: "£75",
    tag: "Chiswick Landmark"
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "port-1",
    title: "The Signature Power's Petals Celebration Bouquet",
    category: "bouquets",
    categoryLabel: "Signature Bouquets",
    image: "/images/bouquet-original.jpg",
    isOriginalAsset: true,
    badge: "Authentic Original",
    description: "Our signature celebration hand-tied arrangement wrapped with genuine branded Power's Petals silk ribbon, featuring crimson gerberas, sunshine lilies, and snow-white spray chrysanthemums.",
    blooms: ["Crimson Gerberas", "Yellow Lilies", "White Spray Chrysanthemums", "Hypericum Berries", "Salal Foliage"],
    occasion: "Birthday, Anniversary & Milestone Celebrations",
    location: "Delivered throughout West London"
  },
  {
    id: "port-2",
    title: "The Famous Piaggio Mobile Florist Van",
    category: "heritage",
    categoryLabel: "Our Heritage Van",
    image: "/images/piaggio-truck.jpg",
    isOriginalAsset: true,
    badge: "Original Studio Van",
    description: "Our iconic deep navy Piaggio commercial 3-wheeler, adorned with our hand-painted watering can emblem and gold studio contact typography. Stationed outside Grove Park Studios Chiswick.",
    blooms: ["Hanging Petunias", "Seasonal Fresh Market Stems", "English Garden Foliage"],
    occasion: "Florist Delivery & Experiential Wedding Hire",
    location: "Chiswick W4 & West London Routes"
  },
  {
    id: "port-3",
    title: "Bespoke Lemon & Cream Memorial Casket Spray",
    category: "sympathy",
    categoryLabel: "Sympathy & Funerals",
    image: "/images/sympathy-spray.jpg",
    isOriginalAsset: true,
    badge: "Authentic Tribute",
    description: "A serene, hand-tailored casket tribute designed with soft buttery gerberas, cream avalanche roses, white stock, and aromatic blue gum eucalyptus foliage.",
    blooms: ["Cream Roses", "Buttery Gerberas", "White Matthiola Stock", "Silver Dollar Eucalyptus", "Lady's Mantle (Alchemilla)"],
    occasion: "Funeral & Memorial Remembrance",
    location: "West London Crematoriums"
  },
  {
    id: "port-4",
    title: "English Romantic Bridal Bouquet & Meadow Runners",
    category: "weddings",
    categoryLabel: "Weddings",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    badge: "Bespoke Bridal",
    description: "Lush, free-flowing bridal bouquet created with soft blush garden roses, ranunculus, delicate sweet peas, and trailing jasmine foliage tied with trailing silk ribbons.",
    blooms: ["Blush O'Hara Garden Roses", "White Ranunculus", "Scented Sweet Peas", "Italian Ruscus", "Jasmine Vine"],
    occasion: "Summer Wedding Ceremony",
    location: "Syon Park & Richmond Hill"
  },
  {
    id: "port-5",
    title: "Candlelit Banquet Tablescape & High Urn Arrangements",
    category: "events",
    categoryLabel: "Events & Galas",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80",
    badge: "Gala Design",
    description: "High drama tablescape for a riverside charity gala. Features continuous foliage runners intertwined with tapered candlelight and brass candelabras.",
    blooms: ["Snow White Hydrangeas", "Pearly Lisianthus", "Pistache Leaves", "Parvifolia Eucalyptus"],
    occasion: "Private Dining & Anniversary Gala",
    location: "West London Venues"
  },
  {
    id: "port-6",
    title: "Pastel Peonies & Summer Garden Hand-Tied",
    category: "bouquets",
    categoryLabel: "Signature Bouquets",
    image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1200&q=80",
    badge: "Seasonal Special",
    description: "Early summer bounty featuring Sarah Bernhardt peonies, wild chamomile matricaria, and fragrant garden mint foliage.",
    blooms: ["Coral & Pink Peonies", "Garden Chamomile", "Delphinium Stems", "Spearmint Foliage"],
    occasion: "Thank You & Congratulations",
    location: "Hand-delivered across West London"
  },
  {
    id: "port-7",
    title: "Pure White Lily & Rose Memorial Wreath",
    category: "sympathy",
    categoryLabel: "Sympathy & Funerals",
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1200&q=80",
    badge: "Solemn Tribute",
    description: "Classic circular memorial ring symbolizing eternity, composed of pristine oriental lilies, ivory roses, and lush textural ferns.",
    blooms: ["Oriental Lilies", "Avalanche White Roses", "Leather Fern", "Waxflowers"],
    occasion: "Family Sympathy Tribute",
    location: "Mortlake & Hanworth Crematoriums"
  }
];

export const DEMO_CLIENT_ORDERS: ClientOrder[] = [
  {
    bookingId: "PP-WED-2026-884",
    clientName: "Charlotte & Marcus Vane",
    eventType: "Wedding",
    date: "14 June 2026",
    venueOrAddress: "Chiswick Riverside Suite, London W4",
    status: "In Studio Production",
    palette: "Champagne, Ivory & Sage Green",
    keyFlowers: ["David Austin Patience Roses", "White Hydrangeas", "Sweet Peas", "Silver Dollar Eucalyptus"],
    notes: "Ceremony at 1:30 PM. Arch installation starting at 9:00 AM. Bridal party bouquets hand-delivered to the Bridal Suite in water vessels.",
    assignedVehicle: "Piaggio Van (Floral Van #1)",
    leadFlorist: "Helen Power",
    totalEstimate: "£2,450.00 (Deposit Paid £800)"
  },
  {
    bookingId: "PP-SYM-2026-112",
    clientName: "The Sterling Family",
    eventType: "Sympathy Tribute",
    date: "28 October 2026",
    venueOrAddress: "Mortlake Crematorium, Kew Meadow Path, Richmond TW9 4EN",
    status: "Design Confirmed",
    palette: "Soft Lemon, Cream & Botanical Greens",
    keyFlowers: ["Yellow Gerberas", "Cream Avalanche Roses", "White Stock", "Eucalyptus"],
    notes: "5ft Double-ended Casket Spray. Liaison confirmed with Lodge Brothers Funeral Directors. Direct delivery by 10:15 AM.",
    assignedVehicle: "Studio Delivery Van",
    leadFlorist: "Marcus Power",
    totalEstimate: "£265.00 (Fully Settled)"
  },
  {
    bookingId: "PP-EVT-2026-309",
    clientName: "Chiswick River Terrace Gala",
    eventType: "Private Event",
    date: "05 November 2026",
    venueOrAddress: "Corney Reach Way, Chiswick, London W4 2UG",
    status: "Stems Sourced",
    palette: "Autumnal Burgundy, Burnt Copper & Spiced Gold",
    keyFlowers: ["Chocolate Cosmos", "Copper Dahlias", "Rosehips", "Antike Roses"],
    notes: "12 centerpiece low compotes plus grand entrance urn. Candle glassware provided by Power's Petals studio.",
    assignedVehicle: "Piaggio Van (Event Display)",
    leadFlorist: "Helen Power",
    totalEstimate: "£1,680.00"
  }
];

export const DELIVERY_REGIONS: DeliveryRegion[] = [
  {
    name: "West London (W4 Chiswick Studio & Environs)",
    areaCode: "W4, W5, W6, W12",
    suburbs: ["Chiswick", "Grove Park", "Bedford Park", "Gunnersbury", "Ealing", "Hammersmith", "Shepherds Bush"],
    leadTime: "Same-Day Delivery (order before 11am) or Scheduled",
    sameDayAvailable: true
  }
];

export const SEASONAL_BLOOMS: SeasonalBloom[] = [
  {
    month: "Spring (March – May)",
    season: "Spring",
    highlightBlooms: ["English Ranunculus", "Fragrant Scented Narcissi", "Lilacs", "Anemones", "Flowering Blossom Stems", "Early Peonies"],
    floristTip: "Spring bulb stems prefer cold, crisp water and daily recutting at a 45-degree angle to maintain their delicate stems."
  },
  {
    month: "Summer (June – August)",
    season: "Summer",
    highlightBlooms: ["British Garden Roses", "Sarah Bernhardt Peonies", "Spired Delphiniums", "Hydrangeas", "Sweet Peas", "Cosmos"],
    floristTip: "Keep summer blooms away from direct draughts and ripening fruit bowls, which emit ethylene gas that accelerates wilting."
  },
  {
    month: "Autumn (September – November)",
    season: "Autumn",
    highlightBlooms: ["Spectacular Café au Lait Dahlias", "Wild Rosehips", "Japanese Anemones", "Chrysanthemums", "Smoked Oak Foliage"],
    floristTip: "Textural woody stems benefit from a vertical slit in the base of the stem to maximize hydraulic uptake."
  },
  {
    month: "Winter (December – February)",
    season: "Winter",
    highlightBlooms: ["Velvet Hellebores", "French Tulips", "Paperwhites", "Amaryllis", "Pine & Blue Spruce Foliage", "Winter Berries"],
    floristTip: "Amaryllis and hollow stems should be supported by a small floral cane inserted inside to carry heavy opening heads."
  }
];
