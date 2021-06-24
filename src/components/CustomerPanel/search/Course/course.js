import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import * as routes from "../../../../constants/routePaths";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import natureImg from "../../../../assets/Images/homepageImages/nature.jpg";
import playIcon from "../../../../assets/icons/play-icon.png";
import { Link } from "react-router-dom";

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
  }
});

export default function Slide(props) {
  const classes = useStyles();

  let { item, key } = props
  console.log(item);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <div className="card-img-div">
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="180"
            image={`/uploads/${item.thumbnail}`}
            title="Contemplative Reptile"
          />
          <img src={playIcon} className="playIcon" alt="play" />
          <span className="discount-text">15% OFF</span>
        </div>
      </CardActionArea>
      <CardContent className={classes.zeroPadding}>
        <h4
          className="card-title"
          style={{
            paddingLeft: "11px",
            paddingRight: "7px",
            paddingTop: "7px",
            fontSize: "20px",
            height: 30
          }}
        >
          {" "}
          {item.name}
        </h4>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.description}
        >
          Lizards are a widespread group of squamate reptiles
        </Typography>
        <p className="instructor-name-p">
          {" "}
          <b className="title">Instructor : </b>
          <b className="name">{item.instructor_name}</b>
        </p>
        <div className="rating-div">
          <Rating name="read-only" value={5} readOnly />
          <span className="text">
            <span>5.0 </span>
            <span className="total">(255)</span>
          </span>
        </div>
      </CardContent>
      <CardActions className="card-footer-div d-flex justify-content-between">
        {/* <Link to={routes.CourseDetail}> */}
          <Button
            className="primaryBtn enroll-btn-with-cart button"
            startIcon={<AddShoppingCartIcon />}
          >
            You Purchased
          </Button>
        {/* </Link> */}
        <Typography className="amount">
        <span>{item.price}</span>
          <span className="currencyText">AED</span>
        </Typography>
      </CardActions>
    </Card>
  );
}
