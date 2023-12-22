import { Form, useNavigate } from "react-router-dom";
import { useSpecificProject } from "./useSpecificProject";
import { MdCancel, MdDeleteForever, MdOutlineUpdate } from 'react-icons/md';
import Spinner from '../../ui/Spinner';
import SpinnerMini from '../../ui/SpinnerMini';
import Button from '../../ui/Button';
import Input from "../../ui/Input";
import { useEditProject } from "./useEditProject";
import { useForm, } from "react-hook-form";
import { useDeleteProject } from "./useDeleteProject";
// import FileInput from "../../ui/FileInput";

const EditProject = () => {
 const { deleteProject, isDeleting } = useDeleteProject();
 const navigate = useNavigate();
 const { project = [], isLoading } = useSpecificProject();
 const { title, description, status, image, id } = project;
 const { editProject, isEditing } = useEditProject();
 const { register, handleSubmit, } = useForm();
 console.log(project);

 if (isLoading) return <Spinner />;
 console.log(id);

 const onSubmit = (data) => {
  editProject({ newProjectData: { ...data, image: image }, id: id }, { onSettled: () => navigate('/admin/projects') });

 };

 const onDelete = (id) => {
  deleteProject(id);
 };

 return (
  <>
   <Form className="grid max-w-2xl p-4 gap-3" onSubmit={handleSubmit(onSubmit)}  >

    <label htmlFor="title">Title</label>
    <Input defaultValue={title} id="title" {...register('title')} />


    <label htmlFor="description">Description</label>
    <Input defaultValue={description} id="description" {...register('description')} />


    <label htmlFor="status">Status</label>
    <select className=" py-4 bg-transparent border-b border-black" defaultValue={status} id="status" {...register('status')} >
     <option value="not-started">Not Started</option>
     <option value="completed">Completed</option>
     <option value="in-progress">In Progress</option>
    </select>

    <label htmlFor="img">Image</label>
    <Input value={image} disabled id="img" className=" cursor-not-allowed disabled:text-slate-300" />

    <div className="flex gap-4 py-3">

     <Button type="submit">
      <MdOutlineUpdate />
      {isEditing ? <SpinnerMini /> : 'Update Project'}</Button>

     <Button type="reset" variation='secondary' onClick={() => navigate('/admin/projects')}>
      <MdCancel />
      Cancel</Button>

     <Button variation='danger' type="button" onClick={() => onDelete(id)}>
      <MdDeleteForever />
      {isDeleting ? <SpinnerMini /> : 'Delete'}
     </Button>

    </div>

   </Form>
  </>

 );
};

export default EditProject;