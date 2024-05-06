import { Outlet } from "react-router-dom";
import Sidebar from "../../sharedCommponents/Sidebar/Sidebar";


const MasterLayout = () => {
    return (
   <>
        <div className="d-flex">
            <div className="sidebar-container">
              <Sidebar/>
            </div>
            <div className="main-contect w-100">
              <Outlet/>
            </div>
      </div>
   </>
    );
}

export default MasterLayout;
