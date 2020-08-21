/* eslint-disable react/destructuring-assignment */
import Cookies from 'js-cookie';
import React, {ReactElement, useEffect} from 'react';
import {useInjectSaga} from 'redux-injectors';
import {useDispatch} from 'react-redux';
import {setTokenAction} from './redux/stores/user/userSlice';
import userSaga from './redux/stores/user/saga';
import AppRouter from './router/AppRouter';
import {history} from './redux/store';
import widgetSaga from './redux/stores/widget/sagas';
import productsSaga from './redux/stores/products/sagas';
import tasksSaga from './redux/stores/tasks/sagas';

interface IApp {}

const App: React.FC<IApp> = (): ReactElement => {
  useInjectSaga({key: 'widget', saga: widgetSaga});
  useInjectSaga({key: 'user', saga: userSaga});
  useInjectSaga({key: 'products', saga: productsSaga});
  useInjectSaga({key: 'tasks', saga: tasksSaga});
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   const token = Cookies.get('token');
  //   if (!token) {
  //     // TODO: убрать хардкод
  //     dispatch(setTokenAction({email: 'plmx_help@x5.ru', password: 'plmxX5'}));
  //   }
  // }, []);
  return <AppRouter history={history} />;
};

export default App;
