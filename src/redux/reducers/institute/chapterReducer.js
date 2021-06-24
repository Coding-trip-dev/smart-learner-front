import {

    COURSE_ADDED,
    ERROR,
    ALL_CHAPTER,
    SAVING_URL_PARAMS
} from '../../constants'
import history from '../../../components/Common/history'
import * as routes from '../../../constants/routePaths'


let initState = {
    institute_id: "5e9d4a5eab438002fc7d97df", // temporarily
    userDetail: null,
    msg: null,
    err: null,
    allChapter: null,
    prevCourse_id: null
}

export default function (state = initState, action) {

    let newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        // case COURSE_ADDED:

        //     newState.userDetail = action.payload.resp.userData

        //     break;

        // case ERROR:
        //     console.log(action.payload);

        //     newState.err = action.payload

        //     break;



        case ALL_CHAPTER:
            console.log(action.payload.resp);

            // let chapters = action.payload.resp.chapter
            // let chapterAll = []

            // let chapterArr = []
            // let obj = {
            //     chapterName: null,
            //     topics: []
            // }
            // if (chapters) {

            //     chapters.forEach((item,ind)=>{
            //         if(item.course_id === item.parent){
            //             console.log(item);

            //         }
            //     })

            //     console.log(chapterArr);



            // }

            newState.allChapter = action.payload.resp.chapter
            // newState.allTopics = action.payload.resp.topics



            break;
        case SAVING_URL_PARAMS:
            newState.prevCourse_id = action.payload
            break;

        default:
            break;
    }
    return newState
}