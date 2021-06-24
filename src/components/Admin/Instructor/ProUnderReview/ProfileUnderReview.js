import React, { useState } from "react";
import "./_profileReview.scss"
import Stepper from "react-stepper-horizontal";
// import Select from "../../Common/Select";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


const PayFee = props => {


  const { setNewProfile } = props

  const [state, setState] = useState({
   
  })




  // const onChangeHandler = e => {
  //   let name = e.target.name
  //   let value = e.target.value

  //   if (name === 'degree_file') {
  //     setState({
  //       ...state,
  //       name: e.target.files[0]
  //     })
  //   }
  //   if (name === "certification_file") {

  //     setState({
  //       ...state,

  //       name: e.target.files[0]
  //     })
  //   }

  //   setState({
  //     ...state,
  //     [name]: value
  //   })

  // }


  // const submit = (e) => {

  //   // e.preventDefault()
  //   console.log(state)
  //   setNewProfile(state, "instructor")

  // }


  return (
    <div className="wrapper-review">

      <div className="review-section">
        <div className="content-outer">

        <div className="content-wrapper">
          <img src={require('./assets/review.png')} alt="" className="review-icon"/>
        
        </div>
        <div className="review-content">
          <p>Your's Profile under reviewed</p>
        </div>
        <div className="thanks-content">
          <p>Thanks for your patience</p>
        </div>
        </div>

      </div>

      

    </div>
  );
};


let mapStateToProps = store => {
  console.log(store);

  return {
    userDetail: store.auth.userDetail
  }
}
let mapDispatchToProps = dispatch => {
  return {
    // setNewProfile: (state, user) => {
    //   dispatch(updateProfileInstructor(state, user))
    // }
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PayFee))

