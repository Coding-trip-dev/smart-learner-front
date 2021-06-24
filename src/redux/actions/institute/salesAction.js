import axios from 'axios'
import { baseURL } from "../../config/config"
import {
    GET_ALL_SALES_INSTITUTE,
    GET_ALL_SALES_FAIL_INSTITUTE,
    GET_WITHDRAWN_HISTORY_INSTITUTE,
    GET_WITHDRAWN_HISTORY_FAIL_INSTITUTE,
    GET_BANK_DETAIL_INSTITUTE
} from '../../constants'
import { toast } from "react-toastify";



export const getAllSales = (body) => { //Get all sales
    return dispatch => {
        console.log(body);
        // user id to be sent in the body as institute_id ="user id" 

        axios.post(baseURL + "/api/institute/withdraw/getsales", body)
            .then(resp => {
                if (resp) {
                    // toast.success("Profile Successfully updated")
                    console.log(resp);
                    dispatch({
                        type: GET_ALL_SALES_INSTITUTE,
                        payload: resp.data.data
                    })
                }
            })
            .catch(err => {
                console.log(err);

                // toast.error("Internal Server Error, try again.")
                dispatch({
                    type: GET_ALL_SALES_FAIL_INSTITUTE,
                    payload: err
                })
            })

    }
}


export const getWirhdrawlHistory = (body) => {
    return dispatch => {
        console.log(body);
        // user id to be sent in the body as institute_id ="user id" 

        axios.post(baseURL + "/api/institute/withdraw/withdrawhistory", body)
            .then(resp => {
                if (resp) {
                    // toast.success("Profile Successfully updated")
                    console.log(resp);
                    dispatch({
                        type: GET_WITHDRAWN_HISTORY_INSTITUTE,
                        payload: resp.data.data
                    })
                }
            })
            .catch(err => {
                console.log(err);

                // toast.error("Internal Server Error, try again.")
                dispatch({
                    type: GET_WITHDRAWN_HISTORY_FAIL_INSTITUTE,
                    payload: err
                })
            })

    }
}

export const getBankDetail = (body) => {
    return dispatch => {
        console.log(body);
        // user id to be sent in the body as institute_id ="user id" 

        axios.post(baseURL + "/api/institute/withdraw/getaccount", body)
            .then(resp => {
                if (resp) {
                    // toast.success("Profile Successfully updated")
                    console.log(resp);
                    dispatch({
                        type: GET_BANK_DETAIL_INSTITUTE,
                        payload: resp.data.data
                    })
                }
            })
            .catch(err => {
                console.log(err);

                
            })

    }
}

export const sendWithdrawRequest = (body) => {
    return dispatch => {
        console.log(body);
        // user id to be sent in the body as institute_id ="user id" 

        axios.post(baseURL + "/api/institute/withdraw/withdrawrequest", body)
            .then(resp => {
                if (resp) {

                    if(resp.data.data.validation){
                        
                        toast.error("Internal Server Error, or You don't have enough balance. Try again.")
                        console.log();
                        
                    }
                    if(resp.data.data.resp){
                        toast.success("Your transaction will take 2-5 working days.")

                    }
                    console.log(resp);
                    // dispatch({
                    //     type: GET_BANK_DETAIL_INSTITUTE,
                    //     payload: resp.data.data
                    // })
                }
            })
            .catch(err => {
                console.log(err);

                
            })

    }
}
