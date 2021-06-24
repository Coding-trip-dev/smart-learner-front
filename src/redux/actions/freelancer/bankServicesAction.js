import axios from 'axios'
import { baseURL } from "../../config/config"
import {
    GET_ALL_SALES,
    GET_ALL_SALES_FAIL,
    GET_WITHDRAWN_HISTORY,
    GET_WITHDRAWN_HISTORY_FAIL
} from '../../constants'
import { toast } from "react-toastify";



export const addBankAccount = (body) => { //Get all gigs
    return dispatch => {
        console.log(body);
        // user id to be sent in the body as freelancer_id ="user id" 
        
        axios.get(baseURL + "/api/freelancer/withdraw/get-oauth-link", body)
            .then(resp => {
                if (resp) {
                    // toast.success("Profile Successfully updated")
                    console.log(resp);
                    // dispatch({
                    //     type: GET_ALL_SALES,
                    //     payload: resp.data.data
                    // })
                }
            })
            .catch(err => {
                console.log(err);

                // toast.error("Internal Server Error, try again.")
                // dispatch({
                //     type: GET_ALL_SALES_FAIL,
                //     payload: err
                // })
            })

    }
}


// export const getWirhdrawlHistory = (body) => { //Get all gigs
//     return dispatch => {
//         console.log(body);
//         // user id to be sent in the body as freelancer_id ="user id" 
        
//         axios.post(baseURL + "/api/freelancer/withdraw/withdrawhistory", body)
//             .then(resp => {
//                 if (resp) {
//                     // toast.success("Profile Successfully updated")
//                     console.log(resp);
//                     dispatch({
//                         type: GET_WITHDRAWN_HISTORY,
//                         payload: resp.data.data
//                     })
//                 }
//             })
//             .catch(err => {
//                 console.log(err);

//                 // toast.error("Internal Server Error, try again.")
//                 dispatch({
//                     type: GET_WITHDRAWN_HISTORY_FAIL,
//                     payload: err
//                 })
//             })

//     }
// }

// export const createService = (body) => {
//     return dispatch => {

//         let formData = new FormData();



//         function getFormData(formData, data, previousKey) {
//             if (data instanceof Object) {
//                 Object.keys(data).forEach(key => {
//                     const value = data[key];
//                     if (value instanceof Object && !Array.isArray(value)) {
//                         return getFormData(formData, value, key);
//                     }
//                     if (previousKey) {
//                         key = `${previousKey}[${key}]`;
//                     }
//                     if (Array.isArray(value)) {
//                         value.forEach((val, key) => {
//                             formData.append(`${key}[]`, val);
//                             if (key !== "images") {

//                                 if (val instanceof Object && !Array.isArray(val)) {
//                                     return getFormData(formData, val, key);
//                                 }
//                             }
//                         });
//                     } else {
//                         formData.append(key, value);
//                     }
//                 });
//             }
//         }

//         getFormData(formData, body)

//         axios.post(baseURL + "/api/freelancer/services/createservice", formData)
//             .then(resp => {
//                 if (resp) {
//                     // toast.success("Profile Successfully updated")
//                     console.log(resp.data.data);
//                     dispatch({
//                         type: GET_ALL_FREELANCER_SERVICES,
//                         payload: resp.data.data
//                     })
//                     dispatch(getAllGigs)
//                 }
//             })
//             .catch(err => {
//                 console.log(err);

//                 // toast.error("Internal Server Error, try again.")
//                 dispatch({
//                     type: GET_ALL_FREELANCER_SERVICES_FAIL,
//                     payload: err
//                 })
//             })

//     }
// }


// export const updateService = (body) => {
//     return dispatch => {

//         let formData = new FormData();



//         function getFormData(formData, data, previousKey) {
//             if (data instanceof Object) {
//                 Object.keys(data).forEach(key => {
//                     const value = data[key];
//                     if (value instanceof Object && !Array.isArray(value)) {
//                         return getFormData(formData, value, key);
//                     }
//                     if (previousKey) {
//                         key = `${previousKey}[${key}]`;
//                     }
//                     if (Array.isArray(value)) {
//                         value.forEach((val, key) => {
//                             formData.append(`${key}[]`, val);
//                             if (key !== "images") {

//                                 if (val instanceof Object && !Array.isArray(val)) {
//                                     return getFormData(formData, val, key);
//                                 }
//                             }
//                         });
//                     } else {
//                         formData.append(key, value);
//                     }
//                 });
//             }
//         }

//         getFormData(formData, body)

//         axios.post(baseURL + "/api/freelancer/services/updateservice", formData)
//             .then(resp => {
//                 if (resp) {
//                     toast.success("Profile Successfully updated")
//                     console.log(resp.data.data);
//                     // dispatch({
//                     //     type: GET_ALL_FREELANCER_SERVICES,
//                     //     payload: resp.data.data
//                     // })
//                     // dispatch(getAllGigs)
//                 }
//             })
//             .catch(err => {
//                 console.log(err);

//                 toast.error("Internal Server Error, try again.")
//                 // dispatch({
//                 //     type: GET_ALL_FREELANCER_SERVICES_FAIL,
//                 //     payload: err
//                 // })
//             })

//     }
// }



// export const deleteGig = (body) => {    //Get all gigs
//     return dispatch => {
//         console.log(body);

//         axios.post(baseURL + "/api/freelancer/services/getallservices",body)
//             .then(resp => {
//                 if (resp) {
//                     // toast.success("Profile Successfully updated")
//                     // console.log(resp);
//                     dispatch({
//                         type: GET_ALL_FREELANCER_GIGS,
//                         payload: resp.data.data
//                     })
//                 }
//             })
//             .catch(err => {
//                 console.log(err);

//                 // toast.error("Internal Server Error, try again.")
//                 dispatch({
//                     type: GET_ALL_FREELANCER_GIGS_FAIL,
//                     payload: err
//                 })
//             })

//     }
// }