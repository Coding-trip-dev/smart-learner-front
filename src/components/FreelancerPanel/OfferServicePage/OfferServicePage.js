import React, { useState } from "react";
import Stepper from "react-stepper-horizontal/lib/Stepper";
import "./scss/_offerService.scss";
import Select from "../../../components/Common/Select";
import SelectPackageDelivery from "./SelectPackageDelivery/SelectPackageDelivery";
import SelectPkgRevision from "./SelectPkgRevision/SelectPkgRevision";
import Modal from "react-modal";
import EditIcon from '@material-ui/icons/Edit';
import { useSelector, connect } from "react-redux";
import { getAllServices, createService } from "../../../redux/actions/freelancer/servicesAction"
import { useEffect } from "react";

let revisions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
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

  const { getAllServices, services, createService } = props

  const [activeStep, setActiveStep] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [serviceCate, setServiceCate] = useState(null);


  useEffect(() => {
    getAllServices()
  }, [])

  // let allServices = []
  // useEffect(() => {
  //   if (allServices.length > 0) {

  //     allServices = services.services
  //   }

  //   console.log(allServices);
  // }, [services])

  const [basic, setBasic] = useState({
    basic_description: "",
    delivery_days: "",
    revision: "",
    source_file: "",
    words_include: "",
    price: ""
  })
  const [silver, setSilver] = useState({
    basic_description: "",
    delivery_days: "",
    revision: "",
    source_file: "",
    words_include: "",
    price: ""
  })
  const [golden, setGolden] = useState({
    basic_description: "",
    delivery_days: "",
    revision: "",
    source_file: "",
    words_include: "",
    price: ""
  })

  const [state, setState] = useState({
    service_provider: useSelector(state => state.auth.user_id),
    service_title: "",
    service_id: "",
    service_category_id: "",
    requirements: "",
    freelancer_name: "",
    freelancer_picture: "",
    freelancer_skill: "",
  })
  const [images, setImages] = useState({
    image1: "",
    image2: "",
    image3: "",
  })
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };


  const onChangeHandler = e => {
    let name = e.target.name
    let val = e.target.value
    if (name === "service_id") {
      getCategories(val)
    }
    setState({
      ...state,
      [name]: val
    })

  }
  const getCategories = id => {
    let categories = services.services.filter((item) => {
      return item._id === id ? item : null
    })
    setServiceCate(categories[0].english_categories)

  }
  const basicChangeHandler = e => {
    let name = e.target.name
    let val = e.target.value

    setBasic({
      ...basic,
      [name]: val
    })
  }
  const silverChangeHandler = e => {
    let name = e.target.name
    let val = e.target.value
    setSilver({
      ...silver,
      [name]: val
    })
  }
  const goldenChangeHandler = e => {
    let name = e.target.name
    let val = e.target.value
    setGolden({
      ...golden,
      [name]: val
    })
  }

  const imageChangeHandler = e => {
    let name = e.target.name
    let val = e.target.files[0]
    if (e.target.files[0]) {

      let update = URL.createObjectURL(val)
      if (name === 'image1') {
        let img = document.getElementById(name + "-1")
        img.src = update
      }
      if (name === 'image2') {
        let img = document.getElementById(name + "-2")
        img.src = update
      }
      if (name === 'image3') {
        let img = document.getElementById(name + "-3")
        img.src = update
      }

      setImages({
        ...images,
        [name]: val
      })

    }

  }


  const onSubmit = e => {
    e.preventDefault()

    let newState = {
      ...state,
      packages: [
        {
          basic: { ...basic }
        },
        {
          silver: { ...silver }
        },
        {
          golden: { ...golden }
        },

      ],
      images: [images.image1, images.image2, images.image3]
    }
    createService(newState);
    // setModalOpen(true)
  }

  console.log(services.services);

  return (
    <div className="offer-course-cntnr offer-service-cntnr " >
      <h3 className="heading _marginLeft">Set Your Profile</h3>
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
              <p className="mb-2 offer-course-input-label _marginLeft">Add Service Title</p>
              <textarea
                className="w-100 _marginLeft"
                rows="5"
                name="service_title"
                onChange={onChangeHandler}
                placeholder="Type here"
                value={state.service_title}
              ></textarea>
            </div>
          </div>
          <div className="col-6 text-right words-300">300 words</div>
          <div className="row mb-3">
            <div className="col-3 pr-2 dropdown-div offer-course-select-div _marginLeft">
              <p className="select-label"> Select Service</p>
              {/* <Select category="Select service" /> */}
              <select className="custom-select" onChange={onChangeHandler} name="service_id">
                <option>Select service</option>
                {services.services !== null && services.services !== undefined ?
                  services.services.map((item, key) => {
                    return <option value={item._id} key={key}>{item.name_in_english}</option>
                  })
                  : null
                }
              </select>
            </div>
            <div className="col-3 pl-2 dropdown-div offer-course-select-div ">
              <p className="select-label">Select Category</p>
              <select className="custom-select" onChange={onChangeHandler} name="service_category_id">
                <option selected>Select Category</option>
                {serviceCate !== null ?
                  serviceCate.map((item, key) => {
                    return <option value={item._id} key={key}>{item.service_name}</option>
                  })
                  : <option >Please Select Service First</option>
                }
              </select>
            </div>
          </div>
        </>
      )}

      {activeStep === 2 && (
        <>
          <div className="row mb-3">
            <div className="col-12 col-md-8 pl-0 _marginLeft">
              <h5 className="packages-header " >Packages</h5>
              <div className="packages-container">
                <table>
                  <thead>
                    <tr>
                      <th></th>
                      <th className="pack-name">Basic</th>
                      <th className="pack-name">Silver</th>
                      <th className="pack-name">Gold</th>
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
                            cols="28"
                            placeholder="Description about your package / offer"
                            name="basic_description"
                            onChange={basicChangeHandler}
                            value={basic.basic_description}
                          ></textarea>
                          <EditIcon className="editIcon" />
                        </label>
                      </td>
                      <td className="title-text">
                        <label>
                          <textarea

                            rows="3"
                            maxLength="58"
                            type="text"
                            cols="28"
                            placeholder="Description about your package / offer"
                            name="basic_description"
                            onChange={silverChangeHandler}
                            value={silver.basic_description}

                          ></textarea>
                          <EditIcon className="editIcon" />
                        </label>
                      </td>
                      <td className="title-text">
                        <label>
                          <textarea
                            rows="3"
                            maxLength="58"
                            name="basic_description"
                            onChange={goldenChangeHandler}
                            type="text"
                            cols="28"
                            placeholder="Description about your package / offer"
                            value={golden.basic_description}
                          ></textarea>
                          <EditIcon className="editIcon" />
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>
                        <select name="delivery_days"
                          onChange={basicChangeHandler} id="" className="select-options">
                          <option value="" selected

                          >Select Delivery</option>
                          {revisions.map((item, key) => {
                            return <option value={item} key={key}>{item} Days Delivery</option>
                          })}
                        </select>
                      </td>
                      <td>
                        <select id="" className="select-options"
                          name="delivery_days"
                          onChange={silverChangeHandler}>
                          <option value="" selected>Select Delivery</option>
                          {revisions.map((item, key) => {
                            return <option value={item} key={key}>{item} Days Delivery</option>
                          })}
                        </select>
                      </td>
                      <td>
                        <select name="delivery_days"
                          onChange={goldenChangeHandler} id="" className="select-options">
                          <option value="" selected>Select Delivery</option>
                          {revisions.map((item, key) => {
                            return <option value={item} key={key}>{item} Days Delivery</option>
                          })}
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>Revisions</td>
                      <td>
                        <select name="revision" onChange={basicChangeHandler} id="" className="select-options">
                          <option value="" selected>Select Revisions</option>
                          {revisions.map((item, key) => {
                            return <option value={item} key={key}>{item}</option>
                          })}
                        </select>
                      </td>
                      <td>
                        <select name="revision"
                          onChange={silverChangeHandler} id="" className="select-options">
                          <option value="" selected>Select Revisions</option>

                          {revisions.map((item, key) => {
                            return <option value={item} key={key}>{item}</option>
                          })}
                        </select>
                      </td>
                      <td>
                        <select name="revision" onChange={goldenChangeHandler} id="" className="select-options">
                          <option value="" selected>Select Revisions</option>

                          {revisions.map((item, key) => {
                            return <option value={item} key={key}>{item}</option>
                          })}
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>Source Code</td>
                      <td>
                        <select className="select-options" name="source_file" onChange={basicChangeHandler}>
                          <option value="" selected>Select</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </td>
                      <td>
                        <select className="select-options"
                          name="source_file" onChange={silverChangeHandler}
                        >
                          <option value="" selected>Select</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </td>
                      <td>
                        <select className="select-options"
                          name="source_file" onChange={goldenChangeHandler}
                        >
                          <option value="" selected>Select</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>Words Include</td>
                      <td>
                        <input type="number" className="select-options"
                          name="words_include" onChange={basicChangeHandler}
                          placeholder="Words Include"
                          value={basic.words_include}

                        />
                      </td>
                      <td>
                        <input type="number" className="select-options"
                          name="words_include" onChange={silverChangeHandler}
                          placeholder="Words Include"
                          value={silver.words_include}
                        />
                      </td>
                      <td>
                        <input type="number" className="select-options"
                          name="words_include" onChange={goldenChangeHandler}
                          value={golden.words_include}
                          placeholder="Words Include" />
                      </td>
                    </tr>
                    <tr>
                      <td>Prices</td>
                      <td>
                        <input type="number" className="input-options" name="price"
                          value={basic.price}
                          onChange={basicChangeHandler} />
                        <span className="input-price-tag">AED</span>
                      </td>
                      <td>
                        <input type="number"
                          value={silver.price}
                          className="input-options" name="price" onChange={silverChangeHandler} />
                        <span className="input-price-tag">AED</span>
                      </td>
                      <td>
                        <input type="number"
                          value={golden.price}
                          className="input-options" name="price" onChange={goldenChangeHandler} />
                        <span className="input-price-tag">AED</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}
      {
        activeStep === 3 && (
          <div className="row mb-3 _marginLeft">
            <div className="col-12 col-md-7 ">
              <p className="mb-2 offer-course-input-label">Add Requirements</p>
              <textarea
                className="w-100"
                rows="5"
                name="requirements"
                // onChange={() => { }}
                placeholder="Type here"
                onChange={onChangeHandler}
                value={state.requirements}
              ></textarea>
            </div>
            <div className="col-12 col-md-7">
              <p className="mb-2 offer-course-input-label">Images</p>
              <div className="row">
                <div className="col-4 pl-0">
                  <label htmlFor="image1">
                    <img
                      className="img-fluid"
                      src="https://cdn.pixabay.com/photo/2016/01/08/11/57/butterfly-1127666__340.jpg"
                      alt="img"
                      id="image1-1"
                    />

                  </label>
                  <input type="file" accept='images/*' id="image1" className="hidden" name="image1" onChange={imageChangeHandler} />
                </div>
                <div className="col-4 pl-2 pr-2">
                  <label htmlFor="image2">
                    <img
                      className="img-fluid"
                      src="https://cdn.pixabay.com/photo/2016/01/08/11/57/butterfly-1127666__340.jpg"
                      alt="img"
                      id="image2-2"
                    />

                  </label>
                  <input type="file" accept='images/*' id="image2" className="hidden" name="image2" onChange={imageChangeHandler} />
                </div><div className="col-4 pr-0">
                  <label htmlFor="image3">
                    <img
                      className="img-fluid"
                      src="https://cdn.pixabay.com/photo/2016/01/08/11/57/butterfly-1127666__340.jpg"
                      alt="img"
                      id="image3-3"
                    />

                  </label>
                  <input type="file" accept='images/*' id="image3" className="hidden" name="image3" onChange={imageChangeHandler} />
                </div>
              </div>
            </div>
          </div>
        )
      }
      <div className="row">
        <div className="col-12 col-md-7 p-0 actionsArea-bottom _marginLeft">
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
              <button className="primaryBtn" onClick={onSubmit}>Done</button>
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
    </div >
  );
};

let mapStateToProps = state => {
  return {
    services: state.FreelancerServices
  }
}
export default connect(mapStateToProps, { getAllServices, createService })(OfferServicePage);
