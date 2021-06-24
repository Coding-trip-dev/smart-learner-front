import React, { useState, useEffect } from "react";
import "./_withdraw.scss";

import WithdrawTable from "./withdrawTable";
import { updateProfileInstructor } from '../../../../../redux/actions/instructor/profileUpdate'
import { connect, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Rating from "@material-ui/lab/Rating";
import { Link } from 'react-router-dom'
import * as routes from '../../../../../constants/routePaths'
// import { getAllCourse } from '../../../../../redux/actions/institute/courseDetailsAction'
import { getWirhdrawlHistory, getBankDetail, sendWithdrawRequest } from '../../../../../redux/actions/institute/salesAction'
import { baseURL } from "../../../../../redux/config/config";
import axios from 'axios'
import { toast } from 'react-toastify'

const Withdraw = props => {
  const { getWirhdrawlHistory, sales, getBankDetail, sendWithdrawRequest } = props

  const [history, setHistory] = useState({
  });
  const [bank, setBank] = useState({
  });
  const [state, setState] = useState({
    amount: null
  });
  let id = useSelector(state => state.auth.user_id)

  React.useEffect(() => {
    getWirhdrawlHistory({ institute_id: "5e9d4a5eab438002fc7d97df" })
    getBankDetail({ institute_id: "5e9d4a5eab438002fc7d97df" })
  }, [])
  React.useEffect(() => {
    setHistory(sales.withdrawHistory)
    setBank(sales.bankDetail)
  }, [sales])


  const array = [
    "Date",
    "Name",
    "Bank Detail",
    "Status",
    "Amount"

  ]
  

  const addBankAcc = e => {
    fetch(baseURL + "/api/institute/withdraw/get-oauth-link", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.url) {
          window.location = data.url + "&scope=read_write&redirect_uri=http://127.0.0.1:3000/institute/sales/withdraw";
          console.log(data.url);

        } else {
          // elmButton.removeAttribute("disabled");
          // elmButton.textContent = "<Something went wrong>";
          console.log("data", data);
        }
      });

  }
  useEffect(() => {
    console.log(props);

    let code = props.location.search
    if (code) {
      console.log('workis' + code);

      let body = {
        userId: "5e9d4a5eab438002fc7d97df" // temp id
        // id 
      }
      axios.post(baseURL + "/api/institute/withdraw/authorize-oauth" + code, body)
        .then(response => {
          console.log(response.data.data)
          if (response.data.data.resp) {
            toast.success("Your bank account has been successfully added.")
            setTimeout(() => {
              window.location = 'http://127.0.0.1:3000/institute/sales/withdraw'

            }, 2000)
          }
        }).catch(e => {
          console.log(e);
          toast.error("Added Failed, Internal Server Problem, try agian.")
          setTimeout(() => {
            window.location = 'http://127.0.0.1:3000/institute/sales/withdraw'

          }, 2000);

        })
    }
  }, [])

  console.log(bank);

  const sendRequest = e => {
    let newState = {
      institute_id: "5e9d4a5eab438002fc7d97df",
      acc_number: bank.account_no,
      amount: state.amount
    }
    sendWithdrawRequest(newState)
  }

  const onChangeHandler = e=>{
    let name = e.target.name
    let val = e.target.value

    setState({
      ...state,
      [name]: val
    })
  }

  return (
    <div className="withdrawal-wrapper-institute">
      <div className="row">
        <div className="col-md-7">
          <p className="courseHeading">
            Withdraw States
          </p>
          <p
            className="heading-texting"
          >Minimum Withdrawal Amount  <span>$100 OR ADU 500</span>   </p>
        </div>
        <div className="col-md-5">

          <p className="acc-balance">
            Account Balance: <span>adu 625</span>
          </p>
        </div>
      </div>

      <div className="row top-sales-details-wrapper">
        <div className="col-9">
          <div className="user-bank-details">

            <div className="withdraw-amount">
              <p>withdraw</p>

              <input type="number" name="amount" className="select-amount" onChange={onChangeHandler} />
              <span className="aed-text">AED</span>

            </div>
            <div className="send-request">
              <button className="request-bt" onClick={sendRequest}>
                Send Request
              </button>
            </div>

          </div>
        </div>

        <div className="col-3">
          <div className="total-sale-wrapper" title="Add Bank Account" onClick={addBankAcc}>

            <img src={require('../../../../../assets/Images/bank-logo.png')} alt="" className="bank-logo" />
            <p className="sale-amount">
              Add new
              <br />
              bank account</p>
          </div>
        </div>
      </div>


      <div className="row">
        <div className="col-10 withdraw-transitions">
          Withdraw Transitions
        </div>


        <div className="col-2">
          <select name="" id="" className="select-month-transaction"  >

            <option value="select topic">Last Month</option>
            <option value="select topic">1</option>
            <option value="select topic">2</option>
            <option value="select topic">3</option>


          </select>
        </div>
      </div>

      <div className="row">
        <WithdrawTable headings={array} data={history} />
      </div>

    </div>
  );
};


let mapStateToProps = store => {

  return {
    sales: store.InstituteSaleReducer
  }
}


export default withRouter(connect(mapStateToProps, {
  getWirhdrawlHistory,
  getBankDetail,
  sendWithdrawRequest
})(Withdraw))
