import BigHeader from "../../ui/BigHeader";
import building from '../../asset/img/building.jpg';
import plan from '../../asset/img/plan.jpg';
import street from '../../asset/img/street.jpg';

const ProjectAbout = () => {
 return (
  <div className="">
   <div className="p-8 lg:flex">
    <div className=" lg:w-1/2">
     <BigHeader>
      About this Project
     </BigHeader>
     <p>
      About this Project
      Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus.
      Maecenas ornare nisl</p>
     <div className="px-8 py-3">
      <li>Lorem, ipsum dolor.</li>
      <li>Lorem, ipsum dolor.</li>
      <li>Lorem, ipsum dolor.</li>
      <li>Lorem, ipsum dolor.</li>
      <li>Lorem, ipsum dolor.</li>
     </div>
    </div>
    <div className=" sm:flex sm:flex-wrap sm:gap-4 justify-center py-4 grid gap-y-4">
     <img src={plan} alt="" width='310px' className=" h-[195px]" />
     <img src={building} alt="" width='310px' className=" h-[195px]" />
     <img src={street} alt="" width='310px' className=" h-[195px]" />
    </div>
   </div>
  </div>
 );
};

export default ProjectAbout;