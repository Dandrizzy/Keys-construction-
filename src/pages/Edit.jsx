import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import Heading from "../ui/Heading";

function Edit() {
 return (
  <div className=" px-4 max-w-2xl ">
   <Heading as="h1">Create a new user</Heading>
   <UpdateUserDataForm />
  </div>
 );
}

export default Edit;
