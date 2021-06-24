import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as routes from "../../constants/routePaths";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import GoogleAuthorize from "react-google-authorize";
import fb from "../../assets/icons/facebook.png";
import gmail from "../../assets/icons/gmail.png";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { register, registerUser } from '../../redux/actions/auth'



const responseFacebook = response => {
  console.log(response);
};

const responseGoogle = response => {
  console.log(response);
};


const SignUp = (props) => {


  const { switchModal, register, modelFor,msg } = props
  const [state, setState] = useState({
    name: null,
    email: null,
    password: null
  })

  const onChangeHandler = e => {
    let name = e.target.name
    let value = e.target.value


    setState({ ...state, [name]: value })

  }
  const submitData = e => {
    e.preventDefault()
    register(state, modelFor)
  }
  


  return (
    <div>
      <form className="auth form-register">

        <div className="form-group row">
          <label htmlFor="name" className="col-3 col-form-label pr-0 ">
            Full Name
        </label>
          <div className="col-9">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Full name"
              name="name"
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="staticEmail" className="col-3 col-form-label">
            Email
        </label>
          <div className="col-9">
            <input
              type="text"
              className="form-control error-field"
              id="staticEmail"
              placeholder="Example@example.com"
              name="email"
              onChange={onChangeHandler}


            />
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
              placeholder="*********"
              name="password"
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div className="form-group row forgot-password-row">
          {msg ? msg : ''}
          &nbsp;
         </div>

        <div className="form-group row btn-outer2">
          {/* <Link to={routes.User}> */}
          <button
            type="submit"
            className="primaryBtn primaryBtnAuth signUp-btn"
            onClick={submitData}
          >
            Create Account
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
let mapStateToProps = store => {
  console.log(store);
  
  return {
    msg: store.auth.msg
  }
}
let mapDispatchToProps = dispatch => {
  return {
    register: (details,modelFor) => {
      dispatch(registerUser(details,modelFor))
    }
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));
