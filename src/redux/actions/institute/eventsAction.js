import axios from 'axios'
import {baseURL} from "../../config/config"
import {
    ALL_EVENTS,
    ALL_EVENTS_ERROR,
    ALL_EVENTS_BOOKINGS,
    ALL_EVENTS_BOOKINGS_ERROR,
    EVENT_ADDED_SUCCESS,
    EVENT_ADDED_ERROR
} from '../../constants'
import {toast} from 'react-toastify'
// import {modelForSuccess} from '../../../components/Admin/Institute/events/addEvent/addEvent'
import store from '../../store'

export const getAllEvents = (body)=>{
    return dispatch =>{
 
        // events will be get by the institute id. 
        axios.post(baseURL + '/api/institute/event/getmanyevents' , body)
        .then(resp => {
            
            if(resp.status === 200){
                dispatch({
                    type: ALL_EVENTS,
                    payload: resp.data.data
                })
            }    
        })
        .catch(err => {
            dispatch({
                type: ALL_EVENTS_ERROR,
                payload: err
            })
        })

    }
}

export const getAllEventBooking = (body)=>{
    return dispatch =>{
 
        // booking of the event will be get by the institute id and event id as institute_id , event_id 
        axios.post(baseURL + '/api/institute/event/getevenbookings' , body)
        .then(resp => {
            
            if(resp.status === 200){
                dispatch({
                    type: ALL_EVENTS_BOOKINGS,
                    payload: resp.data.data
                })
            }    
        })
        .catch(err => {
            dispatch({
                type: ALL_EVENTS_BOOKINGS_ERROR,
                payload: err
            })
        })

    }
}



export const addNewEvent = (body)=>{

    return dispatch =>{
  
        let formData = new FormData();        

        for(var item in body){            
            
            formData.append(item, body[item]);
            
        }


        axios.post(baseURL + '/api/institute/event/addevent' , formData)
        .then(resp => {
            
            if(resp.status === 200){
                toast.success("Event Successfuly added")
                dispatch({
                    type: EVENT_ADDED_SUCCESS,
                    payload: resp.data.data
                })
                // modelForSuccess()
            }    
        })
        .catch(err => {
            toast.error("Event added failed")
            dispatch({
                type: EVENT_ADDED_ERROR,
                payload: err
            })
        })

    }
}


export const updateEvent = (body)=>{

    return dispatch =>{
        let institute_id = store.getState().auth.institute_id
  
        let formData = new FormData();        

        for(var item in body){            
            
            formData.append(item, body[item]);
            // console.log(item , body[item]);
            
        }
        console.log(body);
        

        axios.post(baseURL + '/api/institute/event/updateevent' , formData)
        .then(resp => {
            
            if(resp.status === 200){
                toast.success("Event Successfuly updated")
                dispatch({
                    type: EVENT_ADDED_SUCCESS,
                    payload: resp.data.data
                })
                // modelForSuccess()
            }    
        }).then(()=>{
            dispatch(getAllEvents({institute_id}))
        })
        .catch(err => {
            toast.error("Event updation Failed")
            dispatch({
                type: EVENT_ADDED_ERROR,
                payload: err
            })
        })

    }
}