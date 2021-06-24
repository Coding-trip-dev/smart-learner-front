import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import * as routes from "../../../../constants/routePaths";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Rating from "@material-ui/lab/Rating";
import natureImg from "./nature.jpg";
import { Link } from "react-router-dom";
import { CardHeader } from "@material-ui/core";
import ToggleButton from "../../../Common/toggleButton/ToggleButton";
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles({
  root: {
    margin: "10px 10px",
    borderRadius: 5,
    boxShadow: "0px 1px 5px 3px lightgrey",
    width: 280
  },
  zeroPadding: {
    padding: "4px !important"
  },

  total: {
    fontSize: 12,
    color: '#8a8787',
    position: 'relative',
    top: -8,
    marginRight: 20
  },
  offeringDesc: {
    fontSize: 14,
    fontWeight: 400
  },
  startingFrom: {
    fontSize: 12,
    fontWeight: 400,
    marginRight: 5
  },
  ratingStar: {
    fontSize: 13
  },
});

export default function Service(props) {
  const { item } = props
  const classes = useStyles();

  console.log(item);
  

  return (

    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt="Service image"
        height="180"
        className={classes.image}
        image={`http://18.217.77.0:5000/uploads/${ item.images[0]}`}
        title={ item.service_title }
      />
      <CardContent className={classes.zeroPadding}>
        <div className="row service-row">

          <div className="col-9 p-0"></div>
          <div className="col-3 p-0 rating-col">
            <Rating value={4} readOnly className={classes.ratingStar} />
            <span className={classes.total}>(255)</span>
          </div>
        </div>
        <div className="row service-desc">
          <div className="col-12">
            <p className={classes.offeringDesc}>
              { item.service_title }

              </p>
          </div>
          <div className="col-12 starting-from">
            <span className={classes.startingFrom}>

              Starting from
              </span>
            <span className="price"> {item.packages[0].basic.price}</span>
          </div>
        </div>
      </CardContent>
    </Card>

  );
}
