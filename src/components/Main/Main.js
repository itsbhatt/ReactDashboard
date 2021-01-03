import React from 'react';
import { Box } from '@material-ui/core';

import Head from './Head';
import CryptoCard from './CryptoCard';

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

const data = [
  {
    hrs: 'ETH 48 hours',
    prediction: '2,2x',
    graphs: {
      horizontal: 'horizontal_graph.png',
      vertical: 'vertical_graph.png',
    },
    fund: '$ 34,346.00',
  },
  {
    hrs: 'ETH 48 hours',
    prediction: '2,2x',
    graphs: {
      horizontal: 'horizontal_graph.png',
      vertical: 'vertical_graph.png',
    },
    fund: '$ 329,146.00',
    commits: 2,
  },
  {
    hrs: 'ETH 48 hours',
    prediction: '2,2x',
    graphs: {
      horizontal: 'horizontal_graph.png',
      vertical: 'vertical_graph.png',
    },
    fund: '$ 129,146.00',
  },
  {
    hrs: 'ETH 48 hours',
    prediction: '2,2x',
    graphs: {
      horizontal: 'empty_graph.png',
      vertical: 'vertical_graph2.png',
    },
    fund: '$ 34,346.00',
  },
  {
    hrs: 'ETH 48 hours',
    prediction: '2,2x',
    graphs: {
      horizontal: 'empty_graph.png',
      vertical: 'empty_vertical_graph.png',
    },
    fund: '$ 00.00',
    disabled: true,
  },
];

export default Main;
