import { HiBuildingOffice2, HiWrenchScrewdriver } from "react-icons/hi2";
import { GiBrickWall, GiCrane } from "react-icons/gi";
import { LiaBrushSolid } from "react-icons/lia";
import { BiSolidTrafficBarrier } from "react-icons/bi";
import HomeList from "./HomeList";
// import BigHeader from "../../ui/BigHeader";

const HomeLists = () => {
 return (
  <>
   {/* <BigHeader>What We Do</BigHeader> */}
   <HomeList icon={<HiBuildingOffice2 />} title='Building Construction' description='Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat' />

   <HomeList icon={<HiWrenchScrewdriver />} title='Building Repairs' description='Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat' />

   <HomeList icon={<GiCrane />} title='Demolition' description='Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat' />

   <HomeList icon={<GiBrickWall />} title='Foundation' description='Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat' />

   <HomeList icon={<LiaBrushSolid />} title='Painting & Exterior' description='Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat' />

   <HomeList icon={<BiSolidTrafficBarrier />} title='Site Management' description='Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat' />
  </>
 );
};

export default HomeLists;