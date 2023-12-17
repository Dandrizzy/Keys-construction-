import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import { H1Center } from "../../ui/H1Center";

const HomeProject = () => {
 const navigate = useNavigate();
 return (
  <div className="p-8 text-center" >
   <H1Center >No Project Too Big Or Too Small</H1Center>
   <p className="py-8">ectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue, non feugiat ligula neque nec felis
   </p>

   <p className="pt-8">
    Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
   </p>

   <p className="pt-8 pb-4">
    Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique,
   </p>

   <Button onClick={() => navigate('/project')}>LEARN MORE &rarr;</Button>

  </div>
 );
};

export default HomeProject;