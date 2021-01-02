import React, { useState, useEffect } from 'react';
import { Box } from '@material-ui/core';

import Button from '../index';

import useStyles from './styles';

const MultiSelection = ({ data, color, equal, gap, variant, className }) => {
  const classes = useStyles();
  const [btnVariant, setBtnVariant] = useState(['contained', 'outlined']);

  const [active, setActive] = useState([]);

  useEffect(() => {
    setActive((oldActive) => [...oldActive, data[0].value]);
    if (Array.isArray(variant)) setBtnVariant(variant);
  }, [data, variant]);

  const toggleActive = (val) => {
    if (active.includes(val)) {
      const index = active.indexOf(val);

      const newactive = [...active];

      newactive.splice(index, 1);

      setActive([...newactive]);
    } else {
      setActive([...active, val]);
    }
  };

  return (
    <Box
      className={`${className} ${gap ? undefined : classes.buttonGroup}`}
      display="grid"
      gridTemplateColumns={`repeat(${data.length}, ${equal ? '1fr' : 'auto'})`}
      gridGap={gap || 0}
    >
      {data.map((btn) => (
        <Button
          onClick={() => toggleActive(btn.value)}
          variant={active.includes(btn.value) ? btnVariant[0] : btnVariant[1]}
          key={btn.value}
          color={color}
        >
          {btn.text}
        </Button>
      ))}
    </Box>
  );
};

export default MultiSelection;
