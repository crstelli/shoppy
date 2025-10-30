function Overlay({ children }) {
  return (
    <div className="absolute top-0 left-0 flex h-screen w-screen items-center justify-center bg-neutral-500/50 backdrop-blur-sm">
      {children}
    </div>
  );
}

export { Overlay };
