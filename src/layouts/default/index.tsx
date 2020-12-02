import React, { useEffect, useState } from "react";

import ButtonTop from "~/components/ButtonTop";
import Footer from "~/components/Footer";
import NavBar from "~/components/Navbar";
import LateralMenu from "~/components/LateralMenu";
import { Container, Content } from "./styles";
import { injectIntl } from "react-intl";

const DefaultThemes = ({ children }: any) => {
  const [positionTop, setPositionTop] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.onscroll = () => setPositionTop(window.pageYOffset);
  }, []);
  return (
    <>
      <LateralMenu open={open} setOpen={setOpen} />
      <Container open={open}>
        <NavBar open={open} setOpen={setOpen} />
        <Content> {children}</Content>
        <Footer />
      </Container>
      <ButtonTop positionTop={positionTop} />
    </>
  );
};
export default injectIntl(DefaultThemes);
