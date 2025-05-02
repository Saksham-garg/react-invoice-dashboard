import { FC } from "react";

const Sidebar: FC = () => (
  <aside className="w-60 bg-purple-800 text-white h-full p-4">
    <nav className="space-y-4">
      <button className="w-full text-left">Dashboard</button>
      <button className="w-full text-left">Accounting</button>

    </nav>
  </aside>
);

export default Sidebar;
