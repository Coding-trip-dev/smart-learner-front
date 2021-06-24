import React, { useState } from "react";
import "./_course_list.scss";
// import TopNavBar from "../Common/TopNavBar";
import Events from './Course/courses'
// import Footer from "../Common/Footer"
import { connect } from 'react-redux'
import { getAllEvents } from '../../../../redux/actions/customerPanel/eventsAction'
import { useEffect } from "react";

const AllEvents = (props) => {
  let { allEvents, getAllEvents } = props
  let id = props.match.params.id
  let [state, setState] = useState()

  useEffect(() => {
    getAllEvents()
  }, [])

  useEffect(() => {
    if (allEvents) {

      let selectedEvent = allEvents.filter((item) => {
        return item._id === id
      })
      console.log(selectedEvent);
      setState(selectedEvent[0])
    }
  }, [allEvents])
  return (
    <>
      <div className="development-page container-fluid">
        {/* <TopNavBar openModal={openModal} switchModal={handleSwitchModal} /> */}

        <div className="cards-group row">

          <div className="col-8">
            <p className="heading-trending">Events</p>
          </div>
          <div className="col-4">
            <button className="booked-btn">My Booked Event</button>
          </div>

          <Events item={state} />
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
};
let mapStateToProps = state => {
  return {
    allEvents: state.CustomerEventsReducer.events
  }
}
export default connect(mapStateToProps, { getAllEvents })(AllEvents)