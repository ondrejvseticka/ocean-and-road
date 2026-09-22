'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { useAppSelector } from '@/store/hooks';
import { selectBookedCount } from '@/store/bookingSlice';

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  border-bottom: 1px solid #e5e7eb;
  background: #ffffff;
`;

const Logo = styled(Link)`
  font-size: 1.25rem;
  font-weight: 700;
  color: #0f172a;
  letter-spacing: -0.02em;

  &:hover {
    color: #0369a1;
  }
`;

const CartLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  background: #f1f5f9;
  color: #0f172a;

  &:hover {
    background: #e2e8f0;
  }
`;

const CartIcon = styled.svg`
  width: 1.25rem;
  height: 1.25rem;
`;

const Badge = styled.span`
  position: absolute;
  top: -0.25rem;
  right: -0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 1.25rem;
  height: 1.25rem;
  padding: 0 0.25rem;
  border-radius: 9999px;
  background: #0369a1;
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 600;
`;

export default function Navbar() {
  const bookedCount = useAppSelector(selectBookedCount);

  return (
    <Header>
      <Logo href="/">Ocean &amp; Road</Logo>
      <CartLink href="/cart" aria-label={`${bookedCount} items in cart`}>
        <CartIcon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 6h15l-1.5 9h-12z" />
          <path d="M6 6l-1-3H2" />
          <circle cx="9" cy="20" r="1" />
          <circle cx="18" cy="20" r="1" />
        </CartIcon>
        {bookedCount > 0 && <Badge>{bookedCount}</Badge>}
      </CartLink>
    </Header>
  );
}
