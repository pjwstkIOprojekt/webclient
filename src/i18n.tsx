import resourcesPL from "./locales/resources.pl.json";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  pl: {
    translation: resourcesPL
  }
};

i18n.use(initReactI18next).init({resources,
  lng: "pl",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
