import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import * as routes from "../../../../constants/routePaths";
import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import Rating from "@material-ui/lab/Rating";
// import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
// import natureImg from "../../../assets/Images/homepageImages/nature.jpg";
// import playIcon from "../../../assets/icons/play-icon.png";
import { Link } from "react-router-dom";
import clsx from 'clsx'
const useStyles = makeStyles({
  root: {
    margin: "10px 10px",
    display: 'flex',
    // flexDirection: 'coloumn'
    height: 250
  },
  zeroPadding: {
    padding: "4px"
  },
  description: {
    paddingLeft: "11px",
    paddingRight: "11px",
    paddingBottom: " 6px",
    width: 480,
    marginTop: "20px !important",
    height: 115
  },
  img_side: {
    width: 400
  },
  venue: {
    marginTop: 20,
    marginLeft: 10,
    color: '#30B484'
  },
  heading: {
    fontSize: 20,
    fontWeight: 500
  },
  venueText: {
    marginLeft: 10
  },
  thirdPart: {
    width: 343,
    textAlign: 'right'
  },
  time: {
    fontSize: 20,
    fontWeight: 500,
    textTransform: 'uppercase',
    paddingRight: 7
  },

  viewDetailsButton: {
    marginTop: 80
  },
  buttonDetails: {
    padding: '10px 20px',
    fontSize: 18,
    color: 'white',
    backgroundColor: "#30B484",
    border: 'none',
    borderRadius: 5
  }
});

export default function Slide(props) {
  const classes = useStyles();

  let { item } = props



  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  // let months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', "Aug", "Sep", "Oct", "Nov", "Dec"];


  return (
    <Card className={classes.root}>
      <div className={classes.img_side}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="300"
          // width="300"
          image={`http://18.217.77.0:5000/uploads/${item.picture}`}
          title="Contemplative Reptile"
        />
      </div>
      <CardContent className={classes.zeroPadding}>
        <p
          // className="card-title"
          style={{
            paddingLeft: "11px",
            paddingRight: "7px",
            paddingTop: "7px",
            fontSize: "25px",
            fontWeight: 500,
            marginBottom: 20,
            textTransform: 'capitalize'
          }}
        >
          {" "}
          {item.english_tittle}
        </p>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.description}
        >
          {item.english_description}

        </Typography>
        <div className={classes.venue}>
          <span className={classes.heading}>
            Venue:
         </span>
          <span className={classes.venueText}>
            {item.english_venue}
          </span>

        </div>
      </CardContent>
      <CardContent className={clsx(classes.zeroPadding, classes.thirdPart)}>
        <p
          // className="card-title"
          style={{
            paddingLeft: "11px",
            paddingRight: "7px",
            paddingTop: "7px",
            fontSize: "25px",
            fontWeight: 500,
            marginBottom: 20,
            textAlign: 'right',
          }}
        >
          {" "}
          {/* Satruday 20 FEB */}
          {days[new Date(item.date).getDay()] + " "}
          {new Date(item.date).getDate() + " "}
          {new Date(item.date).toLocaleString('default', { month: 'short' })}
        </p>

        <div className={classes.venue}>
          <p className={classes.time}>
          {item.time}
         </p>

        </div>
        <div className={classes.viewDetailsButton}>
          <button className={classes.buttonDetails}>View Details</button>
        </div>
      </CardContent>
    </Card>
  );
}
