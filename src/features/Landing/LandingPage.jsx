import HomeLists from "../Home/HomeLists";
import HomeIntro from "../Home/HomeIntro";
import HomeProject from "../Home/HomeProject";
import HomeAbout from "../Home/HomeAbout";
import HomeTestimonies from "../Home/HomeTestimonies";
import LandingQuote from "./LandingQuote";
import LandingExperience from "./LandingExperience";
import LandingProject from "./LandingProject";
import LandingBuild from "./LandingBuild";
import BigHeader from "../../ui/BigHeader";
import Contact from "../../ui/Contact";

const LandingPage = () => {
 return (
  <>
   <HomeIntro />
   <BigHeader className="">What We Do</BigHeader>
   <div className="py-10  flex flex-wrap">
    <HomeLists />
   </div>
   <LandingQuote />
   <HomeProject />
   <LandingExperience />
   <LandingProject />
   <HomeAbout />
   <LandingBuild />
   <HomeTestimonies />
   <Contact />
  </>
 );
};

export default LandingPage;