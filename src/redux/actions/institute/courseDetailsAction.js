import axios from 'axios'
import {baseURL} from "../../config/config"
import {
    COURSE_ADDED,
    ALL_COURSES,
    ERROR,
    ADD_NEW_CHAPTER,
    ALL_CHAPTER,
    ALL_QUESTIONS,
    INSTITUTE_DEGREE_CATEGORIES,
    INSTITUTE_DEGREES
} from '../../constants'
import {getAllChapter} from './chapterDetailsAction'  
// import {getCourses} from '../../../components/Institute/courseManagement/viewCourseDetails';
import {getCourses} from '../../../components/Admin/Institute/courseManagement/viewCourseDetails';

import store from '../../store'
import { toast } from 'react-toastify';


export const addNewCourse = (body,user)=>{
    return dispatch =>{
        // console.log(body,user);
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }


        let formData = new FormData();        
        // console.log(data);

        for(var item in body){            
            
            formData.append(item, body[item]);

        }
        axios.post(baseURL + '/api/institute/course',formData, config)
        .then(resp => {
            console.log(resp);
            
            if(resp){
                toast.success("Course Successfully Added.")
                dispatch({
                    type: COURSE_ADDED,
                    payload: resp.data.data
                })
            }    
        })
        .catch(err => {
            toast.error("Internal Server Error, Try agian.")
        })

    }
}


export const getAllCourse = (body,user)=>{
   
    return dispatch =>{

        // body = {"institute_id": "5e9d4a5eab438002fc7d97df"} for demo 
        
        axios.post(baseURL + '/api/institute/course/get_all',body)
        .then(resp => {
            // console.log(resp);
            
            if(resp){
                dispatch({
                    type: ALL_COURSES,
                    payload: {resp: resp.data.data, type: user}
                })
            }   
            //  dispatch({
            //     type: 
            // })
        })
        .catch(err => {
            dispatch({
                type: ERROR,
                payload: err
            })
        })

    }
}


// export const addNewChapter = (body)=>{
   
//     console.log(body);
    
    
//      return dispatch =>{
 
//          // body = {"institute_id": "5e9d4a5eab438002fc7d97df"} for demo 
         
//          axios.post(baseURL + '/api/institute/chapter',body)
//          .then(resp => {
//              console.log(resp);
             
//              if(resp){
//                  dispatch({
//                      type: ADD_NEW_CHAPTER,
//                      payload: resp.data.data.chapter
//                  })
//              }    
//          })
//          .then(()=>{
//              dispatch(getAllChapter())
//          })
//          .catch(err => {
//              dispatch({
//                  type: ERROR,
//                  payload: err
//              })
//          })
 
//      }
//  }
 


 
export const getAllTopicsOfQuestions = (body,user)=>{
   
    return dispatch =>{

        // body = {course_id : "5ea944a9e9608b3620d1cca5"}
        
        axios.post(baseURL + '/api/instructor/comment/getallcomment',body)
        .then(resp => {
                console.log(resp);
                
            if(resp){
                dispatch({
                    type: ALL_QUESTIONS,
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



export const getAllDegreeCategory = ()=>{
   
    return dispatch =>{

        
        axios.get(baseURL + '/api/institute/degree/get_all_degree_category')
        .then(resp => {
                console.log(resp);
                
            if(resp){
                dispatch({
                    type: INSTITUTE_DEGREE_CATEGORIES,
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




export const getAllDegress = ()=>{
   
    return dispatch =>{
        
        axios.get(baseURL + '/api/institute/degree/get_all',)
        .then(resp => {
            console.log(resp);
                
            if(resp){
                dispatch({
                    type: INSTITUTE_DEGREES,
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
