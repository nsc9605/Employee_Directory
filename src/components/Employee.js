// import React, { Component, useState, useEffect } from 'react';

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