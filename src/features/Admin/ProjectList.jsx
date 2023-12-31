import { useNavigate } from "react-router-dom";



const ProjectList = ({ item, index }) => {

 const navigate = useNavigate();

 const { title, description, status, id } = item;

 const handleClick = () => {
  navigate(`/admin/projects/${id}`);
 };

 const completed = status === 'completed';
 const inProgress = status === 'in-progress';
 const notStarted = status === 'not-started';


 return (
  < >
   <div className="p-4 gap-1 grid grid-cols-[2.5rem_1fr_2fr_95px] odd:bg-slate-100" onClick={handleClick}>

    <div className=" text-center font-semibold">{index + 1}</div>

    <div className="">{title}</div>

    <div className="">{description}</div>

    <div className={
     completed && 'text-center border-2 text-green-400 border-green-400 rounded-full' || inProgress && 'text-center border-yellow-300 rounded-full border-2 text-yellow-300' || notStarted && 'text-center border-2 border-gray-400 bg-gray-800 text-gray-400 rounded-full'


    }>{status}</div>

   </div>
  </>
 );
};

export default ProjectList;