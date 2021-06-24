import axios from 'axios'
import { baseURL } from "../../config/config"
import {
    PROFILE_UPDATED,
    INVALID_INFORMATION
} from '../../constants'
import { toast } from "react-toastify";


export const updateProfile = (body, user) => {
    return dispatch => {
        console.log(body, user);

        axios.post(baseURL + '/api/' + user + '/institute', body)
            .then(resp => {
                if (resp) {
                    toast.success("Profile Successfully updated")
                    dispatch({
                        type: PROFILE_UPDATED,
                        payload: { resp: resp.data.data, type: user }
                    })
                }
            })
            .catch(err => {
                console.log(err);
                
                toast.error("Internal Server Error, try again.")
                dispatch({
                    type: INVALID_INFORMATION,
                    payload: err
                })
            })

    }
}




// export const signIn = (body,user)=>{
//     return dispatch =>{
//         console.log(body,user);

//         axios.post(baseURL + '/api/'+ user +'/auth/login',body)
//         .then(resp => {
//             if(resp){
//                 console.log(resp);
//                 dispatch({
//                     type: LOGIN,
//                     payload: {resp: resp.data, type: user}
//                 })
//             }    
//         })
//         .catch(err => {
//             dispatch({
//                 type: INVALID_INFORMATION,
//                 payload: err
//             })
//         })

//     }
// }


