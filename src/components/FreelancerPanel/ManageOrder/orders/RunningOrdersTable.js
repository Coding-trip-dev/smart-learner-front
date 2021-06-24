import React, { useState, useEffect } from "react";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import { Link } from "react-router-dom";
import * as router from '../../../../constants/routePaths'
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


const GetTime = ({start_date,delivery}) => {
  const calculateTimeLeft = () => {
    // console.log(new Date(delivery).toString());
    
    const difference = +new Date(delivery) - +new Date(); 
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval === 'days' ? "D :" : interval === 'hours' ? "H :" : interval === 'seconds' ? "S " : interval === "minutes" ? "M :" : ''}{" "}
      </span>
    );
  });
  return (
    <span>{timerComponents.length ? timerComponents : <span>Time's up!</span>}</span>
  )
}


const RunningOrdersTable = ({ headings, data, courses }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState({
    oneUser: { id: 'demo' }
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
              data.length > 0 ?
                data.map((d, i) => (
                  <tr key={i}>
                    <Link to={`/freelancer-panel/manage-orders/view-details/running/${d._id}`} className="link">

                      <td className='running-orders'>
                        <img src={`http://18.217.77.0:5000/uploads/${d.customer_image}`} alt="" className="avatar-img" style={{ borderRadius: "25px", height: 50, width: 50 }} />
                        <div className="name-outer">

                          {d.customer_name}
                          <p className="offer-running-order">
                            {d.service_tittle}
                          </p>
                        </div>

                      </td>
                    </Link>

                    <td>{d.start_date}</td>
                    <td>${d.price}</td>
                    {/* <td>{d.topic}</td> */}

                    <td>
                      <span
                        className={d.status === 2 ? "new-order" : "suspend"}
                      >
                        {d.status === 2 ? "In Process" : "Dispute"}

                      </span>

                    </td>
                    <td ><GetTime start_date={d.start_date} delivery={d.deliver_date}/>
                    </td>


                  </tr>
                ))
                :
                <td colspan='5'>

                  <div className="nothing_to_show" >
                    <h4>Nothing to Show</h4>
                  </div>
                </td>
              :
              <td colspan='5'>

                <div className="nothing_to_show">
                  <h4>Nothing to Show</h4>
                </div>
              </td>
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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RunningOrdersTable));