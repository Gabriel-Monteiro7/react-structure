import styled from "styled-components";
import { Formik, Form as MuiForm } from "formik";

import { md } from "~/styles/global";
import { Button as MuiButton } from "@material-ui/core";
export const Container = styled(Formik)``;
export const Form = styled(MuiForm)`
  display: flex;
  width: 70%;
  justify-content:space-between;
  align-items:center;
  padding:30px; 
  margin:auto;
  background: ${({ theme }) => theme.palette.background.paper};
  border-radius:15px;
  min-height:300px;
  margin-top:20px;
  flex-wrap:wrap;
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
export const Content = styled.div`
  width:100%;
  text-align:center;
`;