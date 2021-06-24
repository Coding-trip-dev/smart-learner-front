import React from "react";
import "./scss/_select.scss";

const Select = ({ category, onChangeHandler, type }) => (

  <select className="custom-select" onChange={onChangeHandler} name={type} required>
    <option>{category}</option>
    <option value="School">School</option>
    <option value="College">College</option>
    <option value="University">University</option>
  </select>
);
export default Select; 
