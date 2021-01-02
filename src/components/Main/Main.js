import React from 'react';
import { Box } from '@material-ui/core';

import Head from './Head';
import CryptoCard from './CryptoCard';

const Main = () => {
  return (
    <Box pt="36px" pb="42px" pl="36px" pr="52px">
      <Head />
      <Box display="grid" mt="28px" gridGap="20px">
        <CryptoCard />
      </Box>
    </Box>
  );
};

export default Main;
