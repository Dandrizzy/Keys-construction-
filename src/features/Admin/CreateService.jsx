import H1 from '../../ui/H1';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import { useForm } from 'react-hook-form';
import { Form } from "react-router-dom";
import toast from 'react-hot-toast';
import Modal from '../../ui/Modal';
import { BsPlusCircleFill } from 'react-icons/bs';
import SpinnerMini from '../../ui/SpinnerMini';
import { useCreate } from '../../hooks/useCreate';
import { createService as createServiceFn } from '../../Services/apiServices';

const CreateService = ({ projectToEdit = {} }) => {
 const { isCreating, create: createService } = useCreate({ key: 'services', fn: createServiceFn });


 const { id: editId, ...editValues } = projectToEdit;
 const isEditSession = Boolean(editId);

 const { handleSubmit, register, reset } = useForm({
  defaultValues: isEditSession ? editValues : {},
 });


 function onSubmit(data) {
  console.log(data);
  createService(data,
   {
    onSuccess: () => {
     reset();
     // onCloseModal?.();
    },
   }
  );
 }
 const onError = (errors) => {
  toast.error(errors);
 };


 return (
  <div className='p-4'>

   <Modal>
    <div className="grid justify-center items-center ">
     <div className="flex justify-center items-center fixed bottom-8 right-8">


      <Modal.Open opens='create-project'>
       <BsPlusCircleFill className='bg-yellow-500 text-slate-100 cursor-pointer h-12 w-12 rounded-full ' />
      </Modal.Open>
     </div>



     <Modal.Window name='create-project'>
      <Form className="flex flex-col " onSubmit={handleSubmit(onSubmit, onError)}>
       <H1 className=' text-center'>Create New Service</H1>
       <Input type='text' disabled={isCreating} id='title' {...register('title', { required: 'this field is required' })} placeholder='Title' className="w-full sm:mx-auto sm:my-0 sm:w-[75%] p-4 border-b-2 border-b-yellow-500" />

       <Input type='text' disabled={isCreating} id='description' {...register('description', { required: 'this field is required' })} placeholder='Description' className="w-full sm:mx-auto sm:my-0 sm:w-[75%] p-4 border-b-2 border-b-yellow-500" />

       <Input
        {...register("image", {
         required: "This field is required",
        })}
        placeholder='Image url' className="w-full sm:mx-auto sm:my-0 sm:w-[75%] p-4 border-b-2 border-b-yellow-500" />

       <div className=" mx-auto">
        <Button className='mt-4' type='submit' disabled={isCreating}>{isCreating ? <SpinnerMini /> : 'Create Project'}</Button>
       </div>
      </Form>
     </Modal.Window>
    </div>
   </Modal>

  </div>
 );
};

export default CreateService;