import HomeAddress from "../features/Home/HomeAddress";
import HomeContact from "../features/Home/HomeContact";

const Contact = () => {
 return (
  <div className="lg:flex lg:justify-center">
   <HomeContact />
   <HomeAddress />
  </div>
 );
};

export default Contact;