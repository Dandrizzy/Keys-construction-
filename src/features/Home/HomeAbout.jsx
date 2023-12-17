import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import LinkButton from "../../ui/LinkButton";

const HomeAbout = () => {
 const navigate = useNavigate();
 return (
  <div className='text-center pb-10'>
   <h1 className="text-4xl text-center py-8 px-8 font-bold">We&apos;ve Been Building For Over 20 years</h1>
   <p className="text-center py-8 px-8 font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lectus erat consectetur eu sapien eget, rhoncus consectetur sem.</p>
   <LinkButton to='/about' >
    <Button onClick={() => navigate('/about')} className="transition-all duration-300">About us <span>&rarr;</span></Button>
   </LinkButton>
  </div>
 );
};

export default HomeAbout;