import React from "react";
const CourseEnrolled = ({ even }) => (
  <div
    className={
      `${even}` === true
        ? "col-12 col-lg-6 pr-0 mb-3"
        : "col-12 col-lg-6 pl-0 mb-3"
    }
  >
    <div className="row course-enrolled-row p-2">
      <div className="col-12 col-md-4 p-0">
        <img
          className="img-fluid enrolled-course-thumbnail"
          src="https://p0.piqsels.com/preview/452/672/14/cool-wallpaper-forest-hawaii-hd-wallpaper-thumbnail.jpg"
          alt="course"
        />
      </div>
      <div className="col-12 col-md-8   pr-0">
        <h6 className="mb-0 enrolled-course-title">
          Introduction to Chemistry by Daniel Scot
        </h6>
        <p className="enrolled-course-desc">
          Introduction to Chemistry by Daniel Scot Chemistry by Daniel Scot
          Intro to Chemistry by Daniel
        </p>
        <div className="progress">
          <div
            className="progress-bar w-75"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <button className="primaryBtn continue">Continue...</button>
      </div>
    </div>
  </div>
);
export default CourseEnrolled;
