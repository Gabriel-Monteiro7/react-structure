import * as Yup from "yup";

export const schema = [
  Yup.object().shape({
    password_register: Yup.string()
      .min(8, "login.field.min8")
      .required("login.field.required"),
    email_register: Yup.string()
      .required("login.field.required")
      .email("login.field.email"),
    displayName: Yup.string()
      .required("login.field.required")
      .strict(true)
      .matches(/^\S*$/, "input.textfield.username"),
    confirmPassword: Yup.string()
      .oneOf(
        [Yup.ref("password_register"), ""],
        "input.textfield.confirmPassword"
      )
      .required("login.field.required"),
  }),
  Yup.object().shape({
    password: Yup.string()
      .min(8, "login.field.min8")
      .required("login.field.required"),
    email: Yup.string()
      .required("login.field.required")
      .email("login.field.email"),
  }),
];

export const fields = [
  [
    {
      placeholder: "Username",
      label: "Username",
      name: "displayName",
    },
    {
      placeholder: "input.textfield.email.placeholder",
      label: "input.textfield.email.label",
      name: "email_register",
      type: "email",
    },
    {
      icon: "visibility",
      placeholder: "input.textfield.password.placeholder",
      label: "input.textfield.password.label",
      name: "password_register",
    },
    {
      icon: "visibility",
      placeholder: "input.textfield.confirmPassword.label",
      label: "input.textfield.confirmPassword.label",
      name: "confirmPassword",
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
    confirmPassword: "",
  },
  {
    email: "",
    password: "",
  },
];
