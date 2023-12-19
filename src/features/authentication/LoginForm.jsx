import { useState } from "react";

import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";
import { Form } from "react-router-dom";

function LoginForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>

      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>
      <div className=" grid grid-cols-auto gap-4">
        <button className="  bg-green-400 rounded-full p-2 font-semibold text-white hover:bg-green-500 disabled:bg-slate-500 disabled:cursor-not-allowed transition-all duration-500" disabled={isLoading || password.length < 8 || !email}>
          {!isLoading ? "Log in" : <SpinnerMini />}
        </button>


      </div>
    </Form>
  );
}

export default LoginForm;
