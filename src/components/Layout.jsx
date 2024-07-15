import React, { useState } from "react";
import { Container } from "semantic-ui-react";
import { FlexWrapper } from "../shared/wrappers";
import { TopBar, Body } from "./navigation";
import "semantic-ui-css/semantic.min.css";

const Layout = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu((prevState) => !prevState);

  return (
    <>
      <TopBar toggleMenu={toggleMenu} />
      <Body showMenu={showMenu} toggleMenu={toggleMenu}>
        <FlexWrapper>{children}</FlexWrapper>
      </Body>
    </>
  );
};

export default Layout;
