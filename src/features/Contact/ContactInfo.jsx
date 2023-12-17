import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import BigHeader from "../../ui/BigHeader";
import { HiChatBubbleOvalLeftEllipsis, HiClock } from "react-icons/hi2";
import H1 from "../../ui/H1";
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoTiktok } from "react-icons/bi";

const ContactInfo = () => {
 return (
  <div className="">

   <BigHeader>Contact Info</BigHeader>

   <div className="lg:flex lg:justify-around grid justify-center">
    <div className="flex p-8 gap-8 justify-start items-center">
     <FaLocationDot className="text-2xl" />
     <div className="">
      <H1>Our Office</H1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
     </div>
    </div>


    <div className="flex p-8 gap-8 justify-start items-center">
     <HiClock className="text-4xl" />
     <div className="">
      <H1>Our Office</H1>
      <p>M-F: 8am – 6pm</p>
      <p> S-S: 10am – 4pm</p>
     </div>
    </div>



    <div className="flex p-8 gap-8 justify-start items-center">
     <HiChatBubbleOvalLeftEllipsis className="text-4xl" />
     <div className="">
      <H1>Get in Touch</H1>
      <p>example@ex.com</p>
      <p>+234 810 123 4567</p>
     </div>
    </div>
   </div>

   <div className="bg-black py-10 flex gap-8 items-center justify-center text-2xl">
    <BiLogoFacebook className="text-slate-100 " />
    <FaXTwitter className="text-slate-100" />
    <BiLogoLinkedin className="text-slate-100" />
    <BiLogoTiktok className="text-slate-100" />
    <BiLogoInstagram className="text-slate-100" />
   </div>

  </div>
 );
};

export default ContactInfo;