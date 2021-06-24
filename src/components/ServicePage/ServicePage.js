import React from "react";
import "./scss/_servicePage.scss";
import TopNavBar from "../Common/TopNavBar";
import Rating from "@material-ui/lab/Rating";
import Footer from "../Common/Footer";
import ReviewOnService from "./ReviewOnService";
import PackageDetail from "./PackageDetail";

const ServicePage = props => (
  <div className="container-fluid">
    <TopNavBar />
    <div className="col-12 margin-from-navbar">
      <h5>I am offering web design services with PSD file.</h5>
    </div>

    <div className="col-12">
      <div className="row">
        <div className="col-12 col-md-7 p-0">
          <div className="row">
            <div className="col-12 p-0">
              <img
                className="service-img"
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
                alt="service"
              />
            </div>
            <div className="col-12 p-0 rating-div-service">
              <Rating className="rating" value={4} readOnly />
              <span className="total">(102)</span>
            </div>
            <div className="col-12 p-0 service-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              eget lacus rhoncus, consectetur libero eget, imperdiet justo.
              Aliquam id ex eget quam pulvinar pretium. Donec suscipit tincidunt
              erat vitae lacinia. Integer vitae aliquet dolor. Sed posuere
              placerat ligula eu ullamcorper. Donec vel orci ac arcu ultricies
              sodales. Pellentesque eu mauris dictum, congue justo ac, dignissim
              velit. Donec maximus est nec nibh tempor luctus. Aliquam eu ornare
              lorem, eu ullamcorper massa.
            </div>
            <div className="col-12 p-0 dashed-line"></div>
            {/* FOLLOWING COL WILL NOT DISPLAY ON SMALL SCREENS */}
            <div className="col-12 p-0 reviews d-none d-md-block">
              <p className="reviews-total-text">(255) Reviews</p>
              <ReviewOnService />
              <ReviewOnService />
              <ReviewOnService />
              <ReviewOnService />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5 packages-section p-0">
          <h5 className="heading">Packages</h5>
          <ul className="nav nav-pills mb-3 tabs" id="pills-tab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="pills-home-tab"
                data-toggle="pill"
                href="#pills-home"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Basic
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="pills-profile-tab"
                data-toggle="pill"
                href="#pills-profile"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Silver
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="pills-contact-tab"
                data-toggle="pill"
                href="#pills-contact"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Golden
              </a>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <PackageDetail />
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <PackageDetail />
            </div>
            <div
              className="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              <PackageDetail />
            </div>
          </div>
          <div className="row">
            <div className="col-12 img-avatar-col text-center">
              <span className="img-avatar-cntnr">
                <img
                  src={require("../../assets/Images/saqii.jpg")}
                  // src="https://scontent.fkhi10-1.fna.fbcdn.net/v/t1.0-9/48994275_252190439003234_3750715461226987520_n.jpg?_nc_cat=105&_nc_sid=85a577&_nc_ohc=SSjd6qdSH_gAX8NNX3x&_nc_ht=scontent.fkhi10-1.fna&oh=59a79dd89a8c2186c048f8e3989d38fa&oe=5EF919C0"
                  alt="img"
                />
                <span className="dot"></span>
              </span>
            </div>
            <div className="col-12 name-col text-center">
              <span className="name">Muhammad Ishaq</span>
              <span className="profession">MERN stack developer</span>
            </div>
            <div className="col-12 text-center">
              <Rating style={{ fontSize: "15px" }} value={5} readOnly />
            </div>
            <div className="col-12 text-center jobs-completed-service">
              <span>jobs completed (100%)</span>
            </div>
            <div className="col-12 extra-info-col">
              <h6 className="info-title">Location</h6>
              <p className="info">Dubai</p>
              <h6 className="info-title">Languages</h6>
              <p className="info">Arabic , English</p>
              <h6 className="info-title">Avg-response time</h6>
              <p className="info">1 Hour</p>
            </div>
            <div className="col-12 p-0 dashed-line"></div>
            <div className="col-12">
              <h6>About me</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                eget lacus rhoncus, consectetur libero eget, imperdiet justo.
                Aliquam id ex eget quam pulvinar pretium. Donec suscipit
                tincidunt erat vitae lacinia.{" "}
              </p>
            </div>
          </div>
          {/*  FOLLOWING COL WILL ONLY DISPLAY ON SMALL SCREENS */}
          <div className="col-12 p-0 reviews d-md-none">
            <p className="reviews-total-text">(255) Reviews</p>
            <ReviewOnService />
            <ReviewOnService />
            <ReviewOnService />
            <ReviewOnService />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);
export default ServicePage;
