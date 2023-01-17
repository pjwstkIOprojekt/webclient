import { TutorialResponse, ReviewResponse, addReview, updateReview, getTutorialById, getTutorialReviews, getTutorialsStyles } from "../../../api/tutorialCalls";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { useRoles } from "../../../hooks/useAuth";
import { usePopup } from "../../../hooks/usePopup";
import { useAbort } from "../../../hooks/useAbort";
import { useTranslation } from "react-i18next";
import { isAuth, getEmail, getUserId } from "../../../helpers/authHelper";
import NotLoggedPopup from "../../fragments/popups/NotLoggedPopup";
import { userEmailError } from "../sharedStrings";
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
  tutorial: TutorialResponse,
  style: string,
  review: ReviewResponse | null
}

// Displays tutorial content
const TutorialPage = (props: Readonly<TutorialPageParams>) => {
  const darkMode = useDarkMode();
  const roles = useRoles();
  const popup = usePopup();
  const abort = useAbort();
  const { t } = useTranslation();

  const processTitle = (x: string | null) => {
    if (x === null) {
      return null;
    }

    return x.length > 33 ? x.substring(0, 30) + "..." : x;
  };

  const review = () => {
    if (!isAuth(roles)) {
      popup(<NotLoggedPopup />);
    }
  };

  const onReviewChange = (x: number) => {
    const user = getEmail();

    if (user === undefined) {
      console.error(userEmailError);
      return;
    }

    const review = {
      value: x,
      discription: ""
    };

    // TODO: Insert proper review id in update call
    (props.review === null ? addReview(props.tutorial.tutorialId, user, review, abort) : updateReview(1, review, abort)).then(res => {
      if (!res.ok) {
        console.log(res);
      }
    }).catch(err => {
      if (!abort.signal.aborted) {
        console.error(err);
      }
    });
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
                <Rating initialValue={(props.review?.value ?? 0) / 5} disabled={!isAuth(roles)} onChange={onReviewChange} />
              </Row>
            </span>
          </Nav>
        </Col>
        <Col xs={10}>
          <Row className="text-end">
            <Rating initialValue={props.tutorial.averageRating / 5} disabled />
          </Row>
          <Row className="justify-content-end mx-1">
            {t("Tutorial.Average")} {props.tutorial.averageRating}
          </Row>
          <InnerHtml value={props.tutorial.tutorialHTML ?? ""} containerClass="tutorial" style={props.style} />
        </Col>
      </Row>
    </Container>
  );
};

// Wrapper component for tutorial page
const Tutorial = () => {
  const [tutorial, setTutorial] = useState<TutorialResponse>({
    tutorialId: -1,
    tutorialType: "",
    tutorialHTML: null,
    averageRating: 0,
    name: "",
    thumbnail: ""
  });

  const [review, setReview] = useState<ReviewResponse | null>(null);
  const [style, setStyle] = useState("");
  const { tutorialId } = useParams();
  const userId = getUserId();

  // Loads tutorial content and user review
  useEffect(() => {
    if (tutorialId === undefined) {
      return;
    }

    const abort = new AbortController();
    const tutReq = getTutorialById(parseInt(tutorialId), abort).then(res => res.json());
    const revReq = getTutorialReviews(parseInt(tutorialId), abort).then(res => res.json());

    Promise.all([tutReq, revReq]).then((data: [TutorialResponse, ReviewResponse[]]) => {
      if (data[0].tutorialHTML) {
        setTutorial(data[0]);
      }

      const reviews = data[1].filter(r => r.reviewer.id === userId);

      if (reviews.length > 0) {
        setReview(reviews[0]);
      }
    }).catch(err => {
      if (!abort.signal.aborted) {
        console.error(err);
      }
    });

    return () => abort.abort();
  }, [tutorialId, userId]);

  // Loads tutorial styles
  useEffect(() => {
    const abort = new AbortController();

    getTutorialsStyles(abort).then(res => res.text()).then(data => {
      if (data) {
        setStyle(data);
      }
    }).catch(err => {
      if (!abort.signal.aborted) {
        console.error(err);
      }
    });

    return () => abort.abort();
  }, []);

  return <ViewLoader isLoaded={tutorial.tutorialId > 0 && style.length > 0} element={<TutorialPage tutorial={tutorial} style={style} review={review} />} />;
};

export default Tutorial;
