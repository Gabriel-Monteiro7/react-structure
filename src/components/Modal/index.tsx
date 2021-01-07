import React from "react";

import { Container } from "./styles";

import DeleteTraining from "./DeleteTraining";
import DefaultModal from "./DefaultModal";

import { useSelector, useDispatch } from "react-redux";
import { hiddenModal } from "~/store/modules/root/actions";

const Modal: React.FC = () => {
  const dispatch = useDispatch();
  const modals: any = {
    deleteTraining: DeleteTraining,
    default: DefaultModal,
  };

  const { open, type, element }: any = useSelector(
    (state: any) => state.root.modal
  );
  const ModalContainer = modals[type || "default"];

  const handleClose = () => {
    dispatch(hiddenModal());
  };

  return <ModalContainer open={open} onClose={handleClose} element={element} />;
};

export default Modal;
