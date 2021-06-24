import React, { useState } from "react";
import "./_edit_event.scss";

import EditEventForm from "./editEventForm";

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Rating from "@material-ui/lab/Rating";
import { Link } from 'react-router-dom'
import * as routes from '../../../../../constants/routePaths'


const EditEvent = props => {
  const { events } = props

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
  const [event, setEvent] = useState({
   
  });


  // React.useEffect(() => {
  //   console.log(events,props.match.params.id);
  //   let id = props.match.params.id 
  //   let result = events.filter((item,key)=>{
      
  //     return item._id !== id ? 
  //     console.log(item)
  //      : 'Undefined ID'
  //   })
  //   // console.log(result);

  //   setEvent({
  //     event: result
  //   })


    
  // }, [])


  const array = [
    "Date",
    "Name",
    "Mobile Number",
    "Ticket ID",
    "Seats",
    "Price",
    "Status"

  ]
  const dataArray = [
    {

      date: "20-6-2020",
      name: "Khuram Shahzad",
      mobile: "090078601",
      ticketID: "AD00987",
      seats: "09",
      price: "$40",
      status: "booked"
    },
    {

      date: "20-6-2020",
      name: "Khuram Shahzad",
      mobile: "090078601",
      ticketID: "AD00987",
      seats: "09",
      price: "$40",
      status: "booked",
    },
    {

      date: "20-6-2020",
      name: "Khuram Shahzad",
      mobile: "090078601",
      ticketID: "AD00987",
      seats: "09",
      price: "$40",
      status: "booked",
    },
    {

      date: "20-6-2020",
      name: "Khuram Shahzad",
      mobile: "090078601",
      ticketID: "AD00987",
      seats: "09",
      price: "$40",
      status: "cancel",
    },
  ]



  // console.log(event);
  
  return (
    <div className="event-management-wrapper">
      <div className="row">
        <div className="col-md-9">
          <h3 className="courseHeading">
            Edit Your Event
          </h3>
          <p
            className="heading-texting"
          >Here you can edit your events</p>
        </div>
       
      </div>

      <div className="row">
        <EditEventForm headings={array} data={event} />
      </div>

    </div>
  );
};


let mapStateToProps = store => {
  
  return {
    events: store.EventReducer.events
  }
}

export default withRouter(connect(mapStateToProps, {})(EditEvent))
