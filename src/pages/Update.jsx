import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import Heading from "../ui/Heading";

function Update() {
 return (
  <div className=" px-4 max-w-2xl ">
   <Heading as="h1" className=" uppercase text-center">Update password</Heading>
   <UpdatePasswordForm />
  </div>
 );
}

export default Update;
