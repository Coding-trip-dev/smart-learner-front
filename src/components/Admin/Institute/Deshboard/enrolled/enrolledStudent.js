import React, { useState } from "react";
import "./enrolled.scss";
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as routes from '../../../../../constants/routePaths'
import { baseURL } from "../../../../../redux/config/config";



const EnrolledStudent = props => {

    const { setNewProfile, students } = props

    const [state, setState] = useState({

    })

    return (
        <div className="enrolled-wrapper-institute">
            <div className="enrolled-outing">
                <p className="enrolled-heading">
                    Enrolled Students
                </p>
                <Link className="link" to={routes.ViewAllEnrolled} >
                    See All
                </Link>
            </div>


            <div className="list-wrapper">
                {students.length > 0 ? students.map((item, index) => {
                    return <li className="list-items" key={index}>
                        <div className="img-wrapper">
                            <img
                                src={`/uploads/121453`}
                                alt=""
                            />
                        </div>
                        <div className="content-list-item">
                            <p className="name">
                                {item.name ? item.name : null}
                            </p>
                            <p className="time-institute">
                                {item.created_at ? item.created_at.slice(0, 10) : null}
                            </p>
                            <p className="course-name">
                                {item.subject ? item.subject : "introduction to chemistry"}
                            </p>
                        </div>
                    </li>
                })

                    : <li className="list-items">
                    
                    <div className="content-list-item">
                        <p className="name">
                            No one is enrolled yet.
                        </p>
                        
                    </div>
                </li>}

            </div>

        </div>
    );
};


// let mapStateToProps = store => {
//   console.log(store);

//   return {
//     userDetail: store.auth.userDetail
//   }
// }
// let mapDispatchToProps = dispatch => {
//   return {
//     // setNewProfile: (state, user) => {
//     //   dispatch(updateProfileInstructor(state, user))
//     // }
//   }
// }


export default withRouter(connect(null, {})(EnrolledStudent))

