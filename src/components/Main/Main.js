import React from 'react';
import { Box } from '@material-ui/core';

import Head from './Head';
import CryptoCard from './CryptoCard';

import data from '../../content/crypto_card.json';

const Main = () => {
  return (
    <Box
      pt="36px"
      pb="42px"
      pl="36px"
      pr="52px"
      height="100%"
      overflow="scroll"
    >
      <Head />
      <Box display="grid" mt="28px" gridGap="20px">
        {data.map((cardData, key) => (
          <CryptoCard data={cardData} key={key} />
        ))}
      </Box>
    </Box>
  );
};

export default Main;
