import React, { useState, useEffect } from "react";
import "./_search.scss";
import Select from "../../Common/Select";
import SelectLocation from "../../Common/SelectLocation/SelectLocation"
import SearchIcon from '@material-ui/icons/Search';
import Courses from './Course/courses'
import { getAllCourses } from '../../../redux/actions/customerPanel/coursesAction'
import { connect, useSelector } from 'react-redux'

const MyCourses = (props) => {
  let { getAllCourses, courses } = props
  let [allCourses, setAllCourses] = useState(null)
  let customer_id = useSelector(state => state.auth.user_id)
  useEffect(() => {

    getAllCourses({ customer_id })

  }, [])

  useEffect(() => {

    setAllCourses(courses)

  }, [courses])


  return (
    <div className="search-page container-fluid">

      <div className="dropdown-div">
        <Select category="Select Degree" />
        <Select category="Select Subject" />
        <input
          className="search-institute"
          type="text"
          placeholder="search institute"
        />
        <SelectLocation category="location" />
        <button
          className="search-institute-button"
          type="text"
        > Search <SearchIcon className="search-icon" /></button>
      </div>
      <div className="buttons-buy">

        <div className="my-courses">
          My Courses
        </div>
        {/* <div className="buy-courses"> */}
        <button className="btn-buy">
          Buy New Courses
        </button>
        {/* </div> */}
      </div>
      <Courses courses={allCourses} /> 

    </div>
  );
};


let mapStateToProps = state => {
  return {
    courses: state.CustomerCoursesReducer.courses
  }
}

export default connect(mapStateToProps, { getAllCourses })(MyCourses)