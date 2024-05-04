import { Outlet } from "react-router-dom";
import Sidebar from "../../sharedCommponents/Sidebar";
import Navbar from "../../sharedCommponents/Navbar";

const MasterLayout = () => {
  return (
    <div className="flex">
      <div className="	bg-slate-500 ">
        <Sidebar />
      </div>
      <div className=" w-full ">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default MasterLayout;
