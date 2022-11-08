import resourcesPL from "./locales/resources.pl.json";
import resourcesEN from "./locales/resources.en.json";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  pl: {
    translation: resourcesPL
  },
  en: {
    translation: resourcesEN
  }
};

i18n.use(initReactI18next).init({
  lng: "pl",
  interpolation: {
    escapeValue: false
  },
  resources

});

export default i18n;
