import { forwardRef, ForwardedRef } from "react";
import classNames from "classnames";
import { FooterProps } from ".";
import "./Footer.module.css";

import styled from "styled-components";

const Container = styled.div`
  border: 1px solid ${(props) => `${props.theme.colors.border}`};
`;
const Link = styled.span`
  color: ${(props) => `${props.theme.colors.textLink}`};
`;

export const Footer = forwardRef(
  ({ className }: FooterProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <footer ref={ref} className={classNames(className, "w-100%")}>
        <Container className="divider"></Container>
        <div
          style={{
            padding: "4px 8px",
          }}
        >
          <div className={classNames("w-full")}>
            Designed And developer by{" "}
            <Link>
              <a href="https://lakshmanaraok.com" target="_blank">
                Lakshman
              </a>
            </Link>{" "}
            All &copy; rights reserved to Struct Technologies
          </div>
          <div className={classNames("developer", "text-right")}>
            For Support or queries Contact{" "}
            <Link>
              <a href="https://structtechnologies.com" target="_blank">
                Struct Technologies
              </a>
            </Link>
          </div>
        </div>
      </footer>
    );
  },
);
