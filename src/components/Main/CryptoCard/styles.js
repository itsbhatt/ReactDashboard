import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  cardContainer: {
    borderRadius: '8px',
    background: '#272a2d',
    border: '1px solid #535763',
    padding: '4px 32px 15px 15px',
    display: 'grid',
    position: 'relative',
    gridTemplateColumns: 'auto auto 180px',
    '& > div': {
      display: 'grid',
    },
  },
  cardCenter: {
    display: 'grid',
    paddingLeft: '24px',
    paddingRight: '24px',
    borderLeft: '1px dashed rgba(102, 110, 121, 0.5)',
    minHeight: 62,
    alignItems: 'center',
    alignContent: 'center',
  },
  sidebarSubHeading: {
    fontSize: 9,
    lineHeight: '12px',
    color: '#666e79',
    fontWeight: 500,
    marginTop: 6,
  },
  commits: {
    position: 'absolute',
    top: -1,
    right: 32,
    width: 24,
    height: 20,
    background: '#1c9de8',
    fontSize: 9,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: '50%',
    borderBottomLeftRadius: '50%',
  },
}));

export default useStyles;
