import {
    GET_ALL_FREELANCER_SERVICES,
    GET_ALL_FREELANCER_SERVICES_FAIL,
    GET_ALL_FREELANCER_GIGS,
    GET_ALL_FREELANCER_GIGS_FAIL
} from '../../constants'


let initState = {
    services: [],
    msg: "",
    gigs: []

}

export default function (state = initState, action) {

    let newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case GET_ALL_FREELANCER_SERVICES:
            return {
                ...newState,
                services: action.payload.services,
                gigs: []
            }
        // break;

        case GET_ALL_FREELANCER_SERVICES_FAIL:
            return {
                ...newState,
                services: [],
                msg: "Information invalid, please check and try again."
            }
            break;
        case GET_ALL_FREELANCER_GIGS:

            return {
                ...newState,
                services: [],
                gigs: action.payload.service
            }
            break;

        case GET_ALL_FREELANCER_GIGS_FAIL:

            return {
                ...newState,
                services: [],
                gigs: action.payload.service,
                msg: "Information invalid, please check and try again."
            }

        default:
            break;
    }
    return newState
}