import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { getProducts } from "../../services/apiProducts";

import { Table } from "./Table";

function Products() {
  const { error, data: products } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (error) toast.error(error.message);

  return (
    <div className="mx-auto w-[90%] max-w-[1400px] py-4">
      <div className="flex justify-between">
        <h3 className="text-2xl font-bold text-gray-700">Your Products</h3>
        <button className="cursor-pointer rounded-md border border-gray-700 bg-gray-700 px-3 py-1 text-lg text-gray-100 hover:bg-gray-100 hover:text-gray-700">
          Add product
        </button>
      </div>
      {products ? (
        <Table products={products} />
      ) : (
        <div className="mt-40">
          <p className="text-center font-bold">You have no products</p>
        </div>
      )}
    </div>
  );
}
export { Products };
