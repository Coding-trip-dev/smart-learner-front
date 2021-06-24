import React, { useState } from "react";
import "./_courses.scss";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import natureImg from "../../../assets/Images/homepageImages/nature.jpg";
import clsx from 'clsx'

import NearMeIcon from '@material-ui/icons/NearMe';
const useStyles = makeStyles({
    root: {
        margin: "10px 10px",
        boxShadow: 'none'
        // display: 'flex',
        // flexDirection: 'coloumn'
        // height: 250
    },
    zeroPadding: {
        padding: "4px"
    },
    description: {
        paddingLeft: "11px",
        paddingRight: "11px",
        paddingBottom: " 6px",
        // width: 480,
        marginTop: "20px !important",
        fontSize: 20
    },
    img_side: {
        // width: 400
        height: 650
    },
    venue: {
        marginTop: 40,
        marginLeft: 10,
        color: '#30B484',
        marginBottom: 30
    },
    heading: {
        fontSize: 30,
        fontWeight: 500
    },
    venueText: {
        marginLeft: 10,
        fontSize: 20
    },
    thirdPart: {
        // width: 343,
        textAlign: 'right'
    },
    time: {
        fontSize: "2.4em",
        fontWeight: 500,
        textTransform: 'uppercase',
        paddingRight: 7,
        color: '#30B484',
        margin: '20px 0px !important'
    },

    viewDetailsButton: {
        // marginTop: 80,
        margin: "80px 30px 20px 0px"
    },
    buttonDetails: {
        padding: '10px 20px',
        fontSize: 18,
        color: 'white',
        backgroundColor: "#30B484",
        border: 'none',
        borderRadius: 5
    },
    direction: {
        padding: '8px 20px',
        fontSize: 18,
        color: "#30B484",
        backgroundColor: 'white',
        border: '1px solid #30B484 ',
        borderRadius: 5,
        

    },
    amount: {
        fontSize: '2em',
        fontWeight: 500,
        marginRight: 10
    },
    bottomWrapper: {
        display: 'flex',
        justifyContent: 'flex-end'
    }
});
const Courses = () => {
    const classes = useStyles();

    return (
        <div className="events-tag-wrapper">
            <div className="row">
                <div className="col-12">
                    <Card className={classes.root}>
                        <div className={classes.img_side}>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="600"
                                // width="300"
                                image={natureImg}
                                title="Contemplative Reptile"
                            />
                        </div>
                        <div className="row">
                            <div className="col-8">

                                <CardContent className={classes.zeroPadding}>
                                    <p
                                        // className="card-title"
                                        style={{
                                            paddingLeft: "11px",
                                            paddingRight: "7px",
                                            paddingTop: "7px",
                                            fontSize: "2.3em",
                                            fontWeight: 500,
                                            marginBottom: 20
                                        }}
                                    >
                                        {" "}
                                    Intro to Physics Part-1 with notes
                                    </p>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                        className={classes.description}
                                    >
                                        After the course, it's all about us to use what we learn. I love the courses made it bychand. They are easy to follow, to understand To put in application.
                                        after the course, it's all about us to use what we learn. I love the courses made it bychand. They are easy to follow, to understand To put in application.

                            </Typography>
                                    <div className={classes.venue}>
                                        <span className={classes.heading}>
                                            Venue:
                                        </span>
                                        <span className={classes.venueText}>
                                            33102, Abu Dhabi United Arab Emirates, AE
                                        </span>

                                    </div>
                                    <p
                                        // className="card-title"
                                        style={{
                                            paddingLeft: "11px",
                                            paddingRight: "7px",
                                            paddingTop: "7px",
                                            fontSize: "2em",
                                            fontWeight: 500,


                                        }}
                                    >
                                        {" "}
                                Satruday 20 FEB
                                </p>
                                </CardContent>
                            </div>
                            <div className="col-4">

                                <CardContent className={clsx(classes.zeroPadding, classes.thirdPart)}>


                                    <div >
                                        <p className={classes.time}>
                                            9AM TO 2PM
                                        </p>

                                    </div>
                                    <div >
                                        <p className={classes.amount}>
                                            AED 150
                                        </p>

                                    </div>

                                </CardContent>
                            </div>
                        </div>
                        <div className="row">
                            <div className={clsx(classes.bottomWrapper, 'col-12')}>
                                <div className={classes.viewDetailsButton}>
                                    <button className={classes.direction}>
                                        <NearMeIcon style={{
                                            color: '#30B484',
                                            position: 'relative',
                                            top: '6',
                                            marginRight: 5
                                        }} />
                                    Get Direction</button>
                                </div>
                                <div className={classes.viewDetailsButton}>
                                    <button className={classes.buttonDetails}>Book My Seat</button>
                                </div>
                            </div>
                        </div>
                    </Card>

                </div>
            </div>
        </div>
    );
};
export default Courses;
