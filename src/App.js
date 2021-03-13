// import React, { useState, useEffect } from 'react';
import React from 'react';
// import Wrapper from './components/Wrapper';
import Header from './components/Header/Header';
// import Main from './components/Main';
import EmployeeData from './components/Employee/EmployeeData';
import './components/Header/Header.css';

function App() {

  return (
    <div>
      {/* <Wrapper> */}
        <Header />
        <EmployeeData />
      {/* </Wrapper> */}
    </div>
  )
}



export default App;
