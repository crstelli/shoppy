function ButtonSecondary({ children, classes, ...props }) {
  return (
    <button
      {...props}
      className={`cursor-pointer rounded-md border border-gray-700 bg-gray-100 px-3 py-1 text-lg text-gray-700 ${classes}`}
    >
      {children}
    </button>
  );
}

export { ButtonSecondary };
