import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

const ContentWrapper = ({
  children,
  blog,
  projects,
  index,
  lifestyle,
  blogPage,
  resume,
  dj,
}) => {
  let contentWrapperStyles;
  if (index) {
    contentWrapperStyles = styles.contentWrapperIndex;
  } else if (blogPage) {
    contentWrapperStyles = styles.contentWrapperBlogPage;
  } else if (dj) {
    contentWrapperStyles = styles.contentWrapperDj;
  } else if (resume) {
    contentWrapperStyles = styles.contentWrapperResume;
  } else {
    contentWrapperStyles =
      blog || projects || lifestyle
        ? styles.contentWrapperBlog
        : styles.contentWrapper;
  }
  return <div css={contentWrapperStyles}>{children}</div>;
};

export default ContentWrapper;

const styles = {
  contentWrapper: css`
    width: 100%;
    height: 60%;
    overflow-y: auto;
    display: flex;
    align-items: center;
    padding: 0;
    -webkit-overflow-scrolling: touch;
  `,
  contentWrapperResume: css`
    background-color: #fff !important;
    width: 100%;
    height: 60%;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    -webkit-overflow-scrolling: touch;
  `,
  contentWrapperIndex: css`
    width: 100%;
    height: 100%;
    overflow-y: hidden;
    display: flex;
    align-items: center;
    padding: 2rem;
  `,
  contentWrapperBlog: css`
    background-color: #fff !important;
    width: 100%;
    height: 60%;
    overflow-y: auto;
    padding: 1.5rem;
    -webkit-overflow-scrolling: touch;
  `,
  contentWrapperBlogPage: css`
    background-color: #fff !important;
    width: 100%;
    height: 55%;
    overflow-y: auto;
    padding: 1rem;
    -webkit-overflow-scrolling: touch;
  `,
  contentWrapperTravel: css`
    background-color: #f44336 !important;
    width: 100%;
    height: 60%;
    overflow-y: auto;
    padding: 0 1.5rem;
    -webkit-overflow-scrolling: touch;
  `,
  contentWrapperDj: css`
    background-color: #c9c9c9 !important;
    width: 100%;
    height: 60%;
    overflow-y: auto;
    padding: 0 1.5rem;
    -webkit-overflow-scrolling: touch;
  `,
};
