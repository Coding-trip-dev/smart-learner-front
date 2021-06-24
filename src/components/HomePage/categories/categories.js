import React, { useState } from "react";
import "./_categories.scss";
import LaptopIcon from '@material-ui/icons/Laptop';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import DoubleCoin from '../../../assets/icons/double_coins.png'
import Heart from '../../../assets/icons/heart.png'
import CodeIcon from '@material-ui/icons/Code';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import * as routes from '../../../constants/routePaths'
import {Link} from 'react-router-dom'

const CourseCategories = () => {


    return (
        <div className="row bottom-border">
            <div className="categories-tag-wrapper">
                <Link className="link" to={routes.AllDevelopmentCourses}>
                <div className="category-1 _flex">
                    <div className="icon">
                        <LaptopIcon />
                    </div>
                    <div className="text">
                        Development
                    </div>
                </div>
                </Link>
                <div className="category-1 _flex">
                    <div className="icon">
                        <BusinessCenterIcon />
                    </div>
                    <div className="text">
                        Business
                    </div>
                </div>
                <div className="category-1 _flex">
                    <div className="icon">
                        <img src={DoubleCoin} alt="" className="icon-image" />
                    </div>
                    <div className="text">
                        Finance  & Accounting
                    </div>
                </div>
                <div className="category-1 _flex">
                    <div className="icon">
                        <CodeIcon />
                    </div>
                    <div className="text">
                        IT & Software
                    </div>
                </div>
                <div className="category-1 _flex">
                    <div className="icon">
                        <img src={Heart} alt="" className="icon-image" />
                        {/* <CodeIcon /> */}
                    </div>
                    <div className="text">
                        Health & Fitness
                    </div>
                </div>
                <div className="category-1 _flex">
                    <div className="icon">
                        <MusicNoteIcon />
                    </div>
                    <div className="text">
                        Music
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CourseCategories;
