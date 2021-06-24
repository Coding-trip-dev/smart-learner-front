import React, { useState } from "react";
import { Link,withRouter } from "react-router-dom";
import "./scss/_sign.scss";
import * as routes from "../../constants/routePaths";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import GoogleAuthorize from "react-google-authorize";
import fb from "../../assets/icons/facebook.png";
import gmail from "../../assets/icons/gmail.png";
import { signIn } from '../../redux/actions/auth'
import { connect } from 'react-redux' 

const responseFacebook = response => {
  console.log(response);
};

const responseGoogle = response => {
  console.log(response);
};

const SignIn = (props) => {


  const { switchModal, login } = props
  const [state, setState] = useState({
    email: null,
    password: null
  })

  const onChangeHandler = e => {
    let name = e.target.name
    let val = e.target.value

    setState({ ...state, [name]: val })
  }

  const loginUser = e => {
    e.preventDefault()
    login(state, "customer")
  }



  return (
    <div>
      <FacebookLogin
        appId="234573867571425"
        fields="name,email,picture"
        //   autoLoad
        callback={responseFacebook}
        render={renderProps => (
          <button className="social-btn fb" onClick={renderProps.onClick}>
            <img src={fb} alt="fb" />
            <span>SignIn With Facebook</span>
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
              <span>SignIn With Gmail</span>
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
          <label htmlFor="staticEmail" className="col-3 col-form-label">
            Email
        </label>
          <div className="col-9">
            <input
              type="text"
              className="form-control"
              id="staticEmail"
              placeholder="Example@example.com"
              onChange={onChangeHandler}
              name="email"
            />
          </div>
        </div>
        <div className="form-group row password-row">
          <label htmlFor="inputPassword" className="col-3 col-form-label">
            Password
        </label>
          <div className="col-9">
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              placeholder="*******"
              onChange={onChangeHandler}
              name="password"
            />
          </div>
        </div>
        <div className="form-group row forgot-password-row">
          forgot password ?
      </div>
        <div className="form-group row">
          {/* <Link to={routes.User}> */}
          <button
            className="primaryBtn signIn-btn"
            type="submit"
            onClick={loginUser}
          >
            Sign In
          </button>
          {/* </Link> */}
        </div>
        <div className="form-group row">
          <span>Don't have an account?</span>
          <span className="signUp" onClick={() => switchModal("signUp")}>
            Sign Up
        </span>
        </div>
      </form>
    </div>
  )
}


let mapStateToProps = store => {
  console.log(store);

  return {
    msg: store.auth.msg
  }
}
let mapDispatchToProps = dispatch => {
  return {
    login: (details, modelFor) => {
      dispatch(signIn(details, modelFor))
    }
  }
}
  

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));
