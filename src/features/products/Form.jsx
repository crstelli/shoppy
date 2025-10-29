import { useForm } from "react-hook-form";

import { Button } from "../../shared/components/Button";

function Form({ onSubmit }) {
  const { register, handleSubmit, reset } = useForm();

  return (
    <form
      onSubmit={handleSubmit((data) => onSubmit(data, reset))}
      className="mx-auto mt-10 flex w-[500px] flex-col rounded-md border border-gray-700/50 p-10"
    >
      <h3 className="text-center text-lg font-bold">Add a product</h3>

      <Label>Name</Label>
      <Input type="text" {...register("name", { required: true })} />

      <Label>Category</Label>
      <Select {...register("category", { required: true })}>
        <option value="tech">Tech</option>
        <option value="clothes">Clothes</option>
        <option value="books">Books</option>
        <option value="food">Food</option>
      </Select>

      <Label>Quantity</Label>
      <Input type="number" {...register("quantity", { required: true })} />

      <Label>Status</Label>
      <Select {...register("status", { required: true })}>
        <option value="active">Active</option>
        <option value="sold out">Sold Out</option>
        <option value="hidden">Hidden</option>
      </Select>

      <Button classes={"mt-6"} type="submit">
        Add
      </Button>
    </form>
  );
}

function Label({ children }) {
  return <label className="mt-2 text-lg">{children}</label>;
}

function Input(props) {
  return (
    <input
      {...props}
      className="rounded-md border border-gray-700/50 px-4 py-1"
    />
  );
}

function Select({ children, ...props }) {
  return (
    <select
      className="rounded-md border border-gray-700/50 px-4 py-1"
      {...props}
    >
      {children}
    </select>
  );
}

export { Form };
