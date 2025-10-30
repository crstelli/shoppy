import { useForm } from "react-hook-form";
import { Form } from "../../shared/components/form/Form";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../services/apiCategories";

function EditForm({ onSubmit, item }) {
  const { register, handleSubmit, reset } = useForm();

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  return (
    <Form
      onSubmit={handleSubmit((data) => onSubmit(data, reset))}
      classes={"col-span-full mx-auto"}
    >
      <Form.Title>Edit Product #{item.id}</Form.Title>

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
        {categories?.map((c) => (
          <option key={c.id} value={c.name}>
            {c.name}
          </option>
        ))}
      </Form.Select>

      <Form.Label>Quantity</Form.Label>
      <Form.Input
        defaultValue={item.quantity}
        type="number"
        {...register("quantity", { required: true, valueAsNumber: true })}
      />

      <Form.Label>Price</Form.Label>
      <Form.Input
        defaultValue={item.price}
        type="number"
        {...register("price", { required: true, valueAsNumber: true })}
      />

      <Form.Label>Description</Form.Label>
      <Form.Input
        defaultValue={item.description}
        {...register("description", { required: true })}
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
