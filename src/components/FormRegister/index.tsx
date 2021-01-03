import React, { useRef, useState, useMemo } from "react";
import { Container, Button, Form, Content } from "./styles";
import InputDefault from "~/components/Inputs/InputDefault";
import InputFile from "~/components/Inputs/InputFile";
import { useDispatch, useSelector } from "react-redux";
import { updateRequest, insertRequest } from "~/store/modules/training/actions";
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
  let { profile } = useSelector((state: any) => state.user);

  const [file, setFile]: any = useState(null);
  function handleSubmit(values: any) {
    if (file !== null && file !== "") {
      const data = new FormData();

      let newData = {
        ...initialValues,
        ...values,
      };

      data.append("name", newData.name);
      data.append("description", newData.description);
      data.append("original_image", file);
      data.append("userId", profile.id);

      if (initialValues.name) {
        dispatch(updateRequest(data, newData.id));
      } else {
        dispatch(insertRequest(data));
      }
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
            <Button type="submit" disabled={!isValid || isSubmitting || !file}>
              {intl.formatMessage({ id: button })}
            </Button>
          </Content>
        </Form>
      )}
    </Container>
  );
}
