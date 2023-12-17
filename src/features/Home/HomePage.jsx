import HomeLists from "./HomeLists";
import HomeIntro from "./HomeIntro";
import HomeActivities from "./HomeActivities";
import HomeProject from "./HomeProject";
import HomeAbout from "./HomeAbout";
import HomeTestimonies from "./HomeTestimonies";
import Contact from "../../ui/Contact";
import BigHeader from "../../ui/BigHeader";

const HomePage = () => {
 return (
  <>
   <HomeIntro />
   <BigHeader>What We Do</BigHeader>
   <div className="py-10 sm:flex sm:flex-wrap">
    <HomeLists />
   </div>
   <div className="lg:flex">
    <div className="py-10">
     <HomeActivities />
    </div>
    <HomeProject />
    <HomeAbout />
   </div>
   <HomeTestimonies />
   <Contact />
  </>
 );
};

export default HomePage;