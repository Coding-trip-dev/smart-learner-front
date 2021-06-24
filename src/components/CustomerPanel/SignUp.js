import React from "react";
import { Link } from "react-router-dom";
import * as routes from "../../constants/routePaths";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import GoogleAuthorize from "react-google-authorize";
import fb from "../../assets/icons/facebook.png";
import gmail from "../../assets/icons/gmail.png";

const responseFacebook = response => {
  console.log(response);
};

const responseGoogle = response => {
  console.log(response);
};

const SignUp = ({ switchModal }) => (
  <div>
    <FacebookLogin
      appId="234573867571425"
      fields="name,email,picture"
      //   autoLoad
      callback={responseFacebook}
      render={renderProps => (
        <button className="social-btn fb" onClick={renderProps.onClick}>
          <img src={fb} alt="fb" />
          <span>SignUp With Facebook</span>
        </button>
      )}
    />
    <br />
    <GoogleAuthorize
      clientId={
        "800995518332-brgjtim25mhjf4akd8sau9v23qlfbgdd.apps.googleusercontent.com"
      }
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      render={renderProps => {
        return (
          <button
            type="button"
            className="social-btn gmail"
            onClick={renderProps.onClick}
          >
            <img src={gmail} alt="fb" />
            <span>SignUp With Gmail</span>
          </button>
        );
      }}
    />
    <div className="OR">
      <div className="or-left"></div>
      <span className="or-text">OR</span>
      <div className="or-right"></div>
    </div>
    <form>
      <div className="form-group row">
        <label htmlFor="name" className="col-3 col-form-label pr-0">
          Full Name
        </label>
        <div className="col-9">
          <input type="text" className="form-control" id="name" />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="staticEmail" className="col-3 col-form-label">
          Email
        </label>
        <div className="col-9">
          <input type="text" className="form-control" id="staticEmail" />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="inputPassword" className="col-3 col-form-label">
          Password
        </label>
        <div className="col-9">
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            placeholder="Password"
          />
        </div>
      </div>
      <div className="form-group row">
        <div className="col-3 label">Gender</div>
        <div className="col-9">
          <div className="form-check-inline">
            <label className="form-check-label" htmlFor="male">
              <input
                type="radio"
                className="form-check-input"
                id="male"
                name="optradio"
                // value="option1"
                // checked
              />
              Male
            </label>
          </div>
          <div className="form-check-inline">
            <label className="form-check-label" htmlFor="female">
              <input
                type="radio"
                className="form-check-input"
                id="female"
                name="optradio"
                // value="option2"
              />
              Female
            </label>
          </div>
        </div>
      </div>
      <div className="form-group row">
        <Link to={routes.User}>
          <button type="submit" className="primaryBtn signUp-btn">
            Sign Up
          </button>
        </Link>
      </div>
      <div className="form-group row">
        <span>Already have an account?</span>
        <span className="signIn" onClick={() => switchModal("signIn")}>
          Sign In
        </span>
      </div>
    </form>
  </div>
);
export default SignUp;
