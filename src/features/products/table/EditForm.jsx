import { useForm } from "react-hook-form";
import { Form } from "../../../shared/components/form/Form";

function EditForm({ onSubmit, item }) {
  const { register, handleSubmit, reset } = useForm();

  return (
    <Form
      onSubmit={handleSubmit((data) => onSubmit(data, reset))}
      classes={"col-span-full mt-6 mx-auto"}
    >
      <Form.Title>Edit Product #11</Form.Title>

      <Form.Label>Name</Form.Label>
      <Form.Input
        defaultValue={item.name}
        {...register("name", { required: true })}
      />

      <Form.Label>Category</Form.Label>
      <Form.Select
        defaultValue={item.category}
        {...register("category", { required: true })}
      >
        <option value="tech">Tech</option>
        <option value="clothes">Clothes</option>
        <option value="books">Books</option>
        <option value="food">Food</option>
      </Form.Select>

      <Form.Label>Quantity</Form.Label>
      <Form.Input
        defaultValue={item.quantity}
        type="number"
        {...register("quantity", { required: true, valueAsNumber: true })}
      />

      <Form.Label>Status</Form.Label>
      <Form.Select
        defaultValue={item.status}
        {...register("status", { required: true })}
      >
        <option value="active">Active</option>
        <option value="sold out">Sold Out</option>
        <option value="hidden">Hidden</option>
      </Form.Select>

      <Form.Submit classes={"mt-10"}>Save Edit</Form.Submit>
    </Form>
  );
}

export { EditForm };
