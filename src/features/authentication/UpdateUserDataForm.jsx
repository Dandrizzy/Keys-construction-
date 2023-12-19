import { useState } from "react";

import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";

import Input from "../../ui/Input";

import { useUser } from "./useUser";
import { useUpdateUser } from "./useUpdateUser";
import { Form } from "react-router-dom";
import FormRowVertical from "../../ui/FormRowVertical";
import SpinnerMini from "../../ui/SpinnerMini";

function UpdateUserDataForm() {
  // We don't need the loading state, and can immediately use the user data, because we know that it has already been loaded at this point
  const {
    user: {
      email,
      user_metadata: { fullName: currentFullName },
    },
  } = useUser();

  const { updateUser, isUpdating } = useUpdateUser();

  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!fullName) return;
    updateUser(
      { fullName, avatar },
      {
        onSuccess: () => {
          setAvatar(null);
          e.target.reset();
        },
      }
    );
  }

  function handleCancel() {
    setFullName(currentFullName);
    setAvatar(null);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input value={email} disabled />
      </FormRowVertical>

      <FormRowVertical label="Full name">
        <Input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          id="fullName"
          disabled={isUpdating}
        />
      </FormRowVertical>

      <FormRowVertical label="Avatar image">
        <FileInput
          id="avatar"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
          disabled={isUpdating}
        />
      </FormRowVertical>

      <FormRowVertical>
        <div className=" grid gap-4 grid-cols-2">
          <Button
            type="reset"
            disabled={isUpdating}
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button disabled={isUpdating}>{isUpdating ? <SpinnerMini /> : 'Update account'}</Button>
        </div>
      </FormRowVertical>
    </Form>
  );
}

export default UpdateUserDataForm;
