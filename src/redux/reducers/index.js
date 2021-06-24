import { combineReducers } from "redux"
import auth from './common/auth'
import InstructorReducer from './instructor/profileUpdate'
import InstituteReducer from './institute/profileUpdate'
import CourseReducer from './institute/courseDetailReducer'
import ChapterReducer from './institute/chapterReducer'
import DegreeReducer from './institute/degreesReducer'
import EventReducer from './institute/eventsReducer'
import FreelancerServices from './freelancer/servicesReducer'
import SalesReducer from './freelancer/salesReducer'
import OrderReducer from './freelancer/orderReducer'
import ChatReducer from './freelancer/ChatReducer'
import InstituteSaleReducer from './institute/salesReducerInstitute'
import CustomerCoursesReducer from './customer/coursesReducer'
import CustomerServicesReducer from './customer/servicesReducer'
import CustomerEventsReducer from './customer/eventsReducer'
import CustomerOrderReducer from './customer/ordersReducer'
import CustomerChatReducer from './customer/ChatReducer'
import InstituteDeshboard from './institute/deshboardReducer'

let allReducer = {
    auth,
    InstructorReducer,
    InstituteReducer,
    CourseReducer,
    ChapterReducer,
    DegreeReducer,
    EventReducer,
    FreelancerServices,
    SalesReducer,
    OrderReducer,
    ChatReducer,
    InstituteSaleReducer,
    CustomerCoursesReducer,
    CustomerServicesReducer,
    CustomerEventsReducer,
    CustomerOrderReducer,
    CustomerChatReducer,
    InstituteDeshboard
}

let reducers = combineReducers(allReducer)
export default reducers