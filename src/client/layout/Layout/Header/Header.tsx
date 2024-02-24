/* eslint-disable @typescript-eslint/no-unused-vars */
import { forwardRef, ForwardedRef } from "react";
import classNames from "classnames";
import { HeaderProps } from ".";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faEnvelope,
  faUserCircle,
  faGear,
  faBars,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";
import styled from "styled-components";

const Search = styled.input`
  background-color: ${(props) => props.theme.colors.background};
  margin-right: 10px;
`;

export const Header = forwardRef(
  (
    { className, children, ...rest }: HeaderProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    // console.log(rest);
    return (
      <div
        ref={ref}
        className={classNames(
          "w-full",
          "flex",
          "justify-between",
          "w-screen h-12",
        )}
      >
        <div className={classNames("flex", "p-2")}>
          <div className="p-2 flex w-100">
            <img
              src="https://structtechnologies.com/images/logo.png"
              alt="logo"
              style={{ width: "100%" }}
            />
          </div>
          <div className="py-2">
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className="p-2">
            <div className={styles.searchContainer}>
              <Search type="text" placeholder="Search.." name="search" />
              <FontAwesomeIcon
                icon={faSearch}
                onClick={() => alert()}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
        </div>
        <div className={classNames("flex", "p-2")}>
          <div className="p-2">
            <FontAwesomeIcon icon={faBell} />
          </div>
          <div className="p-2">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div className="p-2">
            <FontAwesomeIcon icon={faGear} />
          </div>
          <div className="p-2">
            <FontAwesomeIcon icon={faUserCircle} />
          </div>
        </div>
      </div>
    );
  },
);
