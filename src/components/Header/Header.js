import React from 'react';
import { Grid, Box, IconButton, Badge } from '@material-ui/core';
import ToggleButton from '../Global/Button/ToggleButton';

import useStyles from './styles';

import {
  buttonData,
  centerButton,
  sideButton,
} from '../../content/header.json';

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.header} component="header" px="20px" py={2}>
      <Grid container justify="space-between">
        <Grid item>
          <Box
            display="grid"
            gridGap="20px"
            gridTemplateColumns="auto auto"
            alignItems="center"
            height="100%"
          >
            <img src="/images/icons/logo.png" alt="close cross" width="32px" />
            <ToggleButton data={buttonData} equal />
          </Box>
        </Grid>
        <Grid item>
          <Box display="grid" alignItems="center" height="100%">
            <ToggleButton data={centerButton} gap="8px" multiple />
          </Box>
        </Grid>
        <Grid item>
          <Box
            display="grid"
            alignItems="center"
            height="100%"
            gridAutoFlow="column"
            gridGap="20px"
          >
            {sideButton.map((btn) => (
              <IconButton component="span" key={btn.img}>
                <img
                  src={`/images/icons/${btn.img}`}
                  width="20px"
                  alt={btn.name}
                />
              </IconButton>
            ))}
            <Badge
              color="secondary"
              overlap="circle"
              badgeContent="12"
              className={classes.badge}
            >
              <img src={`/images/icons/user.png`} width="32px" alt="user" />
            </Badge>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
