import styled from "styled-components";
import { Dialog as MuiDialog } from "@material-ui/core";

export const Container = styled(MuiDialog).attrs({
  fullWidth: true,
})`
  .MuiPaper-rounded {
    border-radius: 24px;
  }
`;
