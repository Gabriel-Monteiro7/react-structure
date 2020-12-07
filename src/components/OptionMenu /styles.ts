import styled, { css } from "styled-components";
// import { md } from "styles/global";
import {
  FiSun,
  FiMoon,
  FiLogOut,
  FiGlobe,
} from "react-icons/all";



import {
  Toolbar as MuiToolbar,
  IconButton,
  Typography as MuiTypography,
  Menu as MuiMenu,
  MenuItem as MuiMenuItem,
} from "@material-ui/core";

const defaultPosition = css`
    top: -10px !important;
    left: 60px !important;
`

const navbarPosition = css`
top: 54px !important;
`

export const Container = styled.div`
  flex-grow: 1;
  text-align: end;
`;

export const Content = styled.div``;

export const Icon = styled(IconButton).attrs({
  edge: "start",
  color: "inherit",
})``;
export const Toolbar = styled(MuiToolbar)`
  padding: 0;
`;

export const Typography = styled(MuiTypography)``;

export const Menu = styled(MuiMenu) <{
  isnavbar: Boolean,
}>`
  .MuiPopover-paper {
    border-radius: 15px;
    min-width: 232px !important;
    padding: 5px 0px;
  }
  &.language-menu {
    top: -30px !important;
  }
  .main-menu{
    ${({ isnavbar }) => isnavbar ? navbarPosition : defaultPosition}
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
