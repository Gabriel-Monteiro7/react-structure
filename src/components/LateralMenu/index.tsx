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
      label: intl.formatMessage({ id: "LateralMenu.route.home" }),
      icon: <IconHome />,
      path: "/home",
    },
    {
      label: intl.formatMessage({ id: "LateralMenu.route.register" }),
      icon: <IconRegister />,
      path: "/register",
    },
  ];

  const renderList = () => {
    return (
      <List>
        <LogoItem className={"logo-item"}>
          <ListItemIcon>
            <img src={Logo} />
          </ListItemIcon>
          <ListItemText>
            <Typography variant={"h4"} color={"primary"}>{"Project"}</Typography>
          </ListItemText>
        </LogoItem>

        {routes.map((route, index) => (
          <ListItem
            selectedItem={pathname === route.path}
            button
            key={index}
            onClick={() => changePage(route)}
          >
            <ListItemIcon>{route.icon}</ListItemIcon>
            <ListItemText>{route.label}</ListItemText>
          </ListItem>
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
        <Icon
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? <IconClose /> : <IconOpen />}
        </Icon>
        <Content>{renderList()}</Content>
      </Drawer>
    </>
  );
}
