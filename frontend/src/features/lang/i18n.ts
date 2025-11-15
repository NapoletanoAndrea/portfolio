import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { WORKING_PATH } from "../../constants";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: {
      default: ["en"],
    },
    supportedLngs: ["en", "it"],
    load: "currentOnly",
    debug: false,

    interpolation: {
      escapeValue: false, // React already does escaping
    },
    backend: {
      loadPath: `${WORKING_PATH}locales/{{lng}}/{{ns}}.json`,
    },
  });

export default i18n;
