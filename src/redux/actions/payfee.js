import axios from 'axios'
import { baseURL } from '../config/config'
import {
    FEE_PAID,
    FEE_UNPAID,
} from '../constants'
import { toast } from "react-toastify";




export const payRegistraionFee = (body, user) => {
    return dispatch => {
        console.log(body, user);

        axios.post(baseURL + '/api/' + user + '/' + user + '/payfee', body)
            .then(resp => {
                console.log(resp.data.data);
                
                if (resp) {
                    toast.success("Payment Process will take few minutes.")
                    dispatch({
                        type: FEE_PAID,
                        payload: resp.data.data 
                    })
                }
            })
            .catch(err => {
                toast.error("Invalid Details.")

                dispatch({
                    type: FEE_UNPAID,
                    payload: err
                })
            })

    }
}

