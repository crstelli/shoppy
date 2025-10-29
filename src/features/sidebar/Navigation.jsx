import { LayoutDashboard, Barcode, Settings, LogOut, Logs } from "lucide-react";

function Navigation() {
  return (
    <div className="mt-30 flex h-full flex-col gap-6 text-xl">
      <Item icon={<LayoutDashboard size={30} strokeWidth={1.5} />}>
        Dashboard
      </Item>
      <Item icon={<Barcode size={30} strokeWidth={1.5} />}>Products</Item>
      <Item icon={<Logs size={30} strokeWidth={1.5} />}>Orders</Item>
      <Item icon={<Settings size={30} strokeWidth={1.5} />}>Settings</Item>
      <span className="mt-auto">
        <Item icon={<LogOut />}>Logout</Item>
      </span>
    </div>
  );
}

function Item({ children, icon }) {
  return (
    <a className="font-semilight flex cursor-pointer items-center gap-2 text-2xl text-gray-700">
      {icon}
      {children}
    </a>
  );
}

export { Navigation };
