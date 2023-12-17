import { useForm } from "react-hook-form";
import { Form, useNavigate, useParams } from "react-router-dom";
import Input from "../../ui/Input";
import { useFaq } from "../Faq/useFaq";
import Spinner from "../../ui/Spinner";
import Button from "../../ui/Button";
import { useEditFaq } from "../Faq/useEditFaq";
import SpinnerMini from "../../ui/SpinnerMini";
import { useSpecificFaq } from "./useSpecificFaq";

const EditFaq = () => {

 const faqId = useParams();
 const ID = Number(faqId.faqId);

 const { register, handleSubmit } = useForm();
 const { faq = [
  { id: 1, question: 'what are you doing', answer: 'preparing your project' },
  { id: 2, question: 'what are you saying', answer: 'preparing your project' },
  { id: 3, question: 'what are you working on', answer: 'preparing your project' },
  { id: 4, question: 'what are you doing', answer: 'preparing your project' },
  { id: 5, question: 'what are you saying', answer: 'preparing your project' },
  { id: 6, question: 'what are you working on', answer: 'preparing your project' },
  { id: 7, question: 'what are you doing', answer: 'preparing your project' },
  { id: 8, question: 'what are you saying', answer: 'preparing your project' },
  { id: 9, question: 'what are you working on', answer: 'preparing your project' },
 ], isLoading } = useFaq();
 const { editFaqs, isLoading: isEditing } = useEditFaq();
 const navigate = useNavigate();

 const { data: specificFaq } = useSpecificFaq();

 console.log(faq.length, specificFaq);


 if (isLoading) return <Spinner />;

 const onSubmit = (data) => {
  editFaqs({
   newFaqData: { ...data }, id: ID
  },
   {
    onSuccess: navigate('/admin/faqs')
   }
  );

  console.log(data);
  navigate('/admin/faqs');
 };

 return (
  <div className=" text-center">
   {faq.filter((item) => {
    if (item.id === faqId)
     return <Form key={item.id} onSubmit={handleSubmit(onSubmit)}>
      <Input className="w-full sm:mx-auto sm:my-0 sm:w-[75%] p-4 border-b-2 border-b-yellow-500" defaultValue={item.question} {...register('question')} />
      <Input className="w-full sm:mx-auto sm:my-0 sm:w-[75%] p-4 border-b-2 border-b-yellow-500" defaultValue={item.answer} {...register('answer')} />
      <div className=" sm:flex p-4 text-center grid grid-cols-2 gap-x-4 justify-center">
       <Button type="submit" className=" w-full sm:max-w-xs">{isEditing ? <SpinnerMini /> : 'Edit'}</Button>
       <Button type="cancel" className=" w-full sm:max-w-sm" onClick={() => navigate('/admin/faqs')}>Back &larr;</Button>
      </div>
     </Form>;
   })}

   {/* <Form onSubmit={handleSubmit(onSubmit)}>
    <Input className="w-full sm:mx-auto sm:my-0 sm:w-[75%] p-4 border-b-2 border-b-yellow-500" defaultValue={faq.at(faqId.faqId).question} {...register('question')} />
    <Input className="w-full sm:mx-auto sm:my-0 sm:w-[75%] p-4 border-b-2 border-b-yellow-500" defaultValue={faq.at(faqId.faqId).answer} {...register('answer')} />
    <div className=" sm:flex p-4 text-center grid grid-cols-2 gap-x-4 justify-center">
     <Button type="submit" className=" w-full sm:max-w-xs">{isEditing ? <SpinnerMini /> : 'Edit'}</Button>
     <Button type="cancel" className=" w-full sm:max-w-sm" onClick={() => navigate('/admin/faqs')}>Back &larr;</Button>
    </div>
   </Form> */}
  </div>
 );
};

export default EditFaq;