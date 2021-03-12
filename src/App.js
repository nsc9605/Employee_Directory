// import React, { useState, useEffect } from 'react';
import React, { Component } from 'react';
// import Wrapper from './components/Wrapper';
// import Header from './components/Header';
// import Main from './components/Main';
// import EmployeeTable from './components/EmployeeTable';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: false
    }
  }

// useEffect(() =>
componentDidMount() {
fetch('https://randomuser.me/api/?results=100')
    .then((response) => response.json())
    .then((response) => {
      this.setState({
        items: response.results,
        loading: true
      })
    });
// )
  }

  render() {
    var { items, loading } = this.state;

    if(!loading) {
      return (
        <div>Loading ...</div>
      )
    }
    else{
      return (
        <div className="container">
          {items.map((item) => (
            <img src={item.picture.medium} alt={item.name.first} />
          ))}
        </div>
      )
    }
  }
}

// function App() {
// // export default function App() {
//   const [data, setData] = useState([])
//   const [employeeFilter, setEmployeeFilter] = useState('')

//   useEffect(() => {
//     fetch('https://randomuser.me/api/?results=100')
//     .then(response => response.json())
//     .then(json => setData(json));
//   }, [])

//   function search(rows) {
//     return rows.filter(row => row.firstName.toLowerCase().indexOf(employeeFilter) > -1 || 
//                               row.lastName.toLowerCase().indexOf(employeeFilter) > -1)
//   }

//   return (
//     <div>
//       <div>
//         <input type="text" value={employeeFilter} onChange={(e) => setEmployeeFilter(e.target.value)}>

//         </input>
//       </div>
//       <div>
//       <EmployeeTable data={search(data)} />
//       </div>
//     </div>


export default App;
