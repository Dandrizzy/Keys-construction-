import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";

import { useUpdateUser } from "./useUpdateUser";
import { Form } from "react-router-dom";
import SpinnerMini from "../../ui/SpinnerMini";

function UpdatePasswordForm() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  const { updateUser, isUpdating } = useUpdateUser();

  function onSubmit({ password }) {
    updateUser({ password }, { onSuccess: reset });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRowVertical
        label="New password (min 8 chars)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          disabled={isUpdating}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      </FormRowVertical>

      <FormRowVertical
        label="Confirm password"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          autoComplete="new-password"
          id="passwordConfirm"
          disabled={isUpdating}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              getValues().password === value || "Passwords need to match",
          })}
        />
      </FormRowVertical>
      <div className="flex gap-10">
        <Button onClick={reset} type="reset" disabled={isUpdating} >
          Cancel
        </Button>
        <Button disabled={isUpdating}>{isUpdating ? <SpinnerMini /> : 'Update password'}</Button>
      </div>
    </Form>
  );
}

export default UpdatePasswordForm;
