import {
    ENROLLED_STUDENTS,
    REVIEWS_INSTITUTE,
    DESHBOARD_SALES_INSTITUTE

} from '../../constants'

import history from '../../../components/Common/history'
import * as routes from '../../../constants/routePaths'


let initState = {
    enrolledStudents: [],
    reviews_institute: [],
    sales: []
}

export default function (state = initState, action) {

    let newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case ENROLLED_STUDENTS:

            newState.enrolledStudents = action.payload.order

            break;
        case REVIEWS_INSTITUTE:
            console.log(action.payload.review);
            
            newState.reviews_institute = action.payload.review

            break;
        case DESHBOARD_SALES_INSTITUTE:
            
            
            newState.sales = action.payload.order

            break;



        default:
            break;
    }
    return newState
}