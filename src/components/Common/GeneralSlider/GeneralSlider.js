import React from "react";
import "./scss/_slider.scss";
import Slider from "react-slick";
import Card from "./Card";

class GeneralSlider extends React.Component {
  render() {
    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      swipeToSlide: true,
      dots: true,
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
    let styles ={
     
    }
    let { trending } = this.props
    return (
      <Slider {...settings} className="coursesSlider">
        {

          trending ?
            trending.map((item, key) => {
              return <Card item={item} key={key} />
            })
            : <div>
              <span className='nothing-to-show-slider'>

              Nothing to Show
              </span>
              </div>
        }
        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
      </Slider >
    );
  }
}
export default GeneralSlider;