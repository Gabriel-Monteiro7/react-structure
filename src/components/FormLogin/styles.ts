import styled from "styled-components";
import { Formik, Form as MuiForm } from "formik";

import { md } from "~/styles/global";
import { Button as MuiButton } from "@material-ui/core";
export const Container = styled(Formik)``;
export const Form = styled(MuiForm)`
  flex-direction: column;
  display: flex;
  width: 80%;
`;
export const Button = styled(MuiButton).attrs({
  variant: "contained",
  color: "primary",
})`
  border-radius: 50px;
  min-width: 200px;
  margin:auto;
  transition: 0.3s ease-in-out;
  padding:10px 0px;
`;
