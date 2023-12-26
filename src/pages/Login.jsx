import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
// import Logo from "../ui/Logo";
import Heading from "../ui/Heading";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: clamp(48rem) ;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  padding: 0 2rem;
  background: rgba(0 0 0 / 0.2);
  /* backdrop-filter: grayscale(200px); 
  bg-rose-800*/

`;

function Login() {
  return (
    <div className=" bg-gradient-to-br from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%
     text-slate-100 ">
      <LoginLayout id="login">
        {/* <Logo /> */}
        <Heading as="h4">Log in to your account</Heading>
        <LoginForm />

      </LoginLayout>
    </div>
  );
}

export default Login;
