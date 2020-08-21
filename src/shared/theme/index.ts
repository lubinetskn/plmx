import {createMuiTheme} from '@material-ui/core/styles';

export default createMuiTheme({
  breakpoints: {
    values: {xs: 0, sm: 375, md: 1024, lg: 1440, xl: 1920},
  },
  palette: {
    primary: {
      light: '#164e2c',
      main: '#5eb245',
      dark: '#1d8642',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#F99091',
      main: '#EB761E',
      dark: '#BB2629',
    },
    error: {
      light: '#a02724',
      main: '#e53934',
      dark: '#ea605c',
    },
  },
  typography: {
    fontFamily: ['Open Sans', 'sans-serif'].join(','),
    fontSize: 12,
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        borderRadius: '20px',
        minHeight: '40px',
      },
    },
    MuiButton: {
      root: {
        borderRadius: '20px',
      },
      sizeLarge: {
        minHeight: '40px',
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: '32px',
      },
    },
  },
});
