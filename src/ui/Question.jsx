import { useForm } from "react-hook-form";
import { Form } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";
import useCreateFaq from "../features/Faq/useCreateFaq";

const Question = () => {
 const { register, handleSubmit, getValues } = useForm();
 const { addFaq, isLoading: isAdding } = useCreateFaq();


 const question = getValues('question');
 console.log(question);
 // function onSubmit(e, field) {
 //  const { value } = e.target;

 //  if (!value) return;
 //  addFaq({ [field]: value });
 //  console.log(question);
 // }
 function onSubmit(data) {



  addFaq({ ...data, answer: null });
  console.log(data);
  console.log(addFaq);
 }


 return (
  <Form onSubmit={handleSubmit(onSubmit)} className="grid">
   <Input className="my-8 border-b-2 border-b-yellow-500 w-full lg:w-auto" placeholder="Question?" {...register('question')} required />
   <Button disabled={isAdding} className="md:w-1/4" type="submit">Add</Button>
  </Form>
 );
};

export default Question;