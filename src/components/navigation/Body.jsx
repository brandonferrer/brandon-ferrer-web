import React from "react";
import { Link } from "gatsby";
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Sidebar, Segment, Menu } from "semantic-ui-react";

const Body = ({ children, showMenu, toggleMenu }) => {
  console.log("BF", showMenu);

  return (
    <Sidebar.Pushable as={Segment} style={{ overflow: "hidden" }}>
      <Sidebar
        as={Menu}
        animation='overlay'
        visible={showMenu}
        vertical
        inverted
        direction='right'
        // onHide={toggleMenu}
        css={styles.sidebar}
      >
        {menuConfig.map(
          (navItem) =>
            !navItem.isDisabled && (
              <Link to={navItem.path}>
                <Menu.Item
                  key={navItem.name}
                  name={navItem.name}
                  onClick={toggleMenu}
                >
                  <span css={styles.menuItem}>{navItem.label}</span>
                </Menu.Item>
              </Link>
            )
        )}
      </Sidebar>
      <Sidebar.Pusher>
        <Segment basic style={{ height: "98vh", top: "60px" }}>
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
  { name: "about", label: "About B.", path: "/about", isDisabled: false },
  { name: "blog", label: "Blog.", path: "/blog", isDisabled: false },
];
