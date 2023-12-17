import { workData } from "../../Data/ServiceData";
import BigHeader from "../../ui/BigHeader";

function AboutExperience() {
 return (
  <div className="sm:flex  ">
   <div className=" pb-4 sm:w-[50%]">
    <BigHeader >{workData.at(0).number}</BigHeader>
    <div className="text-center font-semibold">{workData.at(0).title}</div>
   </div>

   <div className="bg-stone-900 pb-4 text-slate-100 
   sm:w-[50%]">
    <BigHeader >{workData.at(1).number}</BigHeader>
    <div className="text-center font-semibold">{workData.at(1).title}</div>
   </div>

   <div className=" pb-4 sm:w-[50%]">
    <BigHeader >{workData.at(2).number}</BigHeader>
    <div className="text-center font-semibold">{workData.at(2).title}</div>
   </div>

   <div className="bg-stone-900 pb-4 text-slate-100 
   sm:w-[50%]">
    <BigHeader >{workData.at(3).number}</BigHeader>
    <div className="text-center font-semibold">{workData.at(3).title}</div>
   </div>
  </div>
 );
}

export default AboutExperience;
