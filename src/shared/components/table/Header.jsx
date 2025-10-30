import { HeaderItem } from "./HeaderItem";

function Header({ headers }) {
  return (
    <div
      className="mx-auto grid w-[90%] max-w-[900px] rounded-md bg-gray-500/60 px-10 py-4"
      style={{
        gridTemplateColumns: `repeat(${headers.length}, 1fr)`,
      }}
    >
      {headers.map((el) => (
        <HeaderItem key={el}>{el}</HeaderItem>
      ))}
    </div>
  );
}

export { Header };
