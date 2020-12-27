import React from "react";
import {
  Toolbar,
  AppBar,
  Button,
  TitleButton,
  ArrowBack,
  ContainerButton,
} from "./styles";
import Avatar from "~/assets/images/avatar.png";

import OptionMenu from "~/components/OptionMenu ";

import { useSelector } from "react-redux";

import { formatText } from "~/utils";

export default function NavBar({ open, setOpen }: any) {
  const { username } = useSelector((state: any) => state.user.profile);
  return (
    <AppBar position="static" open={open} color={"transparent"} elevation={0}>
      <Toolbar>
        <OptionMenu
          isnavbar
          children={(action: any) => (
            <Button color="inherit" className={"profile"} onClick={action}>
              <ContainerButton>
                <img src={Avatar} />
                {formatText(username,TitleButton,12)}
              </ContainerButton>
              <ArrowBack />
            </Button>
          )}
        />
      </Toolbar>
    </AppBar>
  );
}
