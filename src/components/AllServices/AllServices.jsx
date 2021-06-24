import React, { useState, useEffect } from "react";
import "./_course_list.scss";
import TopNavBar from "../Common/TopNavBar";
import Courses from './Course/courses'
import Footer from "../Common/Footer"
import { getServices } from '../../redux/actions/customerPanel/servicesAction'
import { connect } from 'react-redux'

const AllCourses = (props) => {
  let { getServices, allServices } = props
  const [services, setServices] = useState(false);

  useEffect(() => {
    getServices()
  }, [])
  useEffect(() => {
    setServices(allServices.services)
  }, [allServices]) 


  console.log(services);

  return (
    <>
      <div className="development-page container-fluid">
        <TopNavBar />

        <div className="cards-group row">

          <div className="col-8">
            <p className="heading-trending">All Services </p>
          </div>

          <Courses services={services}/>  
        </div>
        <Footer />
      </div>
    </>
  );
};

let mapStateToProps = state => {
  return {
    allServices: state.CustomerServicesReducer,
  }
}
export default connect(mapStateToProps, { getServices })(AllCourses)
