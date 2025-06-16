import Sidebar from '@/layout/Sidebar';
import '../styles/globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'ERT Replica',
  description: 'Next.js App Router version of the dashboard',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen bg-gray-100">
          <Sidebar />
          <div className="flex flex-col flex-1">
            <main className="overflow-y-auto">{children}</main>
          </div>
        </div>
      </body>
    </html >
  );
}
