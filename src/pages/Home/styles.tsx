import styled from "styled-components";
import {
  Typography as MuiTypography,
  Grid as MuiGrid,
  Card as MuiCard,
  Tooltip as MuiTooltip,
  IconButton,
  Button,
} from "@material-ui/core";
import { FiEdit2, FiX } from "react-icons/all";
export const Container = styled.div``;
export const Typography = styled(MuiTypography)``;
export const ContainerCards = styled(MuiGrid).attrs({
  container: true,
  wrap: "wrap",
  alignItems: "center",
})`
  margin: 20px 0px;
`;

export const ContainerCard = styled(MuiGrid).attrs({
  container: true,
  xs: 10,
  lg: 3,
  md: 4,
  sm: 6,
  item: true,
})`
  min-height: 26rem;
`;
export const Image = styled.div<{
  image: any
}>`
  background-color: ${({ theme }) => theme.palette.grey["A400"] + 90};
  background-image: ${({ image }) => image};
  height: 50%;
  width: 100%;
  border-radius: 4px 4px 0px 0px;
  background-position: center;
  background-size: cover;
`;
export const Card = styled(MuiCard).attrs({})`
  background: ${({ theme }) => theme.palette.background.paper};
  width: 100%;
  margin: 15px;
  position: relative;
  overflow: inherit;
`;

export const Tooltip = styled(MuiTooltip).attrs({})``;
export const Date = styled(MuiTypography).attrs({ variant: "h6" })`
  top: 25px;
  background: ${({ theme }) => theme.palette.secondary["A400"]};
  left: -20px;
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 0.65rem;
  position: absolute;
  font-weight: bold;
  color: white;
`;
export const ContainerInformation = styled.div`
  padding: 10px;
`;

export const TitleCard = styled(MuiTypography).attrs({
  variant: "h6",
  color: "primary",
})`
  margin-bottom: 10px;
`;
export const DescriptionCard = styled(MuiTypography).attrs({
  variant: "body1",
  color: "textSecondary",
})``;
export const ButtonEdit = styled(IconButton)`
  box-shadow: ${({ theme }) => theme.shadows[3]};
  height: 40px;
  width: 40px;
  position: absolute;
  right: 10px;
  bottom: 15px;
`;
export const IconEdit = styled(FiEdit2)``;
export const IconDelete = styled(FiX)``;

export const ButtonDelete = styled(IconButton)`
  top: 0;
  box-shadow: ${({ theme }) => theme.shadows[3]};
  position: absolute;
  right: -1px;
  border-radius: 0;
  clip-path: polygon(100% 0, 0 0, 100% 100%);
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.palette.grey[600] + 90};
  transition: 0.4s ease-in-out;
  &:hover {
    opacity: 0.8;
    background: ${({ theme }) => theme.palette.error.main};
  }
  .MuiTouchRipple-root {
    border: 0px;
  }
  .MuiIconButton-label {
    font-size: 1rem;
    top: 4px;
    right: 3px;
    position: absolute;
    width: initial;
    .svg {
      stroke-width: 3px;
    }
  }
`;

export const Title = styled(MuiTypography).attrs({ variant: "h4" })`
  font-weight: 600;
`;

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
  align-items: center;
  justify-content: center;
  img {
    height: 250px;
  }
`;

export const EmptyTitle = styled(MuiTypography).attrs({
  variant: "h6",
  color: "textSecondary",
})`
  margin: 10px 0px;
`;

export const ButtonAdd = styled(Button).attrs({
  variant: "outlined",
  color: "primary",
})`
  border-radius: 20px;
  font-size: 0.75rem;
  height: 42px;
  width: 220px;
  margin-top: 20px;
`;
