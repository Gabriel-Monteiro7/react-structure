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

import { changeTheme } from "~/store/modules/root/actions";
import { useDispatch, useSelector } from "react-redux";
import { useIntl } from "react-intl";

import Form from "~/components/FormLogin";
import OptionMenu from "~/components/OptionMenu ";

import { schema, fields, initialValues } from "./data";
export default function Logon() {
  const options = ["login.button.register", "login.button.login"];
  const [indexTab, setIndexTab] = useState(0);
  const intl = useIntl();
  const dispatch = useDispatch();
  const { themeDefault } = useSelector((state: any) => state.root);

  // const [optionSelected, setOptionSelected] = useState("Cadastrar");
  const handleChangeTabs = (event: any, newIndexTab: number) => {
    setIndexTab(newIndexTab);
  };

  return (
    <Container>
      <Content>
        <Tabs value={indexTab} onChange={handleChangeTabs}>
          {options.map((option) => (
            <Tab
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
                >
                  {index === 1 && (
                    <NewUser
                      variant={"subtitle1"}
                      color="primary"
                      title={"Não possui cadastro?"}
                      onClick={() => {
                        setIndexTab(1);
                      }}
                    >
                      Não possui cadastro?
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
