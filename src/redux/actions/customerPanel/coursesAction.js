import axios from 'axios'
import { baseURL } from "../../config/config"
import {
    GET_ALL_COURSES_CUSTOMER,
    GET_ONE_COURSES_CUSTOMER,
    COURSE_PURCHASED
} from '../../constants'
import { toast } from "react-toastify";


 
export const getAllCourses = (body) => { //Get all gigs
    return dispatch => {
        console.log(body);
        // user id to be sent in the body as customer_id ="user id" 
        
        axios.post(baseURL + "/api/customer/courseorder/getallorders", body)
            .then(resp => {
                if (resp) {
                    // toast.success("Profile Successfully updated")
                    console.log(resp);
                    dispatch({
                        type: GET_ALL_COURSES_CUSTOMER,
                        payload: resp.data.data
                    })
                }
            })
            .catch(err => {
                console.log(err);
            })

    }
}
 
export const getOneCourse = (body) => { //Get all gigs
    return dispatch => {
        console.log(body);
        // user id to be sent in the body as customer_id ="user id" 
        
        axios.post(baseURL + "/api/customer/course/getcourse", body)
            .then(resp => {
                if (resp) {
                    // toast.success("Profile Successfully updated")
                    console.log(resp);
                    dispatch({
                        type: GET_ONE_COURSES_CUSTOMER,
                        payload: resp.data.data
                    })
                }
            })
            .catch(err => {
                console.log(err);
            })

    }
}
 
export const payCourseFee = (body) => { //Get all gigs
    return dispatch => {
        console.log(body);
        // user id to be sent in the body as customer_id ="user id" 
        
        axios.post("http://localhost:5000/api/customer/courseorder/placeorder", body)
            .then(resp => {
                if (resp) {
                    // toast.success("Profile Successfully updated")
                    if (resp) {
                        toast.success("Payment Process will take few minutes.")
                        dispatch({
                            type: COURSE_PURCHASED,
                            payload: resp.data.data 
                        })
                    }
                }
            })
            .catch(err => {
                console.log(err);
            })

    }
}

