import React, { useState } from "react";
import { useField } from "formik";
import { useIntl } from "react-intl";
import {
  FormControl,
  Input,
  IconeEye,
  IconeEyeSlash,
  InputAdornment,
  FormHelperText,
  InputLabel,
} from "./styles";
export default function TextField({
  icon,
  width,
  onChange,
  FormControlProps,
  label,
  ...props
}: any) {
  const intl = useIntl();
  const [field, meta] = useField(props);
  const [inputVisibility, setInputVisibility] = useState(
    icon === "visibility" ? false : true
  );
  function changePassWord() {
    if (icon === "visibility") {
      setInputVisibility(!inputVisibility);
    }
  }

  const handleChange = (e: any) => {
    field.onChange(e);
    onChange && onChange(e.target.value);
  };

  return (
    <FormControl
      width={width}
      error={!!(meta.touched && meta.error)}
      {...FormControlProps}
    >
      {label && <InputLabel shrink>{label}</InputLabel>}

      <Input
        {...field}
        {...props}
        onChange={handleChange}
        type={inputVisibility ? "text" : "password"}
        endAdornment={
          icon && (
            <InputAdornment
              position="end"
              password={icon === "visibility" ? "pointer" : "default"}
              onClick={() => {
                changePassWord();
              }}
            >
              {inputVisibility ? <IconeEye /> : <IconeEyeSlash />}
            </InputAdornment>
          )
        }
      />
      {meta.touched && meta.error ? (
        <FormHelperText>
          {intl.formatMessage({ id: meta.error })}
        </FormHelperText>
      ) : null}
    </FormControl>
  );
}
