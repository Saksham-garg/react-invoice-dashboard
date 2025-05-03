import { Button, Dropdown } from "../../atoms";
import {
  BellIcon,
  ContactIcon,
  DownArrowIcon,
  SearchIcon,
  SettingsIcon,
} from "../../utils/Icons";

const Topbar = () => (
  <div className="bg-white shadow p-4 flex justify-between items-center">
    <div className="flex gap-2 items-center">
      <h1 className="text-lg font-bold">Review</h1>
      <Dropdown options={["Google", "Amazon", "Microsoft"]} label="" />
      <Button
        label="Quickbook’s Data"
        customStyles={{
          backgroundColor: "#40E1FA1A",
          color: "#2CA01D",
        }}
      ></Button>
    </div>
    <div className="flex items-center gap-1">
      <Button Icon={SearchIcon}></Button>
      <Button label="Export to Excel"></Button>
      <Button label="Add a Document"></Button>
      <Button
        label="Connect"
        iconPosition="right"
        Icon={DownArrowIcon}
      ></Button>
      <Button Icon={BellIcon}></Button>
      <Button Icon={SettingsIcon}></Button>
      <Button Icon={ContactIcon}></Button>
    </div>
  </div>
);

export default Topbar;
