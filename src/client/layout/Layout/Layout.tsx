/* eslint-disable @typescript-eslint/no-unused-vars */
import { forwardRef, ForwardedRef } from "react";
import classNames from "classnames";
import { Sidebar } from "./Sidebar";
import { Main } from "./Main";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { LayoutProps } from ".";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: ${(props) => `${props.theme.colors.background}`};
  color: ${(props) => `${props.theme.colors.textPrimary}`};
  font-family: ${(props) => props.theme.fonts[0]};
  box-sizing: border-box;
  overflow: hidden;
`;
export const Layout = forwardRef(
  (
    { className, children, ...props }: LayoutProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <Container
        ref={ref}
        className={classNames(className, "h-100%", "flex-row")}
      >
        {/* <div className={classNames("flex", "w-48", "h-screen")}>
          <Sidebar />
        </div>
        <div
          className={classNames(
            "w-screen ",
            "h-screen flex justify-between flex-col",
          )}
        >
          <Header />
          <div className="flex justify-between flex-col h-full">
            <Main />
            <Footer />
          </div>
        </div> */}
        {/* <div className="w-screen h-12"> */}
        <Header />
        {/* </div> */}
        <div className={classNames("flex", "w-screen", "h-[calc(100vh-3rem)]")}>
          <div className={classNames("flex", "w-60", "h-full")}>
            <Sidebar />
          </div>
          <div className="flex justify-between flex-col w-full">
            <Main />
            <Footer />
          </div>
        </div>
      </Container>
    );
  },
);
Layout.defaultProps = {
  className: "",
};
