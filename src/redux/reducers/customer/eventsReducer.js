import {
        GET_EVENTS_CUSTOMER,
} from '../../constants'


let initState = {
    msg: "",
    events: []

}

export default function (state = initState, action) {

    let newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case GET_EVENTS_CUSTOMER:

            newState.events = action.payload.events

            break;
       
        default:
            break;
    }
    return newState
}