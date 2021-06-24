import {
    CUSTOMER_INPROCESS_ORDERS,
    CUSTOMER_COMPLETED_ORDERS,
    CUSTOMER_CANCELED_ORDERS,
    CUSTOMER_VIEW_SINGLE_ORDER
} from '../../constants'


let initState = {
    inprocess: [],
    completed: [],
    canceled: [],
    viewedOrder: {},

}

export default function (state = initState, action) {

    let newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case CUSTOMER_INPROCESS_ORDERS:

            newState.inprocess = action.payload.order

            break;
        case CUSTOMER_COMPLETED_ORDERS:

            newState.completed = action.payload.order

            break;
        case CUSTOMER_CANCELED_ORDERS:

            newState.canceled = action.payload.order

            break;
        case CUSTOMER_VIEW_SINGLE_ORDER:

            newState.viewedOrder = action.payload.order

            break;

        default:
            break;
    }
    return newState
}