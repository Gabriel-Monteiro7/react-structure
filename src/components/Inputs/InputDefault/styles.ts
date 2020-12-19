import styled, { css } from "styled-components";
import {
  InputLabel as MuiInputLabel,
  FormControl as MuiFormControl,
  Input as MuiInput,
  FormHelperText as MuiFormHelperText,
} from "@material-ui/core";
import { md } from '~/styles/global'

const icon = css`
  font-size: 20px !important;
  font-weight: 500 !important;
  opacity: 0.8;
  color: ${({ theme }) => theme.palette.text.secondary};
  transition: 0.3s ease-in-out;
  &:hover {
    opacity: 1;
  }
`;

export const FormControl = styled(MuiFormControl) <{
  width: Number
}>`
  margin:5px auto;
  min-height:89px;
  width:${({ width }) => width + '%'};
  @media (max-width: ${md}px) {
    width: 100% !important;
  }
`;

export const Input = styled(MuiInput) <{
  type: String
}>`
background: ${({ theme }) => theme.palette.background.default+99};
border-radius: 5px;
padding: 5px;
margin-top: 25px !important;
min-height: 42px;
`;

export const FormHelperText = styled(MuiFormHelperText)`
`;

export const InputLabel = styled(MuiInputLabel)`
font-weight:500;
`;