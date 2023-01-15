import { ChildrenType, ClassNameParam, customTheme } from "../sharedParams";
import { useState, ChangeEventHandler, ChangeEvent } from "react";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { Table as Inner, Row, Col, Container } from "react-bootstrap";
import Button from "./Button";
import Spinner from "./Spinner";
import { useTranslation } from "react-i18next";
import FormControl from "../forms/FormControl";

// Defines column properties
export interface TableColumnParams<T> {
  name: (() => ChildrenType) | string,
  property: ((x: Readonly<T>) => ChildrenType) | string,
  sortBy?: string,
  filterBy?: string,
  size?: number
}

// Table component params
export interface TableParams<T> extends ClassNameParam {
  columns: TableColumnParams<T>[],
  data: T[],
  headClass?: string,
  bodyClass?: string,
  rowClass?: string,
  headerClass?: string,
  dataClass?: string,
  isLoading?: boolean
}

// Represents a sort state
interface SortState {
  property: string,
  reversed: boolean
}

// Custom table with columns generation, filtering and sorting systems
const Table = <T extends Record<string, any>>(props: Readonly<TableParams<T>>) => {
  const [sort, setSort] = useState<SortState>({
    property: "",
    reversed: false
  });

  const [filter, setFilter] = useState<Record<string, string>>({});
  const darkMode = useDarkMode();

  const sortData = (x: string) => setSort({
    property: x,
    reversed: sort.property === x ? !sort.reversed : false
  });

  const filterData = (key: string, value: string) => {
    const tmp = { ...filter };
    tmp[key] = value;
    setFilter(tmp);
  };

  let displayData = props.data;

  // Data filtration
  for (const prop in filter) {
    if (filter[prop]) {
      displayData = displayData.filter(e => e[prop].toString().toLowerCase().includes(filter[prop].toLowerCase()));
    }
  }

  // Data sorting
  if (sort.property) {
    displayData.sort((a, b) => {
      if (a[sort.property] < b[sort.property]) {
        return sort.reversed ? 1 : -1;
      }

      if (a[sort.property] > b[sort.property]) {
        return sort.reversed ? -1 : 1;
      }

      return 0;
    });
  }

  return (
    <Inner striped bordered hover variant={customTheme(darkMode)} className={props.className}>
      <thead className={props.headClass}>
        <tr className={props.rowClass}>
          {props.columns.map((col, index) => (
            <th key={index} className={props.headerClass} style={col.size && col.size > 0 && col.size < 100 ? {
              width: `${Math.trunc(col.size)}%`
            } : undefined}>
              {col.sortBy || col.filterBy ? (
                <>
                  <Row className="justify-content-center">
                    {col.filterBy ? <Col><BindableControl callback={e => filterData(col.filterBy ?? "", e.target.value)} /></Col> : ""}
                    {col.sortBy ? <Col md="auto"><Button type="button" onClick={e => sortData(col.sortBy ?? "")}>^</Button></Col> : ""}
                  </Row>
                  <Row className="justify-content-center">
                    {typeof(col.name) === "string" ? col.name : col.name()}
                  </Row>
                </>
              ) : (typeof(col.name) === "string" ? col.name : col.name())}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={props.bodyClass}>
        {props.isLoading ? (
          <tr className={props.rowClass}>
            {props.columns.map((col, key) => (
              <td key={key} className={props.dataClass}>
                <Container className="text-center">
                  <Spinner grow />
                </Container>
              </td>
            ))}
          </tr>
        ) : displayData.map((row, index) => (
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

// Table search component
const BindableControl = (props: Readonly<Bind>) => {
  const [value, setValue] = useState("");
  const { t } = useTranslation();

  const change = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
    props.callback(e);
  };

  return <FormControl placeholder={t("Common.Search")} value={value} onChange={change} />;
};

export default Table;
