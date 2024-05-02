import { forwardRef, ForwardedRef } from "react";
import classNames from "classnames";
import { ISidebarProps } from ".";
import style from "./Sidebar.module.css";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const Divider = styled.div`
  border: 0.5px solid ${(props) => `${props.theme.colors.border}`};
`;
const NavContainer = styled.div`
  border-right: 1px solid ${(props) => `${props.theme.colors.border}`};
  &:hover {
    // background-color: ${(props) => `${props.theme.colors.shadow}`};
    transition: 0.4s;
  }
`;
export const Sidebar = forwardRef(
  (
    { className, navCollapse = false, setNavCollapse }: ISidebarProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div
        ref={ref}
        className={classNames(
          className,
          navCollapse ? "open" : "close",
          "p-1",
          "flex justify-between",
          "flex-col",
          "w-full",
        )}
      >
        <NavContainer className="h-full">
          <div className={style.navItems}>
            <div className={style.navItem}>Item-1</div>
            <div className={style.navItem}>Item-1</div>
            <div className={style.navItem}>
              <div className={style.navItems}>
                <div className={style.navItem}>Item-1</div>
                <div className={style.navItem}>Item-1</div>
              </div>
            </div>
          </div>
          <div className={style.navSeparator}></div>
        </NavContainer>
        <div className="p-2">
          <Divider className={classNames(style.divider)}></Divider>
          <div
            className="px-2 justify-end text-right"
            onClick={() => setNavCollapse(navCollapse)}
          >
            {navCollapse ? (
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
Sidebar.propTypes = {
  children: PropTypes.element.isRequired,
};
