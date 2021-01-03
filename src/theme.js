import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  overrides: {
    // Style sheet name
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        color: '#ffffff',
        border: 'none !important',
      },
      outlined: {
        // Some CSS
        color: '#ffffff',
        border: '1px solid #ffffff',
      },
    },
  },
  palette: {
    primary: {
      main: '#556cd6',
      dark: '#1e2122',
    },
    secondary: {
      main: '#9ac802',
    },
    dark: {
      main: '#181b1c',
    },
    grey: {
      main: '#666e79',
    },
    error: {
      main: '#fa4f4f',
    },
    light: {
      default: '#fff',
    },
  },
});

theme.typography.subtitle1 = {
  color: '#666e79',
  fontSize: '12px',
  lineHeight: '16px',
  fontWeight: 500,
};
theme.typography.subtitle2 = {
  color: '#666e79',
  fontSize: '9px',
  lineHeight: '12px',
  fontWeight: 500,
};
theme.typography.h4 = {
  fontSize: '20px',
  lineHeight: '24px',
  fontWeight: 500,
};
theme.typography.h5 = {
  fontSize: '18px',
  lineHeight: '24px',
  fontWeight: 500,
};
theme.typography.h6 = {
  fontSize: '14px',
  lineHeight: '20px',
};

export default theme;
