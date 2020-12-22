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

import EmptyImage from "~/assets/images/empty.png";

import { useIntl } from "react-intl";

import { formatDateDefault } from "~/utils";
import history from "~/service/history";
function Home() {
  const intl = useIntl();
  const cards = [{}, {}, {}, {}];
  const renderCard = () => (
    <ContainerCard>
      <Card>
        <Tooltip aria-label={"21/10/2029"} title={"21/10/2029"}>
          <Date>{formatDateDefault("2029-05-01T10:31:18.837Z")}</Date>
        </Tooltip>
        <Image />
        <ContainerInformation>
          <TitleCard>Padrão</TitleCard>
          <DescriptionCard>
            msdmfkmsdok fmskdmfk smdfkm sokdmfksdmfkomsodkf
          </DescriptionCard>
        </ContainerInformation>
        <ButtonEdit onClick={handleEdit}>
          <IconEdit />
        </ButtonEdit>
      </Card>
    </ContainerCard>
  );

  const handleEdit = () => {
    history.push("register", {
      name: "Cachorro",
      description: "sdfsdfsd",
      image: "teste",
    });
  };

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
