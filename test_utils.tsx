/* eslint-disable react-refresh/only-export-components */
import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
// import {ThemeProvider} from 'react-ui'
import { I18nextProvider } from "react-i18next";
import i18n from "./src/client/i18n";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    // <ThemeProvider theme="light">
    <I18nextProvider i18n={i18n} defaultNS={"translation"}>
      {children}
    </I18nextProvider>
    // </ThemeProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
