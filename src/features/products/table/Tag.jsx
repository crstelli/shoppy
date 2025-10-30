function Tag({ children }) {
  if (children === "active")
    return (
      <span className="rounded-full bg-green-300 py-1 text-sm uppercase">
        {children}
      </span>
    );

  if (children === "sold out")
    return (
      <span className="rounded-full bg-red-300 py-1 text-sm uppercase">
        {children}
      </span>
    );

  if (children === "hidden")
    return (
      <span className="rounded-full bg-orange-300 py-1 text-sm uppercase">
        {children}
      </span>
    );
}

export { Tag };
