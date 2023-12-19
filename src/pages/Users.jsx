import SignupForm from "../features/authentication/SignupForm";
import Heading from "../ui/Heading";

function NewUsers() {
  return (
    <div className=" px-4 max-w-2xl ">
      <Heading as="h1">Create a new user</Heading>
      <SignupForm />
    </div>
  );
}

export default NewUsers;
