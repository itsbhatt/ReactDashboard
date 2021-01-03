import { makeStyles } from '@material-ui/core';

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

export default useStyles;
