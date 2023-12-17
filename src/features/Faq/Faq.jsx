import { useState } from "react";
import BigHeader from "../../ui/BigHeader";
import Button from "../../ui/Button";
import Question from "../../ui/Question";
import { useFaq } from "./useFaq";
import Spinner from "../../ui/Spinner";
import SpinnerMini from "../../ui/SpinnerMini";
import { FaPenToSquare } from "react-icons/fa6";

const Faq = () => {

 const { faq, error, isLoading } = useFaq();
 // console.log(faq, SpinnerMini);
 const [openQuestion, setOpenQuestion] = useState(false);
 if (error) throw new Error(error.message);
 if (isLoading) return <Spinner />;
 return (
  <div className="md:w-3/4 mx-auto lg:w-1/2 py-8">
   <div className=" p-8">
    <BigHeader>F.A.Q.</BigHeader>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium qui ad animi cupiditate doloremque error.</p>
    <Button onClick={() => setOpenQuestion(opened => !opened)} className="mt-8">ASK A QUESTION &rarr;</Button>

    {openQuestion && <Question />}

   </div>

   {faq.map(faqs => {

    return <div key={faqs.id} className="p-4 border-b-2 border-b-yellow-500">
     <div className=" flex justify-between items-center gap-4">

      <details>
       <summary className="cursor-pointer flex items-center">
        <p className="">{faqs.question}</p>
        {faqs.answer === null && <p className=" px-8"><FaPenToSquare /></p>}

       </summary>
       <div className="flex justify-between items-center">
        <p className="text-left">
         {faqs.answer === null ? <SpinnerMini /> : faqs.answer}
        </p>
       </div>
      </details>


     </div>
    </div>;
   })}
  </div >

 );
};

export default Faq;