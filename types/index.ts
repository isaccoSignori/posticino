interface CollapsedCardProps {
    id: number;
    name: string;
    description: string;
    stars: number;
    image: string;
    location: string;
}

export interface Location extends CollapsedCardProps {
    country: string;
    region: string;
    activities: string[];
    bestTimeToVisit: string;
}

export interface Restaurant extends CollapsedCardProps {
    cuisine: string;
    priceRange: string;
    specialties: string[];
}