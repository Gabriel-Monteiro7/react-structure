import React from "react";

import { Container, Icon, Tooltip } from "./styles";
export default function ButtonTop({ positionTop }: any) {
  return positionTop > 200 ? (
    <Tooltip title={"Para o topo"}>
      <Container
        onClick={() => {
          window.scroll({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <Icon />
      </Container>
    </Tooltip>
  ) : (
    <></>
  );
}
