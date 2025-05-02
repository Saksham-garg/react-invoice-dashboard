import { FC, ReactNode } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="flex h-screen">
    <Sidebar />
    <div className="flex-1 flex flex-col">
      <Topbar />
      <main className="flex-1 overflow-auto p-4 bg-gray-100">{children}</main>
    </div>
  </div>
);

export default MainLayout;
