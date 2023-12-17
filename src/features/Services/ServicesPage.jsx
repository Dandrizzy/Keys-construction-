
import HomeAddress from "../Home/HomeAddress";
import HomeContact from "../Home/HomeContact";
import HomeLists from "../Home/HomeLists";
import LandingProject from "../Landing/LandingProject";
import Services from "./Services";
import ServicesIntro from "./ServicesIntro";

const ServicesPage = () => {
 return (
  <>
   <ServicesIntro />
   <HomeLists />
   <Services />
   <LandingProject />
   <div className="sm:flex">
    <HomeContact />
    <HomeAddress />
   </div>
  </>
 );
};

export default ServicesPage;