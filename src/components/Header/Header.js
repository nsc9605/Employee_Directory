import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <h1 className="display-3">Employee Directory</h1>
      <h2 >
        Bringing employers an organized way to to filter and search their
        employees!
      </h2>
      <h3>
      To search, simply begin to type in an employees name and employee names will narrow down. To sort employee names, click the arrows next to "Name". 
      </h3>
    </div>
  );
}
export default Header;
