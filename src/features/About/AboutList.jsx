import { HiBuildingOffice2, HiWrenchScrewdriver } from "react-icons/hi2";
import HomeList from "../Home/HomeList";
import { LiaBrushSolid } from "react-icons/lia";

const AboutList = () => {
 return (
  <>
   <HomeList icon={<HiBuildingOffice2 />} title='Building Construction' description='Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat' />

   <HomeList icon={<HiWrenchScrewdriver />} title='Building Repairs' description='Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat' />

   <HomeList icon={<LiaBrushSolid />} title='Painting & Exterior' description='Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat' />
  </>
 );
};

export default AboutList;