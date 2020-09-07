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

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {/* <Mappings /> */}
            <HomePage/>
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
        </Switch>
      
    </Router>
    </div>
  );
}

export default App;
