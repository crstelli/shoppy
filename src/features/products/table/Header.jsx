import { HeaderItem } from "./HeaderItem";

function Header() {
  return (
    <div className="mx-auto grid grid-cols-[100px_300px_200px_100px_100px_200px] rounded-md bg-gray-500/80 px-10 py-4">
      <HeaderItem>ID</HeaderItem>
      <HeaderItem>Name</HeaderItem>
      <HeaderItem>Category</HeaderItem>
      <HeaderItem>Quantity</HeaderItem>
      <HeaderItem>Status</HeaderItem>
      <HeaderItem>Actions</HeaderItem>
    </div>
  );
}

export { Header };
