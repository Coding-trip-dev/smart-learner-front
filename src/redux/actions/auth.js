import axios from 'axios'
import { baseURL } from '../config/config'
import {
    REGISTER,
    INVALID_INFORMATION,
    LOGIN,
    PROFILE
} from '../constants'
import { toast } from "react-toastify";
import Cookies from 'js-cookie'


 

export const registerUser = (body, user) => {
    return dispatch => {
        console.log(body, user);
        body.email = body.email.toLowerCase()

        axios.post(baseURL + '/api/' + user + '/auth/register', body)
            .then(resp => {
                if (resp) {
                    toast.success("You have successfully registered in, now please go to login page")
                    dispatch({
                        type: REGISTER,
                        payload: { resp: resp.data.data, type: user }
                    })
                }
            })
            .catch(err => {
                toast.error("Internal Server Error") 
            })

    }
}



export const signIn = (body, user) => {
    return dispatch => {
        console.log(body, user);

        axios.post(baseURL + '/api/' + user + '/auth/login', body)
            .then(resp => {
                if (resp) {
                    toast.success(resp.data.message)
                    console.log(resp);
                    Cookies.set('user', resp.data.data, { expires: 7 });
                    dispatch({
                        type: LOGIN,
                        payload: { resp: resp.data.data, type: user }
                    })
                }
            })
            .catch(err => {
                // console.log(err);
                
                // if (err) toast.error("Internal Server Error at signin")



                // dispatch({
                //     type: INVALID_INFORMATION,
                //     payload: err
                // })
            })

    }
}

// export const loadProfile = (user) => {
//     return dispatch => {
//         // console.log(body);

//         const auth = JSON.parse(Cookies.get('user'))
//         dispatch({
//             type: PROFILE,
//             payload: auth
//         })


//     }
// }

