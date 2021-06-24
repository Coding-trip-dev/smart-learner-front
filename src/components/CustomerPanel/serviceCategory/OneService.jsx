import React, { useState, useEffect } from "react";
import "./_course_list.scss"
import Courses from './Course/courses'
import { connect } from 'react-redux'
import { getServicesCategory } from '../../../redux/actions/customerPanel/servicesAction'

const ServiceCategories = (props) => {

  let { getServicesCategory, allServices } = props
  let serviceID = props.match.params.id

  let [category, setCategories] = useState([])


  useEffect(() => {
    getServicesCategory({ service_id: serviceID })
  }, [])
  useEffect(() => {
    setCategories(allServices.serviceCategory)
  }, [allServices])


  console.log(category);
  
  return (
    <>
      <div className="development-page container-fluid">

        <div className="cards-group row">

          <div className="col-8">
            <p className="heading-trending" style={{textTransform: 'capitalize'}}>{category.length > 0 ? category[0].name_in_english : null}</p>
          </div>

          <Courses category={category} /> 
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

export default connect(mapStateToProps, { getServicesCategory })(ServiceCategories)
