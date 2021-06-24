import React from "react";
import "./_dashboardCard.scss";

const DashboardCard = ({ title, count, type ,image }) => (
  <div className="dashboard-card col-xl-4 col-lg-6 col-md-6 col-sm-6 grid-margin stretch-card">
    <div className={`card card-statistics ${type}`}>
      <div className="card-body card-body-dashboard">
        <div className="clearfix">
          <div className={`float-right image-cntnr ${type}`}>
            <img
              className="dashboardCard-img"
              src={image}
              alt="students"
            />
          </div>
          <div className="float-left">
            <p className={`dashboard-card-title ${type}`}>{title}</p>
            <div className="fluid-container">
              <h4 className="font-weight-medium mb-0 dashboard-card-count">
                {count}
              </h4>
            </div>
          </div>
        </div>
        <p className="text-muted db-card-bottom-text">
          {/* <i className="mdi mdi-arrow-down mr-1" aria-hidden="true" style={{color:"green"}}></i>{" "} */}
          <span style={{ color: "#8CE39B" }}>
            {" "}
            <i className="mdi mdi-arrow-up" aria-hidden="true"></i>4.5%
          </span>
          <span style={{ marginLeft: "14px" }}>since last 10 days</span>
        </p>
      </div>
    </div>
  </div>
);
export default DashboardCard;
