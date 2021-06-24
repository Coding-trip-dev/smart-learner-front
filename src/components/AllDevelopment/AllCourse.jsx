import React, { useState } from "react";
import "./_course_list.scss";
import TopNavBar from "../Common/TopNavBar";
import Courses from './Course/courses'
import Footer from "../Common/Footer"

const AllCourses = () => {
  const [open, setOpen] = useState(false);
  const [modelType, setModelType] = useState("signIn");

  const openModal = () => {
    setOpen(true);
  };

  const handleSwitchModal = type => {
    setModelType(type);
  };

  return (
    <>
      <div className="development-page container-fluid">
        <TopNavBar openModal={openModal} switchModal={handleSwitchModal} />

        <div className="cards-group row">

          <div className="col-8">
            <p className="heading-trending">All Development Course</p>
          </div>

          <Courses />
        </div>
        <Footer />
      </div>
    </>
  );
};
export default AllCourses;
