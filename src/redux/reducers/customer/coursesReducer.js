import {
    GET_ALL_COURSES_CUSTOMER,
    GET_TRENDING_COURSES,
    GET_ONE_COURSES_CUSTOMER
} from '../../constants'


let initState = {
    msg: "",
    courses: [],
    trending: [],
    oneCourse: null

} 

export default function (state = initState, action) {

    let newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case GET_ALL_COURSES_CUSTOMER:

            newState.courses = action.payload.orders

            break;
        case GET_TRENDING_COURSES:

            newState.trending = action.payload.course

            break;
        case GET_ONE_COURSES_CUSTOMER:

            newState.oneCourse = action.payload.course

            break;
       
        default:
            break;
    }
    return newState
}