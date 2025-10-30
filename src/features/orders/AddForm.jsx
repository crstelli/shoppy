import { useForm } from "react-hook-form";
import { Form } from "../../shared/components/form/Form";

function AddForm({ onSubmit }) {
  const { register, handleSubmit, reset } = useForm();

  return (
    <Form onSubmit={handleSubmit((data) => onSubmit(data, reset))}>
      <h3 className="text-center text-lg font-bold">Add an order</h3>

      <Form.Label>Address</Form.Label>
      <Form.Input type="text" {...register("address", { required: true })} />

      <Form.Submit classes={"mt-6"} type="submit">
        Add
      </Form.Submit>
    </Form>
  );
}

export { AddForm };
