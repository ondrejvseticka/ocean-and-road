'use client';

import styled from 'styled-components';
import type { VehicleType } from '@/types';

export type VehicleFilter = 'all' | VehicleType;

interface FilterBarProps {
  activeFilter: VehicleFilter;
  onFilterChange: (filter: VehicleFilter) => void;
}

const Bar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const FilterButton = styled.button<{ $active: boolean }>`
  padding: 0.5rem 1rem;
  border: 1px solid ${({ $active }) => ($active ? '#0369a1' : '#d1d5db')};
  border-radius: 9999px;
  background: ${({ $active }) => ($active ? '#0369a1' : '#ffffff')};
  color: ${({ $active }) => ($active ? '#ffffff' : '#374151')};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    border-color: #0369a1;
    color: ${({ $active }) => ($active ? '#ffffff' : '#0369a1')};
  }
`;

const filters: { label: string; value: VehicleFilter }[] = [
  { label: 'All', value: 'all' },
  { label: 'Yachts', value: 'yacht' },
  { label: 'Caravans', value: 'caravan' },
];

export default function FilterBar(props: FilterBarProps) {
  return (
    <Bar>
      {filters.map((filter) => (
        <FilterButton
          key={filter.value}
          type="button"
          $active={props.activeFilter === filter.value}
          onClick={() => props.onFilterChange(filter.value)}
        >
          {filter.label}
        </FilterButton>
      ))}
    </Bar>
  );
}
