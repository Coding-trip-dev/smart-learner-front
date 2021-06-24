import {
    ERROR,
    INSTITUTE_DEGREE_CATEGORIES,
    INSTITUTE_DEGREES
} from '../../constants'

import history from '../../../components/Common/history'
import * as routes from '../../../constants/routePaths'


let initState = {
    categories_degree: [],
    degrees: []
}

export default function (state = initState, action) {

    let newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case INSTITUTE_DEGREE_CATEGORIES:

            newState.categories_degree = action.payload

            break;

        case INSTITUTE_DEGREES:

            newState.degrees = action.payload
            break;

        case ERROR:

            newState.err = action.payload

            break;



        // case ALL_COURSES:
        //     console.log(action.payload.resp);


        //     newState.allCourses = action.payload.resp.course


        //     break;
        // case ADD_NEW_CHAPTER: 
        // return {
        //     ...newState,
        //     allChapters: action.payload
        // }

        // case ALL_QUESTIONS:

        //     console.log(action.payload);

        //     newState.allQuestions = action.payload

        //     break;


        default:
            break;
    }
    return newState
}