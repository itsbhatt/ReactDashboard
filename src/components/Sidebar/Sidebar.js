import React from 'react';
import { Box, Button, Divider, Typography } from '@material-ui/core';

import ToggleButtons from '../Global/Button/ToggleButton';
import ButtonComp from '../Global/Button';

import useStyles from './styles';

const Icon = ({ name, width }) => (
  <img src={`/images/icons/${name}.png`} width={width || 24} alt="" />
);

const Sidebar = () => {
  const classes = useStyles();

  return (
    <Box
      className={classes.sidebar}
      px="18px"
      py="32px"
      maxWidth={260}
      bgcolor="dark.main"
    >
      {/* Open Trades  */}
      <Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Button
            color="secondary"
            disableRipple
            className={classes.button}
            startIcon={<Icon name="trade" />}
            endIcon={<Icon name="right_arrow" width="16" />}
            fullWidth
          >
            Open Trades
          </Button>
        </Box>
        <Box
          mt="22px"
          display="grid"
          gridTemplateColumns="80px auto"
          gridGap="20px"
        >
          <Box>
            <Typography className={classes.sidebarSubHeading} variant="h6">
              Trades in progress
            </Typography>

            <Typography component="p" variant="h5">
              15
            </Typography>
          </Box>
          <Box>
            <Typography className={classes.sidebarSubHeading} variant="h6">
              Closest outcome
            </Typography>
            <Typography component="p" variant="h5">
              25m 40s
            </Typography>
            <Typography variant="caption">ETH 48 hour</Typography>
          </Box>
        </Box>
      </Box>
      <Divider className={classes.divider} />
      {/* Trading History  */}
      <Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Button
            color="secondary"
            disableRipple
            className={classes.button}
            startIcon={<Icon name="prediction" />}
            endIcon={<Icon name="right_arrow" width="16" />}
            fullWidth
          >
            Trading History
          </Button>
        </Box>
        {/*  */}
        <Box pt={2}>
          <ToggleButtons
            data={trandingHistoryBtns}
            variant={['contained', 'text']}
            color="secondary"
            className={classes.toggleButton}
            gap="8px"
          />
        </Box>
        {/*  */}
        <Box
          mt="22px"
          display="grid"
          gridTemplateColumns="80px auto"
          gridGap="20px"
        >
          <Box>
            <Typography className={classes.sidebarSubHeading} variant="h6">
              Total trades
            </Typography>

            <Typography component="p" variant="h6">
              245
            </Typography>
          </Box>
          <Box>
            <Typography className={classes.sidebarSubHeading} variant="h6">
              Profit
            </Typography>
            <Typography component="p" variant="h6">
              +21.5%
            </Typography>
          </Box>
        </Box>
        {/*  */}
        <Box
          mt="22px"
          display="grid"
          gridTemplateColumns="80px auto"
          gridGap="20px"
        >
          <Box>
            <img src="/images/trend_graph.png" />
          </Box>
        </Box>
      </Box>
      <Divider className={classes.divider} />
      {/* Training wallet  */}
      <Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Button
            color="secondary"
            disableRipple
            className={classes.button}
            startIcon={<Icon name="prediction" />}
            endIcon={<Icon name="right_arrow" width="16" />}
            fullWidth
          >
            Training wallet
          </Button>
        </Box>
        {/*  */}
        <Box mt="22px" display="grid" gridGap="20px">
          <Box>
            <Typography className={classes.sidebarSubHeading} variant="h6">
              Trading
            </Typography>

            {/*  */}
            <Box display="flex" justifyContent="space-between">
              <Typography className={classes.h6} component="p" variant="h6">
                $ 34,752.00
              </Typography>
              <Box className={classes.btnContainer}>
                <ButtonComp variant="outlined" color="secondary" fullWidth>
                  Top Up
                </ButtonComp>
              </Box>
            </Box>
          </Box>
          <Box>
            <Typography className={classes.sidebarSubHeading} variant="h6">
              Holding
            </Typography>

            {/*  */}
            <Box display="flex" justifyContent="space-between">
              <Typography className={classes.h6} component="p" variant="h6">
                $ 4,102.00
              </Typography>
              <Box className={classes.btnContainer}>
                <ButtonComp variant="contained" color="secondary" fullWidth>
                  BUY DAI
                </ButtonComp>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const trandingHistoryBtns = [
  { text: 'Last', value: 'Last' },
  { text: 'Day', value: 'Day' },
  { text: 'Week', value: 'Week' },
  { text: 'Month', value: 'Month' },
  { text: 'All', value: 'All' },
];

export default Sidebar;
