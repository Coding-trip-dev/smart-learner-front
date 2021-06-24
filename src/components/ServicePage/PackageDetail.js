import React from "react";
import "./scss/_packageDetail.scss";
import checkIcon from "../../assets/icons/check-icon.png";

const PackageDetail = props => (
  <div className="row package-detail">
    <div className="col-12 p-0 d-flex">
      <h6>20 AED</h6>
    </div>
    <div className="col-12 p-0 d-flex">
      <span className="detail-item">Source file</span>
      <span className="ans">-</span>
    </div>
    <div className="col-12 p-0 d-flex">
      <span className="detail-item">Delivery Days</span>
      <span className="ans">2 Days</span>
    </div>
    <div className="col-12 p-0 d-flex">
      <span className="detail-item">Concepts Included</span>
      <span className="ans">-</span>
    </div>
    <div className="col-12 p-0 d-flex">
      <span className="detail-item">3D Mockup</span>
      <div className="ans">
        {" "}
        <img className="check" src={checkIcon} alt="check" />
      </div>
    </div>
    <div className="col-12 p-0 d-flex">
      <button className="detail-item continue primaryBtn">
        Continue <span className="price">(20 AED)</span>
      </button>
      <div className="chat ">
        <div className="image-avatar-custom">
          <img
            className="position-relative"
            src={require("../../assets/Images/saqii.jpg")}
            // src="https://scontent.fkhi10-1.fna.fbcdn.net/v/t1.0-9/48994275_252190439003234_3750715461226987520_n.jpg?_nc_cat=105&_nc_sid=85a577&_nc_ohc=SSjd6qdSH_gAX8NNX3x&_nc_ht=scontent.fkhi10-1.fna&oh=59a79dd89a8c2186c048f8e3989d38fa&oe=5EF919C0"
            alt="img"
          />
          <div className="dot"></div>
        </div>
        Chat
      </div>
    </div>
  </div>
);
export default PackageDetail;
