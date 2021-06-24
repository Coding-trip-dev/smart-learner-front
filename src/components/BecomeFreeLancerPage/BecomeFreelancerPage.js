import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import * as routes from "../../constants/routePaths";
import TopNavBar from "../../components/Common/TopNavBar";
import Footer from "../Common/Footer";
import "./scss/_become.scss"
import Modal from "./Modal";



const BecomeFreelancerPage = props => {
  const [open, setOpen] = useState(false);
  const [modelType, setModelType] = useState("signIn");
  const [modelFor, setModelFor] = useState("register");


  const openModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };
  const handleSwitchModal = type => {
    setModelType(type);
  };
  const handleModalFor = type => {
    setModelFor(type);
  };

  return (
    <>
      <Fragment>
        <TopNavBar />
        <Modal
          type={modelType}
          open={open}
          handleCloseModal={handleCloseModal}
          switchModal={handleSwitchModal}
          modelFor={modelFor}
          onClose={handleCloseModal}
        />

        <div className="become-freelancer">
          <div className="">
            <div class="jumbotron jumbotron-fluid" style={{
              color: 'white',
              backgroundImage:
                "url(https://anav.com.co/wp-content/uploads/2019/03/Congreso.png)",
                height: 500
            }}>
              <div class="container">
                <p class="display-4" style={{ color: 'white', fontSize: "4em", fontWeight: 500,paddingTop: '7rem'}}>Build Your Teaching <br /> Experience with us!</p>
                <p class="lead" style={{ color: 'white', fontWeight: 500 }}>Join the world's largest online learning marketplace.</p>
              </div>
            </div>
          </div>

          <div className="register-as-instructor register-section row">

            <div className="col-12 register-heading">register as instructor</div>
            <div className="col-6 section-instructor-left">
              <img src={require('../../assets/Images/registerLogo.JPG')} alt="" className="logo-img" />
            </div>
            <div className="col-6 section-instructor-right">
              <p className="lorem-ipsum-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit optio, expedita ipsam est reiciendis suscipit quasi in ullam possimus harum quia...</p>
              <p className="benefits">Benefits</p>
              <ul className="benefit-list">
                <li className="list-item-benefit-list">You will earn money when student purchases your course.</li>
                <li className="list-item-benefit-list">Get started with us and teach the students around the world.</li>
                <li className="list-item-benefit-list">Share and polish your knowledge</li>
                <li className="list-item-benefit-list">Become teacher and teach the students around the world.</li>
              </ul>
              <button className="join-btn"  onClick={() => {
                openModal()
                handleModalFor('instructor')
                handleSwitchModal("Sign Up")
              }}>
                Join Now
              </button>
            </div>
          </div>

          <div className="register-as-institute register-section row">

            <div className="col-12 register-heading">register as institute</div>
            <div className="col-6 section-instructor-right">
              <p className="lorem-ipsum-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit optio, expedita ipsam est reiciendis suscipit quasi in ullam possimus harum quia...</p>
              <p className="benefits">Benefits</p>
              <ul className="benefit-list">
                <li className="list-item-benefit-list">You will earn money when student purchases your course.</li>
                <li className="list-item-benefit-list">Get started with us and teach the students around the world.</li>
                <li className="list-item-benefit-list">Share and polish your knowledge</li>
                <li className="list-item-benefit-list">Become teacher and teach the students around the world.</li>
              </ul>
              <button className="join-btn" onClick={() => {
                openModal()
                handleModalFor('institute')
                handleSwitchModal("Sign Up")
              }}>
                Join Now
              </button>
            </div>
            <div className="col-5 section-instructor-left">
              <img src={require('../../assets/Images/institueLogo.JPG')} alt="" className="logo-img" />
            </div>
          </div>

          <div className="register-as-instructor register-section row">

            <div className="col-12 register-heading">register as freelancer</div>
            <div className="col-6 section-instructor-left">
              <img src={require('../../assets/Images/registerLogo.JPG')} alt="" className="logo-img" />
            </div>
            <div className="col-6 section-instructor-right">
              <p className="lorem-ipsum-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit optio, expedita ipsam est reiciendis suscipit quasi in ullam possimus harum quia...</p>
              <p className="benefits">Benefits</p>
              <ul className="benefit-list">
                <li className="list-item-benefit-list">You will earn money when student purchases your course.</li>
                <li className="list-item-benefit-list">Get started with us and teach the students around the world.</li>
                <li className="list-item-benefit-list">Share and polish your knowledge</li>
                <li className="list-item-benefit-list">Become teacher and teach the students around the world.</li>
              </ul>
              <button className="join-btn" onClick={() => {
                openModal()
                handleModalFor('freelancer')
                handleSwitchModal("Sign Up")
              }}>
                Join Now
              </button>
            </div>
          </div>


          <div className="how-it-works">
            <div className="row">
              <div className="col-12 _heading">How it Work</div>
              {/* <div className="col-"></div> */}
              <div className="col-4">

                <div className="card-outerr">
                  <div className="heading-card">
                    Create an Course
                  </div>
                  <div className="card-text">
                    Teach what you love and what you want it should be informative.
                  </div>
                  <img src={require('../../assets/Images/card-logo-1.JPG')} alt="" className="cards-works" />
                </div>
              </div>
              <div className="col-4">

                <div className="card-outerr color-white">
                  <div className="heading-card">
                   Get Started with Videos
                  </div>
                  <div className="card-text">
                  Quality videos lecture can set you course apart.
                  </div>
                  <img src={require('../../assets/Images/card-logo-2.JPG')} alt="" className="cards-works" />
                </div>
              </div>
              <div className="col-4">

                <div className="card-outerr color-white">
                  <div className="heading-card">
                   Get Target Audience
                  </div>
                  <div className="card-text">
                    Get your course up for success by building your audience
                  </div>
                  <img src={require('../../assets/Images/card-logo-3.JPG')} alt="" className="cards-works" />
                </div>
              </div>
            </div>
          </div>


          <div className="col-12 text-center are-you-ready">
            <p className='h3'>So Are You Ready?</p >
            <div className="become-freelancer-btns">
              {/* <Link to={routes.OfferCourse}> */}
              <button onClick={() => {
                openModal()
                handleModalFor('instructor')
                handleSwitchModal("Sign Up")
              }} >Register Instructor</button>
              {/* </Link> */}
              {/* <Link to={routes.OfferService}> */}
              <button onClick={() => {
                openModal()
                handleModalFor('freelancer')
                handleSwitchModal("Sign Up")
              }} >Register Freelancer</button>
              {/* </Link> */}
              {/* <Link to={routes.RegisterAsInstitute}> */}
              <button onClick={() => {
                openModal()
                handleModalFor('institute')
                handleSwitchModal("Sign Up")
              }} >Register Institute</button>
              {/* </Link> */}
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    </>
  )
}
export default BecomeFreelancerPage;
