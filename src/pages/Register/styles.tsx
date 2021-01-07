import styled from "styled-components";
import { Typography as MuiTypography } from "@material-ui/core";
export const Container = styled.div``;
export const Typography = styled(MuiTypography)``;
export const Title = styled(MuiTypography).attrs({ variant: "h4" })`
  font-weight: 600;
  margin-bottom: 35px;
`;
