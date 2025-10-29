import { BrowserRouter, Routes, Route } from "react-router";

import { Layout } from "./shared/components/Layout";

import { Dashboard } from "./features/dashboard/Dashboard";
import { Products } from "./features/products/Products";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
