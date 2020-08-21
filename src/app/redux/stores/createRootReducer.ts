import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import {History} from 'history';
import userModuleName from './user/constants';
import userReducer from './user/userSlice';
import tasksModuleName from './tasks/constants';
import tasksReducer from './tasks/tasksSlice';
import productsModuleName from './products/constants';
import productsReducer from './products/productsSlice';

import widgetModuleName from './widget/constants';
import widgetReducer from './widget/widgetSlice';

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    [userModuleName]: userReducer,
    [tasksModuleName]: tasksReducer,
    [productsModuleName]: productsReducer,
    [widgetModuleName]: widgetReducer,
  });

export default createRootReducer;
