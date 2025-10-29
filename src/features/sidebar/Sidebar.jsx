import { Logo } from "../../shared/components/Logo";
import { Navigation } from "./Navigation";

function Sidebar() {
  return (
    <div className="row-span-2 flex flex-col bg-gray-200/80 p-10">
      <Logo />
      <Navigation />
    </div>
  );
}

export { Sidebar };
