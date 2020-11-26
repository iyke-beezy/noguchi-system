import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Mappings from './pages/Map/map';
import OrgForm from './components/form';
import OrgLogin from './pages/Login/login';
import Banner from './components/banner';
import Header from './components/header';
import ProfilePage from './pages/Profile/profile';
import SurveyPage from './pages/survey/survey';
import Preview from './pages/survey/preview';
import HomePage from './pages/homePage/homePage';
import Entry from './pages/entry/entry';
import OtherProfile from './pages/otherProfile/otherProfile'
import Forum from './pages/forum/forum';
import OtherForum from './pages/forum/otherForum';
import OrgAccounts from './pages/orgAccounts/orgAccounts';
import OrgAdminPage from './pages/orgAdmin/orgAdmin';
import OrgAccountss from './pages/orgAccounts/orgAccountss';
import Home from './pages/homePage/home';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {/* <Mappings /> */}
            <HomePage/>
          </Route>
          <Route  path="/home">
            <Home/>
          </Route>
          <Route path="/login">
            <OrgLogin />
          </Route>
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route path="/survey">
            <SurveyPage />
          </Route>
          <Route path="/preview">
            <Preview />
          </Route>
          <Route path="/entry">
            <Entry />
          </Route>
          <Route path="/other">
            <OtherProfile/>
          </Route>
          <Route path="/forum">
            <Forum/>
          </Route>
          <Route path="/oforum">
            <OtherForum/>
          </Route>
          <Route path="/OrgAccounts">
            <OrgAccountss/>
          </Route>
          <Route path="/orgadmin">
            <OrgAdminPage/>
          </Route>
        </Switch>
      
    </Router>
    </div>
  );
}

export default App;
