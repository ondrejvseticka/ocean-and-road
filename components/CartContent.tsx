'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';
import styled from 'styled-components';
import { getVehicleById } from '@/data/vehicles';
import { removeVehicle, selectBookedVehicleIds, selectTotalPrice } from '@/store/bookingSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import type { Vehicle } from '@/types';

const Page = styled.main`
  max-width: 72rem;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  font-size: 1.875rem;
  font-weight: 700;
  color: #0f172a;
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 3rem 1rem;
  text-align: center;
  color: #64748b;
`;

const BackLink = styled(Link)`
  font-size: 0.875rem;
  font-weight: 500;
  color: #0369a1;

  &:hover {
    text-decoration: underline;
  }
`;

const ItemList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
`;

const Item = styled.li`
  display: grid;
  grid-template-columns: 8rem 1fr auto;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  background: #ffffff;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 0.5rem;
  background: #f1f5f9;

  img {
    object-fit: cover;
  }
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const ItemName = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  color: #0f172a;
`;

const TypeBadge = styled.span`
  align-self: flex-start;
  padding: 0.125rem 0.5rem;
  border-radius: 9999px;
  background: #e0f2fe;
  color: #0369a1;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
`;

const ItemPrice = styled.p`
  font-size: 0.875rem;
  color: #64748b;
`;

const RemoveButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  background: #ffffff;
  color: #dc2626;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: #fef2f2;
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e5e7eb;
`;

const Total = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  color: #0f172a;
`;

const CheckoutButton = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  background: #0369a1;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #0284c7;
  }
`;

function formatPrice(pricePerDay: number): string {
  return `$${pricePerDay.toLocaleString()}/day`;
}

function formatType(type: Vehicle['type']): string {
  return type.charAt(0).toUpperCase() + type.slice(1);
}

export default function CartContent() {
  const dispatch = useAppDispatch();
  const bookedVehicleIds = useAppSelector(selectBookedVehicleIds);
  const totalPrice = useAppSelector(selectTotalPrice);

  const cartVehicles = useMemo(
    () =>
      bookedVehicleIds
        .map((id) => getVehicleById(id))
        .filter((vehicle): vehicle is Vehicle => vehicle !== undefined),
    [bookedVehicleIds],
  );

  if (cartVehicles.length === 0) {
    return (
      <Page>
        <Title>Cart</Title>
        <EmptyState>
          <p>Empty.</p>
          <BackLink href="/">Back to listings</BackLink>
        </EmptyState>
      </Page>
    );
  }

  return (
    <Page>
      <Title>Cart</Title>
      <ItemList>
        {cartVehicles.map((vehicle) => (
          <Item key={vehicle.id}>
            <ImageWrapper>
              <Image src={vehicle.imageUrl} alt={vehicle.name} fill sizes="128px" />
            </ImageWrapper>
            <ItemDetails>
              <ItemName>{vehicle.name}</ItemName>
              <TypeBadge>{formatType(vehicle.type)}</TypeBadge>
              <ItemPrice>{formatPrice(vehicle.pricePerDay)}</ItemPrice>
            </ItemDetails>
            <RemoveButton type="button" onClick={() => dispatch(removeVehicle(vehicle.id))}>
              Remove
            </RemoveButton>
          </Item>
        ))}
      </ItemList>
      <Footer>
        <Total>Total: ${totalPrice.toLocaleString()}</Total>
        <CheckoutButton type="button" onClick={() => alert('Not part of the MVP.')}>
          Checkout
        </CheckoutButton>
      </Footer>
    </Page>
  );
}
