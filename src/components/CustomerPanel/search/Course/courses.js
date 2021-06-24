import React, { useState } from "react";
import "./_courses.scss";
import Course from './course'

const Courses = (props) => {
    let { courses } = props
    console.log(courses);

    return (
        <div className="events-tag-wrapper">
            <div className="row">
                {
                    courses ?
                        courses.length > 0 ?
                            courses.map((item, key) => {
                                return item.courses.map((course, ind) => {
                                    return <div className="col-3" key={key}>
                                        <Course item={course} key={ind} />
                                    </div>
                                })
                            })
                            :
                            <div className='col-12'>
                                <span className='nothing-to-show-slider'>

                                    Nothing to Show
                                 </span>
                            </div>
                        :
                        <div className='col-12'>
                            <span className='nothing-to-show-slider'>

                                Nothing to Show
                        </span>
                        </div>
                }

                {/* <div className="col-3">
                    <Event />
                </div>
                <div className="col-3">
                    <Event />
                </div>
                <div className="col-3">
                    <Event />
                </div>
                <div className="col-3">
                    <Event />
                </div>
                <div className="col-3">
                    <Event />
                </div>
                <div className="col-3">
                    <Event />
                </div>
                <div className="col-3">
                    <Event />
                </div>
                <div className="col-3">
                    <Event />
                </div>
                <div className="col-3">
                    <Event />
                </div>
                <div className="col-3">
                    <Event />
                </div>
                <div className="col-3">
                    <Event />
                </div> */}

            </div>
        </div>
    );
};
export default Courses;
