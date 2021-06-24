import React, { useState } from "react";
import "./_manage_sales.scss";

import SalesTable from "./salesTable";
import { connect, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Rating from "@material-ui/lab/Rating";
import { Link } from 'react-router-dom'
import * as routes from '../../../constants/routePaths'
// import { getAllCourse } from '../../../../redux/actions/institute/courseDetailsAction'
import { getAllSales } from '../../../redux/actions/freelancer/salesAction'
import { getCompleteOrders } from '../../../redux/actions/freelancer/orderAction'

const ManageSales = props => {
  const { getAllSales, sales, getCompleteOrders, completedOrders } = props

  const [activeStep, setActiveStep] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [orders, setOrders] = useState()
  const [balance, setBalance] = useState({
    all: null
  });

  let id = useSelector(state => state.auth.user_id)
  React.useEffect(() => {
    getAllSales({ freelancer_id: id })
    getCompleteOrders({ freelancer_id: id })
  }, [])

  React.useEffect(() => {
    setBalance(sales.balance)
    setOrders(completedOrders)
  }, [sales, completedOrders])

  const array = [
    "Date",
    "Buyer Name",
    "Order Detail",
    "Status",
    "Amount"

  ]
  const dataArray = [
    {
      date: '20-09-2019',
      img: 'https://www.livestrong.org/sites/default/files/greg_lee_profile.png',
      name: "Imad hussain",
      course: "Create my logo Design",
      status: "pending",
      amount: "$50",
      more: <MoreVertIcon />
    },
    {
      date: '20-09-2019',
      img: 'https://www.livestrong.org/sites/default/files/greg_lee_profile.png',
      name: "Imad hussain",
      course: "Create my logo Design",
      status: "pending",
      amount: "$50",
      more: <MoreVertIcon />
    },
    {
      date: '20-09-2019',
      img: 'https://www.livestrong.org/sites/default/files/greg_lee_profile.png',
      name: "Imad hussain",
      course: "Create my logo Design",
      status: "recieved",
      amount: "$50",
      more: <MoreVertIcon />
    },
    {
      date: '20-09-2019',
      img: 'https://www.livestrong.org/sites/default/files/greg_lee_profile.png',
      name: "Imad hussain",
      course: "Create my logo Design",
      status: "recieved",
      amount: "$50",
      more: <MoreVertIcon />
    },
    {
      date: '20-09-2019',
      img: 'https://www.livestrong.org/sites/default/files/greg_lee_profile.png',
      name: "Imad hussain",
      course: "Create my logo Design",
      status: "pending",
      amount: "$50",
      more: <MoreVertIcon />
    },



  ]




  return (
    <div className="manage-sales-wrapper-freelancer">
      <div className="row">
        <div className="col-md-9">
          <h3 className="courseHeading">
            Manage sales
          </h3>
          {/* <p
            className="heading-texting"
          >It's all about your sales, credit and debits.</p> */}
        </div>
        <div className="col-md-3">
          <Link
            to={routes.freelancerWithDraw}
          >
            <button className="add-course">
              withdraw
          </button>
          </Link>
        </div>
      </div>

      <div className="row top-sales-details-wrapper">
        <div className="col-3">
          <div className="total-sale-wrapper">
            <p className="sale-heading">Total sale</p>
            <p className="sale-amount">${balance ? balance.totalSale : 0}</p>
          </div>
        </div>
        <div className="col-3">
          <div className="total-sale-wrapper">
            <p className="sale-heading">Pending amount</p>
            <p className="sale-amount">${balance ? balance.pendingWithdraw : 0}</p>
          </div>
        </div>
        <div className="col-3">
          <div className="total-sale-wrapper">
            <p className="sale-heading">Recieved Amount</p>
            {/* <p className="sale-amount">$60</p> */}
            <p className="sale-amount">${balance ? balance.receivedAmount : 0}</p>
          </div>
        </div>
        <div className="col-3">
          <div className="total-sale-wrapper">
            <p className="sale-heading">Available Balance</p>
            <p className="sale-amount">${balance ? balance.availableBalance : 0}</p>
          </div>
        </div>
      </div>

      <div className="query-table-section">

        <div className="student-query-head-section">
          <div className="row">
            <div className="col-10 ">
              <p className="student-heading">Completed Orders</p>
            </div>
            <div className="col-2">
              <select name="" id="" className="select-topic-in-question"  >

                <option value="select topic">Last Month</option>
                <option value="select topic">1</option>
                <option value="select topic">2</option>
                <option value="select topic">3</option>


              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <SalesTable headings={array} data={orders} />
      </div>

    </div>
  );
};


let mapStateToProps = store => {

  return {
    sales: store.SalesReducer,
    completedOrders: store.OrderReducer.completedOrder
  }
}
// let mapDispatchToProps = dispatch => {
//   return {
//     getCourses: (state, user) => {
//       dispatch(getAllCourse(state, user))
//     }
//   }
// }


export default withRouter(connect(mapStateToProps, { getAllSales, getCompleteOrders })(ManageSales))
