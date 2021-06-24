import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "./scss/_sign.scss";
import * as routes from "../../constants/routePaths";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import GoogleAuthorize from "react-google-authorize";
import fb from "../../assets/icons/facebook.png";
import gmail from "../../assets/icons/gmail.png";
import { signIn } from '../../redux/actions/auth';
import { connect } from 'react-redux'


const responseFacebook = response => {
  console.log(response);
};

const responseGoogle = response => {
  console.log(response);
};

const SignIn = (props) => {

  const { switchModal, modelFor, login } = props
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
    login(state, modelFor) 
  }
  return (
    <div>

      <form className="auth form-login">
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
        <div className="form-group row btn-outer">
          {/* <Link to={routes.User}> */}
          <button
            className="primaryBtn primaryBtnAuth signIn-btn"
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