import styled from "styled-components";
import { sm } from "~/styles/global";
import { IconButton, Tooltip as MuiTooltip } from "@material-ui/core";
import { FaChevronUp } from "react-icons/all";
export const Container = styled(IconButton)`
  transition: 0.5s ease-in-out opacity;
  right: 20px;
  bottom: 20px;
  position: fixed;
  cursor: pointer;
  background: ${({ theme }) => theme.palette.primary.main};
  box-shadow: ${({ theme }) => theme.shadows[3]};
  opacity: 0.8;
  &:hover {
    background: ${({ theme }) => theme.palette.primary.main};
    opacity: 1;
  }
  height: 2.6rem;
  width: 2.6rem;
`;
export const Icon = styled(FaChevronUp)`
  color: white;
  font-size: 0.8rem;
`;
export const Tooltip = styled(MuiTooltip)``;
