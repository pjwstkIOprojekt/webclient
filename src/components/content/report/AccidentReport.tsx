import { Container, Card } from "react-bootstrap";
import CustomCard from "../../fragments/Card";

const AccidentReport = () => {
  return (
    <Container className="mt-3">
      <CustomCard className="mt-3 mx-3">
        <Card.Body>
          <Card.Title>
            <h1>Zgłoszenie</h1>
            <h3>Skala zagrożenia:</h3>
            <p>4</p>
            <h3>Data</h3>
            <p>16.04.2022</p>
            <h3>Ofiara oddycha?</h3>
            <p>Tak</p>
            <h3>Ofiara jest przytomna?</h3>
            <p>Nie</p>
            <h3>Opis zdarzenia:</h3>
            <p>
              Panie! Jechałem sobie spokojnie do pracy
              kiedy to nagle ni znikąd ni zowąd na drogę wyskakuje
              mi uroczy piesek. Oczywiście nie mogłem go rozjechać,
              a ponieważ nie mogę wychamować na czas próbuję
              go wyminąć, gdy nagle dzieciak wbiega mi tuż
              przed maskę. Co za młodzież, czy w tych czasach
              już nikt się nie rozgląda?
            </p>
            <h3>Grupa krwi:</h3>
            <p>A</p>
          </Card.Title>
        </Card.Body>
      </CustomCard>
    </Container>
  );
};

export default AccidentReport;
