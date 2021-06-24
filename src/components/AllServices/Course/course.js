import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import * as routes from "../../../constants/routePaths";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import natureImg from "../../../assets/Images/homepageImages/nature.jpg";
import playIcon from "../../../assets/icons/play-icon.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    margin: "10px 10px",
    boxShadow: 'none'
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
  let { item } = props
  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="180"
        className={classes.image}
        image={`http://18.217.77.0:5000/uploads/${item.picture}`}
        title="Contemplative Reptile"
      />
      <CardContent className={classes.zeroPadding}>

        <div className="row service-desc">
          <div className="col-12" style={{ textTransform: 'capitalize' }}>
            {item.name_in_english}
          </div>

        </div>
      </CardContent>
    </Card>
  );
}
