import { Outlet } from "react-router-dom";
import AdminNav from "../../ui/AdminNav";
// import DashBoardLayout from "../DashBoard/DashBoardLayout";
import { useFaq } from "../Faq/useFaq";
import AdminTable from "./AdminTable";
import { useMsg } from "./useMsg";
import Spinner from "../../ui/Spinner";


const Admin = () => {

 const { faq = [], isLoading } = useFaq();
 const { data: messages = [], isLoading: fetchingMsg } = useMsg();

 if (isLoading || fetchingMsg) return <Spinner />;


 return (
  <div className="grid md:grid-cols-[250px_1fr] lg:grid-cols-[300px_1fr] bg-gray-50 ">

   <div className="hidden sm:block">
    <AdminNav />
   </div>

   <div className="">
    <AdminTable faq={faq} isLoading={isLoading} messages={messages} fetchingMsg={fetchingMsg} />

    <Outlet />

    {/* <DashBoardLayout faq={faq} isLoading={isLoading} messages={messages} fetchingMsg={fetchingMsg} /> */}
   </div>

  </div>
 );
};

export default Admin;