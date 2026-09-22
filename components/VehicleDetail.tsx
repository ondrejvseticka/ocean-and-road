'use client';

import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import BookNowButton from '@/components/BookNowButton';
import type { Vehicle } from '@/types';

interface VehicleDetailProps {
  vehicle: Vehicle;
}

const Page = styled.main`
  max-width: 72rem;
  margin: 0 auto;
  padding: 2rem;
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #0369a1;

  &:hover {
    text-decoration: underline;
  }
`;

const DetailLayout = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`;

const HeroImage = styled.div`
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 0.75rem;
  background: #f1f5f9;

  img {
    object-fit: cover;
  }
`;

const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const TypeBadge = styled.span`
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  background: #e0f2fe;
  color: #0369a1;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const Price = styled.p`
  font-size: 1.125rem;
  font-weight: 600;
  color: #0f172a;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #0f172a;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #475569;
`;

function formatPrice(pricePerDay: number): string {
  return `$${pricePerDay.toLocaleString()}/day`;
}

function formatType(type: Vehicle['type']): string {
  return type.charAt(0).toUpperCase() + type.slice(1);
}

export default function VehicleDetail(props: VehicleDetailProps) {
  const { vehicle } = props;

  return (
    <Page>
      <BackLink href="/">&larr; Back</BackLink>
      <DetailLayout>
        <HeroImage>
          <Image
            src={vehicle.imageUrl}
            alt={vehicle.name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </HeroImage>
        <InfoSection>
          <Meta>
            <TypeBadge>{formatType(vehicle.type)}</TypeBadge>
            <Price>{formatPrice(vehicle.pricePerDay)}</Price>
          </Meta>
          <Title>{vehicle.name}</Title>
          <Description>{vehicle.description}</Description>
          <BookNowButton vehicleId={vehicle.id} pricePerDay={vehicle.pricePerDay} />
        </InfoSection>
      </DetailLayout>
    </Page>
  );
}
