import React from "react";

import { Container, Content, Typography, CircularProgress } from "./styles";

import { useSelector, useDispatch } from "react-redux";

import {
  hidenSnackBar,
  processSnackbarQueue,
} from "~/store/modules/root/actions";

const SnackBar: React.FC = () => {
  const { open, current } = useSelector((state: any) => state.root.snackBar);
  const dispatch = useDispatch();
  const handleClose = (event: any, reason: any) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(hidenSnackBar());
  };
  const handleExited = () => {
    dispatch(processSnackbarQueue());
  };
  return (
    <Container open={open} onClose={handleClose} onExit={handleExited}>
      <Content
        severity={current.type}
        color={current.type}
        icon={current.type === "info" ? <CircularProgress /> : null}
      >
        <Typography variant={"body2"}>
          Testsd sd f sdfs d fsdf sdfsdf sd fsdfsdfsdf
        </Typography>
      </Content>
    </Container>
  );
};
export default SnackBar;
