import React from 'react';
import * as Yup from 'yup';
import Typography from '@material-ui/core/Typography';

const SignupSchema = Yup.object().shape({
  title: Yup.string()
    .min(4, <Typography>Too Short!</Typography>)
    .max(20, <Typography>Too Long!</Typography>)
    .required(<i className="material-icons">remove_circle_outline</i>),
  description: Yup.string()
    .min(20, <Typography>Too Short!</Typography>)
    .required(<i className="material-icons">remove_circle_outline</i>),
  author: Yup.string()
    .matches(/^.[a-zA-Z]+$/, {
      message: <Typography>Only letters!</Typography>,
    })
    .min(4, <Typography>Too Short!</Typography>)
    .max(30, <Typography>Too Long!</Typography>)
    .required(<i className="material-icons">remove_circle_outline</i>),
});

export default SignupSchema;
