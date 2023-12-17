import Admins from '../features/Admin/Admins';
import Footer from "./Footer";
import AdminHeader from "./AdminHeader";

const AdminLayout = () => {
 return (
  <>
   <div className=" h-[100vh] grid grid-rows-[auto_1fr_auto] scroll-smooth">

    <div className="">
     <AdminHeader />

    </div>
    <div className="">


     <Admins />
    </div>

    <div className="">


     <Footer />
    </div>
   </div>
  </>
 );
};

export default AdminLayout;