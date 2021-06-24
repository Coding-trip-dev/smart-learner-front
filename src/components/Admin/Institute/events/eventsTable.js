import React, { useState,useEffect } from "react";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
// import Modal from "./Modal";
import { Link } from "react-router-dom";
// import * as router from '../../../../constants/routePaths'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MoreVertIcon from '@material-ui/icons/MoreVert';

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





const EventsTable = ({ headings, data, courses,events }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState({
    oneUser: { id: 'demo' }
  })

  const [discount, setDiscount] = React.useState({})
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const [event, setEvent] = useState([]);


  const setCourse = (course) => {
    setDiscount(course)
    openModal()
  }

  const openModal = (course) => {

    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };





  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={anchorEl}
      onClose={handleMenuClose}

    >

      <Link
        to={{
          pathname: `/institute/events/view/${id.oneUser._id}`,
          
          // query: id.oneUser
        }}>
        <MenuItem
          onClick={handleMenuClose}
          style={{
            color: "black",
            fontSize: 13
          }}
        >View Event Details</MenuItem>
      </Link>

      <Link
        to={{
          pathname: `/institute/event/edit/${id.oneUser._id}`
        }}
      >
        <MenuItem
          onClick={handleMenuClose}
          style={{
            color: "black",
            fontSize: 13
          }}>Edit Event</MenuItem>
      </Link>

    </Menu>
  );
  
  useEffect(()=>{
    setEvent(events)
    
  },[events])

  console.log(id);
  
  return (


    <>
      {/* <Modal
        open={open}
        handleCloseModal={handleCloseModal}
        onClose={handleCloseModal}
        course={discount}
      /> */}
      <table className="table eventTable table-borderless">
        <thead>
          <tr>
            {headings.map((h, i) => (
              <th key={i} scope="col">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {
            event ?
            event.length > 0 ?

              event.map((d, i) => (
                <tr key={i}>
                  <td></td>
                  <td>{d.english_tittle}</td>
                  <td>{d.date}</td>
                  <td>{d.time}</td>
                  <td>{d.total_seats}</td>
                  <td>{d.price}</td>
                  <td>{d.total_seats - d.remaining_seats}</td>
                  <td>
                    <span
                      className={d.status === 1 ? "active-events" : "suspend"}
                    >
                      {d.status === 1 ? "active-events" : "canceled"}

                    </span>
                    <span className="switchBtn">

                      <FormControlLabel
                        control={<PurpleSwitch
                          checked={d.status === 1 ? true : false}
                          name="gilad" />}

                      />
                    </span>
                  </td>

                  <td>

                    <IconButton
                      edge="end"
                      aria-label="account of current user"
                      aria-controls={menuId}
                      aria-haspopup="true"
                      onClick={handleProfileMenuOpen}

                      color="inherit"
                      onMouseOver={() => {
                        setId({
                          oneUser: d
                        })
                      }}
                    >
                      <MoreVertIcon  />
                    </IconButton>
                  </td>
                </tr>
              ))
              :
              <td colspan="8" className="nothing_to_show">
                <h4>You didn't have any event.</h4>
              </td>
              :
              <td colspan="8" className="nothing_to_show">
                <h4>Loading...</h4>
              </td>
          }
          {renderMenu}
        </tbody>
      </table>
    </>
  )
}


let mapStateToProps = store => {

  return {
    events: store.EventReducer.events
  }
}
let mapDispatchToProps = dispatch => {
  return {

  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventsTable));