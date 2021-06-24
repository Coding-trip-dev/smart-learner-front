import React, { useState } from "react";
import "./_courses.scss";
import Event from './course'

const Courses = (props) => {
    let { events } = props

    return (
        <div className="events-tag-wrapper">
            <div className="row">
                {events ? events.map((item, key) => {

                    return <div className="col-12">
                        <Event item={item} key={key} /> 
                    </div>
                }) : null}

            </div>
        </div>
    );
};
export default Courses;
