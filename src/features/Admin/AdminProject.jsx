
import Spinner from "../../ui/Spinner";
import ProjectList from "./ProjectList";
import { useProject } from "./useProject";
import CreateProject from "./CreateProject";

const AdminProject = () => {
 const { data: project = [
  { id: 1, title: 'completed', description: 'completed', status: 'completed' },
  { id: 2, title: 'in-progress', description: 'no description', status: 'not-started' },
  { id: 3, title: 'not-started', description: 'no description', status: 'in-progress' },
  { id: 4, title: 'project1', description: 'in-progress', status: 'not-started' },
  { id: 5, title: 'project2', description: 'no description', status: 'not-started' },
  { id: 6, title: 'project3', description: 'no description', status: 'not-started' },
  { id: 7, title: 'project1', description: 'no description', status: 'not-started' },
  { id: 8, title: 'project2', description: 'no description', status: 'not-started' },
  { id: 9, title: 'project3', description: 'no description', status: 'not-started' },
 ], isLoading } = useProject();
 if (isLoading) return <Spinner />;
 if (!project.length) return <p>No projects</p>;
 return (
  <div className="bg-neutral-800 text-slate-100">
   <div className=" p-4 grid grid-cols-[2.5rem_1fr_2fr_85px]">

    <div className="pb-2">S/N</div>

    <div className=" font-bold pb-2">TITLE</div>

    <div className="font-bold pb-2">DESCRIPTION</div>

    <div className="font-bold pb-2 text-center">STATUS</div>

   </div>

   {project.map((item, index) => <ProjectList key={item.id} item={item} index={index} />)}

   <CreateProject />

  </div>
 );
};

export default AdminProject;