import React, { useState } from "react";
import "./_courses.scss";
import Event from './course'

const Courses = (props) => {

    let { services } = props
     
    return (
        <div className="events-tag-wrapper">
            <div className="row">
                {services ? services.map((item, key) => <div className="col-3"><Event item={item} /></div>) : null}
            </div>
        </div>
    );
};
export default Courses;
