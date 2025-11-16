import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import common from "../../locales/en/common";
import projects from "../../locales/en/projects";

export const defaultNS = ["common"] as const;
export const resources = {
  en: {
    common,
    projects,
  },
} as const;

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
    defaultNS,
    resources,
  });

export default i18n;
