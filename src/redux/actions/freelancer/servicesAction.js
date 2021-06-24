import axios from 'axios'
import { baseURL } from "../../config/config"
import {
    GET_ALL_FREELANCER_SERVICES,
    GET_ALL_FREELANCER_SERVICES_FAIL,
    GET_ALL_FREELANCER_GIGS,
    GET_ALL_FREELANCER_GIGS_FAIL
} from '../../constants'
import { toast } from "react-toastify";



export const getAllGigs = (body) => { //Get all gigs
    return dispatch => { 
        console.log(body); 

        axios.post(baseURL + "/api/freelancer/services/getallservices",body)
            .then(resp => {
                if (resp) {
                    // toast.success("Profile Successfully updated")
                    // console.log(resp);
                    dispatch({
                        type: GET_ALL_FREELANCER_GIGS,
                        payload: resp.data.data
                    })
                }
            })
            .catch(err => {
                console.log(err);

                // toast.error("Internal Server Error, try again.")
                dispatch({
                    type: GET_ALL_FREELANCER_GIGS_FAIL,
                    payload: err
                })
            })

    }
}


export const getAllServices = (body) => { //Get all service using in the dropdown of adding new gig
    return dispatch => {
        console.log(body);

        axios.post(baseURL + "/api/freelancer/services/getmainservices")
            .then(resp => {
                if (resp) {
                    // toast.success("Profile Successfully updated")
                    console.log(resp.data.data);
                    dispatch({
                        type: GET_ALL_FREELANCER_SERVICES,
                        payload: resp.data.data
                    })
                }
            })
            .catch(err => {
                console.log(err);

                toast.error("Internal Server Error, try again.")
                // dispatch({
                //     type: GET_ALL_FREELANCER_SERVICES_FAIL,
                //     payload: err
                // })
            })

    }
}



export const createService = (body) => {
    return dispatch => {

        let formData = new FormData();

        function getFormData(formData, data, previousKey) {
            if (data instanceof Object) {
                Object.keys(data).forEach(key => {
                    const value = data[key];
                    if (value instanceof Object && !Array.isArray(value)) {
                        return getFormData(formData, value, key);
                    }
                    if (previousKey) {
                        key = `${previousKey}[${key}]`;
                    }
                    if (Array.isArray(value)) {
                        value.forEach((val, key) => {
                            formData.append(`${key}[]`, val);
                            if (key !== "images") {

                                if (val instanceof Object && !Array.isArray(val)) {
                                    return getFormData(formData, val, key);
                                }
                            }
                        });
                    } else {
                        formData.append(key, value);
                    }
                });
            }
        }

        getFormData(formData, body)

        axios.post(baseURL + "/api/freelancer/services/createservice", formData)
            .then(resp => {
                console.log(resp);
                if (resp.data.success) {
                    toast.success("Service Successfully Created")
                    dispatch({
                        type: GET_ALL_FREELANCER_SERVICES,
                        payload: resp.data.data
                    })
                    dispatch(getAllGigs)
                
                }
                if(!resp.data.success){

                    toast.error("Please fill all the fields.")
                }
            })
            .catch(err => {
                console.log(err);

                
            })

    }
}


export const updateService = (body) => {
    return dispatch => {

        let formData = new FormData();



        function getFormData(formData, data, previousKey) {
            if (data instanceof Object) {
                Object.keys(data).forEach(key => {
                    const value = data[key];
                    if (value instanceof Object && !Array.isArray(value)) {
                        return getFormData(formData, value, key);
                    }
                    if (previousKey) {
                        key = `${previousKey}[${key}]`;
                    }
                    if (Array.isArray(value)) {
                        value.forEach((val, key) => {
                            formData.append(`${key}[]`, val);
                            if (key !== "images") {

                                if (val instanceof Object && !Array.isArray(val)) {
                                    return getFormData(formData, val, key);
                                }
                            }
                        });
                    } else {
                        formData.append(key, value);
                    }
                });
            }
        }

        getFormData(formData, body)

        axios.post(baseURL + "/api/freelancer/services/updateservice", formData)
            .then(resp => {
                if (resp) {
                    toast.success("Profile Successfully updated")
                    console.log(resp.data.data);
                    // dispatch({
                    //     type: GET_ALL_FREELANCER_SERVICES,
                    //     payload: resp.data.data
                    // })
                    // dispatch(getAllGigs)
                }
            })
            .catch(err => {
                console.log(err);

                toast.error("Internal Server Error, try again.")
                // dispatch({
                //     type: GET_ALL_FREELANCER_SERVICES_FAIL,
                //     payload: err
                // })
            })

    }
}



export const deleteGig = (body,user_id) => {    //Get all gigs
    return dispatch => {
        console.log(body);


        axios.post(baseURL + "/api/freelancer/services/deleteservice",body)
            .then(resp => {
                if (resp) {
                    toast.success("Gig Successfully Deleted")
                    // console.log(resp);
                    // dispatch({
                    //     type: GET_ALL_FREELANCER_GIGS,
                    //     payload: resp.data.data
                    // })
                    dispatch(getAllGigs({freelancer_id: user_id}))

                }
            })
            .catch(err => {
                console.log(err);

                toast.error("Internal Server Error, try again.")
                // dispatch({
                //     type: GET_ALL_FREELANCER_GIGS_FAIL,
                //     payload: err
                // })
            })

    }
}

export const updateStatus = (body,user_id) => {    //Get all gigs
    return dispatch => {
        console.log(body);


        axios.post(baseURL + "/api/freelancer/services/updatestatus",body)
            .then(resp => {
                if (resp) {
                    toast.success("Gig Status Changed")
                    // console.log(resp);
                    // dispatch({
                    //     type: GET_ALL_FREELANCER_GIGS,
                    //     payload: resp.data.data
                    // })
                    dispatch(getAllGigs({freelancer_id: user_id}))

                }
            })
            .catch(err => {
                console.log(err);

                toast.error("Internal Server Error, try again.")
                // dispatch({
                //     type: GET_ALL_FREELANCER_GIGS_FAIL,
                //     payload: err
                // })
            })

    }
}