import Faq from "../Faq/Faq";
import ContactEstimate from "./ContactEstimate";
import ContactInfo from "./ContactInfo";
import ContactIntro from "./ContactIntro";
import Contact from "../../ui/Contact";

const ContactPage = () => {
 return (
  <>
   <ContactIntro />
   <ContactInfo />
   <ContactEstimate />
   <Faq />
   <Contact />
  </>
 );

};

export default ContactPage;