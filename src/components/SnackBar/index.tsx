import React, { useEffect, useMemo } from "react";

import { Container, Content, Typography, CircularProgress } from "./styles";

import { useSelector, useDispatch } from "react-redux";

import { useIntl } from "react-intl";

import {
  hidenSnackbar,
  processSnackbarQueue,
  SnackbarRestart,
} from "~/store/modules/root/actions";

const SnackBar: React.FC = () => {
  const { open, current, remainder } = useSelector(
    (state: any) => state.root.snackbar
  );
  const dispatch = useDispatch();
  const intl = useIntl();
  const handleClose = (event: any, reason: any) => {
    if (reason === "clickaway" || current?.loading) {
      return;
    }
    dispatch(hidenSnackbar());
  };
  const handleExited = () => {
    dispatch(processSnackbarQueue());
  };
  useEffect(() => {
    dispatch(SnackbarRestart());
  }, []);
  const renderSnackbar = () => {
    return (
      <Container
        open={open}
        onClose={handleClose}
        onExit={handleExited}
        key={current?.type + current?.message + remainder.length}
      >
        {current?.message && (
          <Content
            severity={current?.type}
            color={current?.type}
            icon={current?.type === "info" ? <CircularProgress /> : null}
          >
            <Typography variant={"body2"}>
              {intl.formatMessage({ id: current?.message })}
            </Typography>
          </Content>
        )}
      </Container>
    );
  };
  return <>{renderSnackbar()}</>;
};
export default SnackBar;
