import React from "react";
import "./scss/_profile.scss";
import TopNavBar from "../Common/TopNavBar";
import Image from "../../assets/Images/homepageImages/happy-children-learning.png";
import SelectLocation from "../Common/SelectLocation/SelectLocation";
import Select from "../Common/Select";
import CourseEnrolled from "./CourseEnrolled";
import Card from "../Common/GeneralSlider/Card";

function isEven(n) {
  return n % 2 === 0;
}
let a = [1, 2, 3, 4];
let arr = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  11,
  22,
  33,
  44,
  55,
  66,
  5,
  4,
  5,
  7,
  45,
  34
];
const UserPage = props => {
  const newUser = false;

  return (
    <div className="container-fluid">
      <TopNavBar />
      <div className="row mt-2">
        <div className="col-12">
          <h5 className="welcome-student-text">
            Hi ! <span className="primary-color-text">Jon Doe</span> Welcome To
            Your Account
          </h5>
          {newUser && (
            <p className="primary-color-text">
              Select Your Desired Course and start learning
            </p>
          )}
          {!newUser && (
            <p className="primary-color-text student-visit-info caption">
              <b>Last Visit </b>
              <span color="white">22-02-2020 8:33PM</span>
            </p>
          )}
        </div>
        <div className="col-12">
          {newUser && <img className="img-fluid" src={Image} alt="banner" />}
          {!newUser && (
            <div className="row enrolled-courses">
              {a.map((v, i) => (
                <CourseEnrolled key={i} even={isEven(i)} />
              ))}
            </div>
          )}
        </div>
        <div className="col-12">
          <div className="user-dd dropdown-div">
            <Select category="Degree" />
            <Select category="Subject" />
            <input className="search-institute" type="text" placeholder="search institute" />
            <SelectLocation category="location" />
          </div>
          <h6>
            <span>My Courses</span>
            <span></span>
          </h6>

          <div className="row courses-row">
            {arr.map((v, i) => (
              <div key={i} className="col-12 col-md-6 col-lg-4 col-xl-3">
                <Card />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserPage;
