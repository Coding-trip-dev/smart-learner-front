import React, { useState, useEffect } from "react";
import "./_withdraw.scss";

import WithdrawTable from "./withdrawTable";
import { addBankAccount } from '../../../../redux/actions/freelancer/bankServicesAction'
import { connect, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Rating from "@material-ui/lab/Rating";
import { Link } from 'react-router-dom'
// import * as routes from '../../../constants/routePaths'
// import { getAllCourse } from '../../../../redux/actions/institute/courseDetailsAction'
import { getWirhdrawlHistory,getBankDetail,sendWithdrawRequest } from '../../../../redux/actions/freelancer/salesAction'
import CreditCardIcon from '@material-ui/icons/CreditCard';
import { baseURL } from "../../../../redux/config/config";
import axios from 'axios'
import store from "../../../../redux/store";
import { toast } from "react-toastify";
const Withdraw = props => {
  const { sales, getWirhdrawlHistory, getBankDetail,sendWithdrawRequest } = props

  const [bank, setBank] = useState({
  });
  const [state, setState] = useState({
    amount: null
  });
  const [history, setHistory] = useState(null);

  let id = useSelector(state => state.auth.user_id)

  React.useEffect(() => {

    getWirhdrawlHistory({ freelancer_id: "5ea153117fefa018306a3d70" })
    getBankDetail({ freelancer_id: "5ea928f88421aa125c81c179" })
  }, [])
  React.useEffect(() => {
    // if(!userDetail.allCourses){
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


  const addBank = e => {
    console.log('working');

    // addBankAccount()
    fetch(baseURL + "/api/freelancer/withdraw/get-oauth-link", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.url) {
          window.location = data.url + "&scope=read_write&redirect_uri=http://127.0.0.1:3000/freelancer-panel/manage-sales/withdraw";
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

      let body = { userId: id }
      axios.post(baseURL + "/api/freelancer/withdraw/authorize-oauth" + code, body)
        .then(response => {
          console.log(response.data.data)
          if (response.data.data.resp) {
            toast.success("Your bank account has been successfully added.")
            setTimeout(() => {
              window.location = 'http://127.0.0.1:3000/freelancer-panel/manage-sales/withdraw'

            }, 2000)
          }
        }).catch(e => {
          console.log(e);
          toast.error("Added Failed, Internal Server Problem, try agian.")
          setTimeout(() => {
            window.location = 'http://127.0.0.1:3000/freelancer-panel/manage-sales/withdraw'

          }, 2000);

        })
    }
  }, [])



  const sendRequest = e => {
    console.log(sales);
    
    let newState = {
      freelancer_id: "5ea153117fefa018306a3d70",
      acc_number: bank.account_no,
      amount: state.amount
    }
    sendWithdrawRequest(newState)
  }

  const onChangeHandler = e => {
    let name = e.target.name
    let val = e.target.value

    setState({
      ...state,
      [name]: val
    })
  }
  

  return (
    <div className="withdrawal-wrapper">
      <div className="row">
        <div className="col-9">
          <p className="courseHeading">
            Withdraw Status
          </p>
          <p
            className="heading-texting"
          >Minimum Withdrawal Amount  <span>$100 OR ADU 500</span>   </p>
           <div className="withdraw-amount">
            <p>withdraw</p>

            <input type="number" name="amount" id="" className="amount-input" onChange={onChangeHandler}/>
            <span className="aed-text">AED</span>
          </div>

          <div className="send-request">
            <button className="request-bt" onClick={sendRequest}>
              Send Request
              </button>
          </div>
        </div>

        <div className="col-3">
          <div className="row top-sales-details-wrapper">


            <div className="total-sale-wrapper" onClick={addBank} style={{ cursor: 'pointer' }}>

              <img src={require('../../../../assets/Images/bank-logo.png')} alt="" className="bank-logo" />
              <p className="sale-amount">
                Add new
              <br />
              bank account</p>
            </div>
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
        <WithdrawTable headings={array} />
      </div>

    </div>
  );
};


let mapStateToProps = store => {

  // console.log(store);
  
  return {
    sales: store.SalesReducer
  }
}
// let mapDispatchToProps = dispatch => {
//   return {
//      (state, user) => {
//       dispatch(getAllCourse(state, user))
//     }
//   }
// }


export default withRouter(connect(mapStateToProps, { getWirhdrawlHistory, getBankDetail,sendWithdrawRequest })(Withdraw))
