import React, { Fragment, useState, useEffect } from "react";
import { Route, Link, Switch, withRouter } from "react-router-dom";
import "./scss/_adminLayout.scss";
import AdminTopNavbar from "./common/AdminNavBar/AdminTopNavBar";
import * as routes from "../../constants/routePaths";
import OfferCoursePage from "./OfferCoursePage/OfferCoursePage";
import OfferServicePage from "./OfferServicePage/OfferServicePage";
import Footer from "../Common/Footer";
import RegisterAsInstitutePage from "./RegisterAsInstitutePage/RegisterAsInstitutePage";
import home from "./adminAssets/home.png";
import user from "./adminAssets/user.png";
import plusCircle from "./adminAssets/plus-circle.png";
import stock from "./adminAssets/stock.png";
import CourseManagement from './courseManagement/courseManagement'
import AddNewCourse from "./courseManagement/addNewCourse";
import ViewCourseDetails from './courseManagement/viewCourseDetails'


const AdminLayout = ({ match , ...props }) => {
  const [focused, setFocused] = useState("home");
  console.log(match,props);

  useEffect(() => {
    document.getElementById(focused).focus();
  }, [focused])

  return (
    <Fragment>
      <AdminTopNavbar />
      <section className="admin-section d-flex">
        <ul className="links-list">
          <li>
            <Link to={routes.OfferCourse} id="home" onClick={() => setFocused("home")}>
              <img src={home} alt="home" />
            </Link>
          </li>
          <li>
            <Link to={routes.RegisterAsInstitute} id="user" onClick={() => setFocused("user")}>
              <img src={user} alt="user" title="user" />
            </Link>
          </li> 
          <li>
            <Link to={routes.CourseManagement} id="plus" onClick={() => setFocused("plus")}>
              <img src={plusCircle} alt="plus" />
            </Link>
          </li>
          <li>
            <Link to={routes.OfferService}>
              <img src={stock} alt="stock-icon" id="stock" onClick={() => setFocused("stock")} />
            </Link>
          </li>
          <li></li>
          <li></li>
          <li></li>    
          <li></li>
        </ul>
        <Switch>
          <Route exact path={routes.CourseManagement} component={CourseManagement} />
          <Route exact path={routes.OfferCourse} component={OfferCoursePage} />

          <Route
            exact
            path={routes.OfferService}
            component={OfferServicePage}
          />
          <Route
            exact
            path={routes.RegisterAsInstitute}
            component={RegisterAsInstitutePage}
          />
          <Route
            exact
            path={routes.AddNewCourse}
            component={AddNewCourse}
          />
          <Route
            exact
            path={routes.ViewCourseDetails}
            component={ViewCourseDetails}
          />

          <Route path="*" component={() => <div>No page found</div>} />
        </Switch>
      </section>
      <Footer />
    </Fragment>
  );
};
export default withRouter(AdminLayout);

