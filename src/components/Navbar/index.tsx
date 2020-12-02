import React, { useState } from "react";
import {
  Container,
  Toolbar,
  Button,
  AppBar,
  Typography,
  ArrowBack,
  Menu,
  MenuItem,
  LightIcon,
  DarkIcon,
  TitleButton,
  LogoutIcon,
  LanguageIcon,
} from "./styles";
import Avatar from "~/assets/images/avatar.png";
// import history from "~/service/history";
import { singOut } from "~/store/modules/auth/actions";
import { changeTheme, changeLanguage } from "~/store/modules/root/actions";
import { useDispatch, useSelector } from "react-redux";
import { useIntl } from "react-intl";
import { languages } from "~/providers/translator/languages";
export default function NavBar({ open, setOpen }: any) {
  const intl = useIntl();

  const dispatch = useDispatch();
  // const { profile } = useSelector((state: any) => state.user);
  const { themeDefault, language } = useSelector((state: any) => state.root);
  // const routes = [{ label: "Home", path: "/home" }];
  const [anchorMain, setAnchorMain] = useState(null);
  const [anchorLanguage, setAnchorLanguage] = useState(null);
  const handleClickMain = (event: any) => {
    setAnchorMain(event.currentTarget);
  };

  const handleClickLanguage = (event: any) => {
    setAnchorMain(null);
    setAnchorLanguage(event.currentTarget);
  };
  const handleChangeTheme = () => {
    dispatch(changeTheme(!themeDefault));
  };
  const handleChangeLanguage = (newLanguage: any) => {
    if (newLanguage !== language) setAnchorLanguage(null);
    dispatch(changeLanguage(newLanguage));
  };
  const handleLogout = () => {
    dispatch(singOut());
  };
  const menuItem = [
    {
      label: themeDefault
        ? "navbar.button.lightTheme"
        : "navbar.button.darkTheme",
      action: handleChangeTheme,
      icon: themeDefault ? <LightIcon /> : <DarkIcon />,
    },
    {
      label: "navbar.button.language",
      action: handleClickLanguage,
      icon: <LanguageIcon />,
    },
    {
      label: "navbar.button.logout",
      action: handleLogout,
      icon: <LogoutIcon />,
    },
  ];
  const LanguageMenu = () => {
    return (
      <Menu
        id="language-menu"
        className={"language-menu"}
        anchorEl={anchorLanguage}
        open={Boolean(anchorLanguage)}
        onClose={() => setAnchorLanguage(null)}
      >
        {Object.entries(languages).map((language, index) => (
          <MenuItem
            onClick={() => handleChangeLanguage(language[0])}
            key={index}
          >
            <Typography variant={"subtitle1"}>
              {intl.formatMessage({
                id: "navbar.button.language.menu." + language[0],
              })}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    );
  };
  return (
    <AppBar position="static" open={open} color={"transparent"} elevation={0}>
      <Toolbar>
        <Container>
          <Button
            color="inherit"
            className={"profile"}
            onClick={handleClickMain}
          >
            <img src={Avatar} />
            <TitleButton variant={"subtitle1"}> Gabriel Monteiro</TitleButton>
            <ArrowBack />
          </Button>
          <Menu
            id="main-menu"
            anchorEl={anchorMain}
            open={Boolean(anchorMain)}
            onClose={() => setAnchorMain(null)}
          >
            {menuItem.map((item,index) => (
              <MenuItem onClick={item.action} key={index}>
                {item.icon}
                <Typography variant={"subtitle1"}>
                  {intl.formatMessage({ id: item.label })}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
          {LanguageMenu()}
        </Container>
      </Toolbar>
    </AppBar>
  );
}
