import React, { useState } from "react";
import Stepper from "react-stepper-horizontal/lib/Stepper";
import "./scss/_offerService.scss";
import Select from "../../../components/Common/Select";
import SelectPackageDelivery from "./SelectPackageDelivery/SelectPackageDelivery";
import SelectPkgRevision from "./SelectPkgRevision/SelectPkgRevision";
import Modal from "react-modal";

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

const OfferServicePage = props => {
  const [activeStep, setActiveStep] = useState(3);
  const [modalOpen , setModalOpen] = useState(false);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  return (
    <div className="offer-course-cntnr offer-service-cntnr">
      <h3 className="heading">Set Your Profile</h3>
      <div className="row mt-4">
        <div className="col-12 col-md-8 p-0 stepper-col">
          <Stepper
            titleTop={-60}
            activeColor="#878787"
            completeColor="#50AA58"
            activeTitleColor="#878787"
            completeTitleColor="#50AA58"
            defaultTitleColor="#878787"
            completeBarColor="#50AA58"
            defaultColor="#878787"
            size={32}
            circleFontSize={11}
            lineMarginOffset={0}
            titleFontSize={12}
            defaultBarColor="#878787"
            barHeight={5}
            steps={[
              { title: "Choose category & Service" },
              { title: "Packages & Price" },
              { title: "Requirements & Images" }
            ]}
            activeStep={activeStep}
          />
        </div>
      </div>

      {activeStep === 1 && (
        <>
          <div className="row">
            <div className="col-12 col-md-6 pl-0">
              <p className="mb-2 offer-course-input-label">Add Service Title</p>
              <textarea
                className="w-100"
                rows="5"
                name="description"
                onChange={() => {}}
                placeholder="Type here"
              ></textarea>
            </div>
          </div>
          <div className="col-6 text-right words-300">300 words</div>
          <div className="row mb-3">
            <div className="col-3 pr-2 dropdown-div offer-course-select-div">
              <p className="select-label"> Select Service</p>
              <Select category="Select service" />
            </div>
            <div className="col-3 pl-2 dropdown-div offer-course-select-div">
              <p className="select-label">Select Category</p>
              <Select category="Select category" />
            </div>
          </div>
        </>
      )}

      {activeStep === 2 && (
        <>
          <div className="row mb-3">
            <div className="col-12 col-md-8 pl-0">
              <h5 className="packages-header">Packages</h5>
              <div className="packages-container">
                <table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Basic</th>
                      <th>Silver</th>
                      <th>Gold</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="title">
                      <td></td>
                      <td className="title-text">
                        <label>
                          <textarea
                            rows="3"
                            maxLength="58"
                            type="text"
                            placeholder="Name your package"
                          ></textarea>
                        </label>
                      </td>
                      <td className="title-text">
                        <label>
                          <textarea
                            name="gig[packages][1][title]"
                            maxLength="58"
                            type="text"
                            placeholder="Name your package"
                          ></textarea>
                        </label>
                      </td>
                      <td className="title-text">
                        <label>
                          <textarea
                            name="gig[packages][1][title]"
                            maxLength="58"
                            type="text"
                            placeholder="Name your package"
                          ></textarea>
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>
                        <SelectPackageDelivery />
                      </td>
                      <td>
                        <SelectPackageDelivery />
                      </td>
                      <td>
                        <SelectPackageDelivery />
                      </td>
                    </tr>
                    <tr>
                      <td>Revisions</td>
                      <td>
                        <SelectPkgRevision />
                      </td>
                      <td>
                        <SelectPkgRevision />
                      </td>
                      <td>
                        <SelectPkgRevision />
                      </td>
                    </tr>
                    <tr>
                      <td>Source Code</td>
                      <td>hello1</td>
                      <td>hello </td>
                      <td>hello</td>
                    </tr>
                    <tr>
                      <td>Words Include</td>
                      <td>hello1</td>
                      <td>hello </td>
                      <td>hello</td>
                    </tr>
                    <tr>
                      <td>Prices</td>
                      <td>200 AED</td>
                      <td>500 AED </td>
                      <td>700 AED</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}
      {activeStep === 3 && (
        <div className="row mb-3">
          <div className="col-12 col-md-7">
            <p className="mb-2 offer-course-input-label">Add Requirements</p>
            <textarea
              className="w-100"
              rows="5"
              name="description"
              onChange={() => {}}
              placeholder="Type here"
            ></textarea>
          </div>
          <div className="col-12 col-md-7">
            <p className="mb-2 offer-course-input-label">Images</p>
            <div className="row">
              <div className="col-4 pl-0">
                <img
                className="img-fluid"
                  src="https://cdn.pixabay.com/photo/2016/01/08/11/57/butterfly-1127666__340.jpg"
                  alt="img"
                />
              </div>
              <div className="col-4 pl-2 pr-2">
                <img
                className="img-fluid"
                  src="https://cdn.pixabay.com/photo/2016/01/08/11/57/butterfly-1127666__340.jpg"
                  alt="img"
                />
              </div><div className="col-4 pr-0">
                <img
                className="img-fluid"
                  src="https://cdn.pixabay.com/photo/2016/01/08/11/57/butterfly-1127666__340.jpg"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="row">
        <div className="col-12 col-md-7 p-0 actionsArea-bottom">
          <button
            className="primaryBtn cancel"
            onClick={handleBack}
            disabled={activeStep === 1}
          >
            Cancel
          </button>
          {activeStep !== 3 ? (
            <button className="primaryBtn" onClick={handleNext}>
              Continue
            </button>
          ) : (
            <button className="primaryBtn" onClick={() => setModalOpen(true)}>Done</button>
          )}
        </div>
      </div>
      <Modal
      isOpen={modalOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={() => {
        setModalOpen(false);
      }}
      style={customStyles}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
        <div className="success-modal">
            <h5>Service Posted Successfully</h5>
        </div>
    </Modal>
    </div>
  );
};
export default OfferServicePage;
