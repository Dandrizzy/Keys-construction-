import { useForm } from "react-hook-form";
import BigHeader from "../../ui/BigHeader";
import { Form } from "react-router-dom";
import Button from '../../ui/Button';
import Input from "../../ui/Input";
import { useSendMessage } from "./useSendMessage";
import SpinnerMini from "../../ui/SpinnerMini";

const HomeContact = () => {
 const { message, isSending } = useSendMessage();
 const { register, handleSubmit, reset } = useForm();


 function onSubmit(data) {
  message({ ...data });
  if (!isSending) reset();
 }
 return (
  <div className=" py-4 px-8 sm:w-[75%] lg:w-1/2 mx-auto lg:mx-0">
   <BigHeader>Contact Us</BigHeader>
   <Form id="message" className="flex flex-col gap-4 "
    onSubmit={handleSubmit(onSubmit)}>

    <Input {...register('name',)} required min={3} placeholder="Name" className="w-full sm:mx-auto sm:my-0 sm:w-[75%] p-4 border-b-2 border-b-yellow-500" />

    <Input type="email" {...register('email',)} required placeholder="Email Address" className="w-full sm:mx-auto sm:my-0 sm:w-[75%] p-4 border-b-2 border-b-yellow-500" />


    <textarea {...register('message',)} required placeholder="Message" min={8} className="w-full sm:mx-auto sm:my-0 sm:w-[75%] p-4 focus:outline-none  border-b-2 border-b-yellow-500" />

    <Input {...register('phoneNumber',)} required type='number' placeholder="Phone Number" className="w-full sm:mx-auto sm:my-0 sm:w-[75%] p-4 border-b-2 border-b-yellow-500" />

    <Button className="border-2 w-[100%] sm:w-[100%] py-10 md:w-[50%] lg:w-[50%] xl:w-[25%] mx-auto my-0 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:bg-slate-400 disabled:hover:outline-none disabled:border-none disabled:hover:border-none" disabled={isSending}>{isSending ? <SpinnerMini /> : 'SEND MESSAGE'}</Button>
   </Form>
  </div>
 );
};

export default HomeContact;