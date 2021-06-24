import React, { useState } from "react";
import "./_viewOrder.scss";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Rating from "@material-ui/lab/Rating";
import { Link } from 'react-router-dom'
import ChatingPage from './chatPage'

const ViewRunningOrder = props => {
  const { userDetail } = props

  const [activeStep, setActiveStep] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [state, setState] = useState({
    institute: null,
    degrees: null,
    degree_name: null,
    degree_file: null,
    certification: null,
    certification_name: null,
    certification_file: null,
    about_us: null,
    job_title: null,
    other: null,
    otp: null
  })
  const [order, setOrder] = useState();


  React.useEffect(() => {
    // if(!userDetail.allCourses){
    // getCourses({ institute_id: userDetail.institute_id }, "institute")
    // }
  }, [])


  const array = [
    "Date",
    "Name",
    "Bank Detail",
    "Status",
    "Amount"

  ]
  const dataArray = [
    {
      date: '20-09-2019',
      name: "Imad hussain",
      bank_detail: "Local Bank Account",
      status: "pending",
      amount: "$40"
    },
    {
      date: '20-09-2019',
      name: "Imad hussain",
      bank_detail: "PayPal",
      status: "pending",
      amount: "$60"
    },
    {
      date: '20-09-2019',
      name: "Imad hussain",
      bank_detail: "Google pay Account",
      status: "sent",
      amount: "$40"
    },
    {
      date: '20-09-2019',
      name: "Imad hussain",
      bank_detail: "Local Bank Account",
      status: "pending",
      amount: "$60"
    },
    {
      date: '20-09-2019',
      name: "Imad hussain",
      bank_detail: "Local Bank Account",
      status: "sent",
      amount: "$40"
    },
    {
      date: '20-09-2019',
      name: "Imad hussain",
      bank_detail: "Payoneer",
      status: "sent",
      amount: "$40"
    },

  ]




  return (
    <div className="running-order-view-wrapper">
      <div className="row">
        <div className="col-md-5">
          <p className="courseHeading">
            Order Details
          </p>

          <div className="view-order-details-wrapper">
            <div className="user-name">
              <img src="https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1" alt="" className="user-img" />
              <span className="name">
                Sarfaraz khan
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
                  <li className="li">Brand Logo Design</li>
                  <li className="li">Silver, #350</li>
                  <li className="li">Jun-12-2020</li>
                  <li className="li">Jun-12-2020</li>
                  <li className="li">5 Days</li>
                  <li className="li">Delivered</li>
                  <li className="li">4th Time Revision</li>
                </ul>
              </div>
            </div>

          </div>

        </div>

        <div className="col-md-7">
          <div className="pending-revision-wrapper">
            <div>

              <p className="pending-revision-text">
                Pending Revisions
            </p>
              <p className="pending-revision-number">
                03
            </p>
            </div>
            <div>

              <p className="pending-revision-text">
                Complete Revisions
            </p>
              <p className="pending-revision-number">
                01
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
                <li className="li">You create my YouTube channel logo</li>
                <li className="li">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui tenetur alias, debitis cum ipsam optio. Maiores, distinctio non cum et laudantium nulla quisquam tempore nihil! Assumenda exercitationem perferendis velit deserunt.</li>
                <li className="li">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWCb_m4OiwDq9oasmPLSogy8O6kz7CvoRKkvNKm8r-OVlhEeGB&usqp=CAU" alt="" className="reference-img" />
                  <img src="https://images.all-free-download.com/images/graphicthumb/creative_file_icons_vector_543571.jpg" alt="" className="reference-img" />

                </li>
                {/* <li className="li">
                  {
                    order ? order.source_files.map((item, key) => {
                      if (item.includes(".docx")) {
                        return <>
                          <a href={`/uploads/${item}`} download={item}>
                            <img src="https://cdn.iconscout.com/icon/free/png-512/docx-file-14-504256.png" alt="" className="reference-img" />
                          </a>
                        </>
                      }
                      if (item.includes(".pdf")) {
                        return <>
                          <a href={`/uploads/${item}`} download={item}>
                            <img src="https://i.ya-webdesign.com/images/transparent-pdf.png" alt="" className="reference-img" />
                          </a>
                        </>
                      }
                    })
                      : ''
                  }
                
                </li> */}
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
        
        {/* <div className="col-6">
          <div className="chat-box-wrapper">
            <div className="header-section">
              Chating Room
            </div>

            <div className="message-container">
              <div className="message-wrapper">
                <div className="message-txt other-message">
                  <img
                    src="https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1"
                    alt=""
                    className="user-img"
                  />
                  <div className="message-time">

                    <p className="time">
                      Sarfaraz khan 4:02pm
                      </p>
                    <p className="message">
                      Hi, How are you doing?
                    </p>
                  </div>
                </div>
                <div className="message-txt your-message">
                  <img
                    src="https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1"
                    alt=""
                    className="user-img"
                  />
                  <div className="message-time">

                    <p className="time">
                      Sarfaraz khan 4:02pm
                      </p>
                    <p className="message">
                      Hi, How are you doing?
                    </p>
                  </div>
                </div>
                <div className="message-txt other-message">
                  <img
                    src="https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1"
                    alt=""
                    className="user-img"
                  />
                  <div className="message-time">

                    <p className="time">
                      Sarfaraz khan 4:02pm
                      </p>
                    <p className="message">
                      Hi, How are you doing?
                    </p>
                  </div>
                </div>
                <div className="message-txt your-message">
                  <img
                    src="https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1"
                    alt=""
                    className="user-img"
                  />
                  <div className="message-time">

                    <p className="time">
                      Sarfaraz khan 4:02pm
                      </p>
                    <p className="message">
                      Hi, How are you doing?
                    </p>
                  </div>
                </div>
                <div className="message-txt other-message">
                  <img
                    src="https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1"
                    alt=""
                    className="user-img"
                  />
                  <div className="message-time">

                    <p className="time">
                      Sarfaraz khan 4:02pm
                      </p>
                    <p className="message">
                      Hi, How are you doing?
                    </p>
                  </div>
                </div>
                <div className="message-txt your-message">
                  <img
                    src="https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1"
                    alt=""
                    className="user-img"
                  />
                  <div className="message-time">

                    <p className="time">
                      Sarfaraz khan 4:02pm
                      </p>
                    <p className="message">
                      I'm fine how about you dear?
                    </p>
                  </div>
                </div>
                <div className="message-txt other-message">
                  <img
                    src="https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1"
                    alt=""
                    className="user-img"
                  />
                  <div className="message-time">

                    <p className="time">
                      Sarfaraz khan 4:02pm
                      </p>
                    <p className="message">
                      Hi, How are you doing?
                    </p>
                  </div>
                </div>
                <div className="message-txt your-message">
                  <img
                    src="https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1"
                    alt=""
                    className="user-img"
                  />
                  <div className="message-time">

                    <p className="time">
                      Sarfaraz khan 4:02pm
                      </p>
                    <p className="message">
                      Hi, How are you doing?
                    </p>
                  </div>
                </div>
                <div className="message-txt other-message">
                  <img
                    src="https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1"
                    alt=""
                    className="user-img"
                  />
                  <div className="message-time">

                    <p className="time">
                      Sarfaraz khan 4:02pm
                      </p>
                    <p className="message">
                      Hi, How are you doing?
                    </p>
                  </div>
                </div>
                <div className="message-txt your-message">
                  <img
                    src="https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1"
                    alt=""
                    className="user-img"
                  />
                  <div className="message-time">

                    <p className="time">
                      Sarfaraz khan 4:02pm
                      </p>
                    <p className="message">
                      Hi, How are you doing?
                    </p>
                  </div>
                </div>
                <div className="message-txt other-message">
                  <img
                    src="https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1"
                    alt=""
                    className="user-img"
                  />
                  <div className="message-time">

                    <p className="time">
                      Sarfaraz khan 4:02pm
                      </p>
                    <p className="message">
                      Hi, How are you doing?
                    </p>
                  </div>
                </div>
                <div className="message-txt your-message">
                  <img
                    src="https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1"
                    alt=""
                    className="user-img"
                  />
                  <div className="message-time">

                    <p className="time">
                      Sarfaraz khan 4:02pm
                      </p>
                    <p className="message">
                      I'm fine how about you dear?
                    </p>
                  </div>
                </div>

              </div>
            </div>
            <div className="new-message-container">
              <input type="text" className="input-chat" />
              <label htmlFor="file" className="input-file"></label>
              <input type="file" className="hidden" id="file" />
              <button className="button-send"> </button>
            </div>
          </div>
        </div> */}

      </div>


    </div>
  );
};


let mapStateToProps = store => {

  return {
    userDetail: store.CourseReducer
  }
}
// let mapDispatchToProps = dispatch => {
//   return {
//     getCourses: (state, user) => {
//       dispatch(getAllCourse(state, user))
//     }
//   }
// }


export default withRouter(connect(mapStateToProps, {})(ViewRunningOrder))
