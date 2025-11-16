import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import commonEn from "../../locales/en/common";
import projectsEn from "../../locales/en/projects";
import commonIt from "../../locales/it/common";
import projectsIt from "../../locales/it/projects";

export const defaultNS = ["common"] as const;
export const resources = {
  en: {
    common: commonEn,
    projects: projectsEn,
  },
  it: {
    common: commonIt,
    projects: projectsIt,
  },
} as const;

i18n
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
