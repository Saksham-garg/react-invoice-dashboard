import { Button, Dropdown } from "../../atoms";

const InvoiceDetails = () => (
  <div className="bg-white shadow p-4 flex-1 rounded-xl max-w-xs">
    <h2 className="font-semibold text-lg mb-4">Payment Details</h2>
    <form className="space-y-4 text-sm">
      <div className="flex gap-4">
        <div>
          <label>Bill Number</label>
          <input className="border p-2 w-full rounded" />
        </div>
        <div>
          <label>Paid Amount</label>
          <input className="border p-2 w-full rounded" />
        </div>
      </div>
      <Dropdown label="Payment Mode" options={["Cash", "Card", "Bank"]} />
      <Dropdown label="Currency" options={["USD", "INR", "EUR"]} />
      <div>
        <label>Description</label>
        <textarea className="border p-2 w-full rounded" rows={3}></textarea>
      </div>
      <Button label="Save" variant="primary" />
    </form>
  </div>
);

export default InvoiceDetails;
