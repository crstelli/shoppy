import { useForm } from "react-hook-form";
import { useLogin } from "./useLogin";

import { Form } from "../../shared/components/form/Form";

function Login() {
  const { register, handleSubmit, reset } = useForm();
  const { handleLogin } = useLogin();

  return (
    <div className="flex h-full w-full items-center justify-center">
      <Form onSubmit={handleSubmit((data) => handleLogin({ data, reset }))}>
        <Form.Title>Log into your account</Form.Title>

        <Form.Label>Email</Form.Label>
        <Form.Input
          defaultValue="giuseppe@crescitelli.dev"
          type="email"
          {...register("email", { required: true })}
        />

        <Form.Label>Password</Form.Label>
        <Form.Input
          defaultValue="ciao1234"
          type="password"
          {...register("password", { required: true })}
        />

        <Form.Submit classes={"mt-4"}>Log In</Form.Submit>
      </Form>
    </div>
  );
}

export { Login };
