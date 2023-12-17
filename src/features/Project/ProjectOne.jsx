import BigHeader from '../../ui/BigHeader';
const ProjectOne = () => {
 return (
  <div className='font-bold' id='background'>
   <div
    className="w-full h-[477px] md:h-[900px] bg-slate-50/20 text-slate-100"
   >
    <div className='grid items-center h-full sm:px-20 px-8'>
     <BigHeader >
      Monarch HQ Project
     </BigHeader>
     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ut dolores at doloribus recusandae? Dolorem sit suscipit quam.</p>
     <div className='text-left'>
      <p>Date: 12 April 2018</p>
      <p>Client: Monarch Group</p>
      <p>Project Type: Building Renovation</p>
     </div>
    </div>
   </div>
  </div>
 );
};

export default ProjectOne;