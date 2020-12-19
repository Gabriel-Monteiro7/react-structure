import React from "react";
import {
  Container,
  Row,
  Typography,
  Link,
  IconButton,
  GithubIcon,
  FacebookIcon,
  LinkedinIcon,
  Tooltip,
} from "./styles";

import { useIntl } from "react-intl";
export default function Footer() {
  const intl = useIntl();

  const year = new Date();
  const links = [
    {
      label: intl.formatMessage({ id: "footer.text.goToPageOn" }) + "Linkedin",
      icon: <LinkedinIcon />,
      url: "https://www.linkedin.com/in/gabriel-monteiro-978aa8189/",
    },
    {
      label: intl.formatMessage({ id: "footer.text.goToPageOn" }) + "Facebook",
      icon: <FacebookIcon />,
      url: "https://www.facebook.com/",
    },
    {
      label: intl.formatMessage({ id: "footer.text.goToPageOn" }) + "GitHub",
      icon: <GithubIcon />,
      url: "https://github.com/Gabriel-Monteiro7",
    },
  ];
  return (
    <Container>
      <>
        <Row className={"follow"}>
          <Typography>
            {intl.formatMessage({ id: "footer.text.followUs" })}
          </Typography>
          <Row>
            {links.map((link: any, index) => (
              <Tooltip title={link.label}>
                <IconButton color={"default"} key={index}>
                  <Link href={link.url}>{link.icon}</Link>
                </IconButton>
              </Tooltip>
            ))}
          </Row>
        </Row>
        <Row>
          <Typography variant={"subtitle1"}>
            © {year.getFullYear()}{" "}
            {intl.formatMessage({ id: "footer.text.allRightsReserved" })}
          </Typography>
        </Row>
      </>
    </Container>
  );
}
