import React, { useState, useEffect } from "react";
import Stepper from "react-stepper-horizontal/lib/Stepper";
import "./_addCourse.scss";
import Modal from "react-modal";
import { withRouter } from 'react-router-dom';
import { connect, useSelector } from 'react-redux'
import {
  addNewCourse,
  getAllDegreeCategory,
  getAllDegress
} from '../../../../redux/actions/institute/courseDetailsAction'
import { toast } from "react-toastify";
// import {
//   addNewCourse} from '../../../../redux/actions/institute/chapterDetailsAction'




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

const AddNewCourse = props => {



  const {
    postCourseDetails,
    getDegreeCategories,
    getDegrees,
    allDegrees

  } = props

  const id = useSelector(state => state.auth.user_id)
  const [activeStep, setActiveStep] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [arabic, setArabic] = useState([])

  const [english, setEnglish] = useState([])
  const [msg, setMsg] = useState("")
  const [state, setState] = useState({
    // degree: null,
    // subject: null,
    english_description: null,
    arabic_description: null,
    english_tittle: null,
    arabic_tittle: null,
    english_sub_tittle: null,
    arabic_sub_tittle: null,
    pre_requests: null,
    languages: null,
    learning_outcomes: null,
    promo_video: null, // to be array
    thumbnail: null,
    price_type: "1", // 1=> Paid, 2=>Free
    original_amount: null, // Numbers
    price: {
    },
    institute_id: null, // Object id
    keywords: [], // to be array
    institute_id: id,
    degree: '5e9946616b6f3b3750929c48',
    subject: '5e888d4ef0173722046475cd'

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

  const createTag = (name, label) => {

    // let array = 
    if (name === "tagsArabic") {
      setArabic([...arabic, label])

    }
    if (name === "tagsEnglish") {

      setEnglish([...english, label])

    }


    // return state.name
  }


  const addTags = e => {
    let name = e.target.name
    let index = e.target.value.indexOf(",")
    let item

    if (name === "tagsArabic") {
      if (!arabic_letters.test(e.target.value)) {
        document.getElementById('input-tags-2').value = ""
        setMsg("Only Arabic letters are required")
        return true

      }

    }
    if (index !== -1) {

      let value = e.target.value.slice(0, index)
      console.log(name, value);

      item = createTag(name, value)
      document.getElementById('input-tags-1').value = ""
      document.getElementById('input-tags-2').value = ""

      console.log(value);


    }

  }

  const deleteTag = (name, index) => {

    console.log(index);
    if (name === "tagsArabic") {

      let newArray = arabic.slice(0, index)
      let arra2 = arabic.slice(index + 1)
      setArabic([...newArray, ...arra2]
      )
    }
    if (name === "tagsEnglish") {

      let newArray = english.slice(0, index)
      let arra2 = english.slice(index + 1)
      setEnglish([...newArray, ...arra2])
    }



  }


  const onChangeHandler = e => {
    let name = e.target.name
    let value = e.target.value

    if (name === "promo_video") {
      setState({
        ...state,
        [name]: e.target.files[0]
      })

      let vidTag = document.getElementById("vidTag")

      let url = URL.createObjectURL(e.target.files[0])
      vidTag.controls = true
      vidTag.src = url


      return true
    }

    if (name === "thumbnail") {
      setState({
        ...state,
        [name]: e.target.files[0]
      })


      let imgTag = document.getElementById("imgTag")

      let url = URL.createObjectURL(e.target.files[0])
      // vidTag.controls = true//
      imgTag.src = url
      return true

    }

    if (name === "arabic_tittle") {
      if (!arabic_letters.test(value)) {
        toast.error("Only Arabic letters are allowed")
        return
      }
      setState({
        ...state,
        [name]: value
      })
      return

    }
    if (name === "arabic_sub_tittle") {
      if (!arabic_letters.test(value)) {
        toast.error("Only Arabic letters are allowed")
        return
      }
      setState({
        ...state,
        [name]: value
      })
      return

    }
    if (name === "arabic_description") {
      if (!arabic_letters.test(value)) {
        toast.error("Only Arabic letters are allowed")
        return true
      }
      setState({
        ...state,
        [name]: value
      })
      return true

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
    let newObj = {
      price_type: state.price_type, // 1=> Paid, 2=>Free
      original_amount: state.original_amount
    }

    setState({
      ...state,
      price: newObj,
      keywords: [...arabic, ...english]

    })
    console.log('it works');
    
    postCourseDetails(state, "institute") 


  }





  // It will fire after the render


  useEffect(() => {

    getDegrees()
    getDegreeCategories()




  }, [])





  // It will fire when the component will update the props

  useEffect(() => {

    setAllDegree(allDegrees.degrees)
    setDegreeCategories(allDegrees.categories_degree)


  }, [allDegrees])





  return (
    <div className="offer-course-cntnr offer-service-cntnr-2">
      <h3 className="heading-add-course">Add Course</h3>
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
              { title: "Add Course Details" },
              { title: "Add Promo Video" },
              { title: "Set Price & Keywords" }
            ]}
            activeStep={activeStep}
          />
        </div>
      </div>

      {activeStep === 1 && (
        <>

          <div className="row">
            <div className="col-md-2 _margin">
              <div className="side-text-left-outer">

                <div className="side-text-left">
                  <label htmlFor="" className="side-text-label label-1">Category</label>
                </div>
                <div className="side-text-left">
                  <label htmlFor="" className="side-text-label label-2">Degree</label>
                </div>
                <div className="side-text-left">
                  <label htmlFor="" className="side-text-label label-3">Title English</label>
                </div>
                <div className="side-text-left">
                  <label htmlFor="" className="side-text-label label-4">Sub Title English</label>
                </div>
                <div className="side-text-left">
                  <label htmlFor="" className="side-text-label label-5">Description English</label>
                </div>
                <div className="side-text-left">
                  <label htmlFor="" className="side-text-label label-6">Pre Requests</label>
                </div>

              </div>

            </div>
            <div className="col-md-3">

              <div className="side-input-right-outer">


                <div className="side-input-right">

                  <select
                    name="category"
                    required
                    onChange={onChangeHandler}
                    id="" className="side-text-select" >
                    <option value="0" className="side-text-option select-text-option">Select Category</option>

                    {
                      degreeCategories.length > 0 ?
                        degreeCategories.map((item, key) => {
                          return <option value={item._id} className="side-text-option">{item.english_category}</option>
                        })
                        :
                        ''
                    }

                  </select>
                </div>
                <div className="side-input-right">

                  <select
                    name="degree"
                    onChange={onChangeHandler}
                    id="" className="side-text-select "
                    required
                    >
                    <option value="0" className="side-text-option select-text-option">Select Degree</option>
                    {
                      allDegree.length > 0 ?
                        allDegree.map((item, key) => {
                          return <option value={item._id} className="side-text-option">{item.degree_name_in_english}</option>
                        })
                        :
                        ''
                    }

                  


                  </select>
                </div>
                <div className="side-input-right">
                  <input type="text" className="side-text-input-field"
                    name="english_tittle"
                    onChange={onChangeHandler}
                    value={state.english_tittle}
                  />
                </div>
                <div className="side-input-right">

                  <input type="text" className="side-text-input-field"
                    name="english_sub_tittle"
                    onChange={onChangeHandler}
                    value={state.english_sub_tittle} 
                    required
                  />
                </div>
                <div className="side-input-right">
                  <textarea name="description-english"
                    name="english_description"
                    onChange={onChangeHandler}
                    value={state.english_description}
                    required
                    id="" cols="30" rows="10" className="side-text-textarea"></textarea>
                </div>
                <div className="side-input-right">
                  <input type="text" className="side-text-input-field"
                    name="pre_requests"
                    onChange={onChangeHandler}
                    required
                    value={state.pre_requests}
                  />
                </div>
              </div>

            </div>



            <div className="col-md-2">
              <div className="side-text-right-outer">

                <div className="side-text-left">
                  <label htmlFor="" className="side-text-label label-1">Languages</label>
                </div>
                <div className="side-text-left">
                  <label htmlFor="" className="side-text-label label-2">Title Arabic</label>
                </div>
                <div className="side-text-left">
                  <label htmlFor="" className="side-text-label label-3">Sub Title Arabic</label>
                </div>
                <div className="side-text-left">
                  <label htmlFor="" className="side-text-label label-4">Description Arabic</label>
                </div>

              </div>
            </div>
            <div className="col-md-4">


              <div className="side-input-right-outer">

                <div className="side-text-right">

                  <select name="languages"
                    onChange={onChangeHandler} id="" className="side-text-select ">
                    <option value="0" className=" select-text-option">Select Languages</option>

                    <option value="english" className="side-text-option">English</option>
                    <option value="arabic" className="side-text-option">Arabic</option>
                    {/* <option value="langugage 3" className="side-text-option">3</option> */}
                  </select>
                </div>
                <div className="side-text-right">
                  <input type="text" className="side-text-input-field"
                    name="arabic_tittle"
                    onChange={onChangeHandler}
                    value={state.arabic_tittle}
                  />
                </div>
                <div className="side-text-right">
                  <input type="text" className="side-text-input-field"
                    name="arabic_sub_tittle"
                    onChange={onChangeHandler}
                    value={state.arabic_sub_tittle}
                  />
                </div>
                <div className="side-text-right">
                  <textarea
                    name="arabic_description"
                    onChange={onChangeHandler}
                    value={state.arabic_description}
                    id="" cols="30" rows="10" className="side-text-textarea"></textarea>
                </div>

              </div>
            </div>
          </div>

        </>
      )}

      {activeStep === 2 && (
        <>
          <div className="side-one">
            <div className="row">

              <div className="col-md-2 _margin">
                <label htmlFor="" className="label-learning">
                  Learning Outcomes
                </label>
              </div>
              <div className="col-md-3">
                <textarea name="learning_outcomes" id="" cols="60" rows="10" className="textarea-learning"
                  placeholder="Enter what student will learn"
                  onChange={onChangeHandler}
                  value={state.learning_outcomes}

                ></textarea>
              </div>

            </div>

            <div className="row">

              <div className="col-md-2 _margin">
                <label htmlFor="" className="label-video">
                  Add Promo Video
                </label>
              </div>

              <div className="col-md-3">
                <label htmlFor="input-video">
                  <video id="vidTag" width="300" height="240" poster="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-fDggq-RXXdrZVmQLzwFV3PSFla6NKyIn_6wZyxtNK9j0fXel&usqp=CAU"
                    src=""
                  >
                  </video>
                </label>
                <input type="file" name="promo_video"
                  onChange={onChangeHandler}
                  id="input-video" className="input-file" />
              </div>

            </div>

            <div className="row">

              <div className="col-md-2 _margin">
                <label htmlFor="" className="label-learning">
                  Add Thumbnail
                </label>
              </div>
              <div className="col-md-3">
                <label htmlFor="input-thumbnail">
                  <img id="imgTag" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-fDggq-RXXdrZVmQLzwFV3PSFla6NKyIn_6wZyxtNK9j0fXel&usqp=CAU" alt=""
                    style={{
                      height: 180,
                      width: 300
                    }} />
                </label>
                <input type="file" name="thumbnail"
                  onChange={onChangeHandler} id="input-thumbnail" className="input-file" />
              </div>

            </div>


          </div>
        </>
      )}
      {activeStep === 3 && (
        <div className="row _margin-left">

          <div className="col-md-8">
            <p className="price-tag">
              Price
            </p>

            <div className="button-outer">
              <div className="button">
                <label
                  htmlFor="price"
                  className="button-paid _button-step-3"
                  style={state.price_type === "1" ? { backgroundColor: "#f76262" } : { backgroundColor: "black" }}
                >
                  Paid
                </label>
                <input type="radio"

                  name="price_type" id="price" value="1" className="hidden"
                  onChange={onChangeHandler}
                />
              </div>
              <div className="button">

                <label
                  htmlFor="price1"
                  style={state.price_type === '2' ? { backgroundColor: "#f76262" } : { backgroundColor: "black" }}
                  className="button-free _button-step-3" >
                  Free
                </label>
                <input type="radio"
                  name="price_type" id="price1" value="2" className="hidden"
                  onChange={onChangeHandler}
                />
              </div>
            </div>

            <div className="amount-input">
              <div className="_input-amount">
                <input type="number" name="original_amount" id="" className="_add-price-input"
                  placeholder="Enter amount between 1-100$"
                  onChange={onChangeHandler}
                  value={state.original_amount}
                />
              </div>
            </div>

          </div>


          <div className="col-md-8">
            <p className="price-tag">
              Keywords
            </p>

            <div className="tag-container-outer">

              <div className="tag-outer">
                {
                  english ? english.map((item, index) => {
                    return <div className="tag-containers" key={index}>
                      <i className="material-icons close-icon"
                        title="Remove"
                        onClick={() => {
                          deleteTag("tagsEnglish", index)
                        }}
                      >
                        close
               </i>
                      <span className="tag-name">{item}</span>
                    </div>
                  })
                    :
                    null
                }


                <input type="text" className="tag-input" id="input-tags-1" name="tagsEnglish"
                  placeholder="Enter Keywords in English"
                  // value={state.tagsEnglish}
                  onChange={addTags} />

              </div>
              <div className="tag-outer-2">
                {
                  arabic ? arabic.map((item, index) => {
                    return <div className="tag-containers-2" key={index}>
                      <i className="material-icons close-icon-2"
                        title="Remove"
                        onClick={() => {
                          deleteTag("tagsArabic", index)

                        }}
                      >
                        close
               </i>
                      <span className="tag-name-2">{item}</span>
                    </div>
                  })
                    :
                    null
                }


                <input type="text" className="tag-input-2" id="input-tags-2" name="tagsArabic"
                  placeholder="Enter Keywords in Arabic"
                  // value={state.tagsArabic}
                  onChange={addTags}
                // onBlur={setttingUp}
                />
              </div>
              {
                msg ? <p
                  className="error-arabic"
                >{msg}</p> : null
              }


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
                // setModalOpen(true)
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
          <h5>Course Successfully Posted</h5>
        </div>
      </Modal>
    </div>
  );
};


let mapStateToProps = store => {

  return {
    userDetail: store.auth.userDetail,
    allDegrees: store.DegreeReducer
  }
}
let mapDispatchToProps = dispatch => {
  return {
    postCourseDetails: (data, user) => {
      dispatch(addNewCourse(data, user))
    },
    getDegreeCategories: (data) => {
      dispatch(getAllDegreeCategory(data))
    },
    getDegrees: () => {
      dispatch(getAllDegress())
    },
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddNewCourse))
