import axios from 'axios'
import { baseURL } from "../../config/config"
import {
    COURSE_ADDED,
    ERROR,
    ALL_CHAPTER,
    SAVING_URL_PARAMS,
    TOPIC_UPDATED
} from '../../constants'

import store from '../../store'

export const addNewChapter = (body, user) => {
    return dispatch => {
        // console.log(body,user);
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }


        let formData = new FormData();
        console.log(body);

        for (var item in body) {

            formData.append(item, body[item]);

        }
        axios.post(baseURL + '/api/institute/chapter', formData, config)
            .then(resp => {
                console.log(resp);

                if (resp) {
                    dispatch({
                        type: COURSE_ADDED,
                        payload: { resp: resp.data.data, type: user }
                    })
                }
            }).then(()=>{
                dispatch(getAllChapter())
            })
            .catch(err => {
                dispatch({
                    type: ERROR,
                    payload: err
                })
            })

    }
}


export const getAllChapter = (body, user) => {
    return dispatch => {

        // let body = {"provider_id ": "5e9d4a5eab438002fc7d97df"} // for demo 
        let institute_id = store.getState().auth.user_id
        let course_id = store.getState().ChapterReducer.prevCourse_id
        // console.log(course_id);
        
        if (!body) {
            body = { provider_id: institute_id, course_id }
        }


        axios.post(baseURL + '/api/institute/chapter/getmany', body)
            .then(resp => {


                if (resp) {

                    dispatch({
                        type: ALL_CHAPTER,
                        payload: { resp: resp.data.data, type: user }
                    })
                }
                dispatch({
                    type: SAVING_URL_PARAMS,
                    payload: body.course_id
                })
            })
            .catch(err => {
                dispatch({
                    type: ERROR,
                    payload: err
                })
            })

    }
}



export const updateTopic = (body) => {
    return dispatch => {
        // console.log(body,user);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }


        let formData = new FormData();
        // console.log(data);

        for (var item in body) {

            formData.append(item, body[item]);

        }
        axios.post(baseURL + '/api/institute/chapter/update', formData, config)
            .then(resp => {
                console.log(resp);

                if (resp) {
                    dispatch({
                        type: TOPIC_UPDATED,
                        payload: resp.data.data
                    })
                }
            }).then(()=>{
                dispatch(getAllChapter())
            })
            .catch(err => {
                dispatch({
                    type: ERROR,
                    payload: err
                })
            })

    }
}

export const deleteTopicFromDB = (id) => {
    return dispatch => {
      
        axios.get(baseURL + `/api/instructor/chapter/delete_topic?id=${id}`)
            .then(resp => {
                console.log(resp);

                if (resp) {
                    dispatch({
                        type: TOPIC_UPDATED,
                        payload: resp.data.data
                    })
                }
            }).then(()=>{
                dispatch(getAllChapter())
            })
            .catch(err => {
                dispatch({
                    type: ERROR,
                    payload: err
                })
            })

    }
}
