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

export const AppBar = styled(MuiAppBar)<{
  open: Boolean,
}>`
  transition: ease-in-out width 0.3s;
  padding: 0px 10px;
`;
export const Container = styled.div`
  flex-grow: 1;
  text-align: end;
`;

export const Content = styled.div``;

export const Icon = styled(IconButton).attrs({
  edge: "start",
  color: "inherit",
})``;
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

export const Typography = styled(MuiTypography)``;
export const TitleButton = styled(MuiTypography)`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-weight: 600;
  margin: auto 15px;
`;
export const Hidden = styled(MuiHidden)``;
export const ArrowBack = styled(FiChevronDown)`
  font-size: 1.2rem;
`;
export const Menu = styled(MuiMenu)`
  top: 54px !important;
  .MuiPopover-paper {
    border-radius: 15px;
    min-width: 232px !important;
    padding: 5px 0px;
  }
  &.language-menu {
    top: -30px !important;
  }
`;
export const MenuItem = styled(MuiMenuItem)`
  display: flex;
  align-items: center;
  svg {
    margin-right: 10px;
  }
`;
export const LightIcon = styled(FiSun)``;
export const DarkIcon = styled(FiMoon)``;
export const LogoutIcon = styled(FiLogOut)``;
export const LanguageIcon = styled(FiGlobe)``;
