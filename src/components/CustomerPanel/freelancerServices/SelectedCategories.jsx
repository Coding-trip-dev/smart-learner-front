import React, { useState, useEffect } from "react";
import "./_course_list.scss"
import Courses from './Course/allServicesFreelancer'
import { connect } from 'react-redux'
import { getFreelancerServices } from '../../../redux/actions/customerPanel/servicesAction'

const ServiceCategories = (props) => {

  let { getFreelancerServices, allServices } = props
  let serviceID = props.match.params.id

  let [servicesByFreelancer, setFreelancerServices] = useState([])


  useEffect(() => {
    getFreelancerServices({ service_category_id: serviceID })
  }, [])
  useEffect(() => {
    setFreelancerServices(allServices.freelancerServices)
  }, [allServices])


  console.log(servicesByFreelancer);
  
  return (
    <>
      <div className="development-page container-fluid">

        <div className="cards-group row">

          <div className="col-8">
            <p className="heading-trending" style={{textTransform: 'capitalize'}}>All Freelancer Services</p>
          </div>

          <Courses category={servicesByFreelancer} />  
        </div>
      </div>
    </>
  );
};

let mapStateToProps = state => {
  return {
    allServices: state.CustomerServicesReducer,
  }
}

export default connect(mapStateToProps, { getFreelancerServices })(ServiceCategories)
