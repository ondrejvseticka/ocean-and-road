export type VehicleType = 'yacht' | 'caravan';

export interface Vehicle {
  id: string;
  name: string;
  type: VehicleType;
  pricePerDay: number;
  imageUrl: string;
  description: string;
}

export interface BookingState {
  bookedVehicleIds: string[];
  totalPrice: number;
}
