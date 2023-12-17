import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const AppLayout = () => {
 return (
  <>
   <div className=" relative">
    <div className=" fixed top-0  right-0 left-0 ">
     <Header />
    </div>
    <div className="pt-14 sm:pt-20">
     <Outlet />
    </div>
    <Footer />
   </div>
  </>
 );
};

export default AppLayout;