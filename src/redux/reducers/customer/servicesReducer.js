import {
    GET_SERVICES_CUSTOMER,
    FREELANCER_SERVICES_BY_CUSTOMER,
    GET_SERVICES_CATEGORY_CUSTOMER
} from '../../constants'


let initState = {
    msg: "",
    services: [],
    freelancerServices: [],
    serviceCategory: []

}

export default function (state = initState, action) {

    let newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case GET_SERVICES_CUSTOMER:

            newState.services = action.payload.services

            break;
        case FREELANCER_SERVICES_BY_CUSTOMER:

            newState.freelancerServices = action.payload.services

            break;
        case GET_SERVICES_CATEGORY_CUSTOMER:

            newState.serviceCategory = action.payload.service

            break;

        default:
            break;
    }
    return newState
}