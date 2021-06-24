import {
    GET_ALL_SALES,
    GET_ALL_SALES_FAIL,
    GET_WITHDRAWN_HISTORY,
    GET_WITHDRAWN_HISTORY_FAIL,
    GET_BANK_DETAIL_FREELANCER
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
        case GET_ALL_SALES:

            newState.balance = action.payload.balance

            break;
        case GET_ALL_SALES_FAIL:
            newState.msg = "Information invalid, please check and try again."

            break;
        case GET_WITHDRAWN_HISTORY:

            newState.withdrawHistory = action.payload.withdrawHistory
            break;

        case GET_WITHDRAWN_HISTORY_FAIL:
            newState.msg = "Information invalid, please check and try again."

            break;
        case GET_BANK_DETAIL_FREELANCER:
            // console.log(action.payload);

            newState.bankDetail = action.payload.bankDetail

            break;
        default:
            break;
    }
    return newState
}