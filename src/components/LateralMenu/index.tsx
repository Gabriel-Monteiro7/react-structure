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
} from "./styles";

const options = [
  {
    label: "Test1",
    icon: <IconClose />,
  },
  {
    label: "Test2",
    icon: <IconOpen />,
  },
];

const renderList = () => {
  return (
    <List >
      {options.map((option, index) => (
        <ListItem selectedItem={index === 0} button key={index}>
          <ListItemIcon>{option.icon}</ListItemIcon>
          <ListItemText>{option.label}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

export default function NavBar({ open, setOpen }: any) {
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
