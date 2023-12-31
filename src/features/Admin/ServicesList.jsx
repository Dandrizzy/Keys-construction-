

import { useNavigate } from "react-router-dom";



const ServicesList = ({ item, index }) => {

 const navigate = useNavigate();

 const { title, description, id } = item;

 const handleClick = () => {
  navigate(`/admin/services/${id}`);
 };

 return (
  < >
   <div className=" cursor-pointer p-4 gap-1 grid grid-cols-[2.5rem_1fr_2fr] odd:bg-slate-100 shadow-inner " onClick={handleClick}>

    <div className=" text-center font-semibold">{index + 1}</div>

    <div className="">{title}</div>

    <div className="">{description}</div>

   </div>
  </>
 );
};

export default ServicesList;