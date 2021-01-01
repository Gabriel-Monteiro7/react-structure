import React, { useRef, useEffect } from "react";
import { Container, Button, Form } from "./styles";
import TextField from "~/components/Inputs/TextField";
import { useDispatch, useSelector } from "react-redux";
import { singInRequest } from "~/store/modules/auth/actions";
import { registerRequest } from "~/store/modules/user/actions";
import { useIntl } from "react-intl";

export default function FormLogin({
  schema,
  fields = [],
  children,
  button,
  setIndexTab,
  initialValues,
}: any) {
  const dispatch = useDispatch();
  const intl = useIntl();
  const formikRef = useRef(null);

  let { loading } = useSelector((state: any) => state.auth);

  function handleSubmit(values: any) {
    values = {
      ...values,
      email: values.email || values.email_register,
      password: values.password || values.password_register,
    };
    if (children) {
      dispatch(singInRequest(values.email, values.password));
    } else {
      dispatch(
        registerRequest(values.email, values.password, values.displayName)
      );
      setIndexTab(1);
    }
  }

  return (
    <Container
      validationSchema={schema}
      onSubmit={handleSubmit}
      initialValues={initialValues}
      innerRef={formikRef}
    >
      {({ values, isValid, handleChange, isSubmitting }) => (
        <Form>
          {fields.map((input: any, index: any) => {
            return (
              <TextField
                key={index}
                handleChange={handleChange}
                value={values[input.name]}
                {...input}
              />
            );
          })}
          {children}
          <Button type="submit" disabled={!isValid || loading}>
            {loading
              ? "Carregando..."
              : intl.formatMessage({
                  id: button,
                })}
          </Button>
        </Form>
      )}
    </Container>
  );
}
