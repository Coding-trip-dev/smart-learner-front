import React, { Fragment, useState } from "react";
import "./scss/_detail.scss";
import TopNavBAr from "../CustomerPanel/TopBar";
import Rating from "@material-ui/lab/Rating";
import GeneralSlider from "../Common/GeneralSlider/GeneralSlider";
import Footer from "../Common/Footer";
import Review from "./Review";
import TimeDown from "./TimeDown";
import CourseItem from "./CourseItem";
import videoPoster from "./poster.png";
import video from "./video.mkv";
import { useEffect } from "react";
import { getOneCourse } from '../../redux/actions/customerPanel/coursesAction'
import {connect} from 'react-redux'


const dummText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Cras vitae auctor ex, eu pulvinar risus. Donec finibus turpis eget quam finibus facilisis. Vivamus id augue neque. Duis luctus augue eu diam ullamcorper dictum. Cras vestibulum congue dui sit amet congue. Etiam et elit a metus varius congue. Nunc mattis nisi sed eros posuere, vel vestibulum ipsum congue. Nullam pretium lacus vitae diam cursus vehicula. Nulla tempor nec lorem et dictum.";

let courses = [
  {
    title: "Introduction to Programming",
    intro: "",
    lectures: [
      {
        title: "Basic Concepts",
        duration: "10:25",
        URL: "",
        locked: true
      },
      {
        title: "Variables And their scopes",
        duration: "10:00",
        URL: "",
        locked: false
      },
      {
        title: "different types of Loops",
        duration: "15:10",
        URL: "",
        locked: true
      },
      {
        title: "Functional programming",
        duration: "16:21",
        URL: "",
        locked: true
      },
      {
        title: "Basics of Object oriented Programming",
        duration: "17:05",
        URL: "",
        locked: false
      },
      {
        title: "Advanced OOP",
        duration: "11:45",
        URL: "",
        locked: true
      }
    ]
  },
  {
    title: "Introduction to Computer Languages",
    intro: "",
    lectures: [
      {
        title: "Basic Concepts",
        duration: "10:25",
        URL: "",
        locked: false
      },
      {
        title: "Variables And their scopes",
        duration: "10:00",
        URL: "",
        locked: true
      },
      {
        title: "different types of Loops",
        duration: "15:10",
        URL: "",
        locked: false
      },
      {
        title: "Functional programming",
        duration: "16:21",
        URL: "",
        locked: true
      },
      {
        title: "Basics of Object oriented Programming",
        duration: "17:05",
        URL: "",
        locked: true
      },
      {
        title: "Advanced OOP",
        duration: "11:45",
        URL: "",
        locked: false
      }
    ]
  },
  {
    title: "Introduction to Programming",
    intro: "",
    lectures: [
      {
        title: "Basic Concepts",
        duration: "10:25",
        URL: "",
        locked: true
      },
      {
        title: "Variables And their scopes",
        duration: "10:00",
        URL: "",
        locked: true
      },
      {
        title: "different types of Loops",
        duration: "15:10",
        URL: "",
        locked: false
      },
      {
        title: "Functional programming",
        duration: "16:21",
        URL: "",
        locked: true
      },
      {
        title: "Basics of Object oriented Programming",
        duration: "17:05",
        URL: "",
        locked: false
      },
      {
        title: "Advanced OOP",
        duration: "11:45",
        URL: "",
        locked: false
      }
    ]
  },
  {
    title: "Introduction to Programming",
    intro: "",
    lectures: [
      {
        title: "Basic Concepts",
        duration: "10:25",
        URL: "",
        locked: true
      },
      {
        title: "Variables And their scopes",
        duration: "10:00",
        URL: "",
        locked: false
      },
      {
        title: "different types of Loops",
        duration: "15:10",
        URL: "",
        locked: true
      },
      {
        title: "Functional programming",
        duration: "16:21",
        URL: "",
        locked: true
      },
      {
        title: "Basics of Object oriented Programming",
        duration: "17:05",
        URL: "",
        locked: true
      },
      {
        title: "Advanced OOP",
        duration: "11:45",
        URL: "",
        locked: true
      }
    ]
  },
  {
    title: "Intro To Computer Sciences",
    intro: "",
    lectures: [
      {
        title: "Basic Concepts",
        duration: "10:25",
        URL: "",
        locked: true
      },
      {
        title: "Variables And their scopes",
        duration: "10:00",
        URL: "",
        locked: false
      },
      {
        title: "different types of Loops",
        duration: "15:10",
        URL: "",
        locked: true
      },
      {
        title: "Functional programming",
        duration: "16:21",
        URL: "",
        locked: false
      },
      {
        title: "Basics of Object oriented Programming",
        duration: "17:05",
        URL: "",
        locked: true
      },
      {
        title: "Advanced OOP",
        duration: "11:45",
        URL: "",
        locked: true
      }
    ]
  },
  {
    title: "Learn Software Engineering",
    intro: "",
    lectures: [
      {
        title: "Basic Concepts",
        duration: "10:25",
        URL: "",
        locked: true
      },
      {
        title: "Variables And their scopes",
        duration: "10:00",
        URL: "",
        locked: true
      },
      {
        title: "different types of Loops",
        duration: "15:10",
        URL: "",
        locked: true
      },
      {
        title: "Functional programming",
        duration: "16:21",
        URL: "",
        locked: true
      },
      {
        title: "Basics of Object oriented Programming",
        duration: "17:05",
        URL: "",
        locked: true
      },
      {
        title: "Advanced OOP",
        duration: "11:45",
        URL: "",
        locked: true
      }
    ]
  },
  {
    title: "Introduction to Artificial Intlligence",
    intro: "",
    lectures: [
      {
        title: "Basic Concepts",
        duration: "10:25",
        URL: "",
        locked: true
      },
      {
        title: "Variables And their scopes",
        duration: "10:00",
        URL: "",
        locked: true
      },
      {
        title: "different types of Loops",
        duration: "15:10",
        URL: "",
        locked: false
      },
      {
        title: "Functional programming",
        duration: "16:21",
        URL: "",
        locked: true
      },
      {
        title: "Basics of Object oriented Programming",
        duration: "17:05",
        URL: "",
        locked: true
      },
      {
        title: "Advanced OOP",
        duration: "11:45",
        URL: "",
        locked: true
      }
    ]
  },
  {
    title: "Introduction to Programming",
    intro: "",
    lectures: [
      {
        title: "Basic Concepts",
        duration: "10:25",
        URL: "",
        locked: false
      },
      {
        title: "Variables And their scopes",
        duration: "10:00",
        URL: "",
        locked: true
      },
      {
        title: "different types of Loops",
        duration: "15:10",
        URL: "",
        locked: true
      },
      {
        title: "Functional programming",
        duration: "16:21",
        URL: "",
        locked: true
      },
      {
        title: "Basics of Object oriented Programming",
        duration: "17:05",
        URL: "",
        locked: false
      },
      {
        title: "Advanced OOP",
        duration: "11:45",
        URL: "",
        locked: true
      }
    ]
  }
];

