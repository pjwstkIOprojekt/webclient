import { ReactChild, ReactChildren, useState, useEffect, ChangeEventHandler, ChangeEvent } from "react";
import { useDarkMode } from "../../hooks/useDarkMode";
import { Table as Inner, Col } from "react-bootstrap";
import Button from "./Button";
import FormControl from "./FormControl";

export interface TableColumnParams {
  name: (() => ReactChild | ReactChildren | ReactChild[] | ReactChildren[]) | string,
  property: ((x: any) => ReactChild | ReactChildren | ReactChild[] | ReactChildren[]) | string,
  sortBy?: string,
  filterBy?: string
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

interface SortState {
  property: string,
  reversed: boolean
}

interface FilterState {
  property: string,
  value: string
}

const Table = (props: Readonly<TableParams>) => {
  const darkMode = useDarkMode();
  const [copy, setCopy] = useState([...props.data]);

  const [sort, setSort] = useState<SortState>({
    property: "",
    reversed: false
  });

  const [filter, setFilter] = useState<FilterState>({
    property: "",
    value: ""
  });

  const performSort = (prop: string, rev: boolean) => {
    if (!prop) {
      return;
    }

    copy.sort((a, b) => {
      if (a[prop] < b[prop]) {
        return rev ? 1 : -1;
      }

      if (a[prop] > b[prop]) {
        return rev ? -1 : 1;
      }

      return 0;
    });
  };

  const performFilter = (prop: string, val: string) => {
    if (!prop || !val) {
      setCopy([...props.data]);
      return;
    }

    setCopy(props.data.filter(e => e[prop].toString().toLowerCase().includes(val.toLowerCase())));
  };

  const sortData = (x: string) => {
    const rev = sort.property === x ? !sort.reversed : false;

    setSort({
      property: x,
      reversed: rev
    });

    performSort(x, rev);
  };

  const filterData = (x: string, val: string) => {
    setFilter({
      property: x,
      value: val
    });

    performFilter(x, val);
  };

  useEffect(() => {
    performFilter(filter.property, filter.value);
    performSort(sort.property, sort.reversed);
  }, [props.data]);

  return (
    <Inner striped bordered hover variant={darkMode ? "dark" : "light"} className={props.className}>
      <thead className={props.headClass}>
        <tr className={props.rowClass}>
          {props.columns.map((col, index) => (
            <th key={index} className={props.headerClass}>
              {col.filterBy ? <BindableControl callback={e => filterData(col.filterBy ?? "", e.target.value)} /> : ""}
              {col.sortBy ? <Button text="^" onClick={e => sortData(col.sortBy ?? "")} /> : ""}
              {typeof (col.name) === "string" ? col.name : col.name()}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={props.bodyClass}>
        {copy.map((row, index) => (
          <tr key={index} className={props.rowClass}>
            {props.columns.map((col, key) => <td key={key} className={props.dataClass}>{typeof(col.property) === "string" ? row[col.property] : col.property(row)}</td>)}
          </tr>
        ))}
      </tbody>
    </Inner>
  );
};

interface Bind {
  callback: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

const BindableControl = (props: Readonly<Bind>) => {
  const [value, setValue] = useState("");

  const change = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
    props.callback(e);
  };

  return <FormControl placeholder="Szukaj..." value={value} onChange={e => change(e)} />;
};

export default Table;
