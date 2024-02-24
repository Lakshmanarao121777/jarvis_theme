/* eslint-disable react-refresh/only-export-components */
import i18n from "./i18n";
import { useTranslation, withTranslation } from "react-i18next";
import "./App.css";

function App() {
  const { t } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {t("title")}
      <button type="button" onClick={() => changeLanguage("de")}>
        de-german
      </button>
      <button type="button" onClick={() => changeLanguage("en")}>
        en-english
      </button>
    </>
  );
}

export default withTranslation()(App);
