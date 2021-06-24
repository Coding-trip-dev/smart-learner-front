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

const ModalComp = ({ open, handleCloseModal, type, switchModal,modelFor }) => {
  return (
    <Modal
      isOpen={open}
      contentLabel="onRequestClose Example"
      style={customStyles}
      ariaHideApp={false}
      //  onRequestClose={this.handleCloseModal}
      shouldCloseOnOverlayClick={true}
      onClose={handleCloseModal}
      onEscapeKeyDown={handleCloseModal}
    >
      <div className="position-relative text-center modal-custom-auth modal-auth">
        <h3 className="type model-heading">
          <b>
            {
              type === "signIn" ? "Sign In" : "Sign Up"
            }
          </b>
        </h3>
        {
          type === "signIn" ?
            <SignIn switchModal={switchModal} 
            modelFor={modelFor}
            />
            :
            <SignUp switchModal={switchModal}  
            modelFor={modelFor} 
            />
        }

          <div className="close" onClick={handleCloseModal}>
            <span className="x">
              x
            
              </span> 
        </div>
      </div>
    </Modal>
  );
};
export default ModalComp;
