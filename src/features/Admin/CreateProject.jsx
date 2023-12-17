import H1 from '../../ui/H1';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import { useForm } from 'react-hook-form';
import { Form } from "react-router-dom";
import { useCreateProject } from './useCreateProject';
import { useEditProject } from './useEditProject';
import toast from 'react-hot-toast';
import FileInput from '../../ui/FileInput';
import Modal from '../../ui/Modal';
import { BsPlusCircleFill } from 'react-icons/bs';
import SpinnerMini from '../../ui/SpinnerMini';

const CreateProject = ({ projectToEdit = {} }) => {
 const { isCreating, createProject } = useCreateProject();
 const { isEditing, editedProject } = useEditProject();
 const isWorking = isCreating || isEditing;

 const { id: editId, ...editValues } = projectToEdit;
 const isEditSession = Boolean(editId);

 const { handleSubmit, register, reset } = useForm({
  defaultValues: isEditSession ? editValues : {},
 });


 function onSubmit(data) {
  const image = typeof data.image === "string" ? data.image[0] : data.image[0];
  console.log(data);
  console.log(data.image[0]);

  if (isEditSession)
   editedProject(
    { newCabinData: { ...data, image }, id: editId },
    {
     onSuccess: () => {
      reset();
      console.log(data);
      // onCloseModal?.();
     },
    }
   );
  else
   createProject(
    { ...data, image: image },
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
       <BsPlusCircleFill className='bg-yellow-500 text-slate-100 h-12 w-12 rounded-full ' />
      </Modal.Open>
     </div>



     <Modal.Window name='create-project'>
      <Form className="flex flex-col " onSubmit={handleSubmit(onSubmit, onError)}>
       <H1>Create Project</H1>
       <Input type='text' disabled={isWorking} id='title' {...register('title', { required: 'this field is required' })} placeholder='Title' className="w-full sm:mx-auto sm:my-0 sm:w-[75%] p-4 border-b-2 border-b-yellow-500" />

       <Input type='text' disabled={isWorking} id='description' {...register('description', { required: 'this field is required' })} placeholder='Description' className="w-full sm:mx-auto sm:my-0 sm:w-[75%] p-4 border-b-2 border-b-yellow-500" />

       <FileInput id='image'
        accept='image/*'
        {...register("image", {
         required: isEditSession ? false : "This field is required",
        })}
        placeholder='Image' className="w-full sm:mx-auto sm:my-0 sm:w-[75%] p-4 border-b-2 border-b-yellow-500" />

       <div className=" mx-auto">
        <Button className='mt-4' onSubmit={handleSubmit(onSubmit)} type='submit'>{isWorking ? <SpinnerMini /> : 'Create Project'}</Button>
       </div>
      </Form>
     </Modal.Window>
    </div>
   </Modal>

  </div>
 );
};

export default CreateProject;