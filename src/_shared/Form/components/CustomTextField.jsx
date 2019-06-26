import React from 'react';
import TextField from '@material-ui/core/TextField';
import { ErrorMessage } from 'formik';

export default function CustomTextField({ field }) {
  return (
    <>
      <TextField
        {...field}
        className="formField"
        label={field.name}
        placeholder="Enter"
        margin="normal"
        variant="filled"
      />
      <ErrorMessage name={field.name} />
    </>
  );
}
