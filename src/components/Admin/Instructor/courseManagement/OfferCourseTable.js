import React, { useState } from "react";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import Modal from "./Modal";
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





const SalesTable = ({ headings, data, courses }) => {
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

  
  const setCourse = (course)=>{
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
          pathname: `/instructor/course_management/view/${id.oneUser._id}`,
          // query: id.oneUser
        }}>
        <MenuItem onClick={handleMenuClose}
        style={{
          color: 'black'
        }}>View Course Details</MenuItem>
      </Link>

      <MenuItem onClick={handleMenuClose}>Edit Course</MenuItem>

    </Menu>
  );

  return (


    <>
      <Modal
        open={open}
        handleCloseModal={handleCloseModal}
        onClose={handleCloseModal}
        course={discount}
      />
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
            courses ?
            courses.length > 0 ?
              courses.map((d, i) => (
                <tr key={i}>
                  <td>{d.empty}</td>

                  <td>{d.english_tittle}</td>
                  <td>{d.review}
                    <i className="base-on">
                      {d.based}
                    </i>
                  </td>
                  <td>
                    <span
                      className={d.status === 1 ? "active-course-instructor" : "suspend"}
                    >
                      {d.status === 1 ? "active-course-instructor" : "suspend"}

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

                    <button className="discountBtn"
                      onClick={() => { 
                        setCourse(d)
                       }}
                    >
                      Discounts
                    </button>
                    {
                      d.status !== 1
                        ?

                        <a href="#"
                          className="manage"
                        >Manage</a>

                        :

                        null
                    }

                  </td>
                  <td>

                    <IconButton
                      edge="end"
                      aria-label="account of current user"
                      aria-controls={menuId}
                      aria-haspopup="true"
                      onClick={handleProfileMenuOpen}

                      color="inherit"
                    >
                      <MoreVertIcon onMouseOver={() => {
                        setId({
                          oneUser: d
                        })
                      }} />
                    </IconButton>
                  </td>
                </tr>
              ))
              
              :
              <td className="nothing_to_show" colspan="5">
                <h4>You don't have any course yet</h4>
              </td>
              :
              <td className="nothing_to_show" colspan="5">
                <h4>Loading</h4>
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
    courses: store.CourseReducer.allCourses
  }
}
let mapDispatchToProps = dispatch => {
  return {

  }
}

 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SalesTable));