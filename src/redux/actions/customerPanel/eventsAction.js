import axios from 'axios'
import { baseURL } from "../../config/config"
import {
    GET_EVENTS_CUSTOMER,
} from '../../constants'
import { toast } from "react-toastify";



export const getAllEvents = (body) => { //Get all gigs
    return dispatch => {
        console.log(body);
        // user id to be sent in the body as freelancer_id ="user id" 
        
        axios.post(baseURL + "/api/customer/event/getallevents", body)
            .then(resp => {
                if (resp) {
                    
                    console.log(resp);
                    dispatch({
                        type: GET_EVENTS_CUSTOMER,
                        payload: resp.data.data
                    })
                }
            })
            .catch(err => {
                console.log(err);
            })

    }
}
