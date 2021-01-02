import React, { useState, useEffect } from 'react';
import { Box } from '@material-ui/core';

import Button from '../index';

import useStyles from './styles';

const SingleSelection = ({ data, color, equal, variant, className, gap }) => {
  const classes = useStyles();

  const [active, setActive] = useState('');
  const [btnVariant, setBtnVariant] = useState(['contained', 'outlined']);

  useEffect(() => {
    setActive(data[0].value);
    if (Array.isArray(variant)) setBtnVariant(variant);
  }, [data, variant]);

  return (
    <Box
      className={`${className} ${
        btnVariant.indexOf('text') < 0 ? classes.buttonGroup : undefined
      }`}
      display="grid"
      gridTemplateColumns={`repeat(${data.length}, ${equal ? '1fr' : 'auto'})`}
      gridGap={gap || 0}
    >
      {data.map((btn) => (
        <Button
          onClick={() => setActive(btn.value)}
          variant={active === btn.value ? btnVariant[0] : btnVariant[1]}
          key={btn.value}
          color={color}
        >
          {btn.text}
        </Button>
      ))}
    </Box>
  );
};

export default SingleSelection;
