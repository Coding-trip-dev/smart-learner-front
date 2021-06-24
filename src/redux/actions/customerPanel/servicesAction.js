import axios from 'axios'
import { baseURL } from "../../config/config"
import {
    GET_SERVICES_CUSTOMER,
    FREELANCER_SERVICES_BY_CUSTOMER,
    GET_SERVICES_CATEGORY_CUSTOMER
} from '../../constants'
import { toast } from "react-toastify";


 
export const getServices = (body) => { //Get all gigs
    return dispatch => {
        console.log(body);
        // user id to be sent in the body as freelancer_id ="user id" 
        
        axios.post(baseURL + "/api/customer/service/getallmainservices", body)
            .then(resp => {
                if (resp) {
                    // toast.success("Profile Successfully updated")
                    console.log(resp);
                    dispatch({
                        type: GET_SERVICES_CUSTOMER,
                        payload: resp.data.data
                    })
                }
            })
            .catch(err => {
                console.log(err);
            })

    }
}
 
export const getServicesCategory = (body) => { //Get all gigs
    return dispatch => {
        console.log(body);
        // user id to be sent in the body as freelancer_id ="user id" 
        
        axios.post(baseURL + "/api/customer/service/getservicecategories", body)
            .then(resp => {
                if (resp) {
                    // toast.success("Profile Successfully updated")
                    console.log(resp);
                    dispatch({
                        type: GET_SERVICES_CATEGORY_CUSTOMER,
                        payload: resp.data.data
                    })
                }
            })
            .catch(err => {
                console.log(err);
            })

    }
}


export const getFreelancerServices = (body) => { //Get all gigs
    return dispatch => {
        console.log(body);
        // user id to be sent in the body as freelancer_id ="user id" 
        
        axios.post(baseURL + "/api/customer/service/getfreelancerservices", body)
            .then(resp => {
                if (resp) {
                    // toast.success("Profile Successfully updated")
                    console.log(resp);
                    dispatch({
                        type: FREELANCER_SERVICES_BY_CUSTOMER,
                        payload: resp.data.data
                    })
                }
            })
            .catch(err => {
                console.log(err);
            })

    }
}
