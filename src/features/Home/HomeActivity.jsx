import { HiOutlineChevronDoubleRight } from "react-icons/hi2";
import { H2 } from "../../ui/H2";

const HomeActivity = ({ description, title }) => {
 return (
  <div >
   <div className="flex px-8 py-4 items-center gap-x-12 ">
    <div className="text-6xl ">
     <HiOutlineChevronDoubleRight className=" text-yellow-500" />
    </div>
    <div className="">
     <H2>{title}</H2>
     <p className="">{description}</p>
    </div>
   </div>
  </div>
 );
};

export default HomeActivity;