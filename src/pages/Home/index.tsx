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
  Date,
  Tooltip,
  TitleCard,
  DescriptionCard,
  ContainerInformation,
  ButtonEdit,
  IconEdit,
  EmptyContainer,
  EmptyTitle,
  ButtonAdd,
} from "./styles";
import { useIntl } from "react-intl";
import EmptyImage from "~/assets/images/empty.png";
import history from "~/service/history";
function Home() {
  const intl = useIntl();
  const cards = [{}, {}, {}, {}];
  const renderCard = () => (
    <ContainerCard>
      <Card>
        <Tooltip aria-label={"21/10/2029"} title={"21/10/2029"}>
          <Date>{"21/10/2029"}</Date>
        </Tooltip>
        <Image />
        <ContainerInformation>
          <TitleCard>Cachorros</TitleCard>
          <DescriptionCard>
            msdmfkmsdok fmskdmfk smdfkm sokdmfksdmfkomsodkf
          </DescriptionCard>
        </ContainerInformation>
        <ButtonEdit>
          <IconEdit />
        </ButtonEdit>
      </Card>
    </ContainerCard>
  );
  return (
    <Container>
      <Title>{intl.formatMessage({ id: "homepage.title" })}</Title>
      {cards.length === 0 ? (
        <EmptyContainer>
          <img src={EmptyImage} />
          <EmptyTitle>Nenhum padrão definido!</EmptyTitle>
          <ButtonAdd onClick={() => history.push("register")}>
            Adicionar novo padrão
          </ButtonAdd>
        </EmptyContainer>
      ) : (
        <ContainerCards>{cards.map(() => renderCard())}</ContainerCards>
      )}
    </Container>
  );
}
export default Home;
