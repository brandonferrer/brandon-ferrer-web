import React, { useState } from "react";
import { Container } from "semantic-ui-react";
import { TopBar, Body } from "./navigation";
import "semantic-ui-css/semantic.min.css";

const Layout = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu((prevState) => !prevState);

  return (
    <>
      <TopBar toggleMenu={toggleMenu} />
      <Body showMenu={showMenu} toggleMenu={toggleMenu}>
        <Container>{children}</Container>
      </Body>
    </>
  );
};

export default Layout;
