import { useSearchParams } from "react-router-dom";

const ServicesID = () => {
 const [searchParam] = useSearchParams();
 console.log(searchParam);
 return (
  <div>{searchParam.get('id')}</div>
 );
};

export default ServicesID;