import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

const HeaderWrapper = ({ children }) => (
  <div css={styles.headerWrapper}>{children}</div>
);

export default HeaderWrapper;

const styles = {
  headerWrapper: css`
    padding: 0 0 1rem 0;
    width: 100%;
    min-height: 80px;
    }
  `,
};
