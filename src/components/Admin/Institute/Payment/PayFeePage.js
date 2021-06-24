import React, { useState } from "react";
import "./_payment.scss";
import Stepper from "react-stepper-horizontal";
// import Select from "../../Common/Select";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CardDetails from './cardElement'



const stripePromise = loadStripe("pk_test_1ayr6rHllTEJ6Na0Qa4OkOKx00lHbS30zG");

const PayFee = props => {

  const { setNewProfile } = props

  const [state, setState] = useState({

  })

  return (
    <div className="pay-fee-outer">
      <Elements stripe={stripePromise}>

        <CardDetails />
        {/* <div className="row">
          <div className="col-7 wrapper-payment">



            <div className="heading-outer-payment">

              <p className="pay-fee-heading">Pay Fee
              <span className="currency">
                  aed 600
              </span>
              </p>
              <p className="lower-heading-payment">
                Pay your fee and starting posting courses
            </p>
            </div>


            <div className="card-details-outer">

              <label className="label-card-number">
                Card Number
            </label>

              <input type="text" className="card-number-input" placeholder="Enter your Card Number" />

            </div>

            <div className="expiration-section">
              <div className="expiration-date">
                <label className="expire-label">Expiration</label>
                <input type="text" className="expiring-date-input" placeholder="MM/YY" />
              </div>
              <div className="sec-code">
                <label className="sec-label">Security Code</label>
                <input type="text" className="expiring-date-input" placeholder="" />
              </div>
            </div>

            <div className="button-wrapper">
              <button className="pay-button">
                Pay (AED 600)
            </button>
            </div>
          </div>

          <div className="col-4">

            <div className="terms-cond">
              <p className="heading-term-cond">
                Term and Conditions
            </p>
              <p className="term-cond-details">
                In order to create an engaging learning experience, the role of instructor is optional, but the role of learner is essential. - Bernard Bull
            </p>
            </div>

          </div>



        </div> */}
      </Elements>

    </div>
  );
};


let mapStateToProps = store => {
  console.log(store);

  return {
    userDetail: store.auth.userDetail
  }
}
let mapDispatchToProps = dispatch => {
  return {
    // setNewProfile: (state, user) => {
    //   dispatch(updateProfileInstructor(state, user))
    // }
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PayFee))

