import React from 'react';
import { Grid, Box, makeStyles, IconButton, Badge } from '@material-ui/core';
import ToggleButton from '../Global/Button/ToggleButton';

const useStyles = makeStyles((theme) => ({
  header: {
    borderBottom: `2px solid ${theme.palette.secondary.main}`,
    background: '#272a2d',
  },
  badge: {
    marginLeft: 12,
    '& span': { minWidth: 16, height: 16, fontSize: 9, padding: 0 },
  },
}));

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

const buttonData = [
  { text: 'Training Mode', value: 'TrainingMode' },
  { text: 'Live Mode', value: 'LiveMode' },
];

const centerButton = [
  { text: 'Show All', value: 'ShowAll' },
  { text: 'Crypto', value: 'Crypto' },
  { text: 'Сommodities', value: 'Сommodities' },
  { text: 'Stock', value: 'Stock' },
  { text: 'Index', value: 'Index' },
  { text: 'Currency', value: 'Currency' },
];

const sideButton = [
  { name: 'Search', img: 'search.png' },
  { name: 'Graduating', img: 'graduating.png' },
  { name: 'Star', img: 'star.png' },
];

export default Header;
