import React, { Fragment, useState, useEffect } from "react";
// import "../../CourseDetail/scss/_detail.scss";
import TopNavBAr from "../../Common/TopNavBar";
import Rating from "@material-ui/lab/Rating";
import GeneralSlider from "../../Common/GeneralSlider/GeneralSlider";
import Footer from "../../Common/Footer";
import Review from "../../CourseDetail/Review";
import TimeDown from "../../CourseDetail/TimeDown";
import CourseItem from "../../CourseDetail/CourseItem";
import videoPoster from "../../CourseDetail/poster.png";
import video from "../../CourseDetail/video.mkv";
import './viewCourse.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from '@fortawesome/free-regular-svg-icons'
import AddChapters from './chapters'
import QuestionAsked from './questions'
import { faReply, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getAllChapter, updateTopic } from '../../../redux/actions/institute/chapterDetailsAction'
import { getAllCourse, addNewChapter } from '../../../redux/actions/institute/courseDetailsAction'


const dummText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Cras vitae auctor ex, eu pulvinar risus. Donec finibus turpis eget quam finibus facilisis. Vivamus id augue neque. Duis luctus augue eu diam ullamcorper dictum. Cras vestibulum congue dui sit amet congue. Etiam et elit a metus varius congue. Nunc mattis nisi sed eros posuere, vel vestibulum ipsum congue. Nullam pretium lacus vitae diam cursus vehicula. Nulla tempor nec lorem et dictum.";

