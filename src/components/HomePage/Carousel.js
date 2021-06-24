import React from "react";
import carouselItem1 from "../../assets/Images/homepageImages/carousel-item1.png";
import carouselItem2 from "../../assets/Images/homepageImages/carousel-item2.png";
import carouselItem3 from "../../assets/Images/homepageImages/carousel-item3.png";

var carouselImages =[carouselItem1,carouselItem2,carouselItem3];
const Carousel = props => (
  <section className="carousel-section">
    <div className="carousel-text">
        <button className="primaryBtn enroll-btn">Get Enrolled</button>
    </div>
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
      data-interval="3000"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        {/* <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li> */}
      </ol>
      <div className="carousel-inner">
        {
          carouselImages.map((image,i) => (
            <div key={i} className= {`carousel-item ${i === 0 ? `active` : ""}`}>
            <img
              className="d-block w-100"
              src={image}
              alt={image}
            />
          </div>
          ))
        }
      </div>
    </div>
  </section>
);
export default Carousel;
