import { Form, useNavigate, useParams } from "react-router-dom";
import { MdCancel, MdDeleteForever, MdOutlineUpdate } from 'react-icons/md';
import Spinner from '../../ui/Spinner';
import SpinnerMini from '../../ui/SpinnerMini';
import Button from '../../ui/Button';
import Input from "../../ui/Input";
import { useForm, } from "react-hook-form";
import { useEdit } from "../../hooks/useEdit";
import { useDelete } from "../../hooks/useDelete";
import { editService as editServiceFn, deleteService as deleteServiceFn, getSpecificService } from "../../Services/apiServices";
import { useFetchId } from "../../hooks/useFetchId";


const EditService = () => {
 const { serviceId } = useParams();
 const { deleteFn: deleteService, isDeleting } = useDelete({ key: 'services', fn: deleteServiceFn });
 const navigate = useNavigate();
 const { data: service = [], isLoading } = useFetchId({ id: serviceId, key: 'service', fn: getSpecificService });
 const { edit: editService, isEditing } = useEdit({ key: 'services', fn: editServiceFn });
 const { register, handleSubmit, } = useForm();
 const { title, description, image, id } = service;

 if (isLoading) return <Spinner />;

 const onSubmit = (data) => {
  editService({ serviceData: data, id: id }, { onSettled: () => navigate('/admin/services') });
 };

 return (
  <>
   <Form className="grid max-w-2xl p-4 gap-3" onSubmit={handleSubmit(onSubmit)}>

    <label htmlFor="title">Title</label>
    <Input defaultValue={title} id="title" {...register('title')} />


    <label htmlFor="description">Description</label>
    <Input defaultValue={description} id="description" {...register('description')} />

    <label htmlFor="img">Image</label>
    <Input defaultValue={image} id="img" {...register('image')} />

    <div className="flex gap-4 py-3">

     <Button type="submit">
      <MdOutlineUpdate />
      {isEditing ? <SpinnerMini /> : 'Update'}</Button>

     <Button type="reset" variation='secondary' onClick={() => navigate('/admin/services')}>
      <MdCancel />
      Cancel</Button>

     <Button variation='danger' type="button" onClick={() => {
      deleteService(serviceId, { onSuccess: () => navigate('/admin/services') });

     }}>
      <MdDeleteForever />
      {isDeleting ? <SpinnerMini /> : 'Delete'}
     </Button>

    </div>

   </Form>
  </>

 );
};

export default EditService;