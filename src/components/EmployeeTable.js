// import React, { useState, useEffect } from 'react';
import React from 'react';

function EmployeeTable({ data }) {
    const columns = data[0] && Object.keys(data[0]);

    return (
        <table cellPadding={0} cellSpacing={0}>
            <thead>
                <tr>{data[0] && columns.map((heading) => 
                <th>{heading}</th>)}
                </tr>
            </thead>
            <tbody>
                {data.map(row => 
                <tr>
                    {columns.map((column) =>
                    <td>
                        {row[column]}
                        </td>
                        )}
                </tr>)}
            </tbody>
        </table>
    )
}

// function EmployeeTable () {
// const [employee, setEmployee] = useState("");

// useEffect(() => {
//     if (!employee) {
//         return;
//     }

    
// });

// return (
//     <div className="employeeTable">
//         <table className="table">
//             <thead className="tableHead"></thead>
//                 <tr>
//                     <th>

//                     </th>
//                 </tr>
//         </table>
//     </div>
// )
// }

export default EmployeeTable;