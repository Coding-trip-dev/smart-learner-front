import React, { useState , useEffect } from "react";
import "./_viewOrder.scss";
import { connect, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Rating from "@material-ui/lab/Rating";
import { Link } from 'react-router-dom'
import { getRunningOrders } from '../../../../redux/actions/freelancer/orderAction'
import { getChat } from '../../../../redux/actions/freelancer/chatAction'
import { Launcher } from 'react-chat-window'
import ChatingPage from './chatPage'




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



const ViewRunningOrder = props => {
  const { inProcessOrders, getRunningOrders, getChat, allChat } = props

  const [expand, setExpand] = useState(false);
  const [chat, setChat] = useState(null);
  const [order, setOrder] = useState(null);


  let id = useSelector(state => state.auth.user_id)

  React.useEffect(() => {
    if (!order) {
      getRunningOrders({ freelancer_id: "5ea153117fefa018306a3d70" })
    }
  }, [])

  React.useEffect(() => {
    let selectedID = props.match.params.id
    if (!order) {

      let selectedOrder = inProcessOrders.filter((item, key) => {
        return item._id === selectedID
      })

      setOrder(selectedOrder[0])

    }

  }, [inProcessOrders])


  console.log(order);


  return (
    <div className="running-order-view-wrapper">
      <div className="row">
        <div className="col-md-7">
          <p className="courseHeading">
            Order Details
          </p>

          <div className="view-order-details-wrapper">
          <div className="user-name">
              <img src={`http://18.217.77.0:5000/uploads/${order ? order.customer_image :""}`} alt="" className="user-img" style={{height: 50 , width : 50 , borderRadius: 25}}/>
              <span className="name">
                {order ? order.customer_name :""}
              </span>
            </div>
            <div className="user-detail-section">

              <div className="user-detail-left">
                <ul className="detail-heading">
                  <li className="li">Order Name:</li>
                  <li className="li">Order Package:</li>
                  <li className="li">Order Date:</li>
                  <li className="li">Received Date:</li>
                  <li className="li">Delivery Time:</li>
                  <li className="li">Delivery Date:</li>
                  <li className="li">Revisions:</li>
                </ul>
              </div>
              <div className="user-detail-right">
                <ul className="detail-heading">
                  <li className="li">{order ? order.service_tittle : ''}</li>
                  <li className="li">Silver, #350</li>
                  <li className="li">{order ? order.start_date : ''}</li>
                  <li className="li">{order ? order.start_date : ''}</li>
                  <li className="li"><GetTime start_date={order ? order.start_date: ''} delivery={order ? order.deliver_date : new Date()} /> </li>
                  <li className="li">{order ? order.deliver_date : ''}</li>
                  <li className="li">4th Time Revision</li>
                </ul>
              </div>
            </div>

          </div>

        </div>

        <div className="col-md-5">
          <div className="timmer-wrapper">
            <div>

              <p className="pending-revision-text">
                Timmer
            </p>
              <p className="pending-revision-number">
              <GetTime start_date={order ? order.start_date: ''} delivery={order ? order.deliver_date : new Date()} />
            </p>
            </div>
            <div>

              <p className="pending-revision-text">
                Revision
            </p>
              <p className="pending-revision-number">
                4 Time
            </p>
            </div>
          </div>


        </div>


      </div>


      <div className="row">
        <div className="col-12 customer-recruitment">
          <div className="heading">
            customer recruitment
            </div>
        </div>

        <div className="col-6 customer-recruitment-details">
          <div className="user-detail-section">

            <div className="user-detail-left">
              <ul className="detail-heading">
                <li className="li">Order Title:</li>
                <li className="li description" >Description:</li>
                <li className="li reference">Reference files:</li>
              </ul>
            </div>
            <div className="user-detail-right">
              <ul className="detail-heading">
                <li className="li">{order ? order.service_tittle : ''}</li>
                <li className="li">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui tenetur alias, debitis cum ipsam optio. Maiores, distinctio non cum et laudantium nulla quisquam tempore nihil! Assumenda exercitationem perferendis velit deserunt.</li>
                <li className="li">
                  {
                    order ? order.source_files.map((item, key) => {
                      if (item.includes(".docx")) {
                        return <>
                          <a href={`http://18.217.77.0:5000/uploads/${item}`} download={item}>
                            <img src="https://cdn.iconscout.com/icon/free/png-512/docx-file-14-504256.png" alt="" className="reference-img" />
                          </a>
                        </>
                      }
                      if (item.includes(".pdf")) {
                        return <>
                          <a href={`http://18.217.77.0:5000/uploads/${item}`} download={item}>
                            <img src="https://i.ya-webdesign.com/images/transparent-pdf.png" alt="" className="reference-img" />
                          </a>
                        </>
                      }
                    })
                      : ''
                  }
                
                </li>

              </ul>
            </div>
          </div>


          <div className="customer-recruitment">
            <div className="heading">
              deliver your work files
            </div>
          </div>
          <div className="customer-recruitment-details">
            <div className="user-detail-section">

              <div className="user-detail-left">
                <ul className="detail-heading">
                  <li className="li send-work">Send your work</li>
                  <li className="li description" >Message</li>
                </ul>
              </div>
              <div className="user-detail-right">
                <ul className="detail-heading">
                  <li className="li">
                    <label htmlFor="work" className="attach-file">
                      Attach file
                    </label>
                    <input type="file" id='work' className="file-input" />
                  </li>
                  <li className="li">
                    <textarea name="message" rows="5" className="text-area-message"
                      placeholder="Type the message..."
                    ></textarea>
                  </li>
                  <li className="li">
                    <button className="deliver-bt">
                      Deliver
                    </button>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="col-6 ">
          <ChatingPage customer_id={order ? order.customer_id : ""} />
        </div>
      </div>


    </div>
  );
};


let mapStateToProps = store => {

  return {
    inProcessOrders: store.OrderReducer.runningOrder,
    allChat: store.ChatReducer.chatList
  }
}
// let mapDispatchToProps = dispatch => {
//   return {
//     getCourses: (state, user) => {
//       dispatch(getAllCourse(state, user))
//     }
//   }
// }


export default withRouter(connect(mapStateToProps, { getRunningOrders, getChat })(ViewRunningOrder))
