import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import * as routes from "../../../constants/routePaths";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Rating from "@material-ui/lab/Rating";
import natureImg from "../../../assets/Images/homepageImages/nature.jpg";
import { Link } from "react-router-dom";
import clsx from 'clsx';
const useStyles = makeStyles({
  root: {
    margin: "10px 10px"
  },
  zeroPadding: {
    padding: "4px"
  },
  description: {
    paddingLeft: "11px",
    paddingRight: "11px",
    paddingBottom: " 6px"
  },
  image: {
    borderRadius: "3px"
  },
  day: {
    fontSize: 15,
    marginLeft: 10,
    fontWeight: 500,
  },
  time: {
    fontSize: 16,
    color: 'red'
  },
  titleOuter: {
    padding: 0
  },
  title: {
    fontSize: 14,
    padding: "0px 10px",
    fontWeight: 500,
    marginTop: 10
  },
  desc: {
    padding: "0px 10px",
    fontSize: 13,
    color: 'grey',
    marginTop: 5
  },
  venue: {
    padding: "0px 10px",
    fontSize: 13,
    color: '#30B484',
    fontWeight: 500,
    marginTop: 5
  },
  buttonWrapper:{
    height: 15
  },
  detail_btn: {
    border: 'none',
    borderRadius: 3,
    color: 'white',
    backgroundColor: '#30B484',
    fontSize: 12,
    padding: '5px 10px',
    position: 'absolute',
    right: 10,
    cursor: 'pointer'
  },
});

export default function Event() {
  const classes = useStyles();

  return (
    // <Link to={routes.Service}>
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="180"
        className={classes.image}
        image={natureImg}
        title="Contemplative Reptile"
      />
      <CardContent className={classes.zeroPadding}>
        <div className="row" style={{ marginTop: 10 }}>
          <div className="col-7 p-0" >
            <p className={classes.day}>Saturday 20 FEB</p>
          </div>
          <div className="col-4 p-0 ">
            <span className={classes.time}>9AM - 12PM</span>
          </div>
        </div>
        <div className={clsx(classes.titleOuter, 'row')}>
          <div className={clsx(classes.title, 'col-12')}>
            Intro to Physics part-1
            </div>
          <div className={clsx(classes.desc, 'col-12')}>
            After the course It's all about on us what we learn, and how we can apply in our personal life. They are easy to follow and to put in our lives.
            </div>
          <div className={clsx(classes.venue, 'col-12')}>
            Venue: Dubai, UAE
            </div>
          <div className={clsx(classes.buttonWrapper,'col-12')}>
            <Link to={routes.OneEvent} className="link">
            {/* <Link to={`/customer/my-events/view/:id`} className="link"> */}

            <button className={classes.detail_btn}>View Detail
            </button>
            </Link>
          </div>


        </div>
      </CardContent>
    </Card >
    // </Link>
  );
}
