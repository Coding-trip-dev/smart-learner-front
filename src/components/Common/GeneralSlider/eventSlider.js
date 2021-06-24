import React from "react";
import "./scss/_slider.scss";
import Slider from "react-slick";
import Event from "./events";

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
    let { events } = this.props
    // console.log(events);
    
    return (
      <Slider {...settings} className="coursesSlider">
        {
          events ? 
          events.map((item,key)=>{
            return <Event item={item} key={key}/>
            
          })
          : 
          null
        }
        {/* <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event /> */}
      </Slider>
    );
  }
}
export default ServicesSlider;