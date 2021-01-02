import React from 'react';

import MultiSelection from './MultiSelection';
import SingleSelection from './SingleSelection';

const ToggleButtons = ({
  multiple,
  data,
  color,
  equal,
  gap,
  variant,
  className,
}) =>
  multiple ? (
    <MultiSelection
      data={data}
      color={color}
      equal={equal}
      gap={gap}
      variant={variant}
      className={className}
    />
  ) : (
    <SingleSelection
      data={data}
      color={color}
      equal={equal}
      gap={gap}
      variant={variant}
      className={className}
    />
  );

export default ToggleButtons;
