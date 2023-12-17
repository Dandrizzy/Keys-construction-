import { useNavigate, useSearchParams } from "react-router-dom";
import { services } from "../../Data/ServiceData";
import BigHeader from "../../ui/BigHeader";
import Button from "../../ui/Button";
const Services = () => {
 const [, setSearchParams] = useSearchParams();
 const navigate = useNavigate();
 function handleClick(id) {
  navigate(`/services/${id}`);
  return setSearchParams({ id });

 }
 return (
  <div className=" sm:w-1/2 mx-auto">
   {services.map(service => {
    return <div key={service.id}>
     <div className="p-8" >
      <BigHeader>{service.title}</BigHeader>
      <p>{service.description}</p>
      {service.list.map(list => <li key={list} className="ml-8 px-4">{list}</li>)}

     </div>
     <div className="py-8 grid gap-y-4 justify-center">
      <Button onClick={() => navigate('/quote')}>GET A QUOTE &rarr;</Button>
      <Button onClick={() => handleClick(service.id)} >LEARN MORE &rarr;</Button>
     </div>
    </div>;
   })}
  </div>
 );
};

export default Services;