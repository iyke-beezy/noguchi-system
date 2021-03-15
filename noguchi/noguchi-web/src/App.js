import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import OrgLogin from './pages/Login/login';
import ProfilePage from './pages/Profile/profile';
import Entry from './pages/entry/entry';
import OtherProfile from './pages/otherProfile/otherProfile'
import OtherForum from './pages/forum/otherForum';
import OrgAdminPage from './pages/orgAdmin/orgAdmin';
import OrgAccountss from './pages/orgAccounts/orgAccountss';
import Home from './pages/homePage/home';
import Details from './pages/detailsPage/details';
import RecordCases from './pages/detailsPage/RecordCases';
import AdminPage from './pages/admin/admin';
function App() {
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {/* <Mappings /> */}
            <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/login">
            <OrgLogin />
          </Route>
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route path="/entry">
            <Entry /> 
          </Route>
          <Route path="/other">
            <OtherProfile/>
          </Route>
          <Route path="/forum">
            <OtherForum/>
          </Route>
          <Route path="/details">
            <Details/>
          </Route>
          <Route path="/cases">
            <RecordCases/>
          </Route>
          <Route path="/OrgAccounts">
            <OrgAccountss/>
          </Route>
          <Route path="/orgadmin">
            <OrgAdminPage/>
          </Route>
          <Route path="/admin">
            <AdminPage/>
          </Route>
        </Switch>
      
    </Router>
    </div>
  );
}

export default App;
