import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Rating from "@material-ui/lab/Rating";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { CardHeader } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';



const useStyles = makeStyles({
  root: {
    margin: "10px 10px",
    borderRadius: 5,
    boxShadow: "0px 1px 5px 3px lightgrey",
    padding: 10
  },
  zeroPadding: {
    padding: "4px !important"
  },
  description: {
    paddingLeft: "11px",
    paddingRight: "11px",
    paddingBottom: " 6px"
  },
  image: {
    borderRadius: "3px",
    boxShadow: "0px 1px 5px 3px lightgrey",
    marginBottom: 10
  },
  header: {
    display: "flex",
    padding: "6px 0px",
    paddingRight: "4px",
    justifyContent: "space-between"
  },
  gigBtn: {
    fontSize: "0.6rem",
    // width: "48px",
    // height: "23px",
    textAlign: "center",
    color: "white !important",
    padding: "5px 15px",
    borderRadius: 5,
    border: 'none',
    cursor: 'pointer'
  },
  editIcon: {
    fontSize: 12,
    position: 'relative',
    top: 2,
    right: 3
  },
  gigBY: {
    fontSize: 12,
    fontWeight: 400,
    textTransform: 'capitalize',
    marginLeft: 5
  },
  profession: {
    fontSize: 10,
    fontWeight: 400,
    color: 'lightgrey',
    marginLeft: 5,
    textTransform: 'capitalize'
  },
  total: {
    fontSize: 12,
    color: '#8a8787',
    position: 'relative',
    top: -8
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

function Service(props) {
  const { item } = props
  const classes = useStyles();




  console.log(item);

  return (

    <Card className={classes.root}>

      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="180"
        className={classes.image}
        image={`/uploads/${item.images[0]}`}
        title="Contemplative Reptile"
      />
      <CardContent className={classes.zeroPadding}>
        <div className="row service-row">
          <div className="col-2 p-0">
            <img
              className="rounded-circle img-fluid"
              style={{ height: "41px", marginTop: "6px", marginLeft: "6px" }}
              src={`/uploads/${item.freelancer_picture}`}
              // src="https://scontent.fkhi10-1.fna.fbcdn.net/v/t1.0-9/48994275_252190439003234_3750715461226987520_n.jpg?_nc_cat=105&_nc_sid=85a577&_nc_ohc=E6Ui3CQhixEAX8cpIUr&_nc_ht=scontent.fkhi10-1.fna&oh=6a28d5d9831e6a914712910546c8d2be&oe=5EF919C0"
              alt="profile"
            />
          </div>
          <div className="col-5 p-0 name-col" style={{ paddingTop: "9px" }}>
            <p className={classes.gigBY}>{item.freelancer_name}</p>
            <p className={classes.profession}>{item.freelancer_skill}</p>
          </div>
          <div className="col-1 p-0"></div>
          <div className="col-3 p-0 rating-col">
            <Rating value={4} readOnly className={classes.ratingStar} />
            <span className={classes.total}>(255)</span>
          </div>
        </div>
        <div className="row service-desc">
          <div className="col-12">
            <p className={classes.offeringDesc}>
              {item.service_title}

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


export default connect(null, {})(Service)