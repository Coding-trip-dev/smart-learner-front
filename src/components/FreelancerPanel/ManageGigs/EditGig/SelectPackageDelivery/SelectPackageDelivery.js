import React, { useState } from "react";
import "./_selectPackageDelivery.scss";

let days = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
const SelectPackageDelivery = () => {
  const [basicPkgDayVisible , setBasicPkgDayVisible] = useState(false);
  const [selectedDays , setSelectedDays] = useState(null);

  const handleDaySelect = (d) => {
    setBasicPkgDayVisible(false);
    setSelectedDays(d);
  }

  return (
      <>
        <span style={basicPkgDayVisible ? {display:"none"} : {display:"block"}} className="cursor-pointer" onClick={() => setBasicPkgDayVisible(true)}>
            {
              selectedDays !== null ? selectedDays + " Days Delivery" : "Select Deliverys"
            }
        </span>
        <ul style={!basicPkgDayVisible ? {display:"none"} : {display:"block"}} className="delivery-days-list">
            <li onClick={() =>handleDaySelect(1)} className="cursor-pointer">1 Day Delivery</li>
            {
                days.map((d,i) => <li key={i} onClick={() => handleDaySelect(d)} className="cursor-pointer">{d} Days Delivery</li>)
            }
        </ul>
      </>
  )
};
export default SelectPackageDelivery;
