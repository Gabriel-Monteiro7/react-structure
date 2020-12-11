import React, { useState } from "react";
import { useField } from "formik";
import { useIntl } from "react-intl";
import { FormControl, Input, FormHelperText, InputLabel } from "./styles";
export default function TextField({
  width = 100,
  onChange,
  FormControlProps,
  label,
  ...props
}: any) {
  const intl = useIntl();
  const [field, meta] = useField(props);

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

      <Input {...field} {...props} onChange={handleChange} type={"text"} disableUnderline />
      {meta.touched && meta.error ? (
        <FormHelperText>
          {intl.formatMessage({ id: meta.error })}
        </FormHelperText>
      ) : null}
    </FormControl>
  );
}
