import { useForm } from "react-hook-form";
import { useSignup } from "./useSignup";

import { Form } from "../../shared/components/form/Form";

function Users() {
  const { register, handleSubmit, reset } = useForm();
  const { handleSignup } = useSignup();

  return (
    <div className="flex justify-center">
      <Form onSubmit={handleSubmit((data) => handleSignup({ data, reset }))}>
        <Form.Title>Create a new user</Form.Title>

        <Form.Label>Email</Form.Label>
        <Form.Input type="email" {...register("email", { required: true })} />

        <Form.Label>Password</Form.Label>
        <Form.Input
          type="password"
          {...register("password", { required: true })}
        />

        <Form.Label>Confirm password</Form.Label>
        <Form.Input
          type="password"
          {...register("confirmPassword", { required: true })}
        />

        <Form.Submit classes={"mt-4"}>Create new user</Form.Submit>
      </Form>
    </div>
  );
}

export { Users };
