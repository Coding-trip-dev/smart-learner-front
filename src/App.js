import React, { useEffect } from "react";
import "./assets/scss/style.scss";
import { Router, Route, Switch, withRouter, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';
import * as routes from "./constants/routePaths";
import HomePage from "./components/HomePage/HomePage";
import SearchPage from "./components/search/search";
import NotFoundPage from "./components/Common/NotFoundPage";
import CourseDetailPage from "./components/CourseDetail/CourseDetailPage";
import UserProfile from "./components/UserPage/UserPage";
import ServicePage from "./components/ServicePage/ServicePage";
import BecomeFreelancerPage from "./components/BecomeFreeLancerPage/BecomeFreelancerPage";
import Institute from "./components/Admin/Institute/Institute";
import Instructor from "./components/Admin/Instructor/Instructor";

// import CourseManagements from "./components/Admin/courseManagement/courseManagement";
import history from './components/Common/history';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FreelancerPanel from "./components/FreelancerPanel/FreelancerPanel";
// import { loadProfile } from './redux/actions/auth'
import AllCourses from './components/AllDevelopment/AllCourse'
import AllNewCourses from './components/AllNewCourses/AllNewCourse'
import AllTrendingCourses from './components/AllTrendingCourses/TrendingCourse'
import AllServices from './components/AllServices/AllServices'
import OneService from './components/OneService/OneService'
import AllEvents from './components/AllEvents/AllEvents'
import OneEvent from './components/OneEvent/OneEvent'
import CustomerPanel from './components/CustomerPanel/CustomerPanel'
import Cookies from 'js-cookie'
import ServicesFreelancer from './components/HomePage/freelancerServices/SelectedCategories'



const PrivateRoute = ({ component: Component, ...rest }) => {
  // const authenticated = useSelector(state => state.auth.authenticated);
  const authen = Cookies.get('user');



  return (

    <Route
      {...rest}
      render={props =>

        authen
          // true
          ? (
            <Component {...props} />
          ) : (
            <Redirect to="/" />
          )
      }
    />

  );
};

const App = (props) => {
  //  let { loadProfile} = props
  // useEffect(() => {
  //   props.load()
  // })



  return (
    <Router history={history}>
      <ToastContainer
        autoClose={3000}
      /> 
      <Switch>
        <Route exact path={routes.Home} component={HomePage} /> 
        <PrivateRoute exact path={routes.CourseDetail} component={CourseDetailPage} /> 
        <Route exact path={routes.User} component={UserProfile} />
        {/* <Route exact path={routes.Service} component={ServicePage} /> */}
        <Route exact path={routes.BecomeFreelancer} component={BecomeFreelancerPage} />
        {/* <Route exact path={routes.CourseManagement} component={CourseManagements} /> */}
        <PrivateRoute path={routes.Institute} component={Institute} />
        <PrivateRoute path={routes.Instructor} component={Instructor} />
        <PrivateRoute path={routes.FreelancerPanel} component={FreelancerPanel} />
        <PrivateRoute path={routes.customerDeshboard} component={CustomerPanel} />


        <Route exact path={routes.SearchPage} component={SearchPage} />
        <Route exact path={routes.AllDevelopmentCourses} component={AllCourses} />
        <Route exact path={routes.AllNewCourses} component={AllNewCourses} />
        <Route exact path={routes.AllTrendingCourses} component={AllTrendingCourses} />
        <Route exact path={routes.AllServices} component={AllServices} />
        <Route exact path={routes.OneService} component={OneService} />
        <Route exact path={routes.ServicesByFreelancer} component={ServicesFreelancer} />
        <Route exact path={routes.AllEvents} component={AllEvents} />
        <Route exact path={routes.OneEvent} component={OneEvent} />

        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

let mapStateToProps = store => {
  console.log(store);

  return {
    userDetail: store.auth.userDetail
  }
}
let mapDispatchToProps = dispatch => {
  return {
    load: () => {
      // dispatch(loadProfile())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);