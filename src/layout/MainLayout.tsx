import { ReactNode } from "react";
import { InvoiceDetails, Sidebar, Topbar } from "../components";
const MainLayout = ({ children }: { children: ReactNode }) => (
  <div className="flex h-screen w-full">
    <Sidebar />
    <div className="flex-1 flex flex-col">
      <Topbar />
      <main className="flex-1 overflow-auto p-4 bg-gray-100 rounded-xl">
        {children}
      </main>
    </div>
    <InvoiceDetails />
  </div>
);
export default MainLayout;
