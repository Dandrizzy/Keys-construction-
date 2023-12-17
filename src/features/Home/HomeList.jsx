import { H2 } from "../../ui/H2";

function HomeList({ icon, title, description }) {
 return (
  <div>
   <div className="flex px-8 py-4 items-center gap-x-12">
    <div className="text-6xl text-yellow-500">
     {icon}
    </div>
    <div className="">
     <H2>{title}</H2>
     <p>{description}</p>
    </div>
   </div>
  </div>
 );
}

export default HomeList;