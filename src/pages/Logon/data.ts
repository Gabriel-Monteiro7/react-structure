import * as Yup from "yup";

export const schema = [
  Yup.object().shape({
    password_register: Yup.string().min(8,"login.field.min8").required("login.field.required"),
    email_register: Yup.string()
      .required("login.field.required")
      .email("login.field.email"),
    displayName: Yup.string().required("login.field.required"),
  }),
  Yup.object().shape({
    password: Yup.string().min(8,"login.field.min8").required("login.field.required"),
    email: Yup.string()
      .required("login.field.required")
      .email("login.field.email"),
  }),
];

export const fields = [
  [
    {
      placeholder: "Seu Nome",
      label: "Nome",
      name: "displayName",
    },
    {
      placeholder: "Seu email",
      label: "Email",
      name: "email_register",
      type: "email",
    },
    {
      icon: "visibility",
      placeholder: "Sua senha",
      label: "Senha",
      name: "password_register",
    },
  ],
  [
    {
      placeholder: "Seu email",
      label: "Email",
      name: "email",
      type: "email",
    },
    {
      icon: "visibility",
      placeholder: "Sua senha",
      label: "Senha",
      name: "password",
    },
  ],
];

export const initialValues = [
  {
    displayName: "",

    email_register: "",

    password_register: "",
  },
  {
    email: "",
    password: "",
  },
];
