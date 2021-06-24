import React, { useState, useEffect } from "react";
import * as routes from "../../constants/routePaths";
import "./scss/_homepage.scss";

import Carousel from "./Carousel";
import GeneralSlider from "../Common/GeneralSlider/GeneralSlider";
import Select from "../Common/Select";
import { connect } from 'react-redux'
import ServicesSlider from "../Common/GeneralSlider/ServicesSlider";
import SelectLocation from "../Common/SelectLocation/SelectLocation";
import SearchIcon from '@material-ui/icons/Search';
import CourseCategories from './categories/categories';
// import Events from './Events/events';
import Events from "../Common/GeneralSlider/eventSlider";
import { Link } from "react-router-dom";
import { getTrendingCourses } from '../../redux/actions/customerPanel/customerCoursesAction' 
import { getServices, getFreelancerServices } from '../../redux/actions/customerPanel/servicesAction' 
import { getAllEvents } from '../../redux/actions/customerPanel/eventsAction'


const HomePage = (props) => {
  const { getTrendingCourses, courses, getServices, allServices, allEvents, getAllEvents, getFreelancerServices, freelancerServices } = props

  const [trending, setTrending] = useState([])
  const [services, setServices] = useState([])
  const [events, setEvents] = useState([])



  useEffect(() => {
    getTrendingCourses()
    getServices()
    getAllEvents()
  }, [])
  useEffect(() => {

    setTrending(courses.trending)
    setServices(allServices.services)
    setEvents(allEvents.events)

  }, [courses, allServices, allEvents, freelancerServices])

  console.log(trending);

 

  return (
    <div className="homepage-customer-panel ">
      {/* <TopNavBar openModal={openModal} switchModal={handleSwitchModal} /> */}

      <Carousel />

      <div className="dropdown-div">
        <Select category="Select Degree" />
        <Select category="Select Subject" />
        <input
          className="search-institute"
          type="text"
          placeholder="search institute"
        />
        <SelectLocation category="location" />
        <Link to={routes.SearchPage} className="link">
          <button
            className="search-institute-button"
            type="text"
          > Search <SearchIcon className="search-icon" /></button>
        </Link>
      </div>

      <div className="cards-group course-category row">
        <div className="col-8">
          <p className="heading">Courses Category</p>
        </div>
        <div className="col-4">
          <Link to={routes.AllNewCourses} className="link">
            <p className="see-all">See All</p>
          </Link>
        </div>
 
        <CourseCategories />
      </div>
      <div className="cards-group row">

        <div className="col-8">
          <p className="heading-trending">Trending Courses</p>
        </div>
        <div className="col-4">
          <Link to={routes.AllTrendingCourses} className='link'>
            <p className="see-all">See All</p>
          </Link>
        </div>
        <GeneralSlider trending={trending} />  
      </div>

      <div className="cards-group row">

        <div className="col-8">
          <p className="heading-trending">Services</p> 
        </div>
        <div className="col-4">
          <Link
            to={routes.AllServices}
            className="link"
          >
            <p className="see-all">See All</p>
          </Link>
        </div>
        <ServicesSlider services={services} />  
      </div>

      <div className="cards-group row">

        <div className="col-8">
          <p className="heading-trending">Events</p>
        </div>
        <div className="col-4">
          <Link
            to={routes.AllEvents}
            className="link"
          >
            <p className="see-all">See All</p>
          </Link>
        </div>
        <Events events={events} />  
      </div>
    </div>
  );
};
let mapStateToProps = state => {
  return {
    courses: state.CustomerCoursesReducer,
    allServices: state.CustomerServicesReducer,
    freelancerServices: state.CustomerServicesReducer.freelancerServices,
    allEvents: state.CustomerEventsReducer,

  }
}
export default connect(mapStateToProps, { getTrendingCourses, getServices, getAllEvents, getFreelancerServices })(HomePage)