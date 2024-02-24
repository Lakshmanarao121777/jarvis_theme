import { forwardRef, ForwardedRef } from "react";
import classNames from "classnames";
import { MainProps } from ".";
import { Outlet } from "react-router-dom";
import style from "./Main.module.css";

export const Main = forwardRef(
  (
    { className, children, ...rest }: MainProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    console.log(rest);
    return (
      <div ref={ref} className={classNames(className, "p-4", style.container)}>
        <div className={style.mainArea}>
          <Outlet />
        </div>
        {children}
      </div>
    );
  },
);
