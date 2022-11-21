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
    { header: "GARY", text: t("MainPage.CreateAccount"), img: "/img/blood.png" },
    { header: t("MainPage.ReportAccidentAnywhere"), text: t("MainPage.ReportAccidentFromApp"), img: "/img/ambulance.png" },
    { header: t("MainPage.GiveHelp"), text: t("MainPage.WatchTutorials"), img: "/img/health.png" }
  ];

  return (
    <Container className="mt-5 justify-content-center text-center">
      <h1>{t("MainPage.SaveLife")}</h1>
      <h2>{t("MainPage.Welcome")}</h2>
      <h3>{t("MainPage.SeeAccident")}</h3>
      <NavButton to={isAuth(roles) ? "/newreport" : "/login/newreport"}>{t("MainPage.CallIncident")}</NavButton>
      <Carousel items={content} className="mt-5" imgClass="home-img" />
    </Container>
  );
};

export default GuestHome;
