import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as routes from "../../constants/routePaths";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import GoogleAuthorize from "react-google-authorize";
import fb from "../../assets/icons/facebook.png";
import gmail from "../../assets/icons/gmail.png";
import { registerUser } from '../../redux/actions/auth'
import { connect } from "react-redux";
const responseFacebook = response => {
  console.log(response);
};

const responseGoogle = response => {
  console.log(response);
};

const SignUp = ({ switchModal, registerUser }) => {

  let [state, setState] = useState({
    name: null,
    email: null,
    password: null,
    gender: null,

  })
  const onChangeHandler = e => {
    let name = e.target.name
    let value = e.target.value
    setState({
      ...state,
      [name]: value
    })
  }
  const submitHandler = e => {
    e.preventDefault()

    console.log(state);
    registerUser(state, "customer")
  }
  return (

    <div>
      {/* <FacebookLogin
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
      </div> */}
      <form>
        <div className="form-group row">
          <label htmlFor="name" className="col-3 col-form-label pr-0">
            Full Name
        </label>
          <div className="col-9">
            <input type="text" className="form-control" id="name" name="name" onChange={onChangeHandler} />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="staticEmail" className="col-3 col-form-label">
            Email
        </label>
          <div className="col-9">
            <input type="text" className="form-control" id="staticEmail" name="email" onChange={onChangeHandler} />
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
              name="password"
              onChange={onChangeHandler}
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
                  name="gender"
                  onChange={onChangeHandler}
                  value="male"

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
                  name="gender"
                  value="female"

                  onChange={onChangeHandler}
                />
              Female
            </label>
            </div>
          </div>
        </div>
        <div className="form-group row">
          {/* <Link to={routes.User}> */}
          <button type="submit" className="primaryBtn signUp-btn" onClick={submitHandler}>
            Sign Up
          </button>
          {/* </Link> */}
        </div>
        <div className="form-group row">
          <span>Already have an account?</span>
          <span className="signIn" onClick={() => switchModal("signIn")}>
            Sign In
        </span>
        </div>
      </form>
    </div>
  )
}
export default connect(null, { registerUser })(SignUp);
