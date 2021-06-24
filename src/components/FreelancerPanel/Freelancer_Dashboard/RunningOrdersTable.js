import React, { useState } from "react";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import { Link } from "react-router-dom";
import * as router from '../../../constants/routePaths'
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

      <Link to={router.ViewCourseDetailsFreelancer}
        to={{
          pathname: `/freelancer-panel/course_management/view/${id.oneUser._id}`,
          // query: id.oneUser
        }}>
        <MenuItem onClick={handleMenuClose}>View Course Details</MenuItem>
      </Link>

      <MenuItem onClick={handleMenuClose}>Edit Course</MenuItem>

    </Menu>
  );

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
            courses ?

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
                      className={d.status === 1 ? "active" : "suspend"}
                    >
                      {d.status === 1 ? "active" : "suspend"}

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
                      onClick={openModal}
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
                      <MoreVertIcon onMouseOver = {()=>{
                        setId({ 
                          oneUser: d
                        })
                      }}/>
                    </IconButton>
                  </td>
                </tr>
              ))
              : 
              <div className="nothing_to_show">
                <h4>Nothing to Show</h4>
              </div>
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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RunningOrdersTable));