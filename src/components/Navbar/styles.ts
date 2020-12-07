import styled from "styled-components";
// import { md } from "styles/global";
import {
  FiChevronDown,
  FiSun,
  FiMoon,
  FiLogOut,
  FiGlobe,
} from "react-icons/all";

import {
  AppBar as MuiAppBar,
  Toolbar as MuiToolbar,
  IconButton,
  Typography as MuiTypography,
  Button as MuiButton,
  // Drawer as MuiDrawer,
  Hidden as MuiHidden,
  Menu as MuiMenu,
  MenuItem as MuiMenuItem,
} from "@material-ui/core";

export const AppBar = styled(MuiAppBar) <{
  open: Boolean,
}>`
  transition: ease-in-out width 0.3s;
  padding: 0px 10px;
`;



export const Button = styled(MuiButton)`
  height: 50px;
  border-radius: 100px;
  display: flex;
  width: 240px;
  font-weight: 600;
  margin-left: auto;
  margin-right: 0px;
  img {
    height: 40px;
    width: 40px;
  }
`;
export const Toolbar = styled(MuiToolbar)`
  padding: 0;
`;

export const TitleButton = styled(MuiTypography)`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-weight: 600;
  margin: auto 15px;
`;
export const ArrowBack = styled(FiChevronDown)`
  font-size: 1.2rem;
  width:10%;

`;
export const ContainerButton = styled.div`
  display:flex;
  align-items:center;
  width:90%;
`;