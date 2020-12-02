import styled from "styled-components";
// import { md } from "styles/global";
import { FiChevronRight, FiChevronLeft } from "react-icons/all";

import {
  IconButton,
  Drawer as MuiDrawer,
  ListItem as MuiListItem,
  List as MuiList,
  ListItemIcon as MuiListItemIcon,
  ListItemText as MuiListItemText,
} from "@material-ui/core";

export const Container = styled.div``;

export const Drawer = styled(MuiDrawer)`
  .MuiDrawer-paper {
    width: ${({ open }) => (open ? "240px" : "95px")} !important;
    transition: ease-in-out width 0.3s;
    overflow: visible;
    border-color: ${({ theme }) => theme.palette.divider};
  }
`;
export const Content = styled.div`
  position: relative;
`;
export const List = styled(MuiList)`
  padding: 0px;
  overflow-x: hidden;
`;
export const ListItem = styled(MuiListItem)<{
  selectedItem: Boolean,
}>`
  color: ${({ theme, selectedItem }) =>
    selectedItem ? theme.palette.primary.main : theme.palette.text.disabled};
  .MuiTouchRipple-root {
    border-left: 4px solid
      ${({ theme, selectedItem }) =>
        selectedItem ? theme.palette.primary.main : "transparent"};
  }
  svg {
    color: ${({ theme, selectedItem }) =>
      selectedItem ? theme.palette.primary.main : theme.palette.text.disabled};
  }
  padding: 10px 30px;
`;
export const ListItemIcon = styled(MuiListItemIcon)`
  min-width: 70px;
  svg {
    height: 1.8rem;
    width: 1.8rem;
  }
`;
export const ListItemText = styled(MuiListItemText)``;

export const Icon = styled(IconButton)`
  padding: 0px;
  position: absolute;
  right: -12px;
  top: 50px;
  z-index: 2;
  transition: 0.3s ease-in-out;
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
  background: ${({ theme }) => theme.palette.background.paper};
  height: 22px;
  width: 22px;
  svg {
    font-size: 1rem;
  }
  &:hover {
    background: ${({ theme }) => theme.palette.background.paper};
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
      0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  }
`;
export const IconOpen = styled(FiChevronRight)``;
export const IconClose = styled(FiChevronLeft)``;
