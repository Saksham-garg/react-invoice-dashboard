import { Button } from "../atoms";
import { BillList, InvoiceCard } from "../components";

const Review = () => (
  <div className="flex flex-col gap-4  bg-white rounded-xl w-full p-7 h-auto">
    <div className="w-full flex justify-end">
      <Button
        label="Add to Expenses Report"
        variant="secondary"
        customStyles={{
          padding: "11px 14.5px",
        }}
      />
    </div>
    <div className="flex gap-6">
      <BillList />
      <div className="flex-1 flex flex-col items-center">
        <InvoiceCard />
      </div>
    </div>
  </div>
);

export default Review;
