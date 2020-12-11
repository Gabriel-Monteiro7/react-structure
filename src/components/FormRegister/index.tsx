import React, { useRef, useState } from "react";
import { Container, Button, Form, Content } from "./styles";
import InputDefault from "~/components/Inputs/InputDefault";
import InputFile from "~/components/Inputs/InputFile";
import { useDispatch, useSelector } from "react-redux";
import { singInRequest } from "~/store/modules/auth/actions";
import { registerRequest } from "~/store/modules/user/actions";
import { useIntl } from "react-intl";

export default function FormLogin({
  schema,
  fields = [],
  children,
  initialValues,
  button,
}: any) {
  const dispatch = useDispatch();
  const intl = useIntl();
  const formikRef = useRef(null);
  const [file, setFile] = useState(null);
  function handleSubmit(values: any) {
    console.log('');
    
    // values = {
    //   ...values,
    //   email: values.email || values.email_register,
    //   password: values.password || values.password_register,
    // };
    // if (children) {
    //   dispatch(singInRequest(values.email, values.password));
    // } else {
    //   dispatch(
    //     registerRequest(values.email, values.password, values.displayName)
    //   );
    // }
    console.log(formikRef);

  }
  console.log(formikRef);
  
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
              <InputDefault
                key={index}
                handleChange={handleChange}
                value={values[input.name]}
                {...input}
              />
            );
          })}
          <InputFile setFile={setFile} />
          <Content>
            <Button
              type="submit"
              disabled={(!isValid || isSubmitting) || !file}
            >
              {intl.formatMessage({ id: button })}
            </Button>
          </Content>
        </Form>
      )}
    </Container>
  );
}
