import { Outlet } from "react-router";

import { Header } from "../../features/header/Header";
import { Sidebar } from "../../features/sidebar/Sidebar";

function Layout() {
  return (
    <main className="grid h-full w-full grid-cols-[auto_1fr] grid-rows-[auto_1fr] gap-4">
      <Sidebar />
      <Header />
      <Outlet />
    </main>
  );
}

export { Layout };
