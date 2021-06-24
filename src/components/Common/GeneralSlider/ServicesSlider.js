import React from "react";
import "./scss/_slider.scss";
import Slider from "react-slick";
import Service from "./Service";

class ServicesSlider extends React.Component {
  render() {
    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    let { services,to } = this.props
    return (
      <Slider {...settings} className="coursesSlider">
        {
          services ?
            services.map((item, key) => {

              return <Service item={item} key={key} to={to}/> 
            })
            : <div>
              <span className='nothing-to-show-slider'>

                Please Select Any Service First 
            </span>
            </div>
        }
        {/* <Service /> */}
        {/* <Service />
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
        <Service /> */}
      </Slider>
    );
  }
}
export default ServicesSlider;