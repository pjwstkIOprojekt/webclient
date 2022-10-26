import { useState, useEffect } from "react";
import { AmbulanceResponse, getAmbulances } from "../../../api/ambulanceCalls";
import { Container } from "react-bootstrap";
import Table from "../../fragments/util/Table";

const AmbulanceList = () => {
  const [ambulances, setAmbulances] = useState<AmbulanceResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAmbulances().then(res => res.json()).then((data: AmbulanceResponse[]) => {
      if (data) {
        setAmbulances(data);
      }

      setIsLoading(false);
    }).catch(err => {
      console.error(err);
      setIsLoading(false);
    });
  }, []);

  const cols = [
    { name: "Numer rejestracyjny", property: "licensePlate", sortBy: "licensePlate", filterBy: "licensePlate" },
    { name: "Rodzaj karetki", property: "ambulanceClass", sortBy: "ambulanceClass", filterBy: "ambulanceClass" },
    { name: "Typ karetki", property: "ambulanceType", sortBy: "ambulanceType", filterBy: "ambulanceType" },
    { name: "Stan karetki", property: "peopleCapacity", sortBy: "peopleCapacity", filterBy: "peopleCapacity" }
  ];

  return (
    <Container className="mt-3 justify-content-center text-center">
      <h3>Karetki</h3>
      <Table columns={cols} data={ambulances} isLoading={isLoading} />
    </Container>
  );
};

export default AmbulanceList;
