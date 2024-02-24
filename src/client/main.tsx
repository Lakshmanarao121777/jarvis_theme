import React from "react";
import ReactDOM from "react-dom/client";
// import { ThemeProvider } from 'react-ui'
// import { tokens, components } from 'react-ui/themes/light';
import { I18nextProvider } from "react-i18next";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import i18n from "./i18n";

// import { defaultTheme } from './theme/theme' //for local them
// import App from "./App.tsx";
import "./assets/css/fonts/fonts.css";
import "./index.css";
import ErrorBoundaryPage from "./components/ErrorBoundaryPage/ErrorBoundaryPage.tsx";
import { Layout } from "./layout/Layout";
import { theme } from "./themes/theme";
import Home from "./pages/Home.tsx";
import { ThemeProvider } from "styled-components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorBoundaryPage />,
    children: [
      { path: "/", element: <Home />, errorElement: <ErrorBoundaryPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n} defaultNS={"translation"}>
        <RouterProvider router={router} />
      </I18nextProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
