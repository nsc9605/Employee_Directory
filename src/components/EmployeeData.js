import React, { Component } from 'react';
import API from '../utils/API';


class EmployeeData extends Component {
    state = {
        employee: [],
        displayEmployee: []
    }
    
    componentDidMount() {
        API.employee()
        .then((response) => {
            this.setState({
                employee: response.data.results,
                displayEmployee: response.data.results
            });
        });
    }

    render() {
        return (
            <>
            <div className="container">
                <table className="employeeTable table-striped table-hover table-condensed">
                    <thead className="hed">
                        <tr>
                            <th>Photo</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    {this.state.displayEmployee && this.state.displayEmployee.map(employee => (
                        <tbody key={employee}>
                            <tr key={employee.id.value}>
                                <td>
                                    <img src={employee.picture.medium} alt="medium"/>
                                </td>
                                <td>{employee.name.first}</td>
                                <td>{employee.name.last}</td>
                                <td>{employee.phone}</td>
                                <td>{employee.email}</td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
            </>
        )
    }
}

export default EmployeeData;
