import { FieldAttributes, useField } from 'formik'
import React from 'react'
import { TextField } from '.';
import { TextFieldProps } from './TextField';

export const TextFieldError: React.FC<TextFieldProps & FieldAttributes<{}>> = ({
  ...props
}) => {
  const [field] = useField<{}>(props);
  return (
    <>
      <TextField
        {...field}
        placeholder={props.placeholder}
        value={props.value}
        label={props.label}
      />
    </>
  );
};