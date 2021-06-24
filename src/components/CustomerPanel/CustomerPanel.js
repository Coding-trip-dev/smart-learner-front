import React, { Fragment, useState, useEffect, Suspense } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import * as routes from "../../constants/routePaths";
import "./scss/_homepage.scss";
import TopNavBar from "./TopBar";
import Footer from "../Common/Footer";

import { Link } from "react-router-dom";
import MyCourses from './search/search'
import MyBookedEvents from './AllEvents/AllEvents'
import { useSelector } from "react-redux";
import Services from './Services/services'
import HomePage from './HomePage'
import InProcessDetails from './Services/InProcess/InprocessDetail'
import CompetedOrder from './Services/completedOrder/completedOrder'
import CancelledOrder from './Services/CancledOrder/canceledOrder'
import ViewEvent from './Events/OneEvent/OneEvent'
import OneServiceCustomer from './OneService/OneService'
import ServiceCategories from './serviceCategory/OneService'
import FreelancerServices from './freelancerServices/SelectedCategories'

const CustomerPanel = ({ match, ...props }) => {


  const [focused, setFocused] = useState("home");

  useEffect(() => {
    document.getElementById(focused).focus();
  }, [focused])

  

  return (

    <Fragment>
      <TopNavBar />

      <section className="customer-section ">
        <ul className="links-list">
          <li>
            <Link
              to={routes.customerDeshboard}
              id="home" onClick={() => setFocused("home")}>
              Home
            </Link>
          </li>
          <li>

            <Link
              to={routes.CustomerMyCourses}
              id="user" onClick={() => setFocused("user")}>
              My Courses
            </Link>
          </li>
          <li>
            <Link
              to={routes.CustomerMyServices}
              id="plus" onClick={() => setFocused("plus")}>
              Services
            </Link>
          </li>
          <li>
            <Link
              to={routes.CustomerMyEvents}
            >
              Events
            </Link>
          </li>

        </ul>
        <Suspense >
          <Switch>
            <Route
              exact
              path={routes.customerDeshboard}
              component={HomePage}
            />
            <Route
              exact
              path={routes.CustomerMyCourses}
              component={MyCourses}
            />
            <Route
              exact
              path={routes.CustomerMyServices}
              component={Services}
            />
            <Route
              exact
              path={routes.CustomerMyEvents}
              component={MyBookedEvents}
            />

            <Route
              exact
              path={routes.CustomerInProcessDetails}
              component={InProcessDetails}
            />
            <Route
              exact
              path={routes.CustomerCompletedOrderDetails}
              component={CompetedOrder}
            />
            <Route
              exact
              path={routes.CustomerCanceledOrderDetails}
              component={CancelledOrder}
            />
            <Route
              exact
              path={routes.CustomerViewEvent}
              component={ViewEvent}
            />
            <Route
              exact
              path={routes.ServiceCategoryCustomer}
              component={ServiceCategories}
            />
            <Route
              exact
              path={routes.OneServiceCustomer}
              component={OneServiceCustomer}
            />
            <Route
              exact
              path={routes.FreelancerServicesCustomer}
              component={FreelancerServices}
            />
            {/*    <PrivateRoute
              exact
              path={routes.ViewCourseDetailsInstitute}
              component={ViewCourseDetails}
            />
            <Route
              exact
              path={routes.PayFee}
              component={PayFee}
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
            <Route exact path={routes.paymentProcessing} component={PaymentProcessing} /> */}
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
export default withRouter(CustomerPanel);

