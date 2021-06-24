import React, { useState, Fragment } from "react";
import play from "../../assets/icons/play-icon.png";
import lock from "../../assets/icons/lock.png";
import eye from "../../assets/icons/eye-view.png";

import "./scss/_courseItem.scss";


const CourseItem = ({course}) => {

  const [expanded, setExpanded] = useState(false);
  const handleExpansion = expanded => {
    setExpanded(!expanded);
  };



  let {title,lectures} = course;
  
  
  return (
    <Fragment>
      <div className="d-flex item" onClick={() => handleExpansion(expanded)}>
        <div className="title">
          <span className="icon">{expanded === true ? "-" : "+"}</span>
          <span>{title}</span>
        </div>
      </div>
      <div className="">

        {
        expanded === true
          ? 
          lectures.map(({locked,duration,title},i) => (

              <div key={i} className="item lecture-item d-flex">
                <div className="title lecture pl-2">
                  <span className="icon">
                    {
                      locked === true ?  <img className="img-fluid" src={lock} alt="play" /> :
                      <img className="img-fluid" src={eye} alt="play" /> 
                    }
                  </span>
                  <span className="icon">
                    <img className="img-fluid" src={play} alt="play" />
                  </span>
                  <span className="lecture-title">{title}</span>
                </div>
                <div className="text-right duration" style={{ flex: "1" }}>
                  {duration}
                </div>a
              </div>
            ))
          : ""}
      </div>
    </Fragment>
  );
};
export default CourseItem;