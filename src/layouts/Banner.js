import React, { Component } from "react";
import Slider from "react-slick";

export default class Banner extends Component {
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
    var settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows:false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
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
    return (
      <div>
        <Slider {...settings}>
          {this.props.bannerData&&
          this.props.bannerData.map((item,i) =>{
            return <div key={"containerBanner" + i}>
            <img src={item.bannerUrl} width="100%" height="auto"/>
          </div>
          })}
          
        </Slider>
      </div>
    );
  }
}