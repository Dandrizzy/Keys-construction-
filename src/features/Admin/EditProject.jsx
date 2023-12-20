import { Form, useNavigate, useParams } from "react-router-dom";
import { useSpecificProject } from "./useSpecificProject";
import Spinner from '../../ui/Spinner';
import SpinnerMini from '../../ui/SpinnerMini';
import Button from '../../ui/Button';
import Input from "../../ui/Input";
import { useEditProject } from "./useEditProject";
import { useForm, } from "react-hook-form";

const EditProject = () => {
 const { projectId: id } = useParams();
 const navigate = useNavigate();
 const { project = [], isLoading } = useSpecificProject();
 const { title, description, status, image } = project;
 const { editProject, isEditing } = useEditProject();
 const { register, handleSubmit, } = useForm();
 // console.log(project);
 if (isLoading || isEditing) return <Spinner />;
 console.log(id);

 const onSubmit = (data) => {
  console.log(data);
  editProject({ newProjectData: { ...data }, id: id });
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

    <label htmlFor="img">{image}</label>
    <label htmlFor="img">Image</label>
    {/* <Input type="file" defaultValue={image} id="img" {...register('image')} /> */}

    <div className="flex gap-4 py-3">

     <Button type="submit">{isEditing ? <SpinnerMini /> : 'Update Project'}</Button>
     <Button type="reset" onClick={() => navigate('/admin/projects')}>Cancel</Button>
    </div>

   </Form>
  </>

 );
};

export default EditProject;