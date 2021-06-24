import React, { useState } from "react";
import "./_manage_sales.scss";

import SalesTable from "./salesTable";
import { updateProfileInstructor } from '../../../../redux/actions/instructor/profileUpdate'
import { connect, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Rating from "@material-ui/lab/Rating";
import { Link } from 'react-router-dom'
import * as routes from '../../../../constants/routePaths'
import { getAllCourse } from '../../../../redux/actions/institute/courseDetailsAction'
import { getAllSales } from '../../../../redux/actions/institute/salesAction'


const ManageSales = props => {
  const { getAllCourse, getAllSales, sales } = props

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
  const [balance, setBalance] = useState({
    all: null
  });


  let institute_id = useSelector(state => state.auth.user_id)
  React.useEffect(() => {
    // if(!userDetail.allCourses){
    getAllCourse({ institute_id: institute_id }, "institute")
    getAllSales({ institute_id: institute_id })
    // }
  }, [])

  React.useEffect(() => {
    setBalance(sales.balance)
  }, [sales])

  const array = [
    "Date",
    "Buyer Name",
    "Course Name",
    "D/B Admin",
    "D/B Teacher",
    "Debit",
    "Credit",
    ""

  ]
  const dataArray = [
    {
      date: '20-09-2019',
      img: 'https://www.livestrong.org/sites/default/files/greg_lee_profile.png',
      name: "Imad hussain",
      course: "Intro to general mathematics",
      dbAdmin: "5%",
      dbTeacher: "5%",
      debt: '$ 5.00',
      credit: '$ 90.00',
      more: <MoreVertIcon />
    },
    {
      date: '20-09-2019',
      img: 'https://www.livestrong.org/sites/default/files/greg_lee_profile.png',
      name: "Imad hussain",
      course: "Intro to general mathematics",
      dbAdmin: "5%",
      dbTeacher: "5%",
      debt: '--',
      credit: '$ 90.00',
      more: <MoreVertIcon />
    },
    {
      date: '20-09-2019',
      img: 'https://www.livestrong.org/sites/default/files/greg_lee_profile.png',
      name: "Imad hussain",
      course: "Intro to general mathematics",
      dbAdmin: "5%",
      dbTeacher: "5%",
      debt: '$ 5.00',
      credit: '--',
      more: <MoreVertIcon />
    },
    {
      date: '20-09-2019',
      img: 'https://www.livestrong.org/sites/default/files/greg_lee_profile.png',
      name: "Imad hussain",
      course: "Intro to general mathematics",
      dbAdmin: "5%",
      dbTeacher: "5%",
      debt: '$ 5.00',
      credit: '--',
      more: <MoreVertIcon />
    },
    {
      date: '20-09-2019',
      img: 'https://www.livestrong.org/sites/default/files/greg_lee_profile.png',
      name: "Imad hussain",
      course: "Intro to general mathematics",
      dbAdmin: "5%",
      dbTeacher: "5%",
      debt: '$ 5.00',
      credit: '$ 90.00',
      more: <MoreVertIcon />
    },


  ]


  console.log(balance);


  return (
    <div className="manage-sales-wrapper">
      <div className="row">
        <div className="col-md-9">
          <h3 className="courseHeading">
            Manage Your sales
          </h3>
          <p
            className="heading-texting"
          >It's all about your sales, credit and debits.</p>
        </div>
        <div className="col-md-3">
          <Link
            to={routes.WithdrawInstitute}
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


      <div className="row">
        <div className="col-6"></div>
        <div className="col-2">
          <select name="" id="" className="select-topic-in-question"  >

            <option value="select topic">Search by student</option>
            <option value="select topic">1</option>
            <option value="select topic">2</option>
            <option value="select topic">3</option>


          </select>
        </div>
        <div className="col-2">
          <select name="" id="" className="select-topic-in-question"  >

            <option value="select topic">Search by course</option>
            <option value="select topic">1</option>
            <option value="select topic">2</option>
            <option value="select topic">3</option>


          </select>
        </div>
        <div className="col-2">
          <select name="" id="" className="select-topic-in-question"  >

            <option value="select topic">Search by Date</option>
            <option value="select topic">1</option>
            <option value="select topic">2</option>
            <option value="select topic">3</option>


          </select>
        </div>
      </div>

      <div className="row">
        <SalesTable headings={array} data={dataArray} /> 
      </div>

    </div>
  );
};


let mapStateToProps = store => {

  return {
    sales: store.InstituteSaleReducer
  }
}


export default withRouter(connect(mapStateToProps, { getAllSales, getAllCourse })(ManageSales))
