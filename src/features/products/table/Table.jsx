import { Header } from "./Header";
import { Row } from "./Row";

function Table({ products }) {
  return (
    <div className="mt-10 flex flex-col text-center">
      <Header />
      {products.map((item) => (
        <Row item={item} key={item.id} />
      ))}
    </div>
  );
}

export { Table };
