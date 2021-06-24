import {
    REGISTER,
    INVALID_INFORMATION,
    LOGIN,
    PROFILE,
    FEE_PAID
} from '../../constants'
import history from '../../../components/Common/history'
import * as routes from '../../../constants/routePaths'
import Cookies from 'js-cookie'


let initState = {
    user_id: Cookies.get('user') ? JSON.parse(Cookies.get('user'))._id : null,  // temporary id added for testing now it is freelancer id 
    userDetail: Cookies.get('user') ? JSON.parse(Cookies.get('user')) : null,
    msg: null,
    status: true, // if false profile gets under review
    paid: false, // if false then user will see the payment page 
    authenticated: false,
    feeStatus: null
}

export default function (state = initState, action) {

    let newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case REGISTER:



            newState.userDetail = action.payload.resp.userData

            break;

        case INVALID_INFORMATION:
            newState.msg = "Information invalid, please check and try again."

            break;



        case LOGIN:

            console.log(action.payload);
            newState.authenticated = true
            // newState.user_id = action.payload.resp.resp._id
            newState.userDetail = action.payload.resp

            if (action.payload.type == "institute") {
                if (action.payload.resp.status === 1) {
                    setTimeout(() => {
                        Cookies.set("home", routes.InstituteHome)
    
                        history.push(routes.RegisterAsInstitute)
                    });
                }
                else if((action.payload.resp.fee.status === 1)) {
                    Cookies.set("home", routes.InstituteHome)
                    setTimeout(() => {
    
                        history.push(routes.PayFee)
                    });
                }else {
                    setTimeout(() => {
                        Cookies.set("home", routes.InstituteHome)
    
                        history.push(routes.RegisterAsInstitute)
                    });
                }
            }
            if (action.payload.resp._id) {

                if (action.payload.type == "instructor") {
                    if (action.payload.resp.status === 2) {
                        Cookies.set("home", routes.InstructorHome)
                        setTimeout(() => {
                            
                            history.push(routes.PayFee)
                        });
                    }
                    if (action.payload.resp.status !== 2) {
                        Cookies.set("home", routes.InstructorHome)
                        setTimeout(() => {

                            history.push(routes.RegisterAsInstructor)
                        });
                    }

                }
            }
            if (action.payload.type == "freelancer") {
                newState.authenticated = true
                setTimeout(() => {
                    Cookies.set("home", routes.freelancerDashboard)
                    history.push(routes.freelancerDashboard)
                    
                }, 1000);
            }
            if (action.payload.type == "customer") {
                newState.authenticated = true
                setTimeout(() => {
                    Cookies.set("home", routes.customerDeshboard)
                    history.push(routes.customerDeshboard)
                }, 1000);
                console.log('works');

            }



            break;



        case FEE_PAID:

            newState.feeStatus = action.payload.resp

            break;


        default:
            break;
    }
    return newState
} 