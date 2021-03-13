import React, { Component } from "react";
import API from "../../utils/API";
import SearchForm from "../Search/SearchForm";
import "./Employee.css";

class EmployeeData extends Component {
  state = {
    search: "",
    employee: [],
    displayEmployee: [],
  };

//  Handle how employee is filtered when searched
  handleInputChange = e => {
    const searchInput = e.target.value.toLowerCase();

    const newEmployeeList = this.state.employee.filter(employee => {
        const employeeResult = employee.name.first + employee.name.last;
        return employeeResult.toLowerCase().includes(searchInput)
    })
    this.setState({
        displayEmployee: newEmployeeList,
        search: searchInput
    });
  }

  componentDidMount() {
    API.employee().then((response) => {
      this.setState({
        employee: response.data.results,
        displayEmployee: response.data.results,
      });
    });
  }

  render() {
    return (
      <div className="spacing">
          <SearchForm changeHandler={this.handleInputChange} value={this.state.search}/>
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
                                <td>
                                  <a href={"tel: " + employee.phone}>
                                  {employee.phone}
                                  </a>
                                </td>
                                <td>
                                  <a href={"mailto: " + employee.email} target="_blank" rel="noreferrer">
                                    {employee.email}
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
      </div>
    );
  }
}

export default EmployeeData;
