import React, { useState } from "react";
import "./_courses.scss";
import Event from './course'

const Courses = (props) => {

    let { category } = props

    console.log(category);

 
    return ( 
        <div className="events-tag-wrapper">
            <div className="row">
                {category.length > 0 ? category[0].english_categories.map((item, ind) => {
                    
                        return <div className="col-3" key={ind}>
                            <Event id={item._id} category={item.service_name} img={item.service_image ? item.service_image : category[0].picture} />
                        </div>
                   

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
