import styled from "styled-components";
import { sm } from "~/styles/global";

export default styled.a`
  transition: 0.1s ease-in-out;
  font-size: 45px;
  right: 20px;
  bottom: 20px;
  position: fixed;
  cursor: pointer;
  svg {
    transition: 0.5s ease-in-out opacity;
    color: white;
    border-radius: 50%;
    background: var(--color-primary);
    padding: 15px;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
  @media (max-width: ${sm}px) {
    font-size: 40px;
    svg {
      padding: 13px;
    }
  }
`;
