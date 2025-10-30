function Select({ children, ...props }) {
  return (
    <select
      className="rounded-md border border-gray-700/50 px-4 py-1"
      {...props}
    >
      {children}
    </select>
  );
}

export { Select };
