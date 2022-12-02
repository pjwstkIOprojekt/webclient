import { TutorialResponse, getTutorialById } from "../../../api/tutorialCalls";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { useRoles } from "../../../hooks/useAuth";
import { usePopup } from "../../../hooks/usePopup";
import { useTranslation } from "react-i18next";
import { isAuth } from "../../../helpers/authHelper";
import NotLoggedPopup from "../../fragments/popups/NotLoggedPopup";
import { Container, Row, Col, Nav, NavDropdown } from "react-bootstrap";
import { customTheme } from "../../fragments/sharedParams";
import ContentsGenerator from "../../fragments/util/ContentsGenerator";
import ItemLink from "../../fragments/navigation/ItemLink";
import Rating from "../../fragments/util/Rating";
import InnerHtml from "../../fragments/values/InnerHtml";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ViewLoader from "../../fragments/util/ViewLoader";

interface TutorialPageParams {
  tutorial: TutorialResponse
}

const TutorialPage = (props: Readonly<TutorialPageParams>) => {
  const darkMode = useDarkMode();
  const roles = useRoles();
  const popup = usePopup();
  const { t } = useTranslation();

  const processTitle = (x: string | null) => {
    if (x === null) {
      return null;
    }

    return x.length > 30 ? x.substring(0, 30) + "..." : x;
  };

  const review = () => {
    if (!isAuth(roles)) {
      popup(<NotLoggedPopup />);
      return;
    }
  };

  return (
    <Container fluid className="my-5">
      <Row>
        <Col xs={2} className={`contents-${customTheme(darkMode)} radius`}>
          <Nav className="col-md-12 d-none d-md-block lh-lg p-1 h-100">
            <span className="contents">
              <h1>{t("Common.Contents")}</h1>
              <ContentsGenerator selector="h1, h3, h4" result={(ch, index) => (
                <Nav.Item key={index}>
                  <ItemLink to={ch.id}>{processTitle(ch.textContent) ?? "???"}</ItemLink>
                </Nav.Item>
              )} update={props.tutorial.tutorialHTML} />
              <br />
              <NavDropdown.Divider />
              <br />
              <p>{t("Tutorial.Opinion")}</p>
              <Row onClick={review} className="text-center">
                <Rating initialValue={0} disabled={!isAuth(roles)} />
              </Row>
            </span>
          </Nav>
        </Col>
        <Col xs={10}>
          <Row className="text-end">
            <Rating initialValue={props.tutorial.avarageRating} disabled />
          </Row>
          <Row className="justify-content-end mx-1">
            {t("Tutorial.Average")} {props.tutorial.avarageRating}
          </Row>
          <InnerHtml value={props.tutorial.tutorialHTML ?? ""} containerClass="tutorial-content" />
        </Col>
      </Row>
    </Container>
  );
};

const Tutorial = () => {
  const [tutorial, setTutorial] = useState<TutorialResponse>({
    tutorialId: -1,
    tutorialType: "",
    tutorialHTML: null,
    avarageRating: 0,
    name: ""
  });

  const { tutorialId } = useParams();

  useEffect(() => {
    if (tutorialId === undefined) {
      return;
    }

    getTutorialById(parseInt(tutorialId)).then(res => res.json()).then((data: TutorialResponse) => {
      if (data.tutorialHTML) {
        setTutorial(data);
      }
    }).catch(console.error);
  }, [tutorialId]);

  return <ViewLoader isLoaded={tutorial.tutorialId > 0} element={<TutorialPage tutorial={tutorial} />} />;
};

export default Tutorial;
