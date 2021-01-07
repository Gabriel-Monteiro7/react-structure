import React from "react";

import { useIntl } from "react-intl";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconClose,
  Typography,
} from "./styles";

import { useDispatch } from "react-redux";

import { deleteRequest } from "~/store/modules/training/actions";

const DeleteTraining: React.FC = ({
  open,
  onClose,
  element,
  ...props
}: any) => {
  const dispatch = useDispatch();
  const intl = useIntl();
  const handleClose = () => {
    onClose();
  };
  const handleDelete = () => {
    dispatch(deleteRequest(element.id));
    handleClose();
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ square: false }}
      {...props}
      key={"delete-modal"}
    >
      <DialogTitle>
        <Typography variant={"h6"}>
          {intl.formatMessage({ id: "modal.deleteTraining.title" })}
        </Typography>

        <IconClose onClick={handleClose} />
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {intl.formatMessage({ id: "modal.deleteTraining.text1" })}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" variant={"outlined"}>
          {intl.formatMessage({ id: "modal.button.cancel" })}
        </Button>
        <Button onClick={handleDelete} color="primary" variant={"contained"}>
          {intl.formatMessage({ id: "modal.button.delete" })}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteTraining;
