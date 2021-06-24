import React from "react";
import "./scss/_review.scss";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    padding: 0,
    backgroundColor: theme.palette.background.paper
  }
}));

let dummyText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Cras vitae auctor ex, eu pulvinar risus.";

export default function Review() {
  const classes = useStyles();

  return (
    <div className="row">
      <div className="col-12 col-lg-7">
        <div className="row mb-3">
          <div className="col-12 col-md-4">
            <List className={classes.root}>
              <ListItem classes={{ root: "custom-review-list-item" }}>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Muhammad Ishaq"
                  secondary="Jan 9, 2014"
                />
              </ListItem>
            </List>
          </div>
          <div className="col-12 col-md-8 right-col">
            <Rating classes={{ root: "review-rating" }} value={4} readOnly />
            <h6 className="title">Introduction to physics</h6>
            <p>{dummyText}</p>
          </div>
        </div>
      </div>
      <div className="col-0 col-lg-5"></div>
    </div>
  );
}
