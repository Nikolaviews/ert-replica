// src/layout/MainLayout.tsx
import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1">

        <main className=" overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
