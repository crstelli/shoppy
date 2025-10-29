function Products() {
  return (
    <div className="mx-auto w-[90%] max-w-[1400px] py-4">
      <div className="flex justify-between">
        <h3 className="text-2xl font-bold text-gray-700">Your Products</h3>
        <button className="cursor-pointer rounded-md border border-gray-700 bg-gray-700 px-3 py-1 text-lg text-gray-100 hover:bg-gray-100 hover:text-gray-700">
          Add product
        </button>
      </div>
      <div className="mt-4">
        <p className="text-center">You have no products</p>
      </div>
    </div>
  );
}

export { Products };
