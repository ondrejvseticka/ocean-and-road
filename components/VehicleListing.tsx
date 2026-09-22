'use client';

import { useMemo, useState } from 'react';
import styled from 'styled-components';
import FilterBar, { type VehicleFilter } from '@/components/FilterBar';
import VehicleCard from '@/components/VehicleCard';
import type { Vehicle } from '@/types';

interface VehicleListingProps {
  vehicles: Vehicle[];
}

const Page = styled.main`
  max-width: 72rem;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  color: #0f172a;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
`;

const EmptyState = styled.p`
  grid-column: 1 / -1;
  padding: 2rem;
  text-align: center;
  color: #64748b;
`;

export default function VehicleListing(props: VehicleListingProps) {
  const [activeFilter, setActiveFilter] = useState<VehicleFilter>('all');

  const filteredVehicles = useMemo(() => {
    if (activeFilter === 'all') {
      return props.vehicles;
    }

    return props.vehicles.filter((vehicle) => vehicle.type === activeFilter);
  }, [activeFilter, props.vehicles]);

  return (
    <Page>
      <Header>
        <Title>Yachts &amp; caravans</Title>
        <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      </Header>
      <Grid>
        {filteredVehicles.length === 0 ? (
          <EmptyState>Nothing here for this filter.</EmptyState>
        ) : (
          filteredVehicles.map((vehicle) => <VehicleCard key={vehicle.id} vehicle={vehicle} />)
        )}
      </Grid>
    </Page>
  );
}
