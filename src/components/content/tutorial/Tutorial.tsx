import { useState, useEffect } from "react";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { useParams } from "react-router-dom";
import { useRoles } from "../../../hooks/useAuth";
import { usePopup } from "../../../hooks/usePopup";
import { isAuth } from "../../../helpers/authHelper";
import NotLoggedPopup from "../../fragments/popups/NotLoggedPopup";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { customTheme } from "../../fragments/sharedParams";
import ContentsGenerator from "../../fragments/util/ContentsGenerator";
import ItemLink from "../../fragments/navigation/ItemLink";
import Rating from "../../fragments/util/Rating";
import InnerHtml from "../../fragments/values/InnerHtml";

const Tutorial = () => {
  const [data, setData] = useState("");
  const darkMode = useDarkMode();
  const { tutorialId } = useParams();
  const roles = useRoles();
  const popup = usePopup();

  useEffect(() => {
    setData("");
    const tutorials = ["AtakEpilepsji", "Omdlenie", "Oparzenia", "PorazeniePradem", "RKO", "Udar1"];
    const id = tutorialId ? parseInt(tutorialId) : 0;
    fetch(`/tmp/${tutorials[id % tutorials.length]}.html`).then(res => res.text()).then(setData).catch(console.error);
  }, [tutorialId]);

  const processTitle = (x: string | null) => {
    if (x === null) {
      return null;
    }

    return x.length > 20 ? x.substring(0, 20) + "..." : x;
  };

  const review = () => {
    if (!isAuth(roles)) {
      popup(<NotLoggedPopup />);
    }
  };

  return (
    <Container className="my-5">
      <Row>
        <Col xs={2}>
          <Nav className={`col-md-12 d-none d-md-block lh-lg contents contents-${customTheme(darkMode)}`} onSelect={selectedKey => alert(`selected ${selectedKey}`)}>
            <h1>Spis treści</h1>
            <ContentsGenerator selector="h1, h3, h4" result={(ch, index) => (
              <Nav.Item key={index}>
                <ItemLink to={ch.id}>{processTitle(ch.textContent) ?? "???"}</ItemLink>
              </Nav.Item>
            )} update={data} />
            <br />
            <p>Jak pomocny okazał się ten poradnik? Podziel się swoją opinią.</p>
            <span onClick={review}>
              <Rating initialValue={0} disabled={!isAuth(roles)} />
            </span>
          </Nav>
        </Col>
        <Col xs={10}>
          <InnerHtml value={data} containerClass="tutorial-content" />
        </Col>
      </Row>
    </Container>
  );
};

export default Tutorial;
