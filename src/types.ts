export interface PortfolioItem {
  id: string;
  title: string;
  category: 'weddings' | 'sympathy' | 'events' | 'heritage' | 'bouquets';
  categoryLabel: string;
  image: string;
  isOriginalAsset?: boolean;
  badge?: string;
  description: string;
  blooms: string[];
  occasion: string;
  location?: string;
}

export interface ServiceOffering {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  startingPrice: string;
  tag: string;
}

export interface ClientOrder {
  bookingId: string;
  clientName: string;
  eventType: 'Wedding' | 'Sympathy Tribute' | 'Private Event' | 'Bouquet Delivery';
  date: string;
  venueOrAddress: string;
  status: 'Design Confirmed' | 'Stems Sourced' | 'In Studio Production' | 'Out for Delivery (Bespoke Flower Delivery van)' | 'Delivered';
  palette: string;
  keyFlowers: string[];
  notes: string;
  assignedVehicle: string;
  leadFlorist: string;
  totalEstimate: string;
}

export interface SeasonalBloom {
  month: string;
  season: 'Spring' | 'Summer' | 'Autumn' | 'Winter';
  highlightBlooms: string[];
  floristTip: string;
}

export interface DeliveryRegion {
  name: string;
  areaCode: string;
  suburbs: string[];
  leadTime: string;
  sameDayAvailable: boolean;
}
