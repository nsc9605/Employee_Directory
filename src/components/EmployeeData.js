import React, { Component } from 'react';
import API from '../utils/API';
import "../styles/EmployeeData.css";


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
            // <>
            <div className="datatable mt-3">
                <table className="empTable table-striped table-hover table-condensed">
                    <thead>
                        <tr className="m-2">
                            <th>Photo</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Country</th>
                            <th>Phone</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    {this.state.displayEmployee && this.state.displayEmployee.map(employee => (
                        <tbody>
                            <tr key={employee.id.value}>
                                <td>
                                    <img src={employee.picture.large} alt="medium" />
                                </td>
                                <td>{employee.name.first}</td>
                                <td>{employee.name.last}</td>
                                <td>{employee.location.city}</td>
                                <td>{employee.location.state}</td>
                                <td>{employee.location.country}</td>
                                <td>{employee.phone}</td>
                                <td>{employee.email}</td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
            // </>
        )
    }
}

export default EmployeeData;
