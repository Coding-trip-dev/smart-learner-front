import React, { useState } from "react";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import * as router from '../../../../constants/routePaths'

import { Link } from "react-router-dom";

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import WatchLaterSharpIcon from '@material-ui/icons/WatchLaterSharp';



const scheduleIcon = {
  color: " #30B484",
  marginRight: 10,
  position: 'relative',
  top: 5
}

const StudentQueryTable = ({ data }) => {
  
  return (


    <>





      <table className="table table_course_management table-borderless in-process-order">

        <tbody>
          {
            data ?
            data.length > 0 ?
              data.map((d, i) => (
                <tr key={i}>
                  <td className='in-process'>
                    {/* <Link to={router.freelancerViewOrderDetailRunning} className="link"> */}

                    {/* <img src={d.img} alt="" className="avatar-img" /> */}
                    <div className="name-outer">

                      Order ID : #{d.order_id}
                      <p className="offer-running-order">
                        <WatchLaterSharpIcon style={scheduleIcon} />{d.deliver_date}
                      </p>
                    </div>

                    {/* </Link>  */}
                  </td>

                  <td>{d.service_tittle}</td>

                  <td>
                    <Link className="link"
                      to={`/customer/my-events/completed/details/${d._id}`}>
                      <span className="status-process">
                        {d.status == 3 ? "View Detail" : null}

                      </span>
                    </Link>

                  </td>


                </tr>
              ))
              :
              <div className="nothing_to_show">
                <h4>Nothing to Show</h4>
              </div>
              :
              <div className="nothing_to_show">
                <h4>Nothing to Show</h4>
              </div>
          }
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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StudentQueryTable));