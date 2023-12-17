import { FaPen } from "react-icons/fa6";
import Spinner from "../../ui/Spinner";
import { useFaq } from "../Faq/useFaq";

import { useNavigate } from "react-router-dom";
import H1 from "../../ui/H1";


const Faqs = () => {

 const navigate = useNavigate();

 const { faq = [

  // { id: 1, question: 'what are you doing', answer: 'preparing your project' },
  // { id: 2, question: 'what are you saying', answer: 'preparing your project' },
  // { id: 3, question: 'what are you working on', answer: 'preparing your project' },
  // { id: 4, question: 'what are you doing', answer: 'preparing your project' },
  // { id: 5, question: 'what are you saying', answer: 'preparing your project' },
  // { id: 6, question: 'what are you working on', answer: 'preparing your project' },
  // { id: 7, question: 'what are you doing', answer: 'preparing your project' },
  // { id: 8, question: 'what are you saying', answer: 'preparing your project' },
  // { id: 9, question: 'what are you working on', answer: 'preparing your project' },
 ], isLoading
 } = useFaq();
 if (isLoading) return <Spinner />;
 if (faq.length === 0) return <H1>No FAQs</H1>;

 return (
  <>

   <div className="grid sm:grid-cols-3 lg:grid-cols-4 p-4 gap-2 ">
    {faq.map(faqs => {
     return <div className=" border border-black p-2 shadow-lg drop-shadow-md" key={faqs.id}>
      <>
       <p>Question: {faqs.question}</p>
       <p>Answer: {faqs.answer}</p>

       <p className="flex justify-end cursor-pointer" title="Edit">

        <FaPen onClick={() => {
         navigate(`/admin/faqs/${faqs.id}`);
        }} />
       </p>
      </>
     </div>;
    })}
   </div>

  </>
 );
};

export default Faqs;