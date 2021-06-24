import React, { useState } from "react";
import "./_events.scss";

import Event from './event'

const Events = () => {


    return (
        <div className="events-tag-wrapper">
            <div className="row">
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



            </div>
        </div>
    );
};
export default Events;
