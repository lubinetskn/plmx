import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import MainLayout from '../../shared/components/Layouts/MainLayout';

import PageProduct from './components/PageProduct';
import PageTasks from './components/PageTasks';
import PageProjects from './components/PageProjects';
import BlockSupplierNav from './components/BlockSupplierNav';

const Prefix = 'plmx';

const ROUTES = {
  product: `/${Prefix}/product`,
  tasks: `/${Prefix}/tasks`,
  projects: `/${Prefix}/projects`,
};

const SupplierModule = () => {
  return (
    <MainLayout Menu={BlockSupplierNav}>
      <Switch>
        <Route exact path={`/${Prefix}`}>
          <Redirect
            to={{
              pathname: ROUTES.tasks,
            }}
          />
        </Route>
        <Route exact path={ROUTES.product}>
          <PageProduct />
        </Route>
        <Route exact path={ROUTES.tasks}>
          <PageTasks />
        </Route>
        <Route exact path={ROUTES.projects}>
          <PageProjects />
        </Route>
      </Switch>
    </MainLayout>
  );
};

export default SupplierModule;
