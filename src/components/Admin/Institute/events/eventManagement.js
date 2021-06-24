import React, { useState,useEffect } from "react";
import "./_course_mangement.scss";

import EventsTable from "./eventsTable";
import { connect, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom'; 
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Rating from "@material-ui/lab/Rating";
import { Link } from 'react-router-dom'
import * as routes from '../../../../constants/routePaths'
import {getAllEvents} from '../../../../redux/actions/institute/eventsAction'

const EventManagement = props => {

  const { getCourses,userDetail, getAllEvents,events } = props

  const [activeStep, setActiveStep] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [state, setState] = useState({
    institute: null,
    degrees: null,
    degree_name: null,
    degree_file: null,
    certification: null,
    certification_name: null,
    certification_file: null,
    about_us: null,
    job_title: null,
    other: null, 
    otp: null
  })
  const [event, setEvent] = useState([]);



  const array = [
    "",
    "Your events",
    "Date",
    "Time",
    "Seats",
    "Price",
    "Booked",
    "Status",
    ""

  ] 
  let institute_id = useSelector(state =>state.auth.user_id )
  // fire when component will mount
  useEffect(()=>{
    console.log(institute_id);
    
    getAllEvents({institute_id})
  },[])

  // fire when component will recieve the props
  useEffect(()=>{
    setEvent(events)
    
  },[events])

  console.log(event);
  
  return (
    <div className="event-management-wrapper">
      <div className="row">
        <div className="col-md-9">
          <h3 className="courseHeading">
            Event Management
          </h3>
          <p
            className="heading-texting"
          >Here you can manage your events</p>
        </div>
        <div className="col-md-3">
          <Link to={routes.AddNewEvent}>
            <button className="add-course">
              add new event
          </button>
          </Link> 
        </div>
      </div>

      <div className="row">
        <EventsTable headings={array} data={event} />
      </div>

    </div>
  );
};

let mapStateToProps = store => {
  
  return {
    events: store.EventReducer.events
  }
}

export default withRouter(connect(mapStateToProps, {getAllEvents})(EventManagement))
