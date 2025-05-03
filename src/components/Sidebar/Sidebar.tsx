import { SideBarTabList } from "./constants";
import { Logo } from "../../utils/Icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("Accounting");
  const navigate = useNavigate();
  return (
    <aside className="w-21 bg-default-purple-color text-white flex flex-col items-center py-4 space-y-4">
      <div className="mb-6">
        <Logo />
      </div>

      <nav className="flex flex-col items-center w-full">
        {SideBarTabList.map((item) => {
          const isActive = item.label === activeTab;
          return (
            <div
              className={`flex flex-col items-center text-sm font-medium py-3 px-6 w-full cursor-pointer 
              ${
                isActive
                  ? "bg-default-purple-color border-l-4 border-white"
                  : "hover:bg-[#603AE599]"
              } 
                transition-colors`}
              onClick={() => {
                navigate(`${item.label.toLowerCase()}`);
                setActiveTab(item.label);
              }}
              key={item.label}
            >
              <div className="w-6 h-6 mb-1">{item.icon}</div>
              {item.label}
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
