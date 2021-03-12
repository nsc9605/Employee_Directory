// import React, { useState, useEffect } from 'react';
import React from 'react';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Main from './components/Main';
// import EmployeeTable from './components/EmployeeTable';
import './styles/App.css';

function App() {

  return (
    <div>
      <Wrapper>
        <Header />
        <Main />
      </Wrapper>
    </div>
  )
}



export default App;
