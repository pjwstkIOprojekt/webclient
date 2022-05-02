import { useDarkMode } from "../../hooks/useDarkMode";
import { Table as Inner } from "react-bootstrap";

export interface TableColumnParams {
  name: string,
  property: string,
  func?: (x: any) => any
}

export interface TableParams {
  columns: TableColumnParams[],
  data: any[],
  className?: string
}

const Table = (props: Readonly<TableParams>) => {
  let count = 0;
  const darkMode = useDarkMode();

  return (
    <Inner striped bordered hover variant={darkMode ? "dark" : "light"} className={props.className}>
      <thead>
        <tr key={count++}>
          {props.columns.map(col => <th>{col.name}</th>)}
        </tr>
      </thead>
      <tbody>
        {props.data.map(row => (
          <tr key={count++}>
            {props.columns.map(col => <td>{col.func ? col.func(row[col.property]) : row[col.property]}</td>)}
          </tr>
        ))}
      </tbody>
    </Inner>
  );
};

export default Table;
