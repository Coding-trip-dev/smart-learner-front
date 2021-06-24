import React, { useState } from "react";
import "./_courses.scss";
import Event from './course'

const Courses = (props) => {
    let { trending } = props
    console.log(trending);

    return (
        <div className="events-tag-wrapper">
            <div className="row">
                {trending ? trending.map((item, key) => {
                    return <div className="col-3">
                        <Event item={item} key={key} /> 
                    </div>
                }) :
                    null
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
