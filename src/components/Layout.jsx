import React, { useState } from "react";
import { Container } from "semantic-ui-react";
import { TopBar, Body } from "./navigation";
import { motion } from "framer-motion";
import "semantic-ui-css/semantic.min.css";

const Layout = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu((prevState) => !prevState);

  return (
    <>
      <TopBar toggleMenu={toggleMenu} />
      <Body showMenu={showMenu} toggleMenu={toggleMenu}>
        <Container>
          <motion.main
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            transition={{
              type: "spring",
              mass: 0.35,
              stiffness: 75,
              duration: 0.3,
            }}
          >
            {children}
          </motion.main>
        </Container>
      </Body>
    </>
  );
};

export default Layout;
