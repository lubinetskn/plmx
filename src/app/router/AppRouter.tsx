/* eslint-disable react/prop-types */
import React, {Suspense, lazy} from 'react';
import {Route, Switch} from 'react-router-dom';
import {History} from 'history';
import {ConnectedRouter} from 'connected-react-router';
import BlockPageLoader from '../../shared/components/BlockPageLoader';
// Page components
import {history} from '../redux/store';
// import isAuthenticated from './utils/authGuard';
// import PrivateRoute from './PrivateRoute';

const PageLogin = lazy(() => import('../../features/Auth/components/PageLogin'));
const PageForgotPassword = lazy(() => import('../../features/Auth/components/PageForgotPassword'));
const PageNewPassword = lazy(() => import('../../features/Auth/components/PageNewPassword'));
const ModulePLMX = lazy(() => import('../../features/PLMX/Route'));
interface IRouter {
  history: History;
}

const AppRouter: React.FC<IRouter> = () => {
  // const user = useSelector((state: ILoadedState) => state.user);

  return (
    <ConnectedRouter history={history}>
      <Suspense fallback={<BlockPageLoader />}>
        <Switch>
          <Route exact path="/" component={PageLogin} />
          <Route path="/forgotpassword" component={PageForgotPassword} />
          <Route path="/newpassword" component={PageNewPassword} />
          <Route path="/plmx" history={history} component={ModulePLMX} />
          <Route component={() => <>Page not found</>} />
        </Switch>
      </Suspense>
    </ConnectedRouter>
  );
};

export default AppRouter;
