import React, { useState } from "react";
import "./_course_list.scss";
// import TopNavBar from "../Common/TopNavBar";
import Events from './Course/courses'
// import Footer from "../Common/Footer"
import { connect } from 'react-redux'
import { getAllEvents } from '../../../redux/actions/customerPanel/eventsAction'
import { useEffect } from "react";

const AllEvents = (props) => {
  let { getAllEvents, allEvents } = props
  const [events, setEvents] = useState(false);

  useEffect(() => {
    getAllEvents()
  }, [])
  useEffect(() => {
    setEvents(allEvents.events)
  }, [allEvents])

  console.log(events);

  return (
    <>
      <div className="development-page container-fluid">
        {/* <TopNavBar /> */}

        <div className="cards-group row">

          <div className="col-8">
            <p className="heading-trending">My Booked Events</p>
          </div>

          <Events events={events} /> 
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
};

let mapStateToProps = state => {
  return {
    allEvents: state.CustomerEventsReducer,

  }
}
export default connect(mapStateToProps, { getAllEvents })(AllEvents)