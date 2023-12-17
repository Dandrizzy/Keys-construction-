import BigHeader from "../../ui/BigHeader";
import Button from "../../ui/Button";
import H1 from "../../ui/H1";

const ContactEstimate = () => {
 return (
  <>
   <div className="">
    <BigHeader className="text-yellow-500">
     Call: (801) 123-4567</BigHeader>
    <H1 className="px-8 text-center">
     We Can&apos;t Wait to Make Your Ideas a Reality
    </H1>
   </div>
   <div className="text-center py-8">
    <Button className="">ONLINE ESTIMATE FORM &rarr;</Button>
   </div>
  </>
 );
};

export default ContactEstimate;