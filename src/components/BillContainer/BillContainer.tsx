import React from "react";

type Props = {
  id: number;
  title: string;
  date: string;
  amount: string;
  index: number;
  total: number;
};

const getBorderClass = (index: number, total: number) => {
  if (index === 0 && total == 1) return "border rounded-tl-xl rounded-tr-xl";
  if (index === 0) return "border border-b-0 rounded-tl-xl rounded-tr-xl";
  if (index === total - 1) return "border border-b rounded-b-xl";
  return "border-t";
};

const BillContainer: React.FC<Props> = ({
  id,
  title,
  date,
  amount,
  index,
  total,
}) => {
  return (
    <div
      key={id}
      className={`flex items-start px-6 py-4 border-[#EEEEEE] gap-4 cursor-pointer hover:bg-gray-50 transition ${getBorderClass(
        index,
        total
      )}`}
    >
      <img
        src="/src/assets/invoiceBill.png"
        alt={`Bill ${id}`}
        className="w-10 h-10 rounded-lg object-cover"
      />
      <div className="text-sm">
        <div className="text-[#6234DB] font-semibold">{title}</div>
        <div className="text-gray-500">{date}</div>
        <div className="text-gray-500">{amount}</div>
      </div>
    </div>
  );
};

export default BillContainer;
