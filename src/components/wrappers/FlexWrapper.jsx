import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

const FlexWrapper = ({ children }) => (
  <div css={styles.flexWrapperStyles}>{children}</div>
);

export default FlexWrapper;

const styles = {
  flexWrapperStyles: css`
    height: 99vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    flex-flow: column;
    background-color: #111 !important;
  `,
};
