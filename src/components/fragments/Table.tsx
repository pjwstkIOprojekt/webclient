import { ReactChild, ReactChildren } from "react";
import { useDarkMode } from "../../hooks/useDarkMode";
import { Table as Inner } from "react-bootstrap";

export interface TableColumnParams {
  name: (() => ReactChild | ReactChildren | ReactChild[] | ReactChildren[]) | string,
  property: ((x: any) => ReactChild | ReactChildren | ReactChild[] | ReactChildren[]) | string
}

export interface TableParams {
  columns: TableColumnParams[],
  data: any[],
  className?: string,
  headClass?: string,
  bodyClass?: string,
  rowClass?: string,
  headerClass?: string,
  dataClass?: string
}

const Table = (props: Readonly<TableParams>) => {
  const darkMode = useDarkMode();

  return (
    <Inner striped bordered hover variant={darkMode ? "dark" : "light"} className={props.className}>
      <thead className={props.headClass}>
        <tr className={props.rowClass}>
          {props.columns.map((col, index) => <th key={index} className={props.headerClass}>{typeof(col.name) === "string" ? col.name : col.name()}</th>)}
        </tr>
      </thead>
      <tbody className={props.bodyClass}>
        {props.data.map((row, index) => (
          <tr key={index} className={props.rowClass}>
            {props.columns.map((col, key) => <td key={key} className={props.dataClass}>{typeof(col.property) === "string" ? row[col.property] : col.property(row)}</td>)}
          </tr>
        ))}
      </tbody>
    </Inner>
  );
};

export default Table;
