import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  sidebar: {
    height: '100%',
    overflowY: 'scroll',
  },
  button: {
    '& > span': {
      display: 'grid',
      gridTemplateColumns: '24px auto 1fr',
      gridGap: '12px',
      justifyContent: 'start',
      justifyItems: 'end',
      '& span': {
        margin: 0,
        textAlign: 'left',
      },
    },
  },
  sidebarSubHeading: {
    fontSize: 9,
    lineHeight: '12px',
    color: '#666e79',
    fontWeight: 500,
    marginBottom: 6,
    '& ~ *': {
      fontWeight: 500,
    },
  },
  divider: {
    background: '#272a2d',
    margin: '24px 0',
  },
  toggleButton: {
    paddingRight: 20,
    '& button': {
      minWidth: 0,
      border: 'none',
      padding: '4px 5px',
    },
  },
  h6: {
    fontSize: 18,
    lineHeight: '24px',
  },
  btnContainer: {
    '& > button': { fontSize: 9, padding: '7px 12px' },
  },
}));

export default useStyles;
