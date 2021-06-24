import React from "react";
import "./_selectLocation.scss";

const SelectLocation = ({ category }) => (
  <select className="custom-select custom-select-location">
    <option>{category}</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
);
export default SelectLocation;