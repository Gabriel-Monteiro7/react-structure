import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IntlProvider } from "react-intl";
import { languages } from "~/providers/translator/languages";

// import service from "~/service/service";
// import { getLanguagesRequest } from "~/store/modules/root/actions";

const LanguageDefault = ({ children }: any) => {
  // const dispatch = useDispatch();
  const { language } = useSelector((state: any) => state.root);

  return (
    <IntlProvider locale={language} messages={languages[language]}>
      {children}
    </IntlProvider>
  );
};

export const Translator = (Component: any) => {
  return (props: any) => {
    return (
      <LanguageDefault>
        <Component {...props} />
      </LanguageDefault>
    );
  };
};
