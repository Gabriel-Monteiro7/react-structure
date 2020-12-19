import styled from "styled-components";
import SwipeableViews from "react-swipeable-views";
import {
  FiChevronDown,
} from "react-icons/all";
import {
  Tabs as MuiTabs,
  Tab as MuiTab, Paper,
  Typography,
  Switch as MuiSwitch,
  IconButton as MuiIconButton
} from "@material-ui/core";

import { md, sm } from "~/styles/global";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.palette.background.default};
  min-height: 100vh;
`;
export const ContentTabs = styled(SwipeableViews)`
  padding: 30px 0px 0px;
  height: 100%;

  
`;
export const Tabs = styled(MuiTabs).attrs({
  variant: "fullWidth",
  indicatorColor: "primary",
  textColor: "primary",
})`
  width:80%;
  .MuiTabs-indicator{
    background-color:${({ theme }) => theme.palette.secondary["A400"]} !important;

  }
`;
export const Tab = styled(MuiTab)`
&.Mui-selected{
  color: ${({ theme }) => theme.palette.secondary["A400"]} !important;
}
color: ${({ theme }) => theme.palette.primary.main} !important;

`;
export const Content = styled(Paper)`
  width: 478px;
  height: 440px;
  margin: auto;
  background: ${({ theme }) => theme.palette.background.paper};

  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 20px 20px 0px;
  @media (max-width: ${sm}px) {
    width: 90%;
    padding: 0px 10px;
  }
`;

export const ContainerItems = styled.div.attrs({ className: "items" })`
  scroll-behavior: smooth;
  display: flex;
  overflow: hidden;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  width: 100%;
`;
export const ContainerItem = styled.div`
  flex: none;
  scroll-snap-align: start;
  width: 100%;
  form {
    margin: auto;
  }
`;
export const NewUser = styled(Typography)`
  margin: 10px auto 20px;
  font-size:0.9rem;
  opacity: 0.9;
  cursor: pointer;
  transition:0.3s ease-in-out;
  &:hover {
    opacity: 1;
  }
`;

export const Switch = styled(MuiSwitch)`

`;
export const IconButton = styled(MuiIconButton)`
  padding:4px !important;
  svg{
    font-size:1rem;

  }
`;
export const ArrowBack = styled(FiChevronDown)`
  font-size: 1.2rem;
`;