import React, { useState } from "react";
import "./_viewOrder.scss";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Rating from "@material-ui/lab/Rating";
import { Link } from 'react-router-dom'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import FlipClock from 'x-react-flipclock'

import CheckIcon from '@material-ui/icons/Check';
import ChatingPage from './chatPage'
import { getViewdOrder } from '../../../../redux/actions/customerPanel/ordersAction'



const activeIcon = {
  position: 'absolute',
  top: '10px',
  left: '-20px'
}
const ViewCancelledOrder = props => {
  const { getViewdOrder, viewedOrder } = props

  const [order, setViewedOrder] = useState(null);


  React.useEffect(() => {
    let order_id = props.match.params.id
    getViewdOrder({ order_id })
  }, [])

  React.useEffect(() => {
    setViewedOrder(viewedOrder)
  }, [viewedOrder])

  console.log(order);





  return (
    <div className="cancled-order-view-wrapper">
      <div className="row">
        <div className="col-12 completed-header">
          <img src={require('../assets/cross.png')} alt="" className="tick-mark-img" />
          {/* <CheckIcon style={{fontSize: '3em',fontWeight: '900',color: " white",position: 'relative',top:'0px',left:'-10px'}}/> */}
        Order Cancelled
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <div className="chat-btn-wrapper">
            <img src="https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1" alt=""
              className="user-image" />
            <FiberManualRecordIcon style={{
              position: 'absolute',
              // top: '-5px',
              left: '50px',
              height: '10px',
              width: "10px",
              color: '#51ab59'
            }} />
            <span className="chat-text">
              Chat

            </span>
          </div>
        </div>
        <div className="col-4">
          <div className="process-txt">
            Order Cancelled
          </div>
        </div>
      </div>

      <div className="row order-heading-wrapper">
        <div className="col-7">
          <div className="order-id">
            Order ID : #{order ? order.order_id : null}
          </div>
          <div className="seller-detail">
            <span className="seller-txt">
              Seller
              </span>
            <span className="seller-name">
              {order ? order.freelancer_name : null}
            </span>
            <span className="date">
              {order ? <>
                {new Date(order ? order.start_date : null).getDate() + " "}
                {new Date(order ? order.start_date : null).toLocaleString('default', { month: 'short' }) + " "}
                {new Date(order ? order.start_date : null).getFullYear()}
              </> : null}
            </span>
          </div>
        </div>
        <div className="col-5">
          <span className="deliverd-on">
            Cancelled on <span className="delivery-date">{order ? <>
              {new Date(order ? order.deliver_date : null).getDate() + " "}
              {new Date(order ? order.deliver_date : null).toLocaleString('default', { month: 'short' }) + " "}
              {new Date(order ? order.deliver_date : null).getFullYear()}
            </> : null}</span>
          </span>
        </div>
      </div>
      <div className="row">
        <div className="summery">
          Order Summary
        </div>
      </div>

      <div className="row items">
        <table>
          <thead>
            <td className="item-text">Items</td>
            <td className="duration">Duration</td>
            <td className="amount">Amount  </td>
          </thead>
          <tbody>
            <tr>
              <td>{order ? order.service_tittle : null}</td>
              <td> {order ? <>{(new Date(order.deliver_date).getTime() - new Date(order.start_date).getTime()) / (1000 * 3600 * 24)} Days</> : null} </td>
              <td>AED {order ? order.price : null}</td>
            </tr>
          </tbody>
        </table>

      </div>

      <div className="row">
        <div className="package-name col-12">
          Package <span className="package">BASIC</span>
        </div>
        <div className="col-4">
          <div className="box-package-detail">
            <div className="row">

              <div className="col-10 txt">Source file</div>
              <div className="col-2 txt"> -</div>
            </div>
            <div className="row">

              <div className="col-10 txt">Concept Includes</div>
              <div className="col-2 txt"> <CheckIcon style={{ fontSize: '1.5em', fontWeight: '500', color: " #1dbf73", position: 'relative', top: '0px', left: '-10px' }} /></div>
            </div>
            <div className="row">

              <div className="col-10 txt">3D Mockup</div>
              <div className="col-2 txt"> -</div>
            </div>
          </div>
        </div>
      </div>

      <div className="row description-box">
        <div className="col-6">
          <div className="headiing"> Description</div>
          <div className="description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui tenetur alias, debitis cum ipsam optio. Maiores, distinctio non cum et laudantium nulla quisquam tempore nihil! Assumenda exercitationem perferendis velit deserunt.
          </div>
        </div>
      </div>
      <div className="row description-box">
        <div className="col-6">
          <div className="headiing"> Requirements</div>
          <div className="description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui tenetur alias, debitis cum ipsam optio. Maiores, distinctio non cum et laudantium nulla quisquam tempore nihil! Assumenda exercitationem perferendis velit deserunt.
          </div>
        </div>
      </div>



      <div className="row">
        <div className="col-6 recieved-worked">
          <div className="heading">
            Recieved Worked Files
          </div>
          <div className="your-files">
            Your Work Files
          </div>
          <textarea name="message" id="" cols="30" rows="10" className="message-text-area"
            placeholder="Message : "></textarea>
        </div>



        <div className="col-6">
          <ChatingPage freelancer_id={order ? order.freelancer_id : ""} username={order ? order.freelancer_name : null} />
        </div>

      </div>


    </div>
  );
};


let mapStateToProps = state => {

  return {
    viewedOrder: state.CustomerOrderReducer.viewedOrder,
  }
}

export default withRouter(connect(mapStateToProps, { getViewdOrder })(ViewCancelledOrder))
