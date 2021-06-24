import React, { useState, useEffect } from "react";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
// import Modal from "./Modal";
import { Link } from "react-router-dom";
// import * as router from '../../../../constants/routePaths'
import { connect, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { getAllEvents,updateEvent } from '../../../../../redux/actions/institute/eventsAction'


const PurpleSwitch = withStyles({
  switchBase: {
    color: " white",
    '&$checked': {
      color: "white",

    },
    '&$checked + $track': {
      backgroundColor: "#2ebf5b",
      opacity: 1,

    },
  },
  checked: {},
  track: {},
})(Switch);





const ViewEventsTable = props => {
  const { headings, data, courses, events, getAllEvents,updateEvent } = props
  const [state, setState] = useState({
    event_name: "Intro To Pysics part 1 with notes",
    event_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dicta asperiores odio blanditiis dignissimos aut necessitatibus iusto voluptatibus architecto quibusdam repudiandae sint animi expedita labore, soluta nihil temporibus exercitationem corrupti!',
    event_venue: " Wall Street, Washington DC ",
    event_date: "Saturday 20 FEB",
    event_time: "9AM TO 2PM",
    event_price: "AD 150"
  })

  const [event, setEvent] = useState({

  });

  const onChangeHandler = e => {
    let name = e.target.name
    let val = e.target.value

    if(name === "picture"){
      let img = document.getElementById("event_img_id")
      img.src = URL.createObjectURL( e.target.files[0])
      setEvent({
        ...event,
        name : e.target.files[0]
      })
      return true
    }
    setEvent({
      ...event,
      [name]: val
    })
  }

  
  const edit_image = e => {
    let input = document.getElementById('event_img')
    console.log(input);
    input.setAttribute("id", "event_poster")
    let img = document.getElementById('event_img_id')
    img.classList.add("edit-mode")
  }

  const editName = e => {
    let input = document.getElementById('input-name')
    console.log(input);
    input.classList.remove("hidden")
    let name = document.getElementById('previous-name')
    name.classList.add("hidden")
  }
  const editDesc = e => {
    let input = document.getElementById('input-desc')
    console.log(input);
    input.classList.remove("hidden")
    let name = document.getElementById('previous-desc')
    name.classList.add("hidden")
  }

  const editVenue = e => {
    let input = document.getElementById('input-venue')
    console.log(input);
    input.classList.remove("hidden")
    let name = document.getElementById('previous_venue')
    name.classList.add("hidden")
  }


  const editDate = e => {
    let input = document.getElementById('input-date')
    console.log(input);
    input.classList.remove("hidden")
    let name = document.getElementById('previous_date')
    name.classList.add("hidden")
  }

  const editTime = e => {
    let input = document.getElementById('input-time')
    console.log(input);
    input.classList.remove("hidden")
    let name = document.getElementById('previous_time')
    name.classList.add("hidden")
  }
  const editTimeStop = e => {
    console.log('working');
    
    let input = document.getElementById('input-time')
    console.log(input);
    input.classList.add("hidden")
    let name = document.getElementById('previous_time')
    name.classList.remove("hidden")
  }


  const editPrice = e => {
    let input = document.getElementById('input-price')
    console.log(input);
    input.classList.remove("hidden")
    let name = document.getElementById('previous_price')
    name.classList.add("hidden")
  }

  // const { events } = props


  let institute_id = useSelector(state => state.auth.user_id)
  // fire when component will mount
  useEffect(() => {
    console.log(institute_id);

    getAllEvents({ institute_id: institute_id })
  }, [])

  // fire when component will recieve the props
  useEffect(() => {
    setEvent(events)

  }, [events])

  console.log(event);



  React.useEffect(() => {
    console.log(events, props.match.params.id);
    let id = props.match.params.id
    let result = events.filter((item, key) => {

      return item._id !== id ?
        console.log(item)
        : 'Undefined ID'
    })
    // console.log(result);
    if(result.length>0){

      delete result[0]._id
      delete result[0].__v
    }
      setEvent({
      ...event,
      event_id: id,
      ...result[0]
    })



  }, [events])
  console.log(event);
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let d = new Date(event.date ? event.date : null);
  let dayName = days[d.getDay()];



  var timeString = event.time ? event.time : "18:00:00"; 
  var H = +timeString.substr(0, 2);
  var h = H % 12 || 12;
  var ampm = (H < 12 || H === 24) ? "AM" : "PM";
  timeString = h + timeString.substr(2, 3) + ampm;
  // setEvent({
  //   time: timeString
  // })
  console.log(timeString);
  
  const updateData = e =>{
    console.log(event);
    updateEvent(event)
  }

  return (
    <>
      <div className="edit-event-wrapper">
        <div className="col-6">
          <div className="edit-icon">
            <FontAwesomeIcon icon={faEdit} className="edit-icon-image" onClick={edit_image} />
          </div>
          <div className="img-outer">
            <label htmlFor="event_poster">
              {/* {event.picture ? '../../../../../../../../smart learner backend/smart-learner-backend/statichttp://18.217.77.0:5000/uploads/' + event.picture : ''} */}
              <img src= {'/uploads/' + event.picture}
                alt="event_image"
                className="event_image "
                id="event_img_id"
                />
            </label>
            <input type="file" accept="image/*" className="hidden"
              id="event_img" name="picture"
              onChange={onChangeHandler}
            />
          </div>
        </div>


      </div>
      <div className="col-8">
        <div className="edit-left-wrapper">
          <div className="edit-name-wrapper">
            <div className="edit-icon">
              <FontAwesomeIcon icon={faEdit} className="edit-icon-image" onClick={editName} />
            </div>
            <div className="edit-name">
              <span id="previous-name">
                {event.english_tittle ? event.english_tittle : ''}
              </span>
              <input type="text"
                className="addNewName hidden"
                id="input-name"
                name="english_tittle"
                value={event.english_tittle}
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="edit-desc-wrapper">
            <div className="edit-icon">
              <FontAwesomeIcon icon={faEdit} className="edit-icon-image" onClick={editDesc} />
            </div>
            <div className="edit-name">
              <span id="previous-desc">
                {event.english_description ? event.english_description : ''}

              </span>
              <textarea type="text"
                className="addNewName hidden"
                id="input-desc"
                name="english_description"
                value={event.english_description}

                onChange={onChangeHandler}
              />


            </div>
          </div>
          <div className="edit-venue-wrapper">
            <div className="edit-icon">
              <FontAwesomeIcon icon={faEdit} className="edit-icon-image" onClick={editVenue} />
            </div>
            <div className="edit-name">
              Venue:
              <span id="previous_venue">
                {event.english_venue ? " " + event.english_venue : ''}
              </span>
              <input type="text"
                className="addNewName hidden"
                id="input-venue"
                name="english_venue"
                value={event.english_venue}

                onChange={onChangeHandler}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-4">
        <div className="edit-right-wrapper">
          <div className="edit-name-wrapper">
            <div className="edit-icon">
              <FontAwesomeIcon icon={faEdit} className="edit-icon-image" onClick={editDate} />
            </div>
            <div className="edit-name">

              <span id="previous_date">
                {event.date ? dayName + " " + event.date : ''}
              </span>
              <input type="text"
                className="addNewName hidden"
                id="input-date"
                name="date"
                value={event.date}
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="edit-desc-wrapper">
            <div className="edit-icon">
              <FontAwesomeIcon icon={faEdit} className="edit-icon-image" onClick={editTime} />
            </div>
            <div className="edit-name">

              <span id="previous_time">{event.time ? event.time : ""} </span>
              <input type="text"
                className="addNewName hidden"
                id="input-time"
                name="time"
                value={event.time}
                onChange={onChangeHandler}
                // onBlur={editTimeStop}
              />
            </div>
          </div>
          <div className="edit-venue-wrapper">
            <div className="edit-icon">
              <FontAwesomeIcon icon={faEdit} className="edit-icon-image" onClick={editPrice} />
            </div>
            <div className="edit-name">

              <span id="previous_price">{event.price ? " AD " +event.price : ""}  </span>
              <input type="text"
                className="addNewName hidden"
                id="input-price"
                name="price"
                value={event.price} 
                onChange={onChangeHandler}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="saved-btn-wrapper">
          <button className="saved-edit-setting"
          onClick={updateData}>
            Save
          </button>
        </div>
      </div>
    </>
  )
}


let mapStateToProps = store => {

  return {
    events: store.EventReducer.events
  }
}

export default withRouter(connect(mapStateToProps, { getAllEvents,updateEvent })(ViewEventsTable));