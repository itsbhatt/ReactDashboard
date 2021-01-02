import React from 'react';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  button: {
    textTransform: 'initial',
    height: '24px',
    padding: '5px 16px',
    fontSize: '12px',
    borderWidth: '1px',
    borderLeftStyle: 'solid',
    borderRightStyle: 'solid',
  },
}));

const ButtonComp = ({ onClick, children, variant, color, fullWidth }) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      onClick={onClick}
      variant={variant}
      color={color}
      fullWidth={fullWidth}
    >
      {children}
    </Button>
  );
};

export default ButtonComp;
