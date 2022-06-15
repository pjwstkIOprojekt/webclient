import { useState, useEffect } from "react";
import { getStaff } from "../../../apiCalls/staffCalls";
import { Container } from "react-bootstrap";
import Spinner from "../../fragments/util/Spinner";
import Button from "../../fragments/util/Button";
import Table from "../../fragments/util/Table";

const StaffList = () => {
  const [data, setData] = useState<any[]>([
    { id: 1, username: "Janek303" },
    { id: 2, username: "Stefan" }
  ]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getStaff().then(res => res.json()).then(dat => {
      console.log(dat);
      setData(dat);
      setIsLoading(false);
    }).catch(err => {
      console.log(err);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <Container className="text-center mt-5">
        <Spinner />
      </Container>
    );
  }
  
  const cols = [
    { name: "#", property: "id", sortBy: "id", filterBy: "id" },
    { name: "Nazwa konta", property: "username", sortBy: "username", filterBy: "username" },
    { name: "Edytuj pracownika", property: () => <Button text="Edytuj" /> }
  ];

  return (
    <Container className="mb-3 justify-content-center text-center">
      <h3>Lista pracowników</h3>
      <Table columns={cols} data={data} />
    </Container>
  )
}

export default StaffList;
