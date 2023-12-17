import Service from "./Service";
import ServiceIntro from "./ServiceIntro";
import ServiceProcess from "./ServiceProcess";
import ServiceRelated from "./ServiceRelated";
import Faq from '../Faq/Faq';
import HomeContact from '../Home/HomeContact';

const ServicePage = () => {
 return (
  <>
   <ServiceIntro />
   <Service />
   <ServiceProcess />
   <ServiceRelated />
   <Faq />
   <HomeContact />
  </>
 );
};

export default ServicePage;