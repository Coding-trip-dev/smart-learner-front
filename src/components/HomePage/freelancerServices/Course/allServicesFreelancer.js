import React, { useState } from "react";
import "./_courses.scss";
import Event from './OneServiceFreelancer'

const Courses = (props) => {

    let { category } = props

    console.log(category);


    return (
        <div className="events-tag-wrapper">
            <div className="row">
                {category.length > 0 ? category.map((item, ind) => {

                    return <>
                    <div className="col-3">
                        <Event item={item} />
                    </div>
                        
                    </>

                }) : null}

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
                </div> */}
                {/* <div className="col-3">
                    <Event />
                </div>
                <div className="col-3">
                    <Event />
                </div> */}
                {/* <div className="col-3">
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
