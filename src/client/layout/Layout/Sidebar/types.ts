import React, { Dispatch, SetStateAction, createContext } from "react";

export interface ISidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  navCollapse?: boolean;
  setNavCollapse: Dispatch<SetStateAction<boolean>>;
}

export const MenuContext = createContext<ISidebarProps>({
  navCollapse: false,
  setNavCollapse: () => { },
});
