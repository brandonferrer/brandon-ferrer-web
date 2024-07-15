import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/react";
import { Sidebar, Segment, Menu } from "semantic-ui-react";
import lofi from "../../images/lofi.jpg";

const Body = ({ children, showMenu, toggleMenu }) => {
  return (
    <Sidebar.Pushable
      as={Segment}
      css={styles.bgLofi}
      style={{ overflow: "hidden", borderRadius: 0 }}
    >
      <Sidebar
        as={Menu}
        animation='scale down'
        visible={showMenu}
        vertical
        inverted
        direction='right'
        css={styles.sidebar}
      >
        {menuConfig.map(
          (navItem) =>
            !navItem.isDisabled && (
              <Link to={navItem.path} key={navItem.name}>
                <Menu.Item as='span' name={navItem.name} onClick={toggleMenu}>
                  <span css={styles.menuItem}>{navItem.label}</span>
                </Menu.Item>
              </Link>
            )
        )}
      </Sidebar>
      <Sidebar.Pusher css={styles.bgDark}>
        {/* <Segment
          css={styles.bgDark}
          basic
          style={{
            height: "100vh",
            top: "60px",
            marginBottom: "60px",
            overflow: "auto",
          }}
        > */}
        {children}
        {/* </Segment> */}
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

export default Body;

const styles = {
  menuItem: css`
    color: white;
    font-size: 16px;
    font-weight: 700;
    font-family: Montserrat;
    letter-spacing: 1px;
    text-transform: uppercase;
  `,
  sidebar: css`
    top: 20rem !important;
    bottom: 0;
    position: fixed;
  `,
  disabled: css`
    color: #666666;
  `,
  bgDark: css`
    background-color: #111 !important;
    background: none !important;
  `,
  bgLofi: css`
    background-image: url(${lofi}) !important;
    background-size: cover !important;
    border: 1px solid black !important;
  `,
};

const menuConfig = [
  { name: "home", label: "Home", path: "/", isDisabled: false },
  { name: "about", label: "About", path: "/about", isDisabled: true },
  {
    name: "portfolio",
    label: "Portfolio",
    path: "/portfolio",
    isDisabled: true,
  },
  { name: "youtube", label: "YouTube.", path: "/youtube", isDisabled: true },
  { name: "contact", label: "Contact", path: "/contact", isDisabled: true },
];
