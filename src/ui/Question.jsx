import { useForm } from "react-hook-form";
import { Form } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";
import useCreateFaq from "../features/Faq/useCreateFaq";
import SpinnerMini from "./SpinnerMini";

const Question = () => {
 const { register, handleSubmit, reset } = useForm();
 const { addFaq, isPending: isAdding } = useCreateFaq();

 function onSubmit(data) {
  addFaq({ ...data, answer: null }, { onSuccess: () => reset() });
 }


 return (
  <Form onSubmit={handleSubmit(onSubmit)} className="grid">
   <Input className="my-8 border-b-2 border-b-yellow-500 w-full lg:w-auto" placeholder="Question?" {...register('question')} required />
   <Button disabled={isAdding} className="md:w-1/4" type="submit">{isAdding ? <SpinnerMini /> : 'Add'}</Button>
  </Form>
 );
};

export default Question;