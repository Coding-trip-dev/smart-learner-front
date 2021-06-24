import React from "react";
import "./scss/_serviceReview.scss";
import Rating from "@material-ui/lab/Rating";

const ReviewOnService = props => (
  <div className="row service-cntnr">
    <div className="col-12" style={{margin:"13px 0px",marginBottom:"8px"}}>
      <div className="row">
        <div className="col-2 col-xl-1 p-0 text-center text-xl-left">
          <img
            className="reviewer-avatar"
            src={require("../../assets/Images/saqii.jpg")}
            // src="https://scontent.fkhi10-1.fna.fbcdn.net/v/t1.0-9/48994275_252190439003234_3750715461226987520_n.jpg?_nc_cat=105&_nc_sid=85a577&_nc_ohc=E6Ui3CQhixEAX-erJpj&_nc_ht=scontent.fkhi10-1.fna&oh=2f1c0022eec29f23fabd0c471ca7948a&oe=5EF919C0"
            alt="reviewer"
          />
        </div>
        <div className="col-10 col-xl-11 p-0 review-detail-col">
          <p>
            <span className="name">Muhammad Ishaq</span>
            <Rating className="rating" value={5} readOnly />{" "}
          </p>
          <p className="days">2 days ago</p>
        </div>
      </div>
    </div>
    <div className="col-12 review-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget lacus
      rhoncus, consectetur libero eget, imperdiet justo. Aliquam id ex eget quam
    </div>
  </div>
);
export default ReviewOnService;
