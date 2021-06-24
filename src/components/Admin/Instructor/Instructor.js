import React, { Fragment, useState, useEffect } from "react";
import { Route, Link, Switch, withRouter, Redirect } from "react-router-dom";
import "../scss/_adminLayout.scss";
import { useSelector } from 'react-redux'
import TopNavbar from "../../CustomerPanel/TopBar";
import * as routes from "../../../constants/routePaths";
import OfferCoursePage from "../OfferCoursePage/OfferCoursePage";
import OfferServicePage from "../OfferServicePage/OfferServicePage";
import Footer from "../../Common/Footer";
import RegisterAsInstitutePage from "../RegisterAsInstitutePage/RegisterAsInstitutePage";
import home from "../adminAssets/home.png";
import user from "../adminAssets/user.png";
import plusCircle from "../adminAssets/plus-circle.png";
import stock from "../adminAssets/stock.png";
import CourseManagementsInstructor from './courseManagement/courseManagement'
import AddNewCourseInstructor from "./courseManagement/addNewCourse";
import ViewCourseDetailsInstructor from './courseManagement/viewCourseDetails'
import PayFee from './Payment/PayFeePage'
import ProfileUnderReview from './ProUnderReview/ProfileUnderReview'
import DeshboardInstructor from './Deshboard/deshboardInstructor';
import ManageSales from './manageSales/manageSales'
import Withdraw from './manageSales/withdraw/withdraw'
import viewAllReviews from './Deshboard/reviews/viewAllReviews/viewReviews'
import viewAllStudents from './Deshboard/enrolled/viewAllEnrolled/viewEnrolled'
import Cookies from 'js-cookie'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authen= JSON.parse(Cookies.get('user'))
  console.log(authen);
  
  const status = authen.status
  const feeStatus = authen.fee.status
  return (
    <Route
      {...rest}
      render={props =>

        feeStatus === 2 || status === 1
          // true
          ? (
            <Component {...props} />
          ) : (
            <Redirect to="/instructor/review_profile" />
          )
      }
    />
  );
};


const InstructorDeshboard = ({ match }) => {
  const [focused, setFocused] = useState("home");
  // const status = useSelector(state => state.auth.userDetail ? state.auth.userDetail.status : 3)
  // const feeStatus = useSelector(state => state.auth.userDetail ? state.auth.userDetail.fee.status : null)
  const authen = JSON.parse(Cookies.get('user'))
  const status = authen.status
  const feeStatus = authen.fee.status

  useEffect(() => {
    document.getElementById(focused).focus();
  }, [focused])

  return (
    <Fragment>
      <TopNavbar />
      <section className="admin-section d-flex">
        <ul className="links-list">
          <li>
            <Link to={routes.InstructorHome} id="home" onClick={() => setFocused("home")}>
              <img src={home} alt="home" />
            </Link>
          </li>
          <li>
            <Link
              id="user" onClick={() => setFocused("user")}
              to={   

                status !== 1 ? //pending
                  routes.RegisterAsInstructor :
                  feeStatus === 1 ? // verified :
                    routes.PayFeeInstructor :
                    status === 3 || status === 4 || status === 1 ? // 3-> active , 4-> inActive 
                      // routes.EditProfile :
                      // status === 5 ? //denied
                      //   routes.Denied : 
                      routes.RegisterAsInstructor
                      :
                      '#'

              }

            >
              <img src={user} alt="user" title="user" />
            </Link>
          </li>
          <li>
            <Link to={routes.CourseManagementInstructor} id="plus" onClick={() => setFocused("plus")}>
              <img src={plusCircle} alt="plus" />
            </Link>
          </li>
          <li>
            <Link to={routes.SalesManagementInstructor}>
              <img src={stock} alt="stock-icon" id="stock" onClick={() => setFocused("stock")} />
            </Link>
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <Switch>
          <Route
            exact
            path={routes.ProfileUnderReviewInstructor}
            component={ProfileUnderReview}
          />
          <Route
            exact
            path={routes.PayFeeInstructor}
            component={PayFee}
          />
          <PrivateRoute
            exact
            path={routes.InstructorHome}
            component={DeshboardInstructor}
          />
          <PrivateRoute
            exact
            path={routes.CourseManagementInstructor}
            component={CourseManagementsInstructor}
          />
          <PrivateRoute
            exact
            path={routes.OfferServiceInstructor}
            component={OfferServicePage}
          />

          <Route
            exact
            path={routes.RegisterAsInstructor}
            component={OfferCoursePage}
          />
          <PrivateRoute
            exact
            path={routes.SalesManagementInstructor}
            component={ManageSales}
          />
          <PrivateRoute
            exact
            path={routes.AddNewCourseInstructor}
            component={AddNewCourseInstructor}
          />

          <Route
            exact
            path={routes.ViewAllEnrolledInstructor}
            component={viewAllStudents}
          />
          <Route
            exact
            path={routes.ViewAllReviewsInstructor}
            component={viewAllReviews}
          />
          <PrivateRoute
            exact
            path={routes.ViewCourseDetailsInstructor}
            component={ViewCourseDetailsInstructor}
          />
          <PrivateRoute
            exact
            path={routes.WithdrawInstructor}
            component={Withdraw}
          />
          <Route path="*" component={() => <div>No page found</div>} />
        </Switch>
      </section>
      <Footer />
    </Fragment>
  );
};
export default withRouter(InstructorDeshboard);

