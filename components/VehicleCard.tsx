'use client';

import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import type { Vehicle } from '@/types';

interface VehicleCardProps {
  vehicle: Vehicle;
}

const Card = styled.article`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  background: #ffffff;
`;

const ImageWrapper = styled.div`
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: #f1f5f9;

  img {
    object-fit: cover;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
`;

const Name = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  color: #0f172a;
`;

const Price = styled.p`
  font-size: 0.875rem;
  color: #64748b;
`;

const DetailsLink = styled(Link)`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #0369a1;

  &:hover {
    text-decoration: underline;
  }
`;

function formatPrice(pricePerDay: number): string {
  return `$${pricePerDay.toLocaleString()}/day`;
}

export default function VehicleCard(props: VehicleCardProps) {
  const { vehicle } = props;

  return (
    <Card>
      <ImageWrapper>
        <Image
          src={vehicle.imageUrl}
          alt={vehicle.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </ImageWrapper>
      <Content>
        <Name>{vehicle.name}</Name>
        <Price>{formatPrice(vehicle.pricePerDay)}</Price>
        <DetailsLink href={`/vehicle/${vehicle.id}`}>View Details</DetailsLink>
      </Content>
    </Card>
  );
}
