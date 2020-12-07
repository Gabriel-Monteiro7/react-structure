import React, { Component, useState } from "react";
import {
  Container,
  Typography,
  Menu,
  MenuItem,
  LightIcon,
  DarkIcon,
  LogoutIcon,
  LanguageIcon,
} from "./styles";
// import history from "~/service/history";
import { singOut } from "~/store/modules/auth/actions";
import { changeTheme, changeLanguage } from "~/store/modules/root/actions";
import { useDispatch, useSelector } from "react-redux";
import { useIntl } from "react-intl";
import { languages } from "~/providers/translator/languages";
export default function OptionMenu({ isnavbar = false, children }: any) {
  const intl = useIntl();

  const dispatch = useDispatch();
  const { themeDefault, language } = useSelector((state: any) => state.root);
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
        ? "optionMenu.button.lightTheme"
        : "optionMenu.button.darkTheme",
      action: handleChangeTheme,
      icon: themeDefault ? <LightIcon /> : <DarkIcon />,
    },
    {
      label: "optionMenu.button.language",
      action: handleClickLanguage,
      icon: <LanguageIcon />,
    },
    {
      label: "optionMenu.button.logout",
      action: handleLogout,
      icon: <LogoutIcon />,
      hidden: !isnavbar,
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
        isnavbar={false}
      >
        {Object.entries(languages).map((language, index) => (
          <MenuItem
            onClick={() => handleChangeLanguage(language[0])}
            key={index}
          >
            <Typography variant={"subtitle1"}>
              {intl.formatMessage({
                id: "optionMenu.button.language.menu." + language[0],
              })}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    );
  };
  return (
    <Container>
      {children(handleClickMain)}
      <Menu
        id="main-menu"
        className={"main-menu"}
        anchorEl={anchorMain}
        open={Boolean(anchorMain)}
        onClose={() => setAnchorMain(null)}
        isnavbar={isnavbar}
      >
        {menuItem.map(
          (item, index) =>
            !item.hidden && (
              <MenuItem onClick={item.action} key={index}>
                {item.icon}
                <Typography variant={"subtitle1"}>
                  {intl.formatMessage({ id: item.label })}
                </Typography>
              </MenuItem>
            )
        )}
      </Menu>
      {LanguageMenu()}
    </Container>
  );
}
