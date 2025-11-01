import { Logo } from "../../shared/components/Logo";
import { Navigation } from "./Navigation";

function Sidebar() {
  return (
    <div className="row-span-2 flex min-w-[230px] flex-col bg-gray-50 p-10">
      <Logo classes={"mx-auto"} />
      <Navigation />
    </div>
  );
}

export { Sidebar };
