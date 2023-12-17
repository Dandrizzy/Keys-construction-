import BigHeader from "../../ui/BigHeader";
import HomeTestimony from "./HomeTestimony";

const HomeTestimonies = () => {
 return (
  <>
   <BigHeader>Client Testimonials</BigHeader>
   <div className="md:flex sm:flex-wrap sm:items-center sm:justify-center">

    <HomeTestimony name='Izebe Atogwe' description='“Lorem ipsum dolor sit adipiscing elit. Nullam lectus consectetur eu sapien. Proin cursus, dolor a mollis risus dolor fermentum massa, a commodo elit dui sit amet tortor.”' />

    <HomeTestimony name='Natasha Atogwe' description='“Lorem ipsum dolor sit adipiscing elit. Nullam lectus consectetur eu sapien. Proin cursus, dolor a mollis risus dolor fermentum massa, a commodo elit dui sit amet tortor.”' />

    <HomeTestimony name='Tony Atogwe' description='“Lorem ipsum dolor sit adipiscing elit. Nullam lectus consectetur eu sapien. Proin cursus, dolor a mollis risus dolor fermentum massa, a commodo elit dui sit amet tortor.”' />
   </div>
  </>
 );
};

export default HomeTestimonies;