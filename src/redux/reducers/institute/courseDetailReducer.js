import {

    COURSE_ADDED,
    ERROR,
    ALL_COURSES,
    ADD_NEW_CHAPTER,
    ALL_QUESTIONS
} from '../../constants'
import history from '../../../components/Common/history'
import * as routes from '../../../constants/routePaths'


let initState = {
    user_id: "5e9d4a5eab438002fc7d97df", // temporarily
    userDetail: null,
    msg: null,
    err: null,
    allCourses: [],
    allChapters: null,
    allQuestions: []
}

export default function (state = initState, action) {

    let newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case COURSE_ADDED:

            newState.userDetail = action.payload.userData

            break;

        case ERROR:
 
            newState.err = action.payload

            break;



        case ALL_COURSES:
            console.log(action.payload.resp);


            newState.allCourses = action.payload.resp.course


            break;
        case ADD_NEW_CHAPTER: 
        return {
            ...newState,
            allChapters: action.payload
        }

        case ALL_QUESTIONS:

            console.log(action.payload);

            newState.allQuestions = action.payload

            break;


        default:
            break;
    }
    return newState
}