import { notFound } from 'next/navigation';
import VehicleDetail from '@/components/VehicleDetail';
import { getVehicleById } from '@/data/vehicles';

interface VehicleDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function VehicleDetailPage(props: VehicleDetailPageProps) {
  const { id } = await props.params;
  const vehicle = getVehicleById(id);

  if (!vehicle) {
    notFound();
  }

  return <VehicleDetail vehicle={vehicle} />;
}
