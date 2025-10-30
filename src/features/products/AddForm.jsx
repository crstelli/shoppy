import { useForm } from "react-hook-form";
import { Form } from "../../shared/components/form/Form";

function AddForm({ onSubmit }) {
  const { register, handleSubmit, reset } = useForm();

  return (
    <Form onSubmit={handleSubmit((data) => onSubmit(data, reset))}>
      <h3 className="text-center text-lg font-bold">Add a product</h3>

      <Form.Label>Name</Form.Label>
      <Form.Input type="text" {...register("name", { required: true })} />

      <Form.Label>Category</Form.Label>
      <Form.Select
        defaultValue="..."
        {...register("category", { required: true })}
      >
        <option disabled value="...">
          ...
        </option>
        <option value="tech">Tech</option>
        <option value="clothes">Clothes</option>
        <option value="books">Books</option>
        <option value="food">Food</option>
      </Form.Select>

      <Form.Label>Quantity</Form.Label>
      <Form.Input type="number" {...register("quantity", { required: true })} />

      <Form.Label>Status</Form.Label>
      <Form.Select
        defaultValue="..."
        {...register("status", { required: true })}
      >
        <option disabled value="...">
          ...
        </option>
        <option value="active">Active</option>
        <option value="sold out">Sold Out</option>
        <option value="hidden">Hidden</option>
      </Form.Select>

      <Form.Submit classes={"mt-6"} type="submit">
        Add
      </Form.Submit>
    </Form>
  );
}

export { AddForm };
