/* eslint no-underscore-dangle: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import Logger from './shared/utils/Logger';
import * as serviceWorker from './serviceWorker';
import AppContainer from './app/AppContainer';

const logger = new Logger({severityLevel: 'error'});
ReactDOM.render(<AppContainer logger={logger} />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
