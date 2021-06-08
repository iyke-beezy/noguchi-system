import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import OrgLogin from "./pages/Login/orglogin";
import ProfilePage from "./pages/Profile/profile";
import Entry from "./pages/entry/entry";
import OtherProfile from "./pages/otherProfile/otherProfile";
import OtherForum from "./pages/forum/otherForum";
import OrgAdminPage from "./pages/orgAdmin/orgAdmin";
import OrgAccountss from "./pages/orgAccounts/orgAccountss";
import Home from "./pages/homePage/home";
import Details from "./pages/detailsPage/details";
import RecordCases from "./pages/detailsPage/RecordCases";
import AdminPage from "./pages/admin/admin";
import EvaluationSession from "./pages/admin/evaluationSession";
import ProtectedUserRoutes from "./endUserProtected";
import { UserForm } from "./components/form";
import UserLoginForm from "./pages/Login/userlogin";
import CaseRoutes from "./pages/detailsPage/caseRoutes";

function App() {
  require("react-dom");
  window.React2 = require("react");
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
           <CaseRoutes/>
          </Route>
          <Route path="/userprofile">
            <ProtectedUserRoutes component={OtherProfile}/>
          </Route>
          
       
          {/* <Route path="/profile">
            <ProfilePage />
          </Route> */}
          
          {/* organisation routes */}
          
          <Route path="/OrgAccounts">
            <OrgAccountss />
          </Route>
          <Route path="/orgadmin">
            <OrgAdminPage />
          </Route>
          <Route path="/entry">
            <Entry />
          </Route>
          
            
       
         
          {/* <Route path="/admin">
            <AdminPage />
          </Route>
          <Route path="/esession">
            <EvaluationSession />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
