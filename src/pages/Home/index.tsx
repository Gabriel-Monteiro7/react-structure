import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { changeTheme, changeLanguage } from "~/store/modules/root/actions";
// import { Typography, Switch } from "@material-ui/core";
import {
  Container,
  Title,
  ContainerCards,
  ContainerCard,
  Card,
  Image,
} from "./styles";
import { useIntl } from "react-intl";
function Home() {
  const intl = useIntl();
  return (
    <Container>
      <Title>{intl.formatMessage({ id: "homepage.title" })}</Title>
      <ContainerCards>
        <ContainerCard>
          <Card>
            <Image />
          </Card>
        </ContainerCard>
        <ContainerCard>
          <Card>
            <Image />
          </Card>
        </ContainerCard>
        <ContainerCard>
          <Card>
            <Image />
          </Card>
        </ContainerCard>
        <ContainerCard>
          <Card>
            <Image />
          </Card>
        </ContainerCard>
      </ContainerCards>
    </Container>
  );
}
export default Home;
