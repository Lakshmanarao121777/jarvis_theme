import { forwardRef, ForwardedRef } from "react";
import classNames from "classnames";
import { SidebarProps } from ".";
import style from "./Sidebar.module.css";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  border: 0.5px solid ${(props) => `${props.theme.colors.border}`};
`;
const NavContainer = styled.div`
  border-right: 1px solid ${(props) => `${props.theme.colors.border}`};
`;
export const Sidebar = forwardRef(
  (
    { className, open = true }: SidebarProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div
        ref={ref}
        className={classNames(
          className,
          open ? "open" : "close",
          "p-1",
          "flex justify-between flex-col w-full",
        )}
      >
        <NavContainer className="h-full">nav links</NavContainer>
        <div className="p-2">
          <Container className={classNames(style.divider)}></Container>
          <div className="px-2 justify-end text-right">
            {open ? (
              <FontAwesomeIcon icon={faChevronLeft} />
            ) : (
              <FontAwesomeIcon icon={faChevronRight} />
            )}
          </div>
        </div>
      </div>
    );
  },
);
