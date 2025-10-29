function Button({ children, classes, ...props }) {
  return (
    <button
      {...props}
      className={`cursor-pointer rounded-md border border-gray-700 bg-gray-700 px-3 py-1 text-lg text-gray-100 hover:bg-gray-100 hover:text-gray-700 ${classes}`}
    >
      {children}
    </button>
  );
}

export { Button };
