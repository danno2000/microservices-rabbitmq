import { createTheme } from '@mui/material/styles';
import { __addDisposableResource } from 'tslib';

export default createTheme({
  typography: {
    h1: {
      fontSize: '2em',
    },
    h3: {
      fontSize: '1.2em',
    },
  },
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
  },
});
