'use client';

import styled from 'styled-components';
import { bookVehicle, selectIsBooked } from '@/store/bookingSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

interface BookNowButtonProps {
  vehicleId: string;
  pricePerDay: number;
}

const Button = styled.button<{ $booked: boolean }>`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  background: ${({ $booked }) => ($booked ? '#94a3b8' : '#0369a1')};
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  cursor: ${({ $booked }) => ($booked ? 'not-allowed' : 'pointer')};

  &:hover:not(:disabled) {
    background: #0284c7;
  }
`;

export default function BookNowButton(props: BookNowButtonProps) {
  const dispatch = useAppDispatch();
  const isBooked = useAppSelector(selectIsBooked(props.vehicleId));

  const handleBook = () => {
    if (isBooked) {
      return;
    }

    dispatch(
      bookVehicle({
        id: props.vehicleId,
        pricePerDay: props.pricePerDay,
      }),
    );
  };

  return (
    <Button type="button" $booked={isBooked} disabled={isBooked} onClick={handleBook}>
      {isBooked ? 'Booked' : 'Book'}
    </Button>
  );
}
