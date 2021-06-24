import React, { useState,useEffect } from "react";


import { Link } from "react-router-dom";
import * as router from '../../../../constants/routePaths'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import WatchLaterSharpIcon from '@material-ui/icons/WatchLaterSharp';



const scheduleIcon = {
  color: " #30B484",
  marginRight: 10,
  position: 'relative',
  top: 5
}


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


const RunningOrdersTable = ({ data }) => {








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
                          <WatchLaterSharpIcon style={scheduleIcon} />{d.start_date}
                        </p>
                      </div>

                    {/* </Link> */}
                  </td>

                  <td>{d.service_tittle}</td>
                  <td><GetTime start_date={d.start_date} delivery={d.deliver_date} /></td>
                  {/* <td>{d.topic}</td> */}

                  <td>
                    <Link to={`/customer/my-events/in-process/details/${d._id}`} className="link">
                      <span className="status-process">
                        {d.status == 2 ? 'View Detail' : null}

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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RunningOrdersTable));