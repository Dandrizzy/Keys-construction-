


const ProjectList = ({ item, index }) => {

 const { title, description, status } = item;

 const completed = status === 'completed';
 const inProgress = status === 'in-progress';
 const notStarted = status === 'not-started';

 return (
  < >
   <div className="p-4 grid grid-cols-[2.5rem_1fr_2fr_95px]">

    <div className=" text-center font-semibold">{index + 1}</div>

    <div className="">{title}</div>

    <div className="">{description}</div>

    <div className={
     completed && 'text-center border-2 text-green-400 border-green-400 rounded-full' || inProgress && 'text-center border-yellow-300 rounded-full border-2 text-yellow-300' || notStarted && 'text-center border-2 border-gray-400 text-gray-400 rounded-full'


    }>{status}</div>

   </div>
  </>
 );
};

export default ProjectList;