const CourseDetailPage = props => {
  let arr = [1, 2, 3, 4, 5];
  let { getOneCourse,course } = props

  const [state, setState] = useState("")

  let course_id = props.match.params.id
  useEffect(() => {
    getOneCourse({ course_id: course_id })
  }, [])
  useEffect(()=>{
    setState(course)
  })




console.log(state);

  return (
    <Fragment>
      <TopNavBAr />
      <div className="row">
        <div className="col-12 heading">
          <h3 className="heading">{state ? state.english_tittle : ""}</h3>
          <div className="rating">
            <Rating className="star" value={5} readOnly />
            <span className="students">Based on 200 students</span>
          </div>
        </div>
        <div className="col-12 subheading-col d-flex">
          <h6 className="subheading">
          {state ? state.english_sub_tittle : ""}
          </h6>
          <p>
            <span className="last-updated">Last updated : </span>
            <span className="updated-date">April 2019</span>
            <button className="primaryBtn institute-btn">
              Dubai Institute of Design
            </button>
          </p>
        </div>
        <div className="col-12 video-container-col">
          <div className="row video-container">
            <div className="col-12 col-md-6 bg-primary video p-0">
              <video poster={videoPoster} loop autoPlay muted controls style={{ height: "100%" }}>
                <source src={video} type="video/mp4" />
              </video>
            </div>
            <div className="col-12 col-md-6 courses-list">
              {courses.map((course, i) => (
                <div key={i}>
                  <CourseItem course={course} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="row description-row">
            <div className="col-12  col-lg-8">
              <h6 className="spacing">Description</h6>
          
              <p>{state ? state.english_description : ""}</p>
              <h6 className="spacing">What you'll learn in this course?</h6>
              <div className="course-topic-box">
                <div className="row">
                  {arr.map(v => {
                    return (
                      <div key={v} className="col-12 col-md-6 course-topic">
                        Understand the theory of biology
                      </div>
                    );
                  })}
                </div>
              </div>
              <h6 className="spacing">Requirements</h6>
              <div className="course-topic-box">
                <div className="row">
                  {arr.map(v => {
                    return (
                      <div key={v} className="course-topic col-12 col-md-6">
                        Understand the theory of biology
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-12  col-lg-4 time-down-col">
              <TimeDown user={state}/>  {/* PopUp of Buy new course */} 
            </div>
          </div>
        </div>
        <div className="col-12 instructor-detail">
          <h6 className="spacing">About Instructor</h6>
          <div className="row">
            <div className="col-12 col-lg-7 ">
              <div className="row">
                <div className="col-12 col-md-4 about">
                  <div className=" avatar-cntnr">
                    <img
                      className="img-fluid"
                      src={require("../../assets/Images/saqii.jpg")}
                      // src="https://scontent.fkhi10-1.fna.fbcdn.net/v/t1.0-9/48994275_252190439003234_3750715461226987520_n.jpg?_nc_cat=105&_nc_ohc=YueN6f_j-wwAX_eC6ip&_nc_ht=scontent.fkhi10-1.fna&oh=9be76991917286faa3bc3bcc5ea00ae5&oe=5EF919C0"
                      alt=""
                    />
                  </div>
                  <h6 className="">{state ? state.institute_name : ""}</h6>
                  {/* <p className="">MERN stack developer</p> */}
                  <ul>
                    {/* <li className="courses">
                       <img src={icon} alt="icon" />
                      <span>200 courses</span>
                    </li> */}
                    <li className="reviews">
                      <span>{state ? state.totalReviwers : ""}</span>
                    </li>
                    {/* <li className="students">
                      <span>250 students</span>
                    </li> */}
                  </ul>
                </div>
                <div className="col-12 col-md-8">
                  <h6 className="spacing">About Me</h6>
                  <p>{state ? state.instructor_about_me : ""}</p>
                </div>
              </div>
            </div>
            <div className="col-0 col-lg-5"></div>
          </div>
        </div>
        <div className="col-12">
          <h6 className="spacing">Reviews about course</h6>
          <Review />
          <Review />
        </div>
        {/* <div className="col-12">
          <div className="cards-group">
            <h6 className="spacing">Similar Courses</h6>
            <GeneralSlider />
          </div>
        </div>
        <div className="col-12">
          <div className="cards-group">
            <h6 className="spacing">Trending Courses</h6>
            <GeneralSlider />
          </div>
        </div> */}
        <Footer />
      </div>
    </Fragment>
  );
};
let useSateToProps = state => {
  return {
    course: state.CustomerCoursesReducer.oneCourse
  }
}

export default connect(useSateToProps, { getOneCourse })(CourseDetailPage)
