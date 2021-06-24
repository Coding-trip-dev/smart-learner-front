import React from "react";
import "./scss/_modal.scss";
import Modal from "react-modal";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

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

const ModalComp = ({ open, handleCloseModal,type,switchModal }) => {
  return (
    <Modal
      isOpen={open}
      contentLabel="onRequestClose Example"
      style={customStyles}
      ariaHideApp={false}
      //  onRequestClose={this.handleCloseModal}
       shouldCloseOnOverlayClick={true}
    >
      <div className="position-relative text-center modal-custom">
        <h6 className="type">
            {
                type === "signIn"  ? "Sign In" : "Sign Up"
            }
        </h6>
        <p>Smart Learners Learn with experts.</p>
        <p>Make your free account.Learn</p>

            { 
                type === "signIn" ? <SignIn switchModal={switchModal}/> : <SignUp  switchModal={switchModal}/>
            } 
    

 
        <div className="close" onClick={handleCloseModal}>
          X
        </div>
      </div>
    </Modal>
  );
};
export default ModalComp;
