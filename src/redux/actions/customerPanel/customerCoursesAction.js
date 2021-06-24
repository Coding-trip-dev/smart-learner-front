import axios from 'axios'
import { baseURL } from "../../config/config"
import {
    GET_TRENDING_COURSES,
} from '../../constants'
import { toast } from "react-toastify";



export const getTrendingCourses = (body) => { //Get all gigs
    return dispatch => {
        console.log(body);
        // user id to be sent in the body as freelancer_id ="user id" 
        
        axios.post(baseURL + "/api/customer/course/gettrendingcourses", body)
            .then(resp => {
                if (resp) {
                    // toast.success("Profile Successfully updated")
                    console.log(resp);
                    dispatch({
                        type: GET_TRENDING_COURSES, 
                        payload: resp.data.data
                    })
                }
            })
            .catch(err => {
                console.log(err);
            })

    }
}
