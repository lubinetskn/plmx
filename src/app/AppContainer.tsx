/* eslint-disable react/destructuring-assignment */
import React, {ReactElement} from 'react';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import {MuiThemeProvider, StylesProvider} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logger from '../shared/utils/Logger';
import ErrorBoundary from '../shared/components/ErrorBoundary/ErrorBoundary';
import store from './redux/store';
import App from './App';
import theme from '../shared/theme';

interface IAppContainer {
  logger: Logger;
}

const AppContainer: React.FC<IAppContainer> = ({logger}): ReactElement => (
  <Provider store={store}>
    <ErrorBoundary logger={logger}>
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
            <ToastContainer />
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </ErrorBoundary>
  </Provider>
);

export default AppContainer;
