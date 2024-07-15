import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/react";
import { Sidebar, Segment, Menu } from "semantic-ui-react";

const Body = ({ children, showMenu, toggleMenu }) => {
  return (
    <Sidebar.Pushable as={Segment} style={{ overflow: "hidden" }}>
      <Sidebar
        as={Menu}
        animation='overlay'
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
      <Sidebar.Pusher>
        <Segment
          basic
          style={{
            height: "100vh",
            top: "60px",
            marginBottom: "60px",
            overflow: "auto",
          }}
        >
          {children}
        </Segment>
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
    top: 12rem !important;
    position: fixed;
  `,
  disabled: css`
    color: #666666;
  `,
  bgYellow: css`
    background-color: #ffeb3b !important;
  `,
  bgRed: css`
    background-color: #f44336 !important;
  `,
  bgRedGradient: css`
    background: linear-gradient(120deg, #f44336, #1a1b1d) !important;
  `,
};

const menuConfig = [
  { name: "home", label: "Home.", path: "/", isDisabled: false },
  { name: "youtube", label: "YouTube.", path: "/youtube", isDisabled: false },
  {
    name: "freelance",
    label: "Freelance.",
    path: "/freelance",
    isDisabled: false,
  },
  {
    name: "projects",
    label: "Projects.",
    path: "/projects",
    isDisabled: false,
  },
];
