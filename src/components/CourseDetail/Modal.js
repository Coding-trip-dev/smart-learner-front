import React, {useState, useEffect} from "react";
import "./scss/_modal.scss";
import Modal from "react-modal";
// import SignIn from "./SignIn";
// import SignUp from "./SignUp";
import {useSelector} from 'react-redux'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Rating from "@material-ui/lab/Rating";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CardDetails from './payment'
import {handleSubmit} from './payment'


const stripePromise = loadStripe("pk_test_1ayr6rHllTEJ6Na0Qa4OkOKx00lHbS30zG");



const customStyles = {
  content: {
    top: "45%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

const ModalComp = ({ open, handleCloseModal,course }) => {

  

  return (
    <Modal
      isOpen={open}
      contentLabel="onRequestClose Example"
      style={customStyles}
      ariaHideApp={false}
      //  onRequestClose={this.handleCloseModal}
      shouldCloseOnOverlayClick={true}
    >
      <div className="position-relative custom-style">

        <div className="buy-course-outer">

          <div className="row header-popup">
            <div className="col-1"><AddShoppingCartIcon style={{ color: "#30B484", fontSize: 40, marginTop: 5 }} /></div>
            <div className="col-11 cart-text">My cart</div>
          </div>
          <div className="row left-section-popup">
            <div className="col-8">

              <div className="course-title-pop-up">
                Course Name
              </div>
              <div className="courses-popup">
                <div className="col-11 ">
                  <img src={require('../../assets/Images/homepageImages/nature.jpg')} alt="" className="pop-upimg" />
                  <div className="course-detail-popup">
                    <div className="course-name-popup">
                      {course ? course.english_tittle : ''}
                    </div>
                    <div className="course-detail-popup">
                      {course ? course.english_sub_tittle : ''}
                        </div>
                    <Rating className="rating-popup" value={course ? course.stars : ""} readOnly />

                  </div>
                </div>
                <div className="col-1">
                  <div className="close-course-popup">X</div>
                  <div className="price-course-popup">${course ? course.origional_price - course.discount_price : ""}</div>
                </div>
              </div>
              {/* <div className="courses-popup">
                <div className="col-11 ">
                  <img src={require('../../assets/Images/homepageImages/nature.jpg')} alt="" className="pop-upimg" />
                  <div className="course-detail-popup">
                    <div className="course-name-popup">
                      Introduction to Microbiology
                    </div>
                    <div className="course-detail-popup">
                      Understand the theory of biology object
                        </div>
                    <Rating className="rating-popup" value={5} readOnly />

                  </div>
                </div>
                <div className="col-1">
                  <div className="close-course-popup">X</div>
                  <div className="price-course-popup">$20</div>
                </div>
              </div> */}

            </div>

            <div className="col-4">

              <div className="total-amount-pop">
                <span className="text-amount">

                  Total amount
                </span>
                <span className="amount-popup">

                  $40
                </span>
              </div>
              <div className="payment-pop">
                <span className="text-amount">

                  Payment method
                </span>
                <span className="master-card-popup">
                  <img src={require("./card.png")} alt="" />
                  <img src={require("./visa.png")} alt="" className="visa" />
                </span>
                <span className="amount-popup">

                  Credit/Debt card
                </span>
             
                <div className="card-elements">
                  {/* <StripeProvider apiKey="pk_test_1ayr6rHllTEJ6Na0Qa4OkOKx00lHbS30zG"> */}
                  <Elements stripe={stripePromise}>
                      <CardDetails course={course}/>
                  </Elements>
                  {/* </StripeProvider> */}
                </div>

              </div>
              {/* <div className="no-courses">
                <span className="text-amount">
                  No of courses
                </span>
                <span className="amount-popup">

                  2
                </span>
                <button className="buy-now" title="Buy courses" >
                  Buy now
                </button>
              </div> */}
            </div>


          </div>
        </div>

        <div className="close" onClick={handleCloseModal}>
          X
        </div>
      </div>
    </Modal>
  );
};
export default ModalComp;
