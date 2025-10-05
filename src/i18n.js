import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

if (!i18n.isInitialized) {
  i18n
    .use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: "de",
      supportedLngs: ["en", "de"],
      ns: ["common","header","contact","help"],
      defaultNS: "common",
      debug: false,
      backend: { loadPath: "/locales/{{lng}}/{{ns}}.json" },
      interpolation: { escapeValue: false },
      detection: { order: ["localStorage","navigator","htmlTag","path","subdomain"], caches: ["localStorage"] },
      react: { useSuspense: false },
    });

  i18n.changeLanguage("de"); 
}

export default i18n;
