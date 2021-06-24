import React, { useState, useEffect } from "react";
import "./_view_event.scss";

import ViewEventsTable from "./viewEventsTable";

import { connect, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Rating from "@material-ui/lab/Rating";
import { Link } from 'react-router-dom'
import * as routes from '../../../../../constants/routePaths'
import { getAllEventBooking } from '../../../../../redux/actions/institute/eventsAction'

const ViewEvent = props => {
  const { getCourses, getAllEventBooking, booking } = props

  const [activeStep, setActiveStep] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [bookingTable, setBookingTable] = useState()
  const [event, setEvent] = useState([]);

  let institute_id = useSelector(state => state.auth.user_id)
  useEffect(() => {
    let event_id = props.match.params.id
    getAllEventBooking({event_id, institute_id})
  }, [])
  useEffect(() => {
    setBookingTable(booking)
  }, [booking])

  
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


  // fire when component will recieve the props
  // useEffect(() => {
  //   setEvent(events)

  // }, [events])

  console.log(event);
  return (
    <div className="event-management-wrapper">
      <div className="row">
        <div className="col-md-9">
          <h3 className="courseHeading">
            View Events
          </h3>
          <p
            className="heading-texting"
          >Here you can view your events</p>
        </div>

      </div>

      <div className="row">
        <ViewEventsTable headings={array} data={bookingTable} />
      </div>

    </div>
  );
};

let mapStateToProps = store => {

  return {
    booking: store.EventReducer.bookings
  }
}

export default withRouter(connect(mapStateToProps, { getAllEventBooking })(ViewEvent))
