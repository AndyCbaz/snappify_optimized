import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importa tus archivos de traducción
import EN from "../../languages/en.json";

const resources = {
  en: {
    translation: EN,
  },
//   es: {
//     translation: translationES,
//   },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Idioma por defecto
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
