import React from 'react';
import {Redirect, Route, useRouteMatch, Switch} from 'react-router';
import Entry from '../../pages/entry/entry';
import OrgLogin from '../../pages/Login/orglogin';
import OrgAccountss from '../../pages/orgAccounts/orgAccountss';
import OrgAdminPage from '../../pages/orgAdmin/orgAdmin';
import ProfilePage from '../../pages/Profile/profile';

const OrganisationRoutes = () => {
  const {path} = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/login`} component={OrgLogin} />
      <Route path={`${path}/accounts`} component={OrgAccountss} />

      <Route path={`${path}/`}>
        <ProtectedOrgRoutes path={path} />
      </Route>
    </Switch>
  );
};

export default OrganisationRoutes;

const ProtectedOrgRoutes = params => {
  const user = localStorage.getItem('currentUser');

  if (!user) {
    return <Redirect to={`${params.path}/login`} />;
  }

  return (
    <Switch>
      <Route path={`${params.path}/profile`}>
        <ProfilePage />
      </Route>
      <Route path={`${params.path}/entry`}>
        <Entry />
      </Route>
      <Route path={params.path}>
        <OrgAdminPage />
      </Route>
    </Switch>
  );
};
