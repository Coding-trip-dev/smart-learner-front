import axios from 'axios'
import { baseURL } from "../../config/config"
import {
    CUSTOMER_INPROCESS_ORDERS,
    CUSTOMER_COMPLETED_ORDERS,
    CUSTOMER_CANCELED_ORDERS,
    CUSTOMER_VIEW_SINGLE_ORDER
} from '../../constants'
import { toast } from "react-toastify";


 
export const getInprocessOrders = (body) => { //Get all gigs
    return dispatch => {
        console.log(body);
        // user id to be sent in the body as customer_id ="user id" 
        
        axios.post(baseURL + "/api/customer/serviceorder/inprocessorders", body)
            .then(resp => {
                if (resp) {
                    // toast.success("Profile Successfully updated")
                    console.log(resp);
                    dispatch({
                        type: CUSTOMER_INPROCESS_ORDERS,
                        payload: resp.data.data
                    })
                }
            })
            .catch(err => {
                console.log(err);
            })

    }
}


export const getCompletedOrders = (body) => { //Get all gigs
    return dispatch => {
        console.log(body);
        // user id to be sent in the body as customer_id ="user id" 
        
        axios.post(baseURL + "/api/customer/serviceorder/completedorders", body)
            .then(resp => {
                if (resp) {
                    // toast.success("Profile Successfully updated")
                    console.log(resp);
                    dispatch({
                        type: CUSTOMER_COMPLETED_ORDERS,
                        payload: resp.data.data
                    })
                }
            })
            .catch(err => {
                console.log(err);
            })

    }
}

export const getCancelOrders = (body) => { //Get all gigs
    return dispatch => {
        console.log(body);
        // user id to be sent in the body as customer_id ="user id" 
        
        axios.post(baseURL + "/api/customer/serviceorder/cancelledorders", body)
            .then(resp => {
                if (resp) {
                    // toast.success("Profile Successfully updated")
                    console.log(resp);
                    dispatch({
                        type: CUSTOMER_CANCELED_ORDERS,
                        payload: resp.data.data
                    })
                }
            })
            .catch(err => {
                console.log(err);
            })

    }
}

export const getViewdOrder = (body) => { //Get all gigs
    return dispatch => {
        console.log(body);
        // order id to be sent in the body as order_id ="order id" 
        
        axios.post(baseURL + "/api/customer/serviceorder/getorder", body)
            .then(resp => {
                if (resp) {
                    // toast.success("Profile Successfully updated")
                    console.log(resp);
                    dispatch({
                        type: CUSTOMER_VIEW_SINGLE_ORDER,
                        payload: resp.data.data
                    })
                }
            })
            .catch(err => {
                console.log(err);
            })

    }
}
