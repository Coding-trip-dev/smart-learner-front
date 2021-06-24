import React, { Fragment, useState, useEffect, Suspense, lazy } from "react";
import { Route, Link, Switch, withRouter, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import "../scss/_adminLayout.scss";
import TopNavBar from "../../CustomerPanel/TopBar"
import * as routes from "../../../constants/routePaths";
import OfferCoursePage from "../OfferCoursePage/OfferCoursePage";
import OfferServicePage from "../OfferServicePage/OfferServicePage";
import Footer from "../../Common/Footer";
import RegisterAsInstitutePage from "../RegisterAsInstitutePage/RegisterAsInstitutePage";
import home from "../adminAssets/home.png";
import user from "../adminAssets/user.png";
import plusCircle from "../adminAssets/plus-circle.png";
import stock from "../adminAssets/stock.png";
import calender from "../adminAssets/calender.png";
import CourseManagement from './courseManagement/courseManagement'
import AddNewCourse from "./courseManagement/addNewCourse";
import ViewCourseDetails from './courseManagement/viewCourseDetails'
import PayFee from './Payment/PayFeePage'
import ProfileUnderReview from './ProUnderReview/ProfileUnderReview'
import PaymentProcessing from './ProUnderReview/PaymentProcessing'
import DeshboardInstitute from './Deshboard/deshboardInstitute';
import ManageSales from './manageSales/manageSales'
import Withdraw from './manageSales/withdraw/withdraw'
import EventManagement from './events/eventManagement'
import AddNewEventStepper from './events/addEvent/addEvent'
import ViewEvent from './events/viewEvent/viewEvent'
import EditEvent from "./events/editEvent/editEvent";
import ViewAllEnrolled from './Deshboard/enrolled/viewAllEnrolled/viewEnrolled'
import ViewAllReviews from './Deshboard/reviews/viewAllReviews/viewReviews'
import Cookies from 'js-cookie'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authen = JSON.parse(Cookies.get('user'))
 
  const status = authen.status 
  const feeStatus = authen.fee.status

  return (
    <Route
      {...rest}
      render={props =>

        status === 2
          // true
          ? (
            <Component {...props} />
          ) : (
            <Redirect to="/institute/review_profile" />
          )
      }
    />
  );
};
 
const InstituteDeshboard = ({ match }) => {
  const [focused, setFocused] = useState("home");
  const [authen, setAuth] = useState(JSON.parse(Cookies.get('user')))
  // const authen = JSON.parse(Cookies.get('user'))
  const status = authen.status 
  const feeStatus = authen.fee.status
  console.log("[User]" , authen);
  

  // const status = 1  
  useEffect(() => {
    document.getElementById(focused).focus();
  }, [focused])

  return ( 
    <Fragment>
      <TopNavBar />

      <section className="admin-section d-flex">
        <ul className="links-list">
          <li>
            <Link
              to={routes.InstituteHome}
              id="home" onClick={() => setFocused("home")}>
              <img src={home} alt="home" title="home" />
            </Link>
          </li>
          <li>

            <Link
              to={

                status === 1 ? //pending
                  routes.RegisterAsInstitute :
                   feeStatus === 1 ? // verified :
                    routes.PayFee :
                    // status === 3 || status === 4 ? // 3-> active , 4-> inActive 
                      // routes.EditProfile :
                      // status === 5 ? //denied
                      //   routes.Denied : 
                      routes.RegisterAsInstitute
                      // :
                      // '#'

              }

              id="user" onClick={() => setFocused("user")}>
              <img src={user} alt="user" title="user" />
            </Link>
          </li>
          <li>
            <Link to={routes.CourseManagementInstitute} id="plus" onClick={() => setFocused("plus")}>
              <img src={plusCircle} alt="plus" />
            </Link>
          </li>
          <li>
            <Link to={routes.SalesManagement}>
              <img src={stock} alt="stock-icon" id="stock" onClick={() => setFocused("stock")} />
            </Link>
          </li>
          <li>
            <Link to={routes.EventManagement}>
              <img src={calender} alt="calender-icon" id="calender" onClick={() => setFocused("calender")} />
            </Link>
          </li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <Suspense >
          <Switch>
            <Route
              exact
              path={routes.ProfileUnderReview}
              component={ProfileUnderReview}
            />
              <Route
                exact
                path={routes.RegisterAsInstitute}
                component={RegisterAsInstitutePage}
              />
              <Route
              exact
              path={routes.PayFee}
              component={PayFee}
            />
            <PrivateRoute
              exact
              path={routes.InstituteHome}
              component={DeshboardInstitute}
            />
            <PrivateRoute
              exact
              path={routes.CourseManagementInstitute}
              component={CourseManagement}
            />
            <PrivateRoute
              exact
              path={routes.OfferCourseInstitute}
              component={OfferCoursePage}
            />
            

            <PrivateRoute
              exact
              path={routes.SalesManagement}
              component={ManageSales}
            />
            <Route
              exact
              path={routes.ViewAllEnrolled}
              component={ViewAllEnrolled}
            />
            <Route
              exact
              path={routes.ViewAllReviews}
              component={ViewAllReviews}
            />
            <PrivateRoute
              exact
              path={routes.AddNewCourseInstitute}
              component={AddNewCourse}
            />
            <PrivateRoute
              exact
              path={routes.ViewCourseDetailsInstitute}
              component={ViewCourseDetails}
            />
            
            <PrivateRoute
              exact
              path={routes.WithdrawInstitute}
              component={Withdraw}
            />
            <PrivateRoute
              exact
              path={routes.EventManagement}
              component={EventManagement}
            />
            <PrivateRoute
              exact
              path={routes.AddNewEvent}
              component={AddNewEventStepper}
            />
            <PrivateRoute
              exact
              path={routes.ViewEventsInstitute}
              component={ViewEvent}
            />
            <PrivateRoute
              exact
              path={routes.EditEventInstitute}
              component={EditEvent}
            />
             <Route exact path={routes.paymentProcessing} component={PaymentProcessing} />
            <Route
              path="*"
              component={() => <div>No page found</div>}
            />
          </Switch>
        </Suspense>
      </section>
      <Footer />
    </Fragment >
  );
};
export default withRouter(InstituteDeshboard);