let oldCourses = [
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

const chapterArry = [
    {
        title: "Introduction to Super Computers",
        topics: '5 Topics',
        duration: '2 Hours 52 minutes',
        topicsArray: [
            {
                topicName: "How computer changes our life's?"
            },
            {
                topicName: "How computer changes our life's?"
            },
        ]
    },
    {
        title: "Hardware's of the computers",
        topics: '2 Topics',
        duration: '2 Hours 52 minutes',
        topicsArray: [
            {
                topicName: "How computer changes our life's?"
            },
            {
                topicName: "How computer changes our life's?"
            },
        ]
    },
]

const questions = [
    {
        display_image: "U",
        name: "usman ahmad",
        time: "5 day ago",
        question: "After the course, it's all about us to use what we learn love the courses made it by chad Please ans me as soon as possible."
    },
    {
        display_image: "U",
        name: "usman ahmad",
        time: "5 day ago",
        question: "After the course, it's all about us to use what we learn love the courses made it by chad Please ans me as soon as possible."
    },
    {
        display_image: "U",
        name: "usman ahmad",
        time: "5 day ago",
        question: "After the course, it's all about us to use what we learn love the courses made it by chad Please ans me as soon as possible."
    },
    {
        display_image: "U",
        name: "usman ahmad",
        time: "5 day ago",
        question: "After the course, it's all about us to use what we learn love the courses made it by chad Please ans me as soon as possible."
    }

]


const ViewCourseDetails = props => {
    const {
        getChapters,
        chapterRedu,
        newCourses,
        getCourses,
        addChapter,
        updateOneTopic
    } = props
    const [state, setState] = useState({
        english_name: null,
        video: null,
        file: null,
        parent: null
    })

    const [course, setCourse] = useState({
        courses: []
    })
    const [chapter, setChapter] = useState({
        allChapter: null
    })
    const [details, setDetails] = useState([])



    const onChangeHandler = (e) => {

        let name = e.target.name
        let val = e.target.value
        let att = e.target.getAttribute('data-topic')
        if (att) {
            setState({
                ...state,
                [name]: val,
                // parent: 
            })
            return true
        }

        if (name === 'video') {
            setState({
                ...state,
                [name]: e.target.files[0]
            })
            return true
        }
        if (name === 'file') {
            setState({
                ...state,
                [name]: e.target.files[0]
            })
            return true
        }



        setState({
            ...state,
            [name]: val
        })


    }
    let course_id = props.match.params.id

    let newObj = {
        course_id: course_id,
        provider_id: chapterRedu.institute_id
    }

    useEffect(() => {


        getCourses({ institute_id: chapterRedu.institute_id }, "institute")


        setTimeout(() => {
            if (!chapterRedu.allChapter) {
                getChapters(newObj, 'institute')
            }

        }, 2000);

        console.log('working all chapter');

    }, [])

    useEffect(() => {
        setCourse({
            courses: newCourses
        })

        if (newCourses) {
            let item = newCourses.filter(item => {
                return item._id === course_id ? item : ''
            })
            setDetails(item[0])
        }

    }, [newCourses])

    const submit = (parent_id) => {
        let anotherObj = {
            ...newObj,
            ...state,
            parent: parent_id ? parent_id : null
        }
        if (state.english_name !== '' && state.english_name !== null) {
            addChapter(anotherObj)
        }
        console.log(anotherObj);
        setTimeout(() => {
            document.getElementById('chapter_name').value = ""

        }, 1000)

    }

    const update = (id) => {

        let data = {
            ...state,
            id,
            provider_id: chapterRedu.institute_id
        }
        updateOneTopic(data)

        setTimeout(() => {
            setState({
                ...state,
                file: null,
                video: null
            })

            console.log(state);
        }, 1000);
        

    }

    return (

        <Fragment>
            <div className="offer-course-cntnr offer-service-cntnr">

                <div className="col-12 view-course-outer">
                    <div className="left-text col-6">

                        <h3 className="view-course-text">
                            View your course's
                    </h3>
                        <p className="view-course-caption">
                            here you can view your courses
                    </p>
                    </div>
                    <div className="right-error col-6">
                        <p className="add-chapter-error">
                            Your course details is not complete Please add chapters in your course
                        </p>
                    </div>
                </div>

                <div className="video-section">

                    <div className="col-12 heading">
                        <h3 className="heading">{details ? details.english_tittle : ""}</h3>

                        <div className="error-box-edit">
                            <div className="not-editable">
                                Sorry You cannot edit
                                <p className="contact-admin">
                                    Please contact to admin
                                </p>
                            </div>


                            <FontAwesomeIcon icon={faEdit} className="edit-icon" />
                            <p className="edit-text">
                                Edit
                           </p>
                        </div>
                    </div>
                    <div className="col-12 subheading-col d-flex">
                        <h6 className="subheading">
                            {false ? details.english_description.slice(0, 10) : " Very Informative Course For FSc Level Students"}
                        </h6>
                        <p>
                            <span className="last-updated">Last updated : </span>
                            <span className="updated-date">April 2019</span>

                        </p>

                    </div>


                    <div className="col-12 video-container-col">
                        <div className="row video-container">
                            <div className="col-6 col-md-6 video p-0">
                                <video poster={videoPoster} loop autoPlay muted controls style={{ height: "100%", width: "100%" }}>
                                    <source src={video} type="video/mp4" />
                                </video>
                            </div>
                            <div className="col-12 col-md-6 courses-list">
                                {
                                    oldCourses.length > 0 ?
                                        oldCourses.map((course, i) => (
                                            <div key={i}>
                                                <CourseItem course={course} />
                                            </div>
                                        ))
                                        : ""
                                }
                            </div>
                        </div>
                    </div>

                </div>

                <div className="col-md-12">
                    <div className="row description-row">
                        <div className="col-md-12  col-lg-8 col-12">
                            <h4 className="spacing desc-text">Description</h4>
                            <p>{dummText}</p>
                            <div className="rating">
                                <Rating className="star" value={5} readOnly />
                                <span className="students">Based on 200 students</span>
                            </div>

                            <p className="spacing add-chapter-heading">Add Chapter in your course</p>
                            <h5 className="spacing course-title">introduction to computing</h5>

                            <div className="course-chapter-box">

                                {
                                    chapterRedu.allChapter
                                        ?
                                        chapterRedu.allChapter.map((item, index) => {
                                            return <AddChapters
                                                chapter={item}
                                                onChangeHandler={onChangeHandler}
                                                submitHandler={submit}
                                                update={update}
                                            />
                                        })
                                        : ""
                                }
                                <div className="col-12 nopad">

                                    <div className="add-chapter-outer">

                                        <input
                                            type="text"
                                            className="add-chapter"
                                            placeholder="Add Chapter"
                                            name="english_name"
                                            id="chapter_name"
                                            onChange={onChangeHandler}

                                        />
                                        <FontAwesomeIcon
                                            icon={faPlusCircle}
                                            className="plus-icon"

                                            onClick={() => { submit(null) }}

                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="student-question-outer row">

                                <p className="spacing student-question-heading">Student Questions</p>

                                <select name="" id="" className="select-topic-in-question">

                                    <option value="select topic">Select Topic</option>
                                    <option value="0">topic #1</option>
                                    <option value="1">topic #2</option>
                                    <option value="2">topic #3</option>
                                    <option value="3">topic #4</option>
                                    <option value="4">topic #5</option>


                                </select>
                                <div className="_width">

                                    <p className="student-question-topic-text"> Topic - </p>
                                    <h5 className="spacing course-title">Role of White Blood cells in our body</h5>
                                </div>
                                <div className="total-question-asked-outer">
                                    <p className="total-question">Total Question Asked : <span className="question-number">101</span> </p>
                                    <p className="all-question">All : <span className="question-number-all">101</span> </p>
                                    <p className="replied-question">Replied : <span className="question-number">101</span> </p>
                                    <p className="un-replied-question">Un-Replied : <span className="question-number-unReplied">101</span> </p>
                                </div>

                                {
                                    questions.map((item, index) => {
                                        return <QuestionAsked ques={item} />
                                    })
                                }
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4 description-section col-12">
                            <div className="error-box-edit">
                                <div className="icon-text">

                                    <FontAwesomeIcon icon={faEdit} className="edit-icon" />

                                        Edit

                                    </div>



                                <div className="not-editable">
                                    Sorry you cannot edit
                                <p className="contact-admin">
                                        Please contact to admin
                                </p>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    );
};


let mapStateToProps = store => {
    console.log(store.ChapterReducer);


    return {
        chapterRedu: store.ChapterReducer,
        newCourses: store.CourseReducer.allCourses,
        courseDetailsReducer: store.CourseReducer

    }
}
let mapDispatchToProps = dispatch => {
    return {
        getCourses: (state, user) => {
            dispatch(getAllCourse(state, user))
        },
        getChapters: (state, user) => {
            dispatch(getAllChapter(state, user))
        },
        addChapter: (state) => {
            dispatch(addNewChapter(state))
        },
        updateOneTopic: (state) => {
            dispatch(updateTopic(state))
        }
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ViewCourseDetails));
