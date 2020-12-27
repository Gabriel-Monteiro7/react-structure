// import { Typography } from "@material-ui/core";
import React from "react";
import {
  Content,
  Icon,
  Drawer,
  IconOpen,
  IconClose,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  LogoItem,
  Typography,
  Tooltip,
  IconHome,
  IconRegister,
} from "./styles";

import Logo from "~/assets/images/astronaut.svg";

import history from "~/service/history";

import { useLocation } from "react-router-dom";
import { useIntl } from "react-intl";
export default function NavBar({ open, setOpen }: any) {
  const { pathname } = useLocation();
  const intl = useIntl();
  const routes = [
    {
      label: intl.formatMessage({ id: "lateralMenu.route.home" }),
      icon: <IconHome />,
      path: "/home",
    },
    {
      label: intl.formatMessage({ id: "lateralMenu.route.register" }),
      icon: <IconRegister />,
      path: "/register",
    },
  ];

  const renderList = () => {
    return (
      <List>
        <Tooltip title={"Project"} aria-label={"Project"}>
          <LogoItem className={"logo-item"}>
            <ListItemIcon>
              <img src={Logo} />
            </ListItemIcon>
            <ListItemText>
              <Typography variant={"h4"} color={"primary"}>
                {"Project"}
              </Typography>
            </ListItemText>
          </LogoItem>
        </Tooltip>
        {routes.map((route, index) => (
          <Tooltip title={route.label} aria-label={route.label}>
            <ListItem
              selectedItem={pathname === route.path}
              button
              key={index}
              onClick={() => changePage(route)}
            >
              <ListItemIcon>{route.icon}</ListItemIcon>
              <ListItemText>{route.label}</ListItemText>
            </ListItem>
          </Tooltip>
        ))}
      </List>
    );
  };

  const changePage = (page: any) => {
    history.push(page.path);
  };

  return (
    <>
      <Drawer
        elevation={1}
        variant={"permanent"}
        anchor={"left"}
        open={open}
        onClose={() => setOpen(false)}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <Tooltip
          title={intl.formatMessage({
            id: `lateralMenu.button.${!open ? "open" : "close"}`,
          })}
          aria-label={intl.formatMessage({
            id: `lateralMenu.button.${!open ? "open" : "close"}`,
          })}
        >
          <Icon
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open ? <IconClose /> : <IconOpen />}
          </Icon>
        </Tooltip>

        <Content>{renderList()}</Content>
      </Drawer>
    </>
  );
}
