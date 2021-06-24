import {
    GET_ALL_MESSAGE,
} from '../../constants'


let initState = {
   chatList: null,

}

export default function (state = initState, action) {

    let newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case GET_ALL_MESSAGE:

            newState.chatList = action.payload

            break;
        
        default:
            break;
    }
    return newState
}