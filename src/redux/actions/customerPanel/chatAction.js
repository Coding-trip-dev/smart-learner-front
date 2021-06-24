import axios from 'axios'
import { baseURL } from "../../config/config"
import {
    CUSTOMER_ALL_MESSAGE,
    GET_ALL_MESSAGE
} from '../../constants'
import { toast } from "react-toastify";



export const sendNewMsg = (body) => { //Get all messages
    return dispatch => {
        console.log(body);

        axios.post(baseURL + "/api/customer/messaging/send-message", body)
            .then(resp => {
                if (resp) {
                    // toast.success("Profile Successfully updated")
                    console.log(resp.data.data);

                    if (resp.data.data) {

                        dispatch({
                            type: CUSTOMER_ALL_MESSAGE,
                            payload: resp.data.data.storeMessage
                        })
                    }
                }
            })
            .catch(err => {
                console.log(err);

                // toast.error("Internal Server Error, try again.")
                // dispatch({
                //     type: GET_ALL_NEW_ORDERS_FAIL,
                //     payload: err
                // })
            })

    }
}

export const getChat = (body) => { //Get all messages
    return dispatch => {
        console.log(body);

        axios.post(baseURL + "/api/customer/messaging/getcustomerthread", body)
            .then(resp => {
                if (resp) {
                    // toast.success("Profile Successfully updated")
                    console.log(resp.data.data);

                    if (resp.data.data) {

                        dispatch({
                            type: CUSTOMER_ALL_MESSAGE,
                            payload: resp.data.data.storeMessage
                        })
                    }
                }
            })
            .catch(err => {
                console.log(err);

                // toast.error("Internal Server Error, try again.")
                // dispatch({
                //     type: GET_ALL_NEW_ORDERS_FAIL,
                //     payload: err
                // })
            })

    }
}

export const replyByCustomer = (body) => { //Get all messages
    return dispatch => {
        console.log(body);

        axios.post(baseURL + "/api/customer/messaging/reply", body)
            .then(resp => {
                if (resp) {
                    // toast.success("Profile Successfully updated")
                    console.log(resp.data.data.storeMessage);

                    if (resp.data.data) {

                        dispatch({
                            type: CUSTOMER_ALL_MESSAGE,
                            payload: resp.data.data.storeMessage
                        })
                    }
                }
            })
            .catch(err => {
                console.log(err);

                // toast.error("Internal Server Error, try again.")
                // dispatch({
                //     type: GET_ALL_NEW_ORDERS_FAIL,
                //     payload: err
                // })
            })

    }
}

export const sendMsgByFreelancer = (body) => { //Get all messages
    return dispatch => {
        console.log(body);

        axios.post(baseURL + "/api/customer/messaging/send-message", body)
            .then(resp => {
                if (resp) {
                 
                    console.log(resp.data.data.storeMessage);

                    if (resp.data.data) {

                        dispatch({
                            type: GET_ALL_MESSAGE,
                            payload: resp.data.data.storeMessage
                        })
                    }
                }
            })
            .catch(err => {
                console.log(err);

                // toast.error("Internal Server Error, try again.")
                // dispatch({
                //     type: GET_ALL_NEW_ORDERS_FAIL,
                //     payload: err
                // })
            })

    }
}
