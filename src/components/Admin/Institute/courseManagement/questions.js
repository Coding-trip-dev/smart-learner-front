import React, { useState, Fragment } from "react";
import play from "../../../../assets/icons/play-icon.png";
import lock from "../../../../assets/icons/lock.png";
import eye from "../../../../assets/icons/eye-view.png";

import "./_addCourse.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";






const QuestionAsked = (props) => {
    let { ques } = props

    const [expanded, setExpanded] = useState(false);
    const handleExpansion = expanded => {
        setExpanded(!expanded);
        console.log("working");

    };


    let { user_name, reply_body } = ques
    console.log(ques);


    return (
        <div className="course-chapter-box col-12 nopad qustions-container-outer">


            <div className="row">
                <div className="question-outer">
                    <div className="col-12 basic-details-outer">
                        {/* <img src="" alt="U" className="user-image-asked-question"/> */}
                        <p className="user-image-asked-question">U</p>
                        <p className="display-name-asked-question">
                            {/* Umer Ahmad */}
                            {user_name}
                        </p>
                        <p className="day-asked-question">5 days ago</p>
                    </div>
                    <div className="col-12">
                        <p className="actual-question">
                            {reply_body}
                        </p>
                    </div>

                </div>
                <div className="col-12 nopad">

                    <div className="add-chapter-outer">
                        {
                            expanded
                                ?
                                <Fragment>

                                    <input type="text" className="add-chapter reply-question" placeholder="Type answer here" />
                                    <div className="reply-done-button">
                                        <button className="cancel-reply"

                                            onClick={() => handleExpansion(expanded)}>
                                            Cancel
                                    </button>
                                        <button className="done-reply"
                                            onClick={() => handleExpansion(expanded)}
                                        >
                                            Reply

                                        </button>
                                    </div>
                                </Fragment>
                                :
                                <button className="reply-button" onClick={() => handleExpansion(expanded)}

                                >
                                    <FontAwesomeIcon icon={faReply} className="reply-icon" />
                                                        Reply
                                </button>
                        }


                    </div>
                </div>



            </div>


        </div>
    );
};
export default QuestionAsked;