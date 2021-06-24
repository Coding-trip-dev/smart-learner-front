import React, { useState, useEffect } from "react";
import Stepper from "react-stepper-horizontal/lib/Stepper";
import "./_addEvent.scss";
import Modal from "react-modal";
import { withRouter } from 'react-router-dom';
import { connect, useSelector } from 'react-redux'
import {
  addNewEvent
} from '../../../../../redux/actions/institute/eventsAction'
import MapContainer from './googleApi'
import InitialMap from "./Map/Map";
import { toast } from 'react-toastify'


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
// export var modelForSuccess 
const AddNewEventStepper = props => {

  const { addNewEvent } = props


  // const {
  //   postCourseDetails,
  //   getDegreeCategories,
  //   getDegrees,
  //   allDegrees

  // } = props
  const [activeStep, setActiveStep] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [arabic, setArabic] = useState([])

  const [english, setEnglish] = useState([])
  const [msg, setMsg] = useState("")
  const [state, setState] = useState({
    english_tittle: null,
    arabic_tittle: null,
    institute_id: useSelector(state => state.auth.user_id),
    picture: null,
    english_description: null,
    arabic_description: null,
    english_venue: null,
    arabic_venue: null,
    date: null,
    time: null,
    price: "free", // Paid then Number or if free than string
    total_seats: null, // // Number

  })

  const [allDegree, setAllDegree] = useState([])
  const [degreeCategories, setDegreeCategories] = useState([])

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  var arabic_letters = new RegExp("[\u0600-\u06ff]|[\u0750-\u077f]|[\ufb50-\ufc3f]|[\ufe70-\ufefc]|^[\0-\9]$");



  setTimeout(() => {
    setMsg('')
  }, 5000);


  const onChangeHandler = e => {
    let name = e.target.name
    let value = e.target.value

    if (name === "picture") {
      setState({
        ...state,
        [name]: e.target.files[0]
      })
      return true
    }
    if (name === "arabic_tittle") {
      if (!arabic_letters.test(value)) {
        toast.error("Arabic letters only.")
      }
    }
    if (name === "arabic_description") {
      if (!arabic_letters.test(value)) {
        toast.error("Arabic letters only.")
      }
    }
    if (name === "arabic_venue") {
      if (!arabic_letters.test(value)) {
        toast.error("Arabic letters only.")
      }
    }


    setState({
      ...state,
      [name]: value
    })


  }

  // const setttingUp = () => {
  //   let newObj = {
  //     price_type: state.price_type, // 1=> Paid, 2=>Free
  //     original_amount: state.original_amount
  //   }

  //   setState({
  //     ...state,
  //     price: newObj,
  //     keywords: [...arabic, ...english]

  //   })

  //   return true
  // }

  const onSubmitHandler = () => {

    console.log(state);
    for (const item in state) {
      console.log(item, state[item])
      if (state[item] === null) {
        toast.error(item + " is required")
        return true
      }
    }


    addNewEvent(state)
    // postCourseDetails(state, "institute")
    // setTimeout(() => {
    //   setModalOpen(true)
    // }, 2000);

  }





  // It will fire after the render


  useEffect(() => {

    // getDegrees()
    // getDegreeCategories()




  }, [])





  // It will fire when the component will update the props

  useEffect(() => {

    // setAllDegree(allDegrees.degrees)
    // setDegreeCategories(allDegrees.categories_degree)


  }, [])




  const selectImage = e => {
    let img = document.getElementById('event_image')
    img.src = URL.createObjectURL(e.target.files[0])


  }
  const changeBookingType = e => {
    let priceInput = document.getElementById('hidden')
    if (e.target.value === "paid") {
      priceInput.classList.remove('hidden')
    }
    if (e.target.value === "free") {
      priceInput.classList.add('hidden')
      console.log('working');

    }

  }

  // modelForSuccess = ()=> {}
  return (
    <div className="offer-course-cntnr add-new-event">
      <h3 className="heading-add-course">Set Event</h3>
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
              { title: "Event Details" },
              { title: "Event Address" },
              { title: "Certification" }
            ]}
            activeStep={activeStep}
          />
        </div>
      </div>

      {activeStep === 1 && (
        <>

          <div className="row">
            <div className="col-md-4 _margin">
              <div className="title">
                <p className="title-text">
                  Title English
                </p>
                <input
                  type="text"
                  className="title-input"
                  placeholder="Type Event Title"
                  name="english_tittle"
                  onChange={onChangeHandler}
                />
              </div>
              <div className="desc">
                <p className="desc-text">
                  Description English
                </p>
                <textarea
                  type="text"
                  className="desc-input"
                  placeholder="Type Event Title"
                  name="english_description"
                  onChange={onChangeHandler}
                />
              </div>
              <div className="venue">
                <p className="venue-text">
                  Venue English
                </p>
                <input
                  type="text"
                  className="venue-input"
                  placeholder="Type Event Title"
                  name="english_venue"
                  onChange={onChangeHandler}
                />
              </div>
            </div>

            <div className="col-md-4 ">
              <div className="title">
                <p className="title-text">
                  Title Arabic
                </p>
                <input
                  type="text"
                  className="title-input"
                  placeholder="Type Event Title"
                  name="arabic_tittle"
                  onChange={onChangeHandler}
                />
              </div>
              <div className="desc">
                <p className="desc-text">
                  Description Arabic
                </p>
                <textarea
                  type="text"
                  className="desc-input"
                  placeholder="Type Event Title"
                  name="arabic_description"
                  onChange={onChangeHandler}
                />
              </div>
              <div className="venue">
                <p className="venue-text">
                  Venue Arabic
                </p>
                <input
                  type="text"
                  className="venue-input"
                  placeholder="Type Event Title"
                  name="arabic_venue"
                  onChange={onChangeHandler}
                />
              </div>
            </div>
          </div>

        </>
      )}

      {activeStep === 2 && (
        <>
          <div className="step-2 _margin">
            <div className="row">

              <div className="col-6">
                <div>

                  <div className="label-image">
                    Add Image
                </div>
                  <label htmlFor="add_image">
                    <img
                      src="https://i.pinimg.com/736x/41/df/bd/41dfbd3ce392b26543328b828302d0b8.jpg"
                      alt="event image"
                      className="displaying_image"
                      id="event_image"
                      title="Postor of your event and any other picture"

                    />

                  </label>
                  <input
                    type="file"
                    name=""
                    id="add_image"
                    className="add_image hidden"
                    accept="image/*"
                    onChange={e => {
                      onChangeHandler(e)
                      selectImage(e)
                    }}
                    name="picture"

                  />
                </div>
                <div className="title">
                  <p className="title-text">
                    Add Location
                </p>
                  <input
                    type="text"
                    className="title-input"
                    placeholder="Type Type Location"
                  // onChange={onChangeHandler}
                  // name=""
                  />
                </div>

                <div
                  style={{ height: "350px", width: "100%", margin: "30px 0px 50px" }}
                  className="col-12 p-0 position-relative"
                >

                  <InitialMap
                    containerElement={<div style={{ height: "100%", width: "100%" }}></div>}
                    mapElement={<div style={{ height: "100%", width: "100%" }}></div>}
                  />


                </div>

              </div>
            </div>
          </div>

        </>
      )}
      {activeStep === 3 && (
        <div className="row _margin-left ">
          <div className="col-8">
            <div className="date">
              <p className="date-text">
                Date English
                </p>
              <input
                type="date"
                className="date-input"
                placeholder="Type Event date"
                name="date"
                onChange={onChangeHandler}
              />
            </div>

            <div className="time">
              <p className="time-text">
                Time English
                </p>
              <input
                type="time"
                className="time-input"
                placeholder="Type Event time"
                name="time"
                onChange={onChangeHandler}
              />
            </div>



            <div className="price">
              <p className="price-text">
                Price English
              </p>
              <div className="">

                <select
                  name=""
                  id=""
                  className="price-type"
                  onChange={changeBookingType}
                >
                  <option value="paid">Select Booking Type</option>
                  <option value="paid">Paid Booking</option>
                  <option value="free">Free Booking</option>

                </select>
              </div>


              <input type="number" className="price-input hidden" id="hidden" placeholder="00"
                name="price"
                onChange={onChangeHandler}
              />
            </div>
            <div className="seats">
              <p className="seats-text">
                Seats English
                </p>
              <input type="number" className="seats-input" placeholder="00" name="total_seats"
                onChange={onChangeHandler} />
            </div>
          </div>
        </div>
      )}
      <div className="row">
        <div className="col-12 col-md-7 p-0 actionsArea-bottom _margin-buttons">
          <button
            className="primaryBtn cancel"
            onClick={handleBack}
            disabled={activeStep === 1}
          >
            Cancel
          </button>
          {activeStep !== 3 ? (
            <button className="primaryBtn"
              onClick={handleNext}
            // onClick={onSubmitHandler}
            >
              Continue
            </button>
          ) : (
              <button className="primaryBtn" onClick={() => {
                onSubmitHandler()
              }
              }
              // onMouseOver={setttingUp}


              >Done</button>
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
          <h5>Event Successfully Added</h5>
        </div>
      </Modal>
    </div>
  );
};


// let mapStateToProps = store => {

//   return {
//     userDetail: store.auth.userDetail,
//     allDegrees: store.DegreeReducer
//   }
// }
// let mapDispatchToProps = dispatch => {
//   return {
//     postCourseDetails: (data, user) => {
//       dispatch(AddNewEventStepper(data, user))
//     },
//     getDegreeCategories: (data) => {
//       dispatch(getAllDegreeCategory(data))
//     },
//     getDegrees: () => {
//       dispatch(getAllDegress())
//     },
//   }
// }


export default withRouter(connect(null, { addNewEvent })(AddNewEventStepper))
