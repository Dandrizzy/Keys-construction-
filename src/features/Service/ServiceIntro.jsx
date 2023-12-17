import BigHeader from '../../ui/BigHeader';
import Button from '../../ui/Button';
const ServiceIntro = () => {
 return (
  <div className='font-bold' id='background'>
   <div
    className="w-full h-[477px] md:h-[900px] bg-slate-50/20 text-slate-100"
   >
    <div className='flex flex-col justify-center items-center h-full px-20 text-justify gap-8'>
     <BigHeader >Framing</BigHeader>
     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ut dolores at doloribus recusandae? Dolorem sit suscipit quam.</p>
     <div>
      <Button >GET A QUOTE &rarr;</Button>
     </div>
    </div>
   </div>
  </div>
 );
};

export default ServiceIntro;