import axios from 'axios'
import {baseURL} from "../../config/config"
import {
    PROFILE_UPDATED,
    INVALID_INFORMATION,
    ALL_INSTITUTES
} from '../../constants'



export const getAllInstitute = ()=>{
    return dispatch =>{
 
        
        axios.get(baseURL + '/api/admin/institutes/get_all?status=2')
        .then(resp => {
            console.log(resp);
            
            if(resp){
                dispatch({
                    type: ALL_INSTITUTES,
                    payload: resp.data.data
                })
            }    
        })
        .catch(err => {
            dispatch({
                type: INVALID_INFORMATION,
                payload: err
            })
        })

    }
}





