import { workData } from "../../Data/ServiceData";
import BigHeader from "../../ui/BigHeader";

function LandingExperience() {
 return (
  <div className="sm:flex sm:px-8 ">
   <div className="bg-yellow-500 pb-4 sm:w-[50%]">
    <BigHeader >{workData.at(0).number}</BigHeader>
    <div className="text-center font-semibold">YEARS ESTABLISHMENT</div>
   </div>
   <div className="bg-stone-900 pb-4 text-slate-100 
   sm:w-[50%]">
    <BigHeader >{workData.at(1).number}</BigHeader>
    <div className="text-center font-semibold">YEARS ESTABLISHMENT</div>
   </div>
  </div>
 );
}

export default LandingExperience;
