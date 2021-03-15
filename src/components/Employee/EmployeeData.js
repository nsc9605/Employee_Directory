import React, { Component } from "react";
import API from "../../utils/API";
import SearchForm from "../Search/SearchForm";
import "./Employee.css";

class EmployeeData extends Component {
  state = {
    search: "",
    sortEmployeesInOrderOf: "asc",
    employee: [],
    displayEmployee: [],
  };

  //  Handle how employee is filtered when searched
  handleInputChange = (e) => {
    const searchInput = e.target.value.toLowerCase();

    const newEmployeeList = this.state.employee.filter((employee) => {
      const employeeResult = employee.name.first + employee.name.last;
      return employeeResult.toLowerCase().includes(searchInput);
    });
    this.setState({
      displayEmployee: newEmployeeList,
      search: searchInput,
    });
  };

  // Sort Employees by Name
  sortByName = () => {
    const employeeArray = new Array(...this.state.employee);

    const sortedEmployees = employeeArray.sort((a, b) => {
      if (a.name.first + a.name.last < b.name.first + b.name.last) {
        return -1;
      }
      if (a.name.first + a.name.last > b.name.first + b.name.last) {
        return 1;
      }
      return 0;
    });

    if (this.state.sortEmployeesInOrderOf === "desc") {
      sortedEmployees.reverse();
      this.setState({ sortEmployeesInOrderOf: "asc" });
    } else {
      this.setState({ sortEmployeesInOrderOf: "desc" });
    }
    this.setState({ displayEmployee: sortedEmployees });
  };

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
        <SearchForm
          changeHandler={this.handleInputChange}
          value={this.state.search}
        />
        <div className="datatable mt-3">
          <table className="empTable table-striped table-hover table-condensed">
            <thead>
              <tr className="m-2">
                <th>Photo</th>
                <th>
                  Name
                  <span className="sort" onClick={this.sortByName}>
                    <i className="arrow"></i>
                  </span>
                </th>
                <th>Phone</th>
                <th>Email</th>
                <th>Location</th>
                <th>Country</th>
                <th>Age</th>
              </tr>
            </thead>
            {this.state.displayEmployee &&
              this.state.displayEmployee.map((employee, index) => (
                <tbody key={index}>
                  <tr key={employee.id.value}>
                    <td key={index}>
                      <img
                        src={employee.picture.large}
                        alt={employee.name.first + " " + employee.name.last}
                      ></img>
                    </td>
                    <td>{employee.name.first + " " + employee.name.last}</td>

                    <td>
                      <a
                        href={"mailto: " + employee.email}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {employee.email}
                      </a>
                    </td>
                    <td>
                      <a href={"tel: " + employee.phone}>{employee.phone}</a>
                    </td>
                    <td>
                      {employee.location.city + ", " + employee.location.state}
                    </td>
                    <td>{employee.location.country}</td>
                    <td>{employee.dob.age}</td>
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

// Sort Employees by First Name
// sortByFirstName = () => {
//   const employeeArray = new Array(...this.state.employee);

//   const sortedEmployees = employeeArray.sort((a, b) => {
//     if (a.name.first < b.name.first) {
//       return -1;
//     }
//     if (a.name.first > b.name.first) {
//       return 1;
//     }
//     return 0;
//   });

//   if (this.state.sortEmployeesInOrderOf === "desc") {
//     sortedEmployees.reverse();
//     this.setState({ sortEmployeesInOrderOf: "asc" });
//   } else {
//     this.setState({ sortEmployeesInOrderOf: "desc" });
//   }
//   this.setState({ displayEmployee: sortedEmployees });
// };

// // Sort Employees by Last Name
// sortByLastName = () => {
//   const employeeArray = new Array(...this.state.employee);

//   const sortedEmployees = employeeArray.sort((a, b) => {
//     if (a.name.last < b.name.last) {
//       return -1;
//     }
//     if (a.name.last > b.name.last) {
//       return 1;
//     }
//     return 0;
//   });

//   if (this.state.sortEmployeesInOrderOf === "desc") {
//     sortedEmployees.reverse();
//     this.setState({ sortEmployeesInOrderOf: "asc" });
//   } else {
//     this.setState({ sortEmployeesInOrderOf: "desc" });
//   }
//   this.setState({ displayEmployee: sortedEmployees });
// };
