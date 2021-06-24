import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import * as routes from "../../../../constants/routePaths";
import "./_adminNavBar.scss";
import history from '../../../Common/history'

const AdminTopNavBar = (props) => {
  const { switchModal, openModal } = props;
  // let history = useHistory();




  return (
    <nav className="admin-navbar navbar navbar-expand-lg navbar-light">
      <Link to={routes.Home} className="navbar-brand logo-text">
        <span>SMART</span> LEARNERS
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse text-right" id="navbarSupportedContent">

        <div className="navbar-item action-navbar-item" style={{ display: "inline-block", flex: "auto" }}>
          <button
            className="sign-btn mr-2"
            onClick={(e) => {
              e.preventDefault();
              history.push("/become-freelancer")
            }}
          >
            BECOME FREELANCER
          </button>
          <button
            className="sign-btn mr-2"
            onClick={() => {
              switchModal("signIn");
              openModal();
            }}
          >
            Sign In
          </button>
          <button
            className="sign-btn"
            onClick={() => {
              switchModal("signUp");
              openModal();
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  )
};
export default AdminTopNavBar;
