function ButtonSecondary({ children, classes, ...props }) {
  return (
    <button
      {...props}
      className={`cursor-pointer rounded-md border border-gray-700 bg-gray-100 px-3 py-1 hover:bg-gray-700 hover:text-gray-100 ${classes}`}
    >
      {children}
    </button>
  );
}

export { ButtonSecondary };
