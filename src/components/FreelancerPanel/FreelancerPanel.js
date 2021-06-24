import React, { Fragment, useState, useEffect } from "react";
import { Route, Link, Switch, withRouter, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux'
import "./scss/_adminLayout.scss";
// import AdminTopNavbar from "./common/AdminNavBar/AdminTopNavBar";
import * as routes from "../../constants/routePaths";
import Footer from "../Common/Footer";
import home from "./assets/home.png";
import user from "./assets/user.png";
import plusCircle from "./assets/plus-circle.png";
import stock from "./assets/stock.png";
import FreelancerDashboard from "./Freelancer_Dashboard/FreelancerDashboard";
import FreelancerManageGigs from "./ManageGigs/FreelancerManageGigs";
import OfferServicePage from "./OfferServicePage/OfferServicePage";
import ManageSales from './manageSales/manageSales'
import WithDraw from './manageSales/withdraw/withdraw'
import EditGig from './ManageGigs/EditGig/EditGig'
import ManageOrders from './ManageOrder/manageOrders'
import ViewRevisionOrder from './ManageOrder/viewRevisionOrder/viewOrderDetail'
import ViewRunningOrder from './ManageOrder/viewRunningOrder/viewOrderDetail'
import ViewNewOrder from './ManageOrder/viewNewOrder/viewOrderDetail'
import TopNavBar from "../CustomerPanel/TopBar";




const PrivateRoute = ({ component: Component, ...rest }) => {
  const authenticated = useSelector(state => state.auth.user_id );
  console.log(authenticated); 

  return (
    <Route
      {...rest}
      render={props =>

        authenticated !== null
          // true
          ? (
            <Component {...props} />
          ) : (
            <Redirect to="/become-freelancer" />
          )
      }
    />
  );
};



const FreelancerPanel = ({ match, ...props }) => {
  const [focused, setFocused] = useState("home");
  console.log(match, props);

  useEffect(() => {
    document.getElementById(focused).focus();
  }, [focused])

  return (
    <Fragment>
      <TopNavBar />
      <section className="admin-section d-flex">
        <ul className="links-list">
          <li>
            <Link to={routes.freelancerDashboard} id="home" onClick={() => setFocused("home")}>
              <img src={home} alt="home" />
            </Link>
          </li>
          <li>
            <Link to={routes.freelancerManageGigs} id="user" onClick={() => setFocused("user")}>
              <img src={user} alt="user" title="user" />
            </Link>
          </li>
          <li>
            <Link to={routes.freelancerManageOrders} id="plus" onClick={() => setFocused("plus")}>
              <img src={plusCircle} alt="plus" />
            </Link>
          </li>
          <li>
            <Link to={routes.freelancerManageSales}>
              <img src={stock} alt="stock-icon" id="stock" onClick={() => setFocused("stock")} />
            </Link>
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <Switch>
          <PrivateRoute exact path={routes.freelancerDashboard} component={FreelancerDashboard} /> 
          <PrivateRoute exact path={routes.freelancerManageGigs} component={FreelancerManageGigs} />
          <PrivateRoute exact path={routes.freelancerService} component={OfferServicePage} /> 
          <PrivateRoute exact path={routes.freelancerManageSales} component={ManageSales} />
          <PrivateRoute exact path={routes.freelancerWithDraw} component={WithDraw} />
          <PrivateRoute exact path={routes.freelancerEditGig} component={EditGig} />
          <PrivateRoute exact path={routes.freelancerManageOrders} component={ManageOrders} />
          <PrivateRoute exact path={routes.freelancerViewOrderDetailRevision} component={ViewRevisionOrder} />
          <PrivateRoute exact path={routes.freelancerViewOrderDetailRunning} component={ViewRunningOrder} /> 
          <PrivateRoute exact path={routes.freelancerViewOrderDetailNew} component={ViewNewOrder} />







          <Route path="*" component={() => <div>No page found</div>} />
        </Switch>
      </section>
      <Footer />
    </Fragment>
  );
};
export default withRouter(FreelancerPanel);

