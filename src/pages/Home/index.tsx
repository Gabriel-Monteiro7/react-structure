import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRequest } from "~/store/modules/training/actions";

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

import { formatDateDefault, formatText } from "~/utils";
import history from "~/service/history";
function Home({ openSnackbar }: any) {
  const intl = useIntl();
  const dispatch = useDispatch();
  const { trainings } = useSelector((state: any) => state.training);
  
  useEffect(() => {
    dispatch(getRequest());
  }, []);
  const renderCard = (training: any) => (
    <ContainerCard zeroMinWidth>
      <Card>
        <Tooltip
          aria-label={formatDateDefault(training.created_at)}
          title={formatDateDefault(training.created_at)}
        >
          <Date>{formatDateDefault(training.created_at)}</Date>
        </Tooltip>
        <Image />
        <ContainerInformation>
          <TitleCard>{training.name}</TitleCard>
          {formatText(training.description, DescriptionCard, 80)}
        </ContainerInformation>
        <Tooltip
          aria-label={intl.formatMessage({ id: "homepage.card.edit" })}
          title={intl.formatMessage({ id: "homepage.card.edit" })}
        >
          <ButtonEdit onClick={handleEdit}>
            <IconEdit />
          </ButtonEdit>
        </Tooltip>
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
      {trainings.length === 0 ? (
        <EmptyContainer>
          <img src={EmptyImage} />
          <EmptyTitle>Nenhum padrão definido!</EmptyTitle>
          <ButtonAdd onClick={() => history.push("register")}>
            Adicionar novo padrão
          </ButtonAdd>
        </EmptyContainer>
      ) : (
        <ContainerCards zeroMinWidth>
          {trainings.map((training: any) => renderCard(training))}
        </ContainerCards>
      )}
    </Container>
  );
}
export default Home;
