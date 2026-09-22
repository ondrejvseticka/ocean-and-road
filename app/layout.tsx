import type { Metadata } from 'next';
import StyledComponentsRegistry from '@/lib/registry';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ocean & Road',
  description: 'Yacht and caravan rentals',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
