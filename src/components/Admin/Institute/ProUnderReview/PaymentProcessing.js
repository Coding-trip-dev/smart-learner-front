import React, { useState, useEffect } from "react";
import "./_profileReview.scss"
import Stepper from "react-stepper-horizontal";
// import Select from "../../Common/Select";
import { connect, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from "axios";
import { baseURL } from "../../../../redux/config/config";


const PayFee = props => {


  const { setNewProfile } = props

  const [state, setState] = useState({
   
  })


  useEffect(()=>{
    let userId = useSelector(state => state.auth.user_id)
    let url = window.location.search
    let param = new URLSearchParams(url)
    let code = param.get("code")
    console.log(code)
     // user id , 
    axios.post(baseURL + `/api/freelancer/withdraw/authorize-oauth?code=${code}`,{userId}).then((res)=>{
      if(res){
        console.log(res);
        
      }
    }).catch((err)=>{
      console.log(err);
      
    })
    
  },[])



  return (
    <div className="wrapper-review">

      <div className="review-section">
        <div className="content-outer">

        <div className="content-wrapper">
          <img src={require('./assets/review.png')} alt="" className="review-icon"/>
        
        </div>
        <div className="review-content">
          <p>Your's Payment is processing.</p>
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

