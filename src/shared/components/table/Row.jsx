function Row({ children, gridCols }) {
  return (
    <>
      <div
        className="mx-auto grid w-full rounded-md bg-gray-50 px-10 py-4"
        style={{
          gridTemplateColumns: gridCols,
        }}
      >
        {children}
      </div>
    </>
  );
}

export { Row };
