import React, { useState } from "react";
import "./_course_list.scss";
import TopNavBar from "../../CustomerPanel/TopBar";
import Courses from './Course/courses'
// import Footer from "../Common/Footer"

const ServiceCategories = () => {


  return (
    <>
      <div className="development-page container-fluid">
      
        <div className="cards-group row">

          <div className="col-8">
            <p className="heading-trending">Graphic Designer Home page</p>
          </div>

          <Courses /> 
        </div>
      </div>
    </>
  );
};
export default ServiceCategories;
