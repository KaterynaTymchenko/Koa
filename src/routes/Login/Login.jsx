import React from 'react';
import Button from '@material-ui/core/Button';

export default function Login(props) {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => {
        props.loginUser();
      }}
    >
      LOGIN
    </Button>
  );
}
