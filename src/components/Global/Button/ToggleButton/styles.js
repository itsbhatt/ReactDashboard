import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  buttonGroup: {
    '& button': {
      minWidth: 40,
    },
    '& button:not(:last-child)': {
      borderRightColor: 'transparent',
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
    '& button:not(:first-child)': {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      marginLeft: -1,
    },
  },
}));

export default useStyles;
