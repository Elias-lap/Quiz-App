import { Outlet } from "react-router-dom";


const MasterLayout = () => {
    return (
   <div>
         <div>
             navbar 
         </div>
         <div>
             <Outlet/>
         </div>
   </div>
    );
}

export default MasterLayout;
