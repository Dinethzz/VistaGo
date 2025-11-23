export interface Destination {
  id: string;
  name: string;
  country: string;
  description: string;
  image: string;
  rating: number;
  price: number;
  duration: string;
  category: 'beach' | 'mountain' | 'city' | 'adventure' | 'cultural';
  highlights: string[];
  bestTimeToVisit: string;
  activities: string[];
}

export const destinations: Destination[] = [
  {
    id: '1',
    name: 'Bali',
    country: 'Indonesia',
    description: 'A tropical paradise with stunning beaches, ancient temples, and vibrant culture. Experience the perfect blend of relaxation and adventure.',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800',
    rating: 4.8,
    price: 1200,
    duration: '7 days',
    category: 'beach',
    highlights: ['Beautiful beaches', 'Ancient temples', 'Rice terraces', 'Surfing'],
    bestTimeToVisit: 'April to October',
    activities: ['Beach hopping', 'Temple visits', 'Yoga retreats', 'Water sports', 'Cultural shows']
  },
  {
    id: '2',
    name: 'Swiss Alps',
    country: 'Switzerland',
    description: 'Majestic mountains, pristine lakes, and charming villages. Perfect for adventure seekers and nature lovers.',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800',
    rating: 4.9,
    price: 2500,
    duration: '10 days',
    category: 'mountain',
    highlights: ['Snow-capped peaks', 'Scenic train rides', 'Skiing', 'Hiking trails'],
    bestTimeToVisit: 'December to March (skiing), June to September (hiking)',
    activities: ['Skiing', 'Snowboarding', 'Hiking', 'Mountain biking', 'Cable car rides']
  },
  {
    id: '3',
    name: 'Tokyo',
    country: 'Japan',
    description: 'A fascinating blend of traditional and modern culture. From ancient temples to futuristic technology.',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800',
    rating: 4.7,
    price: 1800,
    duration: '8 days',
    category: 'city',
    highlights: ['Modern architecture', 'Traditional temples', 'Amazing food', 'Cherry blossoms'],
    bestTimeToVisit: 'March to May, September to November',
    activities: ['Temple tours', 'Shopping', 'Food tours', 'Museum visits', 'Night life']
  },
  {
    id: '4',
    name: 'Santorini',
    country: 'Greece',
    description: 'Iconic white-washed buildings with blue domes overlooking the Aegean Sea. Romance and beauty combined.',
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800',
    rating: 4.9,
    price: 1600,
    duration: '6 days',
    category: 'beach',
    highlights: ['Sunset views', 'White architecture', 'Wine tasting', 'Ancient ruins'],
    bestTimeToVisit: 'April to November',
    activities: ['Beach relaxation', 'Wine tours', 'Boat trips', 'Photography', 'Fine dining']
  },
  {
    id: '5',
    name: 'Machu Picchu',
    country: 'Peru',
    description: 'Ancient Incan citadel set high in the Andes Mountains. A UNESCO World Heritage site and one of the New Seven Wonders.',
    image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800',
    rating: 4.8,
    price: 1400,
    duration: '9 days',
    category: 'adventure',
    highlights: ['Ancient ruins', 'Mountain scenery', 'Inca Trail', 'Sacred Valley'],
    bestTimeToVisit: 'May to September',
    activities: ['Hiking', 'Historical tours', 'Photography', 'Cultural experiences', 'Train rides']
  },
  {
    id: '6',
    name: 'Paris',
    country: 'France',
    description: 'The City of Light and Love. World-class museums, iconic landmarks, and exquisite cuisine.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
    rating: 4.7,
    price: 2000,
    duration: '7 days',
    category: 'city',
    highlights: ['Eiffel Tower', 'Louvre Museum', 'French cuisine', 'Seine River'],
    bestTimeToVisit: 'April to June, September to October',
    activities: ['Museum tours', 'Fine dining', 'Shopping', 'River cruises', 'Architecture walks']
  },
  {
    id: '7',
    name: 'Maldives',
    country: 'Maldives',
    description: 'Tropical paradise with crystal-clear waters, white sandy beaches, and luxury overwater bungalows.',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800',
    rating: 4.9,
    price: 3000,
    duration: '7 days',
    category: 'beach',
    highlights: ['Overwater villas', 'Coral reefs', 'Water sports', 'Luxury resorts'],
    bestTimeToVisit: 'November to April',
    activities: ['Snorkeling', 'Diving', 'Spa treatments', 'Water sports', 'Island hopping']
  },
  {
    id: '8',
    name: 'Iceland',
    country: 'Iceland',
    description: 'Land of fire and ice. Experience the Northern Lights, geothermal hot springs, and dramatic landscapes.',
    image: 'https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=800',
    rating: 4.8,
    price: 2200,
    duration: '8 days',
    category: 'adventure',
    highlights: ['Northern Lights', 'Blue Lagoon', 'Waterfalls', 'Glaciers'],
    bestTimeToVisit: 'June to August (summer), September to March (Northern Lights)',
    activities: ['Northern Lights tours', 'Hot spring bathing', 'Glacier hiking', 'Whale watching', 'Waterfall visits']
  },
  {
    id: '9',
    name: 'Rome',
    country: 'Italy',
    description: 'The Eternal City. Ancient history meets modern life with incredible architecture, art, and cuisine.',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800',
    rating: 4.7,
    price: 1500,
    duration: '6 days',
    category: 'cultural',
    highlights: ['Colosseum', 'Vatican City', 'Roman Forum', 'Italian cuisine'],
    bestTimeToVisit: 'April to June, September to October',
    activities: ['Historical tours', 'Food tours', 'Museum visits', 'Shopping', 'Architecture walks']
  },
  {
    id: '10',
    name: 'Dubai',
    country: 'UAE',
    description: 'A city of superlatives with the world\'s tallest building, luxury shopping, and desert adventures.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800',
    rating: 4.6,
    price: 1900,
    duration: '7 days',
    category: 'city',
    highlights: ['Burj Khalifa', 'Desert safari', 'Luxury shopping', 'Modern architecture'],
    bestTimeToVisit: 'November to March',
    activities: ['Desert safari', 'Shopping', 'Fine dining', 'Water parks', 'Skydiving']
  }
];
