import React, { useState } from "react";
import "./_SelectPkgRevision.scss";

let revisions = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
const SelectPkgRevision = () => {
  const [basicPkgRevsVisible , setBasicPkgRevsVisible] = useState(false);
  const [selectedRevs , setSelectedRevs] = useState(null);

  const handleRevSelect = (r) => {
    setBasicPkgRevsVisible(false);
    setSelectedRevs(r);
  }

  return (
      <>
        <span style={basicPkgRevsVisible ? {display:"none"} : {display:"block"}} className="cursor-pointer" onClick={() => setBasicPkgRevsVisible(true)}>
            {
              selectedRevs !== null ? selectedRevs : "Select"
            }
        </span>
        <ul style={!basicPkgRevsVisible ? {display:"none"} : {display:"block"}} className="pkg-revisions-list">
            {
                revisions.map((r,i) => <li key={i} onClick={() => handleRevSelect(r)} className="cursor-pointer">{r}</li>)
            }
        </ul>
      </>
  )
};
export default SelectPkgRevision;
