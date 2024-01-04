import { FaClipboardList, FaMessage, } from "react-icons/fa6";
import { FaCogs, } from "react-icons/fa";
import H1 from "../../ui/H1";
import { MdQuestionAnswer } from 'react-icons/md';
import { useNavigate } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import { useProject } from "./useProject";
import { useFetchData } from "../../hooks/useFetchData";
import { getServices } from "../../Services/apiServices";

const AdminTable = ({ faq, isLoading, messages, fetchingMsg }) => {

 const { projectLength, isLoading: fetchingProject } = useProject();

 const { length: serviceLength } = useFetchData({ key: 'services', fn: getServices });

 const navigate = useNavigate();

 if (isLoading || fetchingMsg || fetchingProject) return <Spinner />;

 return (
  <div className="p-4 grid grid-cols-2 gap-4 sm:grid-cols-4 drop-shadow-lg uppercase">
   {/* message */}
   <div
    onClick={() => navigate('/admin/messages')}
    className="cursor-pointer bg-[#fff] p-4 text-center">
    <H1 className="inline-flex  items-center gap-x-4"> <FaMessage className="text-4xl text-[#00C49F]" /></H1>
    <H1>{messages.length}</H1>
    <p>Messages</p>
   </div>

   {/* project */}
   <div
    onClick={() => navigate('/admin/projects')}
    className=" cursor-pointer text-center bg-[#fff] p-4">
    <H1 className="inline-flex items-center gap-x-4 "><FaClipboardList className="text-4xl text-[#FFBB28]" /></H1>
    <H1>{!projectLength ? 0 : projectLength}</H1>
    <p>Projects</p>
   </div>

   {/* services */}
   <div onClick={() => navigate('/admin/services')} className=" cursor-pointer bg-[#fff] p-4 text-center">
    <H1 className="inline-flex items-center gap-x-4 text-[#FF8042]"> <FaCogs className="text-4xl" /></H1>
    <H1>{serviceLength}</H1>
    <p>Services</p>
   </div>

   {/* faq */}
   <div
    onClick={() => navigate('/admin/faqs')}
    className=" cursor-pointer text-center bg-[#fff] p-4">

    <H1 className="inline-flex items-center gap-x-4"> <MdQuestionAnswer className=" text-4xl text-[#0088FE]" /></H1>
    <H1>{faq.length}</H1>
    <p>FAQs</p>
   </div>


  </div>
 );
};

export default AdminTable;