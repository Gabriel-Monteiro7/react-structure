import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRequest, deleteRequest } from "~/store/modules/training/actions";
import { showModal } from "~/store/modules/root/actions";

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
  ButtonDelete,
  IconDelete,
} from "./styles";

import EmptyImage from "~/assets/images/empty.png";

import { useIntl } from "react-intl";

import { formatDateDefault, formatText } from "~/utils";
import history from "~/service/history";
function Home({ openSnackbar }: any) {
  const intl = useIntl();
  const dispatch = useDispatch();
  const { trainings } = useSelector((state: any) => state.training);
  const root = useSelector((state: any) => state.root);
  console.log(root);

  useEffect(() => {
    dispatch(getRequest());
  }, []);

  const renderCard = (training: any) => {
    const image = `url(${
      process.env.REACT_APP_API_URL_BASE + training.original_image
    })`;
    return (
      <ContainerCard zeroMinWidth>
        <Card>
          <Tooltip
            aria-label={formatDateDefault(training.created_at)}
            title={formatDateDefault(training.created_at)}
          >
            <Date>{formatDateDefault(training.created_at)}</Date>
          </Tooltip>
          <ButtonDelete
            onClick={() => {
              dispatch(showModal("deleteTraining", training));
            }}
          >
            <IconDelete />
          </ButtonDelete>
          <Image image={image} />
          <ContainerInformation>
            {formatText(training.name, TitleCard,30)}
            {formatText(training.description, DescriptionCard, 70)}
          </ContainerInformation>
          <Tooltip
            aria-label={intl.formatMessage({ id: "homepage.card.edit" })}
            title={intl.formatMessage({ id: "homepage.card.edit" })}
          >
            <ButtonEdit onClick={() => handleEdit(training)}>
              <IconEdit />
            </ButtonEdit>
          </Tooltip>
        </Card>
      </ContainerCard>
    );
  };

  const handleEdit = (training: any) => {
    history.push("register", training);
  };

  return (
    <Container>
      <Title>{intl.formatMessage({ id: "homepage.title" })}</Title>
      {trainings.length === 0 ? (
        <EmptyContainer>
          <img src={EmptyImage} />
          <EmptyTitle>
            {intl.formatMessage({ id: "homepage.emptyPage" })}
          </EmptyTitle>
          <ButtonAdd onClick={() => history.push("register")}>
            {intl.formatMessage({ id: "homepage.button.add.training" })}
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
