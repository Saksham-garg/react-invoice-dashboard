import { FC, useState, useRef, useEffect } from "react";
import { DownArrowIcon } from "../../utils/Icons";

interface DropdownProps {
  label: string;
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
}

const Dropdown: FC<DropdownProps> = ({ label, options, value, onChange }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>(value || "");
  const [highlighted, setHighlighted] = useState<number>(-1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
        setHighlighted(-1);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const handleOptionClick = (opt: string) => {
    setOpen(false);
    setSelected(opt);
    onChange?.(opt);
  };

  return (
    <div className="mb-4 w-full" ref={containerRef}>
      <label className="block mb-1 font-medium text-sm">{label}</label>
      <div
        className="relative bg-white border rounded-lg px-3 py-2 cursor-pointer focus:ring-2 focus:ring-purple-500"
        onClick={(e) => {
          e.stopPropagation();
          setOpen((o) => !o);
        }}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <div className="flex gap-5 justify-between items-center">
          <span>{selected || "Select an option"}</span>
          <DownArrowIcon />
        </div>
        {open && (
          <ul
            className="absolute z-10 mt-2 left-0 w-full bg-white border rounded-lg shadow-lg max-h-60 overflow-auto"
            role="listbox"
          >
            {options.map((opt, idx) => (
              <li
                key={opt}
                className={`px-4 py-2 cursor-pointer ${
                  opt === selected
                    ? "bg-purple-100 text-purple-700"
                    : highlighted === idx
                    ? "bg-gray-100"
                    : ""
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleOptionClick(opt);
                }}
                onMouseEnter={() => setHighlighted(idx)}
                role="option"
                aria-selected={opt === selected}
              >
                {opt}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
