import React, { Component } from "react";
import Slider from "react-slick";

export default class SlickSlider extends Component {
  constructor(props){

    super(props)
    
  };
  componentDidMount(){
    
  }
  componentDidUpdate(prevProps, prevState){
    if(prevProps.sliderData!==this.props.sliderData)
    {
      
    }
  }
  render() {
    const settings = {
      className: "center",
      infinite: false,
      centerPadding: "60px",
      slidesToShow: 4,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: false,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="deneme">
        <Slider {...settings}>
          {this.props.sliderData&&
          this.props.sliderData.map((item,i) => {
            return <div className="container-slider" key={"containerSlider" + i}>
            <img className="image" src={item.sliderUrl} />
            <div className="middle">
              <p className="top-text">{item.sliderTopTitle}</p>
              <p className="bottom-text">{item.sliderBottomTitle}</p>
            </div>
          </div>
          })}
          
        </Slider>
      </div>
    );
  }
}
