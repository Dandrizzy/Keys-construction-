import { useForm } from "react-hook-form";
import { Form, useNavigate, useParams } from "react-router-dom";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import Button from "../../ui/Button";
import { useEditFaq } from "../Faq/useEditFaq";
import SpinnerMini from "../../ui/SpinnerMini";
import { useSpecificFaq } from "./useSpecificFaq";

const EditFaq = () => {


 const faqId = useParams();
 const ID = Number(faqId.faqId);

 const { register, handleSubmit } = useForm();
 const { editFaqs, isEditing } = useEditFaq();
 const navigate = useNavigate();

 const { data: specificFaq, isLoading: loadingFaq } = useSpecificFaq();



 if (loadingFaq) return <Spinner />;

 const onSubmit = (data) => {
  editFaqs({
   newFaqData: { ...data }, id: ID
  },
   {
    onSuccess: navigate('/admin/faqs')
   }
  );

 };

 return (
  <div className="">
   <div className=" text-center">
    <Form onSubmit={handleSubmit(onSubmit)} className=" p-4">

     <Input className="w-full sm:mx-auto sm:my-0 sm:w-[75%] p-4 border-b-2 border-b-yellow-500" defaultValue={specificFaq.question} {...register('question')} />


     <Input className="w-full sm:mx-auto sm:my-0 sm:w-[75%] p-4 border-b-2 border-b-yellow-500" defaultValue={specificFaq.answer} {...register('answer')} />


     <div className=" sm:flex p-4 text-center grid grid-cols-2 gap-x-4 justify-center">


      <Button type="submit" className=" sm:max-w-xs">
       {isEditing ? <SpinnerMini /> : 'Edit'}
      </Button>


      <Button type="cancel" className=" sm:max-w-sm" onClick={() => navigate('/admin/faqs')}>
       Back &larr;
      </Button>

     </div>
    </Form>
   </div>
  </div>
 );
};

export default EditFaq;