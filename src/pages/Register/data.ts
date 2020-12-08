import * as Yup from "yup";

export const schema = Yup.object().shape({
  name: Yup.string().required("login.field.required"),
  description: Yup.string().required("login.field.required")
  ,
})


export const fields = [
  {
    placeholder: "Digite o nome",
    label: "Nome",
    name: "name",
    width: 48
  },
  {
    placeholder: "Digite a descrição",
    label: "Descrição",
    name: "description",
    width: 48,
    multiline: true,
  },
];

export const initialValues = [
  {
    name: "",
    description: ""
  },
];
