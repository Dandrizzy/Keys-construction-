import BigHeader from "../../ui/BigHeader";
import bulldozer from '../../asset/img/bulldozer.jpg';
import { H2 } from '../../ui/H2';
import Button from '../../ui/Button';

const ServiceRelated = () => {
 return (
  <>
   <BigHeader>Related Service</BigHeader>

   <div className="sm:flex sm:flex-wrap sm:justify-around">
    <div className="gap-4 grid pb-6">
     <div>
      <img src={bulldozer} alt="bulldozer" height='195px' className="my-0 mx-auto h-[195px] w-[80%] md:h-[450px] md:w-[450px] shadow-amber-200" />
     </div>
     <div className="sm:w-[450px] w-[80%] mx-auto my-0 border-2 p-8">
      <H2>Service Title</H2>
      <p className="py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasell sed nibh dignissim, cursus tellus sit amet, ultrices mauris. Aliquam blandit est in eros elementum, quis vehicula est suscipit. Pellentesque posuere erat erat.</p>
      <Button>LEARN MORE &rarr;</Button>
     </div>
    </div>

    <div className="gap-4 grid pb-6">
     <div>
      <img src={bulldozer} alt="bulldozer" height='195px' className="my-0 mx-auto h-[195px] w-[80%] md:h-[450px] md:w-[450px] shadow-amber-200" />
     </div>
     <div className="sm:w-[450px] w-[80%] mx-auto my-0 border-2 p-8">
      <H2>Service Title</H2>
      <p className="py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasell sed nibh dignissim, cursus tellus sit amet, ultrices mauris. Aliquam blandit est in eros elementum, quis vehicula est suscipit. Pellentesque posuere erat erat.</p>
      <Button>LEARN MORE &rarr;</Button>
     </div>
    </div>

    <div className="gap-4 grid pb-6">
     <div>
      <img src={bulldozer} alt="bulldozer" height='195px' className="my-0 mx-auto h-[195px] w-[80%] md:h-[450px] md:w-[450px] shadow-amber-200" />
     </div>
     <div className="sm:w-[450px] w-[80%] mx-auto my-0 border-2 p-8">
      <H2>Service Title</H2>
      <p className="py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasell sed nibh dignissim, cursus tellus sit amet, ultrices mauris. Aliquam blandit est in eros elementum, quis vehicula est suscipit. Pellentesque posuere erat erat.</p>
      <Button>LEARN MORE &rarr;</Button>
     </div>
    </div>

    <div className="gap-4 grid pb-6">
     <div>
      <img src={bulldozer} alt="bulldozer" height='195px' className="my-0 mx-auto h-[195px] w-[80%] md:h-[450px] md:w-[450px] shadow-amber-200" />
     </div>
     <div className="sm:w-[450px] w-[80%] mx-auto my-0 border-2 p-8">
      <H2>Service Title</H2>
      <p className="py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasell sed nibh dignissim, cursus tellus sit amet, ultrices mauris. Aliquam blandit est in eros elementum, quis vehicula est suscipit. Pellentesque posuere erat erat.</p>
      <Button>LEARN MORE &rarr;</Button>
     </div>
    </div>

   </div>
   <button className="border-black font-bold tracking-widest border-4 w-40 mx-auto mb-6 p-3 hover:bg-black hover:text-slate-100 transition-all duration-300 first:hover:block flex justify-center ">VIEW ALL <span >&rarr;</span></button>
  </>
 );
};

export default ServiceRelated;