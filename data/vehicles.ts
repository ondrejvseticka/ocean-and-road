import type { Vehicle } from '@/types';

export const vehicles: Vehicle[] = [
  {
    id: 'yacht-azure-dream',
    name: 'Azure Dream',
    type: 'yacht',
    pricePerDay: 1200,
    imageUrl: 'https://images.unsplash.com/photo-1747447724564-ee7bc64606f2?w=800&q=80',
    description: '45ft motor yacht, good for day trips along the coast.',
  },
  {
    id: 'yacht-sea-breeze',
    name: 'Sea Breeze',
    type: 'yacht',
    pricePerDay: 950,
    imageUrl: 'https://images.unsplash.com/photo-1730293539262-b76f80c97a5f?w=800&q=80',
    description: 'Sailing yacht with three cabins. Fits 6 people comfortably.',
  },
  {
    id: 'yacht-ocean-spirit',
    name: 'Ocean Spirit',
    type: 'yacht',
    pricePerDay: 1500,
    imageUrl: 'https://images.unsplash.com/photo-1724117271157-1c67ce5596b7?w=800&q=80',
    description: 'Catamaran with crew included. The big one.',
  },
  {
    id: 'caravan-wild-trail',
    name: 'Wild Trail',
    type: 'caravan',
    pricePerDay: 85,
    imageUrl: 'https://images.unsplash.com/photo-1649851706700-56d3751fa9b1?w=800&q=80',
    description: 'Small off-road camper. Solar panel, basic kitchen.',
  },
  {
    id: 'caravan-home-away',
    name: 'Home Away',
    type: 'caravan',
    pricePerDay: 110,
    imageUrl: 'https://images.unsplash.com/photo-1626680114529-3f6ffa002b80?w=800&q=80',
    description: 'Family caravan — bunk beds, awning, the usual.',
  },
  {
    id: 'caravan-coastal-cruiser',
    name: 'Coastal Cruiser',
    type: 'caravan',
    pricePerDay: 130,
    imageUrl: 'https://images.unsplash.com/photo-1771518667269-c7bf3f65c4b4?w=800&q=80',
    description: 'VW-style camper, works nice for coastal roads.',
  },
];

export function getVehicleById(id: string): Vehicle | undefined {
  return vehicles.find((vehicle) => vehicle.id === id);
}
