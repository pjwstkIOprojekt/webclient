import { ReactChild, ReactChildren } from "react";
import { useDarkMode } from "../../hooks/useDarkMode";
import { Table as Inner } from "react-bootstrap";

export interface TableColumnParams {
  name: string,
  property: string,
  func?: (x: any) => ReactChild | ReactChildren | ReactChild[] | ReactChildren[],
  headFunc?: (x: string) => ReactChild | ReactChildren | ReactChild[] | ReactChildren[]
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
  let rowCount = 0;
  let colCount = 0;
  const darkMode = useDarkMode();

  const countCol = () => {
    if (props.columns.length <= colCount) {
      colCount = 0;
    }

    return colCount++;
  };

  return (
    <Inner striped bordered hover variant={darkMode ? "dark" : "light"} className={props.className}>
      <thead className={props.headClass}>
        <tr className={props.rowClass}>
          {props.columns.map(col => <th key={colCount++} className={props.headerClass}>{col.headFunc ? col.headFunc(col.name) : col.name}</th>)}
        </tr>
      </thead>
      <tbody className={props.bodyClass}>
        {props.data.map(row => (
          <tr key={rowCount++} className={props.rowClass}>
            {props.columns.map(col => <td key={countCol()} className={props.dataClass}>{col.func ? col.func(row[col.property]) : row[col.property]}</td>)}
          </tr>
        ))}
      </tbody>
    </Inner>
  );
};

export default Table;
