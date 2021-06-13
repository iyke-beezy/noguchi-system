import React from 'react';
import {Redirect, Route, useRouteMatch, Switch} from 'react-router';
import AdminPage from '../../pages/admin/admin';
import EvaluationSession from '../../pages/admin/evaluationSession';
import OrgLogin from '../../pages/Login/orglogin';

const AdminRoutes = () => {
  const {path} = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/login`} component={OrgLogin} />
      <Route path={`${path}/`}>
        <ProtectedAdminRoutes path={path} />
      </Route>
    </Switch>
  );
};

export default AdminRoutes;

const ProtectedAdminRoutes = params => {
  const user = localStorage.getItem('currentUser');

  if (!user) {
    return <Redirect to={`${params.path}/login`} />;
  }

  return (
    <Switch>
      <Route path={params.path}>
        <AdminPage />
      </Route>
      <Route path={`${params.path}/evaluation`}>
        <EvaluationSession />
      </Route>
    </Switch>
  );
};
