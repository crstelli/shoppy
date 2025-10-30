import { HeaderItem } from "./HeaderItem";

function Header() {
  return (
    <div className="mx-auto grid w-[90%] max-w-[900px] grid-cols-[1fr_3fr_2fr_1fr_1fr_2fr] rounded-md bg-gray-500/60 px-10 py-4">
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
