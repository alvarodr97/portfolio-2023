import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import englishI18 from "./i18n/english.json";
import spanishI18 from "./i18n/spanish.json";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  returnObjects: true,
  lng: "en",
  resources: {
    en: {
      translation: englishI18,
    },
    es: {
      translation: spanishI18,
    },
  },
});

export default i18n;
