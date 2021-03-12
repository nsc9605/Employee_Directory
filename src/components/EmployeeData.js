import React, { Component } from 'react';
// import API from '../utils/API';

class EmployeeData extends Component {
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

export default EmployeeData;

// function Employee() {
// const [employees, setEmployees] = useState([]);
// const [searchInput, setSearchInput] = useState('');
// const [employeeTotals, setEmployeeTotals] = useState(0);



// useEffect(() => {
//     fetch('https://randomuser.me/api/'+ searchInput)
//         .then(res => res.json())
//         .then(
//             (result) => {
//                 setEmployees(result);
//             }
//         );
// }, [searchInput]);

// function handleInputChange(e) {
//     setSearchInput(e.target.value);
// };

// function addNewEmployee() {
//     setEmployeeTotals(employeeTotals + 1);
// };
// return(
// <div>
//     <h2>Employees</h2>
//     <form>
//         <label>Search Employee By Name: </label>
//             <input 
//             type="text" 
//             value={searchInput} 
//             onChange={handleInputChange}
//             >
//             </input>
//             <button onClick={addNewEmployee}>Add Employee</button>
//     </form>
// </div>
// )


// }

// export default Employee;



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