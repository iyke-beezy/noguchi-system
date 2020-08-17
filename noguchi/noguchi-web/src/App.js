import React from 'react';
import logo from './logo.svg';
import './App.css';
import Mappings from './pages/Map/map';
import OrgForm from './components/form';
import OrgLogin from './pages/Login/login';

function App() {
  return (
    <div className="App">
      {/* <Mappings></Mappings> */}
      {/* <OrgForm/> */}
      <OrgLogin/>
    </div>
  );
}

export default App;
