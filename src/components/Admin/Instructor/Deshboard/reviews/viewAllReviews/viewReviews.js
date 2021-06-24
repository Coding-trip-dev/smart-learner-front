import React, { useState, useEffect } from "react";
import "./_view_event.scss";

import ViewEventsTable from "./viewReviewsTable";

import { connect, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Rating from "@material-ui/lab/Rating";
import { Link } from 'react-router-dom'
// import * as routes from '../../../../../constants/routePaths'
// import { getAllEventBooking } from '../../../../../redux/actions/institute/eventsAction'

const ViewEvent = props => {
  // const { getCourses, getAllEventBooking, booking } = props

  const [activeStep, setActiveStep] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [bookingTable, setBookingTable] = useState()
  const [event, setEvent] = useState([]);



  const array = [
    "Enrolled On",
    "Name",
    "Subject",
    "Review",
    "Rating"

  ]
  const dataArray = [
    {

      date: "20-6-2020",
      name: "Khuram Shahzad",
      subject: 'Chemistry',
      img: 'https://www.livestrong.org/sites/default/files/greg_lee_profile.png',
      review: "This is a good subject and I learned many thing from this.",
      rating: 4
    },
    {
      
      date: "20-6-2020",
      name: "Khuram Shahzad",
      subject: 'Chemistry',
      img: 'https://www.livestrong.org/sites/default/files/greg_lee_profile.png',
      review: "This is a good subject and I learned many thing from this.",
      rating: 3
    },
    {

      date: "20-6-2020",
      name: "Khuram Shahzad",
      subject: 'Chemistry',
      img: 'https://www.livestrong.org/sites/default/files/greg_lee_profile.png',
      review: "This is a good subject and I learned many thing from this.",
      rating: 5
    },
    {
      
      date: "20-6-2020",
      name: "Khuram Shahzad",
      subject: 'Chemistry',
      img: 'https://www.livestrong.org/sites/default/files/greg_lee_profile.png',
      review: "This is a good subject and I learned many thing from this.",
      rating: 4
    }
  ]


  // fire when component will recieve the props
  // useEffect(() => {
  //   setEvent(events)

  // }, [events])

  // console.log(event);
  return (
    <div className="event-management-wrapper">
      <div className="row">
        <div className="col-md-9">
          <h3 className="courseHeading">
            View All Students Reviews
          </h3>
          <p
            className="heading-texting"
          >Here you can view all students</p>
        </div>

      </div>

      <div className="row">
        <ViewEventsTable headings={array} data={dataArray} />
      </div>

    </div>
  );
};

let mapStateToProps = store => {

  return {
    // booking: store.EventReducer.bookings
  }
}

export default withRouter(connect(mapStateToProps, {})(ViewEvent))
