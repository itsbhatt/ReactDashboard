import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  select: {
    minWidth: '132px',
    fontSize: '12px',
    color: '#fff',
    lineHeight: '16px',
    '& >div': {
      padding: '5px 0 3px 12px',
    },
    '& >fieldset': {
      border: '1px solid rgba(102, 110, 121, 0.5)',
    },
    '& >svg': {
      fill: '#666e79',
    },
    '&:hover > fieldset': {
      border: '1px solid rgba(102, 110, 121, 1)',
    },
  },
}));

export default useStyles;
