import { NavLink } from "react-router";
import {
  LayoutDashboard,
  Barcode,
  Settings,
  LogOut,
  Logs,
  LayoutList,
  Users,
} from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

function Navigation() {
  const navigate = useNavigate();
  const { mutate: logout } = useMutation({
    mutationFn: logoutApi,

    onSuccess: () => {
      navigate("/");
      toast.success("Logged out successfully");
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return (
    <div className="mt-30 flex h-full flex-col gap-6 text-xl">
      <Item icon={<LayoutDashboard size={30} strokeWidth={1.5} />}>
        Dashboard
      </Item>
      <Item className="icon" icon={<Barcode size={30} strokeWidth={1.5} />}>
        Products
      </Item>
      <Item icon={<LayoutList size={30} strokeWidth={1.5} />}>Categories</Item>
      <Item icon={<Logs size={30} strokeWidth={1.5} />}>Orders</Item>
      <Item icon={<Users size={30} strokeWidth={1.5} />}>Users</Item>
      <Item icon={<Settings size={30} strokeWidth={1.5} />}>Settings</Item>
      <button
        onClick={logout}
        className="mt-auto flex cursor-pointer items-center gap-2 text-2xl font-semibold"
      >
        <LogOut />
        <span>Logout</span>
      </button>
    </div>
  );
}

function Item({ children, icon }) {
  return (
    <NavLink
      to={`/${children.toLowerCase()}`}
      className="font-semilight flex cursor-pointer items-center gap-2 text-2xl text-gray-600"
    >
      {icon}
      {children}
    </NavLink>
  );
}

export { Navigation };
