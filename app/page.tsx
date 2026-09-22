import VehicleListing from '@/components/VehicleListing';
import { vehicles } from '@/data/vehicles';

export default function HomePage() {
  return <VehicleListing vehicles={vehicles} />;
}
