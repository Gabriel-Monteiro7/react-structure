import styled from "styled-components";
import {
  Typography as MuiTypography,
  IconButton as MuiIconButton,
  Tooltip as MuiTooltip 
} from "@material-ui/core";
import { FiFacebook, FiLinkedin, FiGithub } from "react-icons/all";
export const Container = styled.div`

  background: ${({ theme }) => theme.palette.background.paper};
  min-height: 180px;
  .follow {
    padding: 20px;
    p {
      padding: 10px;
    }
  }
`;
export const Row = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
`;
export const Typography = styled(MuiTypography)`
  font-weight: 600;
`;

export const Link = styled.a.attrs({ target: "blank" })`
  color: inherit;
  height: inherit;
`;
export const Tooltip = styled(MuiTooltip)`
`;
export const IconButton = styled(MuiIconButton)`
  align-items: center;
  justify-content: center;
  margin: 0px 8px;
  padding: 4px;
  display: flex;
  height: 2.5rem;
  width: 2.5rem;
  span {
    height: 100%;
    /* width: 100%; */
  }
  svg {
    font-size: 1.2rem;
    height: 100%;
  }
`;
export const FacebookIcon = styled(FiFacebook)``;
export const LinkedinIcon = styled(FiLinkedin)``;
export const GithubIcon = styled(FiGithub)``;
