import React from 'react';
import { Box, Typography } from '@material-ui/core';

import useStyles from './styles';

const CryptoCard = ({ data }) => {
  const classes = useStyles();

  return (
    <Box
      className={`${classes.cardContainer} ${
        data.disabled ? classes.disabled : undefined
      }`}
    >
      {/* left */}
      <Box gridTemplateColumns="auto auto" py="8px" alignItems="center">
        {/* icon here */}
        <Box>
          <Box display="grid" gridGap="8px" gridTemplateColumns="24px auto">
            <img src="/images/icons/star_green.png" alt="" width="24px" />
            <Box>
              <Typography component="p" variant="h4">
                {data.hrs}
              </Typography>
              <Typography
                className={classes.sidebarSubHeading}
                variant="subtitle1"
              >
                Crypto
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* text */}
        <Box className={classes.cardCenter}>
          <Box
            display="grid"
            gridGap="12px"
            gridTemplateColumns="24px auto"
            justifyContent="start"
          >
            <img src="/images/icons/vpf.png" alt="" width="24px" />
            <Typography component="p" variant="body2">
              {data.prediction}
            </Typography>
          </Box>
          <Typography className={classes.sidebarSubHeading} variant="subtitle1">
            Outcome in 6h 41m
          </Typography>
        </Box>
      </Box>
      {/* center graphs*/}
      <Box
        display="grid"
        gridGap="32px"
        gridTemplateColumns="auto auto"
        alignItems="center"
      >
        {/* horizontal graph */}
        <Box maxWidth="240px">
          <img src={`/images/${data.graphs.horizontal}`} width="100%" />
        </Box>
        {/* vertical graph */}
        <Box maxWidth="90px">
          <img src={`/images/${data.graphs.vertical}`} width="100%" />
        </Box>
      </Box>
      {/* right */}
      <Box textAlign="right" py="8px" alignItems="center" alignContent="center">
        <Typography component="p" variant="h4">
          {data.fund}
        </Typography>
        <Typography className={classes.sidebarSubHeading} variant="subtitle1">
          Total commitment funds
        </Typography>
      </Box>

      {data.commits && <Box className={classes.commits}>{data.commits}</Box>}
    </Box>
  );
};

export default CryptoCard;
