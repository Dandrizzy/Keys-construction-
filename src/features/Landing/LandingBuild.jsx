import BigHeader from "../../ui/BigHeader";
import Button from "../../ui/Button";
import Faq from "../Faq/Faq";

const LandingBuild = () => {
 return (
  <div className="px-8 text-center">
   <BigHeader>
    Let&apos;s Build Something Together
   </BigHeader>
   <p>
    Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a sit commodo elit dui sit amet risus.Maecenas ornare nisl a tortor ultrices bibendum.
   </p>
   <Button className="my-8">GET IN TOUCH &rarr;</Button>
   <Faq />
  </div>
 );
};

export default LandingBuild;