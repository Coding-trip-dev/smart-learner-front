import {
    ALL_EVENTS,
    ALL_EVENTS_ERROR,
    ALL_EVENTS_BOOKINGS,
    ALL_EVENTS_BOOKINGS_ERROR,
} from '../../constants'
import history from '../../../components/Common/history'
import * as routes from '../../../constants/routePaths'


let initState = {
    events: [],
    bookings: [],
    msg: null
}

export default function (state = initState, action) {

    let newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case ALL_EVENTS:
            console.log(action.payload.events);
            
            newState.events = action.payload.events

            break;

        case ALL_EVENTS_ERROR:
            newState.msg = "No Events yet."

            break;
        case ALL_EVENTS_BOOKINGS:
            console.log(action.payload);
            
            newState.bookings = action.payload.bookings

            break;

        case ALL_EVENTS_BOOKINGS_ERROR:
            newState.msg = "No Events yet."

            break;



       

        default:
            break;
    }
    return newState
}