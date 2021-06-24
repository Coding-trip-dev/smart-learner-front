import React, { useState } from "react";
import { connect , useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { useStripe, useElements, CardElement, CardNumberElement, CardExpiryElement, CardCvcElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Axios from "axios";
import {payRegistraionFee} from '../../../../redux/actions/payfee'


const CardDetails = props => {
    const {payRegistraionFee} = props
    const [state,setState ] = useState({
        payer_id: '',
        email: '',
        name: '',
        amount: 600
    })
    const stripe = useStripe(); 
    const elements = useElements();
    let user = useSelector(state => state.auth.userDetail )

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardNumberElement,CardExpiryElement,CardCvcElement);
        
        let {error, token} = await stripe.createToken(
            
         cardElement
        )

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[token]', token);
           
            let data = {
                stripeToken: token.id,
                amount: 600,
                name: user.name,
                email: user.email,
                payer_id: user._id
            }



            payRegistraionFee(data,"instructor")
            // Axios.post('http://18.217.77.0:5000/api/instructor/instructor/payfee',data)
            // .then(resp => {
            //     console.log(resp);
                
            // })



        }
    };
    return (
        <>

            <div className="row">
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
                        <CardNumberElement
                            className="card-number-input"
                            options={{
                                style: {

                                    base: {
                                        fontSize: '16px',
                                        color: '#424770',
                                        '::placeholder': {
                                            color: '#aab7c4',
                                        },
                                        marginTop: 10

                                    },
                                    invalid: {
                                        color: '#ff4f58',
                                    },
                                },
                            }}
                        />


                        {/* <input type="text" className="card-number-input" placeholder="Enter your Card Number" /> */}

                    </div>

                    <div className="expiration-section">
                        <div className="expiration-date">
                            <label className="expire-label">Expiration</label>
                            {/* <input type="text" className="expiring-date-input" placeholder="MM/YY" /> */}
                            {/* <span
                                className="expiring-date-input"
                            > */}

                            <CardExpiryElement
                                className="expiring-date-input"
                                options={{
                                    style: {

                                        base: {
                                            fontSize: '16px',
                                            color: '#424770',
                                            '::placeholder': {
                                                color: '#aab7c4',
                                            },
                                            marginTop: 10

                                        },
                                        invalid: {
                                            color: '#ff4f58',
                                        },
                                    },
                                }} />
                            {/* </span> */}

                        </div>
                        <div className="sec-code">
                            <label className="sec-label">Security Code</label>
                            <CardCvcElement className="expiring-date-input" options={{
                                style: {

                                    base: {
                                        fontSize: '16px',
                                        color: '#424770',
                                        '::placeholder': {
                                            color: '#aab7c4',
                                        },
                                        marginTop: 10

                                    },
                                    invalid: {
                                        color: '#ff4f58',
                                    },
                                },
                            }} />
                        </div>
                    </div>

                    <div className="button-wrapper">
                        <button className="pay-button"
                            onClick={handleSubmit}
                        >
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



            </div>


        </>
    );
};


// let mapStateToProps = store => {
//   console.log(store);

//   return {
//     userDetail: store.auth.userDetail
//   }
// }
// let mapDispatchToProps = dispatch => {
//   return {
//     // setNewProfile: (state, user) => {
//     //   dispatch(updateProfileInstructor(state, user))
//     // }
//   }
// }


export default withRouter(connect(null, {payRegistraionFee})(CardDetails))

