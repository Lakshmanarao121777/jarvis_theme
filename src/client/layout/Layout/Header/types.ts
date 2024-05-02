import React, { Dispatch, SetStateAction, createContext } from "react";

export interface IHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  navCollapse?: boolean;
  setNavCollapse: Dispatch<SetStateAction<boolean>>;
}

export const MenuContext = createContext<IHeaderProps>({
  navCollapse: false,
  setNavCollapse: () => { },
});
