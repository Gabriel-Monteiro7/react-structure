import React from "react";

// import { Container } from './styles';
import { FaChevronUp } from "react-icons/fa";
import StyledButton from "./styles";
// eslint-disable-next-line react/prop-types
export default function ButtonTop({ positionTop }) {
  return positionTop > 200 ? (
    <StyledButton
      title={"Para o topo"}
      onClick={() => {
        window.scroll({ top: 0, left: 0, behavior: "smooth" });
      }}
    >
      <FaChevronUp />
    </StyledButton>
  ) : (
    <></>
  );
}
