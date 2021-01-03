import React, { useState } from "react";
import {
  Container,
  ContainerItem,
  NewUser,
  Content,
  ContentTabs,
  Tabs,
  Tab,
  Switch,
  IconButton,
  ArrowBack,
} from "./styles";

import { useDispatch, useSelector } from "react-redux";
import { useIntl } from "react-intl";

import Form from "~/components/FormLogin";
import OptionMenu from "~/components/OptionMenu ";

import { schema, fields, initialValues } from "./data";
export default function Logon() {
  // const { snackbar } = useSelector((state: any) => state.root);
  // console.log(snackbar);

  const options = ["login.button.register", "login.button.login"];
  const [indexTab, setIndexTab] = useState(1);
  const intl = useIntl();
  const dispatch = useDispatch();

  const handleChangeTabs = (event: any, newIndexTab: number) => {
    setIndexTab(newIndexTab);
  };

  return (
    <Container>
      <Content>
        <Tabs value={indexTab} onChange={handleChangeTabs}>
          {options.map((option, index) => (
            <Tab
              key={index}
              label={intl.formatMessage({
                id: option,
              })}
            />
          ))}
        </Tabs>
        <ContentTabs
          index={indexTab}
          onChangeIndex={(index) => handleChangeTabs(null, index)}
        >
          {options.map((option, index) => {
            return (
              <ContainerItem key={index}>
                <Form
                  schema={schema[index]}
                  fields={fields[index]}
                  initialValues={initialValues[index]}
                  button={option}
                  setIndexTab={setIndexTab}
                >
                  {index === 1 && (
                    <NewUser
                      variant={"subtitle1"}
                      color="primary"
                      title={intl.formatMessage({ id: "login.dontRegister" })}
                      onClick={() => {
                        setIndexTab(0);
                      }}
                    >
                      {intl.formatMessage({ id: "login.dontRegister" })}
                    </NewUser>
                  )}
                </Form>
              </ContainerItem>
            );
          })}
        </ContentTabs>
        <>
          <OptionMenu
            children={(action: any) => (
              <IconButton onClick={action}>
                <ArrowBack />
              </IconButton>
            )}
          />
        </>
      </Content>
    </Container>
  );
}
