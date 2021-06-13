import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';
import OtherProfile from './pages/otherProfile/otherProfile';
import OtherForum from './pages/forum/otherForum';
import Home from './pages/homePage/home';
import ProtectedUserRoutes from './utils/subroutes/endUserProtected';
import UserLoginForm from './pages/Login/userlogin';
import CaseRoutes from './pages/detailsPage/caseRoutes';
import OrganisationRoutes from './utils/subroutes/organisationRoutes';
import AdminRoutes from './utils/subroutes/adminRoutes';

function App() {
  require('react-dom');
  window.React2 = require('react');
  console.log(window.React1 === window.React2);
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* End User Routes */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <UserLoginForm />
          </Route>
          <Route path="/forum">
            <OtherForum />
          </Route>
          <Route path="/cases">
            <CaseRoutes />
          </Route>
          <Route path="/userprofile">
            <ProtectedUserRoutes component={OtherProfile} />
          </Route>

          {/* organisation routes */}
          <Route path="/organisation">
            <OrganisationRoutes />
          </Route>

          {/* admin routes */}
          <Route path="/admin">
            <AdminRoutes />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
