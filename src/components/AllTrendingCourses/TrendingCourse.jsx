import React, { useState,useEffect } from "react";
import "./_course_list.scss";
import TopNavBar from "../Common/TopNavBar";
import Courses from './Course/courses'
import Footer from "../Common/Footer"
import { getTrendingCourses } from '../../redux/actions/customerPanel/customerCoursesAction' 
import { connect } from 'react-redux'


const AllTrendings = (props) => {
  let { getTrendingCourses, trendings } = props
  const [trending, setTrending] = useState(false);

  useEffect(() => {
    getTrendingCourses()
    // setCateID(cateId)
  }, [])

  useEffect(() => {
    setTrending(trendings)
  }, [trendings])

  console.log(trending);

  return (
    <>
      <div className="development-page container-fluid">
        <TopNavBar />

        <div className="cards-group row">

          <div className="col-8">
            <p className="heading-trending">All Trending Course</p>
          </div>

          <Courses trending={trending} /> 
        </div>
        <Footer />
      </div>
    </>
  );
};

let mapStateToProps = state => {
  console.log(state);
  
  return {
    trendings: state.CustomerCoursesReducer.trending, 

  }
}
export default connect(mapStateToProps, { getTrendingCourses })(AllTrendings)
