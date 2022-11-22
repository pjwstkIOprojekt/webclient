import { useTranslation } from "react-i18next";
import { useRoles } from "../../../hooks/useAuth";
import { Container } from "react-bootstrap";
import NavButton from "../../fragments/navigation/NavButton";
import { isAuth } from "../../../helpers/authHelper";
import Carousel from "../../fragments/util/Carousel";

const GuestHome = () => {
  const { t } = useTranslation();
  const roles = useRoles();

  const content = [
    { header: "GARY", text: t("HomePage.CreateAccount"), img: "/img/blood.png" },
    { header: t("HomePage.ReportAccidentAnywhere"), text: t("HomePage.ReportAccidentFromApp"), img: "/img/ambulance.png" },
    { header: t("HomePage.GiveHelp"), text: t("HomePage.WatchTutorials"), img: "/img/health.png" }
  ];

  return (
    <Container className="mt-5 justify-content-center text-center">
      <h1>{t("HomePage.SaveLife")}</h1>
      <h2>{t("HomePage.Welcome")}</h2>
      <h3>{t("HomePage.SeeAccident")}</h3>
      <NavButton to={isAuth(roles) ? "/newreport" : "/login/newreport"}>{t("HomePage.ReportIncident")}</NavButton>
      <Carousel items={content} className="mt-5" imgClass="home-img" />
    </Container>
  );
};

export default GuestHome;
