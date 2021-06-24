import axios from 'axios'
import { baseURL } from "../../config/config"
import {
    ERROR,
    DISCOUNT_ADDED
} from '../../constants'

import store from '../../store'

export const addDiscountOnCourse = (id,body) => {
    return dispatch => {

        axios.post(baseURL + `/api/institute/discount_coupon/new?id=${id}`, body)
            .then(resp => {
                console.log(resp);

                if (resp) {
                    dispatch({
                        type: DISCOUNT_ADDED,
                        payload: resp.data.data
                    })
                }
            })
            .catch(err => {
                dispatch({
                    type: ERROR,
                    payload: err
                })
            })

    }
}


// export const getAllChapter = (body, user) => {
//     return dispatch => {

//         // body = {"provider_id ": "5e9d4a5eab438002fc7d97df"} for demo 
//         let institute_id = store.getState().auth.institute_id
//         let course_id = store.getState().ChapterReducer.prevCourse_id
//         if (!body) {
//             body = { provider_id: institute_id, course_id }
//         }


//         axios.post(baseURL + '/api/institute/chapter/getmany', body)
//             .then(resp => {


//                 if (resp) {

//                     dispatch({
//                         type: ALL_CHAPTER,
//                         payload: { resp: resp.data.data, type: user }
//                     })
//                 }
//                 dispatch({
//                     type: SAVING_URL_PARAMS,
//                     payload: body.course_id
//                 })
//             })
//             .catch(err => {
//                 dispatch({
//                     type: ERROR,
//                     payload: err
//                 })
//             })

//     }
// }



// export const updateTopic = (body) => {
//     return dispatch => {
//         // console.log(body,user);
//         const config = {
//             headers: {
//                 'content-type': 'multipart/form-data'
//             }
//         }


//         let formData = new FormData();
//         // console.log(data);

//         for (var item in body) {

//             formData.append(item, body[item]);

//         }
//         axios.post(baseURL + '/api/institute/chapter/update', formData, config)
//             .then(resp => {
//                 console.log(resp);

//                 if (resp) {
//                     dispatch({
//                         type: TOPIC_UPDATED,
//                         payload: resp.data.data
//                     })
//                 }
//             }).then(()=>{
//                 dispatch(getAllChapter())
//             })
//             .catch(err => {
//                 dispatch({
//                     type: ERROR,
//                     payload: err
//                 })
//             })

//     }
// }
