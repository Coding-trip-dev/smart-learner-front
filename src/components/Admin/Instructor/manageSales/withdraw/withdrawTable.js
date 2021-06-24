import React, { useState } from "react";
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





const WithdrawTable = ({ headings, data, courses }) => {
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
          pathname: `/institute/course_management/view/${id.oneUser._id}`,
          // query: id.oneUser
        }} 
        style={{
          color: 'black'
        }}
        >
        <MenuItem onClick={handleMenuClose}>View Course Details</MenuItem>
      </Link>

      <MenuItem onClick={handleMenuClose}>Edit Course</MenuItem>
      <MenuItem onClick={handleMenuClose}>View Invoice</MenuItem>


    </Menu>
  );

  return (


    <>
      {/* <Modal
        open={open}
        handleCloseModal={handleCloseModal}
        onClose={handleCloseModal}
        course={discount}
      /> */}
      <table className="table table-withdraw table-borderless">
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
            data.length > 0 ?
              data.map((d, i) => (
                <tr key={i}>
                  <td className="date-table">{d.created_at.slice(0,10)}</td>

                  <td className="font-500">
                    {d.acc_tittle}
                  </td>
                  <td className="font-500">
                    {d.bank_name}
                  </td>
                  <td className="font-500 status">

                    {d.status === 1 ? "Pending" : "Approved"}
                  </td>
                  <td className="font-500 debt-color">
                    
                    ${d.amount}
                  </td>
                  {/* <td className="font-500 credit-color">
                    
                    {d.credit}
                  </td> */}
                
                </tr>
              ))
              :
              <td colspan="5" className="nothing_to_show">
                <h4>Nothing to Show</h4>
              </td>
              :
              <td colspan="5" className="nothing_to_show">
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
    courses: store.CourseReducer.allCourses
  }
}
let mapDispatchToProps = dispatch => {
  return {

  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WithdrawTable));