import * as React from "react";
import { Header } from "semantic-ui-react";
import { css } from "@emotion/react";

const PageTitle = ({ title }) => {
  return (
    <Header css={styles.title} as='h1'>
      {title}.
    </Header>
  );
};

export default PageTitle;

const styles = {
  title: css`
    font-size: 3rem !important;
    font-family: Nunito Sans !important;
    text-align: center;
    -webkit-transform: rotate(-5deg);
    font-weight: 800 !important;
    padding: 2rem !important;
    text-transform: uppercase !important;
    text-shadow: 1px 1px 1px #919191, 1px 2px 1px #919191, 1px 3px 1px #919191,
      1px 4px 1px #919191, 1px 5px 1px #919191, 1px 6px 1px #919191,
      1px 7px 1px #919191, 1px 8px 1px #919191, 1px 9px 1px #919191,
      1px 10px 1px #919191, 1px 18px 6px rgba(16, 16, 16, 0.4),
      1px 22px 10px rgba(16, 16, 16, 0.2), 1px 25px 35px rgba(16, 16, 16, 0.2),
      1px 30px 60px rgba(16, 16, 16, 0.4);
  `,
};
