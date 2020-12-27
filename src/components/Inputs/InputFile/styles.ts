import styled, { css } from "styled-components";

import {
  FiCheckCircle as MuiCheckCircle,
  FiLink2 as MuiLink,
  FiPaperclip as MuiAttachFile,
  FiX as MuiError
} from 'react-icons/all'
import { Typography,Tooltip as MuiTooltip } from "@material-ui/core";
import { md, lg } from '~/styles/global'

export const Container = styled.div`
  display: inline-flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 15px;
  align-items: center;
  
`;
export const Content = styled.div`
  height: 50px;
  width: 20rem;
  margin: 50px auto!important;
  border-radius: 6px;
  display:flex;
  justify-content:center;
  align-items:center;
  @media (max-width: ${md}px) {
    width: 100% !important;
  }
  
`;
const dragActive = css`
  border-color: #78e5d5;
`;

const dragReject = css`
  border-color: #e57878;
`;

export const DropContainer = styled.div<{
  isDragActive: any, isDragReject: any,
}>`
  outline: none;
  display: inline-block;
  border-radius: 4px;
  cursor: pointer;
  transition: height 0.2s ease;
  ${({ isDragActive }) => isDragActive && dragActive};
  ${({ isDragReject }) => isDragReject && dragReject};
  p {
    margin: 0;
  }
  &:hover {
    opacity: 0.9;
    transition: 0.3s ease-in-out;
  }
`;

const messageColors: any = {
  default: "#999",
  error: "#e57878",
  success: "#78e5d5",
};

export const CheckCircle = styled(MuiCheckCircle)`
  color: ${({ theme }) => theme.palette.success.main};
`;
export const Error = styled(MuiError)`
  color: ${({ theme }) => theme.palette.error.main};
`;
export const Link = styled(MuiLink)`
  color: ${({ theme }) => theme.palette.text.secondary};
  vertical-align: sub;
  margin-right: 8px;
  &:hover {
    opacity: 0.8;
    transition: 0.2 ease-in-out;
  }
`;
export const AttachFile = styled(MuiAttachFile)`
  color: ${({ theme }) => theme.palette.text.secondary};
  margin-right: 10px;
`;

export const UploadMessage = styled(Typography).attrs({ variant: "h6" }) <{
  type: any
}>`
  display: flex;
  color: ${({ type, theme }) =>
    messageColors[type] || theme.palette.text.secondary};
  justify-content: flex-start;
  align-items: center;
  padding: 15px 0;
  flex-wrap: wrap;
`;
export const UploadMessageError = styled(Typography) <{
  type: any
}>`
  color: ${({ type, theme }) =>
    messageColors[type] || theme.palette.text.secondary};
  width: 100%;
  padding: 15px 0;
`;

export const FileInfo = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
`;

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  text-align:initial;

  strong {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
  }
  span {
    font-size: 12px;
    color: #999;
    margin-top: 5px;
    button {
      outline: none;
      border: 0;
      background: transparent;
      color: ${({ theme }) => theme.palette.error.main};
      margin-left: 5px;
      cursor: pointer;
      &:hover {
        opacity: 0.8;
        transition: 0.2 ease-in-out;
      }
    }
  }
`;

export const ContainerRight = styled.div`
display:flex;
align-items:center;
`;

export const Preview = styled.div<{
  src: any
}>`
  width: 36px !important;
  height: 36px;
  border-radius: 5px;
  background-image: url(${({ src }) => src});
  background-color: ${({ theme }) => theme.palette.text.secondary};

  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  margin-right: 10px;
`;
export const Tooltip = styled(MuiTooltip)`

`;
