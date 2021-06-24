import axios from 'axios'
import { baseURL } from "../../config/config"
import {
    GET_ALL_NEW_ORDERS,
    GET_ALL_NEW_ORDERS_FAIL,
    GET_ALL_RUNNING_ORDERS,
    GET_ALL_COMPLETED_ORDERS,
    GET_ALL_RUNNING_ORDERS_FAIL,
    GET_ALL_CANCELLED_ORDERS,
    GET_FREELANCER_DESHBOARD
} from '../../constants'
import { toast } from "react-toastify";



export const getNewOrders = (body) => { //Get all gigs
    return dispatch => {
        console.log(body);

        axios.post(baseURL + "/api/freelancer/orders/getneworders",body)
            .then(resp => {
                if (resp) {
                    // toast.success("Profile Successfully updated")
                    console.log(resp);
                    dispatch({
                        type: GET_ALL_NEW_ORDERS,
                        payload: resp.data.data
                    })
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



export const getRunningOrders = (body) => { //Get all gigs
    return dispatch => {
        console.log(body); // body  = {freelancer_id : some id}

        axios.post(baseURL + "/api/freelancer/orders/inprocessorders",body)
            .then(resp => {
                if (resp) {
                    // toast.success("Profile Successfully updated")
                    console.log(resp);
                    dispatch({
                        type: GET_ALL_RUNNING_ORDERS,
                        payload: resp.data.data
                    })
                }
            })
            .catch(err => {
                console.log(err);

                // toast.error("Internal Server Error, try again.")
                // dispatch({
                //     type: GET_ALL_RUNNING_ORDERS_FAIL,
                //     payload: err
                // })
            })

    }
}

export const getCompleteOrders = (body) => { //Get all gigs
    return dispatch => {
        console.log(body);

        axios.post(baseURL + "/api/freelancer/orders/completedorders",body)
            .then(resp => {
                if (resp) {
                    // toast.success("Profile Successfully updated")
                    console.log(resp);
                    dispatch({
                        type: GET_ALL_COMPLETED_ORDERS,
                        payload: resp.data.data
                    })
                }
            })
            .catch(err => {
                console.log(err);

                // toast.error("Internal Server Error, try again.")
                // dispatch({
                //     type: GET_ALL_COMPLETED_ORDERS_FAIL,
                //     payload: err
                // })
            })

    }
}

export const getCanceledOrder = (body) => { //Get all gigs
    return dispatch => {
        console.log(body);

        axios.post(baseURL + "/api/freelancer/orders/cancelledorders",body)
            .then(resp => {
                if (resp) {
                    // toast.success("Profile Successfully updated")
                    console.log(resp);
                    dispatch({
                        type: GET_ALL_CANCELLED_ORDERS,
                        payload: resp.data.data
                    })
                }
            })
            .catch(err => {
                console.log(err);

            })

    }
}

export const getTopDetails = (body) => { //Get all gigs
    return dispatch => {
        console.log(body);

        axios.post(baseURL + "/api/freelancer/orders/dashboard",body)
            .then(resp => {
                if (resp) {
                    // toast.success("Profile Successfully updated")
                    console.log(resp);
                    dispatch({
                        type: GET_FREELANCER_DESHBOARD,
                        payload: resp.data.data
                    })
                }
            })
            .catch(err => {
                console.log(err);

            })

    }
}