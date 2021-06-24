import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import * as routes from "../../../constants/routePaths";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Rating from "@material-ui/lab/Rating";
import natureImg from "../../../assets/Images/homepageImages/nature.jpg";
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
  },
  image: {
    borderRadius: "3px"
  }
});

export default function Service(props) {
  const classes = useStyles();
  const { item, key, to } = props

  console.log(item);

  return (
    <Link to={to ? `${to}/${item._id}` : `/customer/service/category/${item._id}`}>
      <Card className={classes.root}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="180"
          className={classes.image}
          image={`/uploads/${item.picture}`}
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

    </Link>
  );
}
