import { FC, ReactNode } from "react";

interface TabButtonProps {
  active?: boolean;
  onClick?: () => void;
  children: ReactNode;
}

const TabButton: FC<TabButtonProps> = ({ active, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 w-full py-2 rounded-lg font-bold text-sm transition-colors text-nowrap
        ${
          active
            ? "bg-white border border-[#ECECF2] text-default-purple-color"
            : "bg-transparent text-[#8181A5] hover:text-default-purple-color"
        }
      `}
    >
      {children}
    </button>
  );
};

export default TabButton;
