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
} from "./styles";
export default function Footer() {
  const year = new Date();
  const links = [
    {
      label: "Ir para pagina no Linkedin",
      icon: <LinkedinIcon />,
      url: "https://www.linkedin.com/in/gabriel-monteiro-978aa8189/",
    },
    {
      label: "Ir para pagina no facebook",
      icon: <FacebookIcon />,
      url: "https://www.facebook.com/",
    },
    {
      label: "Ir para pagina no GitHub",
      icon: <GithubIcon />,
      url: "https://github.com/Gabriel-Monteiro7",
    },
  ];
  return (
    <Container>
      <>
        <Row className={"follow"}>
          <Typography>follow us:</Typography>
          <Row>
            {links.map((link: any, index) => (
              <IconButton color={"default"} key={index}>
                <Link href={link.url} title={link.label}>
                  {link.icon}
                </Link>
              </IconButton>
            ))}
          </Row>
        </Row>
        <Row>
          <Typography variant={"subtitle1"}>
            © {year.getFullYear()} Todos os direitos reservados.
          </Typography>
        </Row>
      </>
    </Container>
  );
}
