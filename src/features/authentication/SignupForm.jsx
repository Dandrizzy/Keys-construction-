import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import { useSignup } from "./useSignup";
import { Form } from "react-router-dom";
import FormRowVertical from "../../ui/FormRowVertical";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { signup, isLoading } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      {
        onSettled: () => reset(),
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRowVertical label="Full name" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          disabled={isLoading}
          {...register("fullName", { required: "This field is required" })}
        />
      </FormRowVertical>

      <FormRowVertical label="Email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isLoading}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
        />
      </FormRowVertical>

      <FormRowVertical
        label="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          disabled={isLoading}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      </FormRowVertical>

      <FormRowVertical label="Repeat password" error={errors?.passwordConfirm?.message}>
        <Input
          type="password"
          id="passwordConfirm"
          disabled={isLoading}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "Passwords need to match",
          })}
        />
      </FormRowVertical>

      <div className="grid grid-cols-2 gap-4 py-8">
        {/* type is an HTML attribute! */}
        <button
          className=" text-slate-50 bg-yellow-300 p-2 rounded-full hover:bg-yellow-400 duration-500 transition-all disabled:bg-gray-700 disabled:cursor-not-allowed"
          type="reset"
          disabled={isLoading}
          onClick={reset}
        >
          Cancel
        </button>
        <button className=" text-slate-50 bg-yellow-300 p-2 rounded-full hover:bg-yellow-400 duration-500 transition-all disabled:bg-gray-700 disabled:cursor-not-allowed" disabled={isLoading}>Create New User</button>
      </div>
    </Form>
  );
}

export default SignupForm;
