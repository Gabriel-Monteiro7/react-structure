import styled from "styled-components";
import {
  Snackbar,
  Typography as MuiTypography,
  CircularProgress as MuiCircularProgress,
} from "@material-ui/core";

import { Alert } from "@material-ui/lab";
export const Container = styled(Snackbar).attrs({
  anchorOrigin: {
    vertical: "top",
    horizontal: "right",
  },
  autoHideDuration: 2000,
})``;
export const Content = styled(Alert).attrs({ variant: "filled" })`
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
  display: flex;
  background-color: ${({ theme, color }: any) =>
    color === "info" && theme.palette.grey[400]};

  .MuiAlert-icon {
    border-right: 1px solid #ffffff50;
    padding: 0;
    padding-right: 9px;
    margin-right: 9px;
  }
  .MuiAlert-message {
    text-align: initial;
    width: 100%;
  }
  min-width: 280px;
`;
export const Typography = styled(MuiTypography)``;
export const CircularProgress = styled(MuiCircularProgress).attrs({ size: 20 })`
  color: #ffffff;
`;
