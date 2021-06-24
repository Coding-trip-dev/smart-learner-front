import {
    GET_ALL_SALES_INSTITUTE,
    GET_ALL_SALES_FAIL_INSTITUTE,
    GET_WITHDRAWN_HISTORY_INSTITUTE,
    GET_WITHDRAWN_HISTORY_FAIL_INSTITUTE,
    GET_BANK_DETAIL_INSTITUTE
} from '../../constants'


let initState = {
    msg: "",
    balance: null,
    withdrawHistory: [],
    bankDetail: []

}

export default function (state = initState, action) {

    let newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case GET_ALL_SALES_INSTITUTE:

            newState.balance = action.payload.balance

            break;
        case GET_ALL_SALES_FAIL_INSTITUTE:
            newState.msg = "Information invalid, please check and try again."

            break;
        case GET_WITHDRAWN_HISTORY_INSTITUTE:

            newState.withdrawHistory = action.payload.withdrawHistory
            break;

        case GET_WITHDRAWN_HISTORY_FAIL_INSTITUTE:
            newState.msg = "Information invalid, please check and try again."

            break;
        case GET_BANK_DETAIL_INSTITUTE:
            // console.log(action.payload);
            
            newState.bankDetail = action.payload.bankDetail

            break;

        default:
            break;
    }
    return newState
}