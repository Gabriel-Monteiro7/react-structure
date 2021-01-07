import styled from "styled-components";
import {
  Button as MuiButton,
  DialogTitle as MuiDialogTitle,
  DialogContentText as MuiDialogContentText,
  DialogContent as MuiDialogContent,
  DialogActions as MuiDialogActions,
  Typography as MuiTypography,
} from "@material-ui/core";
import MuiDialog from "../DefaultModal";
import { FiX } from "react-icons/all";
export const Container = styled.div``;

export const Button = styled(MuiButton).attrs({})`
  border-radius: 50px;
  min-width: 140px;
`;
export const Dialog = styled(MuiDialog)``;
export const DialogTitle = styled(MuiDialogTitle).attrs({
  disableTypography: true,
})`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: 26px 26px 10px;
  svg {
    font-size: 1.4rem;
    cursor: pointer;
    stroke-width: 1px;
    transition: 0.4s ease-in-out;
    &:hover {
      stroke-width: 2px;
      transform: scale(1.1);
    }
  }
`;
export const DialogContentText = styled(MuiDialogContentText)``;
export const DialogContent = styled(MuiDialogContent)`
  padding: 10px 26px;
`;
export const DialogActions = styled(MuiDialogActions)`
  padding: 26px;
  align-items: center;
  justify-content: space-between;
  display: flex;
`;
export const Typography = styled(MuiTypography)``;

export const IconClose = styled(FiX)``;
