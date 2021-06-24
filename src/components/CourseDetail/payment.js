import React, { useState, useEffect } from "react";
import "./scss/_modal.scss";
import Modal from "react-modal";
// import SignIn from "./SignIn";
// import SignUp from "./SignUp";
import { useSelector } from 'react-redux'
import Axios from "axios";
import { useStripe, useElements, CardElement, CardNumberElement, CardExpiryElement, CardCvcElement } from "@stripe/react-stripe-js";
import {payCourseFee} from '../../redux/actions/customerPanel/coursesAction' 
import Cookies from 'js-cookie'
import { toast } from "react-toastify";

const customStyles = {
    content: {
        top: "45%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)"
    }
};

const ModalComp = ({ open, handleCloseModal,course }) => {

    const [state, setState] = useState({
        payer_id: '',
        email: '',
        name: '',
        amount: 600
    })
    
    const stripe = useStripe();
    const elements = useElements();
    let user = useSelector(state => state.auth.userDetail)
    const costomerId = JSON.parse( Cookies.get("user"))
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
        const cardElement = elements.getElement(CardNumberElement, CardExpiryElement, CardCvcElement);
        
        let { error, token } = await stripe.createToken(

            cardElement
        )

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[token]', token);
            console.log('[id]', costomerId._id);

            let data = {
                customer_id: costomerId._id,
                courses: [course],
                name: costomerId.name,
                email: costomerId.email,
                stripeToken: token.id
            }

            console.log(data);
            

            // payRegistraionFee(data, "institute")
            // payCourseFee(data)
            Axios.post('http://18.217.77.0:5000/api/customer/courseorder/placeorder', data)
                .then(resp => {
                    console.log(resp);
                    if(resp.data.message == "Data Found"){
                        toast.success("You have successfuly purchased one course")
                    }

                })



        }
    };

    
    return (
        <>
            <div className="card-details-outer">

                <label className="label-card-number">
                    Card Number
</label>
                <CardNumberElement
                    className="card-number-input"
                    options={{
                        style: {

                            base: {
                                fontSize: '12px',
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



            </div>

            <div className="expiration-section">
                <div className="expiration-date">
                    <label className="expire-label">Expiration</label>
                   

                    <CardExpiryElement
                        className="expiring-date-input"
                        options={{
                            style: {

                                base: {
                                    fontSize: '12px',
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
                                fontSize: '12px',
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
                <div className="no-courses">
                <span className="text-amount">
                  No of courses
                </span>
                <span className="amount-popup">

                  1
                </span>
                <button className="buy-now" title="Buy courses" onClick={handleSubmit}>
                  Buy now
                </button>
              </div>
            </div>
        </>
    )
}

export default ModalComp
// export let handleSubmit