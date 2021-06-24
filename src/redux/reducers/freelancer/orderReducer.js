import {
    GET_ALL_NEW_ORDERS,
    GET_ALL_NEW_ORDERS_FAIL,
    GET_ALL_RUNNING_ORDERS,
    GET_ALL_RUNNING_ORDERS_FAIL,
    GET_ALL_COMPLETED_ORDERS,
    GET_ALL_CANCELLED_ORDERS,
    GET_FREELANCER_DESHBOARD
} from '../../constants'


let initState = {
    newOrder: [],
    runningOrder: [],
    completedOrder: [],
    cancelledOrder: [],
    topDetails: []
} 

export default function (state = initState, action) {

    let newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case GET_ALL_NEW_ORDERS:

            newState.newOrder = action.payload.order

            break;
        case GET_ALL_NEW_ORDERS_FAIL:
            newState.msg = "Information invalid, please check and try again."

            break;
        case GET_ALL_RUNNING_ORDERS:

            newState.runningOrder = action.payload.order
            break;

        case GET_ALL_RUNNING_ORDERS_FAIL:
            newState.msg = "Information invalid, please check and try again."

            break;
        case GET_ALL_COMPLETED_ORDERS:

            newState.completedOrder = action.payload.order
            break;
        case GET_ALL_CANCELLED_ORDERS:

            newState.cancelledOrder = action.payload.order
            break;
        case GET_FREELANCER_DESHBOARD:

            newState.topDetails = action.payload.order
            break;

        default:
            break;
    }
    return newState
}