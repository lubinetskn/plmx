import {createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createBrowserHistory} from 'history';
import {createInjectorsEnhancer} from 'redux-injectors';
import {connectRouter, routerMiddleware} from 'connected-react-router';

import userReducer from './stores/user/userSlice';
import responsibleReducer from './stores/responsible/responsibleSlice';
import tasksReducer from './stores/tasks/tasksSlice';
import productsReducer from './stores/products/productsSlice';
import widgetReducer from './stores/widget/widgetSlice';

// redux history
export const history = createBrowserHistory();

// reducers изначально находящиеся в приложении
const rootReducers = {
  router: connectRouter(history),
  user: userReducer,
  responsible: responsibleReducer,
  tasks: tasksReducer,
  products: productsReducer,
  widget: widgetReducer,
};
// type initialState = typeof rootReducers;
// функция для injectReducer
const createReducer = (injectedReducers = {}) => {
  const rootReducer = combineReducers({
    ...injectedReducers,
    ...rootReducers,
    // other non-injected reducers can go here...
  });

  return rootReducer;
};

// saga и runSaga для injectSaga
const sagaMiddleware = createSagaMiddleware();
const runSaga = sagaMiddleware.run;

const middlewares = [routerMiddleware(history), sagaMiddleware];
const store = createStore(
  createReducer(rootReducers),
  composeWithDevTools(
    applyMiddleware(...middlewares),
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    })
  )
);

export default store;
