import React, { useState } from "react";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import { Link } from "react-router-dom";
// import * as router from '../../../constants/routePaths'
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





const RunningOrdersTable = ({ headings, data, courses }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState({
    oneUser: {id: 'demo'}
  })

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };



  const openModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };







  return (


    <>
     
      <table className="table table_course_management table-borderless">
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
            data ?

              data.map((d, i) => (
                <tr key={i}>

                  <td className='running-orders'>
                    <img src={d.img} alt="" className="avatar-img" />
                    <div className="name-outer">

                      {d.name}
                      <p className="offer-running-order">
                        {d.offer}
                      </p>
                    </div>

                  </td>

                  <td>{d.startDate}</td>
                  <td>{d.endDate}</td>
                  <td>{d.deliverAt}</td>
                  <td>{d.total}</td>

                  <td>
                    <span
                      className={d.status === "late" ? "suspend" : "new-order"}
                    >
                      {d.status}

                    </span>

                  </td>

                  
                </tr>
              ))
              : 
              <div className="nothing_to_show">
                <h4>Nothing to Show</h4>
              </div>
          }
          {/* {renderMenu}   */}
        </tbody>
      </table>
    </>
  )
}


let mapStateToProps = store => {

  return {
    courses: store.CourseReducer.allCourses
  }
}
let mapDispatchToProps = dispatch => {
  return {

  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RunningOrdersTable));