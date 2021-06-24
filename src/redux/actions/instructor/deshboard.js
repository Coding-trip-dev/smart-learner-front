import axios from 'axios'
import { baseURL } from "../../config/config"
import {
    ENROLLED_STUDENTS,
    REVIEWS_INSTITUTE,
    DESHBOARD_SALES_INSTITUTE
} from '../../constants'

import store from '../../store'
import { toast } from 'react-toastify'

export const getEnrolledStudents = (body) => {
    return dispatch => {
        console.log(body);

        axios.post(baseURL + `/api/instructor/order/getenrolled`, body)
            .then(resp => {
                console.log(resp);

                if (resp) {
                    dispatch({
                        type: ENROLLED_STUDENTS,
                        payload: resp.data.data
                    })
                }
            })
            .catch(err => {
                toast.error("Internal Server Error")
            })

    }
}

export const getReviews = (body) => {
    return dispatch => {
        console.log(body);

        axios.post(baseURL + `/api/instructor/review/getallreview`, body)
            .then(resp => {
                console.log(resp);

                if (resp) {
                    dispatch({
                        type: REVIEWS_INSTITUTE,
                        payload: resp.data.data
                    })
                }
            })
            .catch(err => {
                toast.error("Internal Server Error")
            })

    }
}

export const getInstituteSale = (body) => {
    return dispatch => {
        console.log(body);

        axios.post(baseURL + `/api/instructor/order/dashboard`, body)
            .then(resp => {
                console.log(resp);

                if (resp) {
                    dispatch({
                        type: DESHBOARD_SALES_INSTITUTE,
                        payload: resp.data.data
                    })
                }
            })
            .catch(err => {
                toast.error("Internal Server Error")
            })

    }
}

// export const getReviews = (body) => {
//     return dispatch => {
//         console.log(body);

//         axios.post(baseURL + `/api/instructor/review/getallreview`, body)
//             .then(resp => {
//                 console.log(resp);

//                 if (resp) {
//                     dispatch({
//                         type: REVIEWS_INSTITUTE,
//                         payload: resp.data.data
//                     })
//                 }
//             })
//             .catch(err => {
//                toast.error("Internal Server Error")
//             })

//     }
// }


