import React, { useState } from "react";
import Modal from "react-modal";
import OtpInput from "react-otp-input";
import "./_adminModal.scss";


const customStyles = {
  content: {
    top: "40%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

const AdminModal = ({ isOpen, closeModal, onChangeHandler, checkPassword, otpNumber,phone_number,resend }) => {
  const [otp, setOtp] = useState("");
  const [verified, setVerified] = useState(false);
  const [state, setState] = useState({
    password: null,
    confirm_password: null,
    msg: null
  })

  // console.log(setPassword);





  // const checkPassword = e => {

  //   if (state.password) {
  //     if (state.password === state.confirm_password) {
  //       setState({
  //         ...state, msg: null
  //       })
  //       closeModal();
  //       setVerified(false);
  //       // setPassword({
  //       //   ...prevPassword,
  //       //   password: state.password
  //       // })
  //       // submit()

  //     }
  //     if (state.password !== state.confirm_password) {

  //       setState({
  //         ...state, msg: "Password didn't match."
  //       })
  //     }
  //     return true
  //   }
  //   closeModal();
  //   setVerified(false);


  // }
  otpConfirm = () => {
    setVerified(true)
  }

  return (
    <Modal
      isOpen={isOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={() => {
        closeModal();
        setVerified(false);
      }}
      style={customStyles}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      <div className="container" style={{ backgroundColor: "white" }}>
        <div className="row">
          <div className="col-12 offer-course-modal-col">
            <h3>{verified ? "Set Password" : "Verification"}</h3>

            {
              !verified && (
                <>
                  <p className="text">Enter 6 digit code sent to you on</p>
              <p className="cellno">{phone_number}</p>
                  <OtpInput
                    onChange={otp => setOtp(otp)}
                    numInputs={6}
                    separator={
                      <div
                        style={{
                          height: "0.10rem",
                          width: "6px",
                          backgroundColor: "gray"
                        }}
                      ></div>
                    }
                    value={otp}
                    containerStyle="otp-cntnr"
                    inputStyle="offer-course-otp-input"
                  />
                </>
              )}

            {verified && (
              <p className="cellno">
                <span style={{ marginRight: "10px", color: "#52b484" }}>
                  verified
                </span>
               {phone_number}
              </p>
            )}


            {verified && (
              <>
                <input
                  type="password"
                  className="password-input set-password"
                  placeholder="Enter password"
                  name="password"
                  onChange={onChangeHandler}
                />
                <input
                  type="password"
                  className="password-input reset-password"
                  placeholder="Re enter password"
                  name="confirm_password"
                  onChange={onChangeHandler}

                />
                <div className="form-group row forgot-password-row">
                  {state.msg ? state.msg : ''}
                  &nbsp;
                </div>
              </>
            )}
            <p>
              {verified ?
                // for password verification
                (
                  <button
                    className="primaryBtn verify"
                    onClick={() => {
                      checkPassword()

                    }}
                  >
                    Verify
                  </button>
                )
                :
                (
                  // for otp verification
                  <button
                    className="primaryBtn verify mt-1"
                    onClick={() => {
                      otpNumber(otp)
                      // setVerified(true)
                    }
                    }
                  >
                    Verify
                  </button>
                )
              }
            </p>
            {!verified && <p className="resend-code" onClick={()=>{resend(otp)}}>RESEND CODE</p>}
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default AdminModal;
export let otpConfirm