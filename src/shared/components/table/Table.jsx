import { Tag } from "./Tag";
import { Cell } from "./Cell";
import { Header } from "./Header";
import { Row } from "./Row";

function Table({ children }) {
  return <div className="mt-10 flex flex-col text-center">{children}</div>;
}

Table.Header = Header;
Table.Row = Row;
Table.Cell = Cell;
Table.Tag = Tag;

export { Table };
