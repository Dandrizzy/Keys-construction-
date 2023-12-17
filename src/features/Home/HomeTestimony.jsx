import { H2 } from "../../ui/H2";

const HomeTestimony = ({ description, name }) => {
 return (
  <div className="text-center p-10 mx-8 my-4 border-2 border-yellow-500 lg:w-[250px]">
   <H2>⭐⭐⭐⭐⭐</H2>
   <p>{description}</p>
   <h1 className="text-left py-4 font-semibold">{name}</h1>
  </div>
 );
};

export default HomeTestimony;