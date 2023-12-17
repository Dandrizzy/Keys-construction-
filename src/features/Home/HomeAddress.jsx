import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoTiktok } from "react-icons/bi";
import { FaEnvelope, FaLocationDot, FaPhone, FaXTwitter } from "react-icons/fa6";

const HomeAddress = () => {
 return (
  <div>
   <div className="bg-black py-10 flex gap-8 items-center justify-center text-2xl">
    <BiLogoFacebook className="text-slate-100 " />
    <FaXTwitter className="text-slate-100" />
    <BiLogoLinkedin className="text-slate-100" />
    <BiLogoTiktok className="text-slate-100" />
    <BiLogoInstagram className="text-slate-100" />
   </div>
   <div className="">
    <div className="flex gap-8 p-8 items-center font-bold">
     <FaLocationDot className=" cursor-pointer text-4xl text-yellow-500" />
     <p>25 Mercy Land Road, off Okpanam road, Asaba, Delta State</p>
    </div>

    <div className="flex gap-8 p-8 items-center font-bold">
     <FaPhone className=" cursor-pointer text-2xl text-yellow-500" />
     <div className="grid">
      <p>+234 803 279 9707</p>
      <p>+234 706 977 3172</p>
     </div>
    </div>

    <div className="flex gap-8 p-8 items-center font-bold">
     <FaEnvelope className=" cursor-pointer text-2xl text-yellow-500" />
     <p>keysconstruct@gmail.com</p>
    </div>
   </div>

  </div>
 );
};

export default HomeAddress;