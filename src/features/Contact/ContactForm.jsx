import { useForm } from "react-hook-form";
import BigHeader from "../../ui/BigHeader";
import { Form } from "react-router-dom";
import Button from '../../ui/Button';
import Input from "../../ui/Input";

const ContactForm = () => {
 const { register, handleSubmit, getValues } = useForm();

 function onSubmit(data) {
  console.log("Data", data);
  console.log(getValues().message);
 }
 return (
  <div className="bg-yellow-500 py-4 px-8 sm:w-[75%]">
   <BigHeader>Get In Touch</BigHeader>
   <Form className="flex flex-col gap-4 "
    onSubmit={handleSubmit(onSubmit)}>

    <Input {...register('name',)} required placeholder="Name" className="w-full sm:mx-auto sm:my-0 sm:w-[75%] p-4" />

    <Input type="email" {...register('email',)} required placeholder="Email Address" className="w-full sm:mx-auto sm:my-0 sm:w-[75%] p-4" />

    <Input type="tel" {...register('phoneNumber',)} required placeholder="Email Address" className="w-full sm:mx-auto sm:my-0 sm:w-[75%] p-4" />

    <textarea {...register('message',)} required placeholder="Message" className="w-full sm:mx-auto sm:my-0 sm:w-[75%] p-4 focus:outline-none " />

    <Button onSubmit={() => handleSubmit(onSubmit)} className="border-2 w-[100%] sm:w-[100%] py-10 md:w-[50%] lg:w-[50%] xl:w-[25%] mx-auto my-0 ">SEND MESSAGE</Button>
   </Form>
  </div>
 );
};

export default ContactForm;