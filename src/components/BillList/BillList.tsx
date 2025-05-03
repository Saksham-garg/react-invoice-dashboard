import React, { useState } from "react";
import { TabButton } from "../../atoms";
import bills from "./constants";
import BillContainer from "../BillContainer/BillContainer";

const BillList = () => {
  const tabs = ["All documents", "Bills", "Receipts"];
  const [selectedTab, setSelectedTab] = useState("Bills");
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex">
          {tabs.map((tab) => (
            <TabButton
              active={selectedTab === tab}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </TabButton>
          ))}
        </div>
        <div className="bg-white shadow-md w-96 rounded-xl overflow-auto">
          {bills.map((bill, index) => {
            return (
              <>
                <BillContainer
                  title={bill.title}
                  date={bill.date}
                  id={bill.id}
                  index={index}
                  total={bills.length}
                  amount={bill.amount}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BillList;
