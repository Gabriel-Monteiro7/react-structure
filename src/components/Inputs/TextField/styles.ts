import styled, { css } from "styled-components";
import { FaEye, FaEyeSlash } from "react-icons/all";
import {
  InputLabel as MuiInputLabel,
  InputAdornment as MuiInputAdornment,
  FormControl as MuiFormControl,
  Input as MuiInput,
  FormHelperText as MuiFormHelperText,
} from "@material-ui/core";
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
  margin:5px 0px;
  min-height:70px;
`;

export const Input = styled(MuiInput) <{
  type: String
}>``;

export const InputAdornment = styled(MuiInputAdornment) <{
  password: String
}>`
  cursor: ${({ password }: any) => password};
`;

export const FormHelperText = styled(MuiFormHelperText)`
`;

export const InputLabel = styled(MuiInputLabel)`
font-weight:500;
`;

export const IconeEye = styled(FaEye)`
  ${icon}
`;
export const IconeEyeSlash = styled(FaEyeSlash)`
  ${icon}
`;
