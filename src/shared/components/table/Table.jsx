import { Operations } from "./Operations";
import { Tag } from "./Tag";
import { Cell } from "./Cell";
import { Header } from "./Header";
import { Row } from "./Row";
import { Footer } from "./Footer";
import { Title } from "./Title";

function Table({ children }) {
  return <div className="mt-10 flex flex-col text-center">{children}</div>;
}

Table.Header = Header;
Table.Title = Title;
Table.Operations = Operations;
Table.Row = Row;
Table.Cell = Cell;
Table.Tag = Tag;
Table.Footer = Footer;

export { Table };
