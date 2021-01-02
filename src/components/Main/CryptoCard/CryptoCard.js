import React from 'react';
import { Box, Typography } from '@material-ui/core';

const CryptoCard = () => {
  return (
    <Box
      borderRadius="8px"
      bgcolor="#272a2d"
      border="1px solid #535763"
      px="15px"
      py="12px"
    >
      {/* left */}
      <Box>
        {/* icon here */}
        <Box></Box>
      </Box>
      {/* center */}
      <Box>
        {/* text */}
        <Box></Box>
        {/* graphs */}
        <Box>
          {/* horizontal graph */}
          <Box></Box>
          {/* verticle graph */}
          <Box></Box>
        </Box>
      </Box>
      {/* right */}
      <Box textAlign="right">
        <Typography component="p" variant="h5">
          $ 34,346.00
        </Typography>
      </Box>
    </Box>
  );
};

export default CryptoCard;
