import styled from "styled-components";
import {
  Typography as MuiTypography,
  Grid as MuiGrid,
  Card as MuiCard,
} from "@material-ui/core";

export const Container = styled.div``;
export const Typography = styled(MuiTypography)``;
export const ContainerCards = styled(MuiGrid).attrs({
  container: true,
  justify: "space-between",
  wrap: "wrap",
  alignItems: "center",
})`
  margin: 20px 0px;
`;

export const ContainerCard = styled(MuiGrid).attrs({
  container: true,
  xs: 12,
  lg: 3,
  md: 6,
  sm: 6,
  item: true,
})`
  min-height: 25rem;
`;
export const Image = styled.div`
  background-color: ${({ theme }) => theme.palette.grey["A400"] + 90};
  height: 50%;
  width: 100%;
`;
export const Card = styled(MuiCard).attrs({})`
  background: ${({ theme }) => theme.palette.background.paper};
  width: 100%;
  margin: 10px;
  border-radius: 6px;
`;

export const Title = styled(MuiTypography).attrs({ variant: "h4" })`
  font-weight: 600;
`;
