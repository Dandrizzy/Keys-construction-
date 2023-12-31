import { getServices } from "../../Services/apiServices";
import { useFetchData } from "../../hooks/useFetchData";
import ServicesList from "./ServicesList";
import Spinner from '../../ui/Spinner';
import CreateService from "./CreateService";

const AdminServices = () => {

 const { data: services = [], isLoading } = useFetchData({ key: 'services', fn: getServices });
 if (isLoading) return <Spinner />;

 return (
  <div className=" text-slate-700">
   <div className=" p-4 grid grid-cols-[2.5rem_1fr_2fr]">

    <div className="pb-2">S/N</div>

    <div className=" font-bold pb-2">TITLE</div>

    <div className="font-bold pb-2 text-center">DESCRIPTION</div>


   </div>

   {services.map((item, index) => <ServicesList key={item.id} item={item} index={index} />)}

   <CreateService />

  </div>
 );
};

export default AdminServices;