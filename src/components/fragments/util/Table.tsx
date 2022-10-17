import { ReactChild, ReactChildren, useState, useEffect, ChangeEventHandler, ChangeEvent } from "react";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { Table as Inner, Row, Col, Container } from "react-bootstrap";
import Button from "./Button";
import Spinner from "./Spinner";
import FormControl from "../forms/FormControl";

export interface TableColumnParams {
  name: (() => ReactChild | ReactChildren | ReactChild[] | ReactChildren[]) | string,
  property: ((x: Record<string, any>) => ReactChild | ReactChildren | ReactChild[] | ReactChildren[]) | string,
  sortBy?: string,
  filterBy?: string,
  size?: number
}

export interface TableParams {
  columns: TableColumnParams[],
  data: Record<string, any>[],
  className?: string,
  headClass?: string,
  bodyClass?: string,
  rowClass?: string,
  headerClass?: string,
  dataClass?: string,
  isLoading?: boolean
}

interface SortState {
  property: string,
  reversed: boolean
}

const Table = (props: Readonly<TableParams>) => {
  const darkMode = useDarkMode();
  const [copy, setCopy] = useState([...props.data]);
  const [filter, setFilter] = useState<Record<string, string>>({});

  const [sort, setSort] = useState<SortState>({
    property: "",
    reversed: false
  });

  useEffect(() => {
    let tmp = [...props.data];

    for (const prop in filter) {
      if (filter[prop]) {
        tmp = tmp.filter(e => e[prop].toString().toLowerCase().includes(filter[prop].toLowerCase()));
      }
    }

    if (sort.property) {
      tmp.sort((a, b) => {
        if (a[sort.property] < b[sort.property]) {
          return sort.reversed ? 1 : -1;
        }

        if (a[sort.property] > b[sort.property]) {
          return sort.reversed ? -1 : 1;
        }

        return 0;
      });
    }

    setCopy(tmp);
  }, [props.data, filter, sort.property, sort.reversed]);

  const sortData = (x: string) => setSort({
    property: x,
    reversed: sort.property === x ? !sort.reversed : false
  });

  const filterData = (x: string, val: string) => {
    const tmp = { ...filter };
    tmp[x] = val;
    setFilter(tmp);
  };

  return (
    <Inner striped bordered hover variant={darkMode ? "dark" : "light"} className={props.className}>
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
        ) : copy.map((row, index) => (
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

  return <FormControl placeholder="Szukaj..." value={value} onChange={change} />;
};

export default Table;
