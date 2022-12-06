import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Caroussel.css";
import Fade from "react-reveal/Fade";

export default class SimpleSlider extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
    };
    return (
      <div>
        <Slider {...settings} className="slider overflow-hidden">
          <div className="bg-hero-pattern1 bg-no-repeat bg-cover h-[400px] md:h-[635px]">
            <div className="container mx-auto w-[85%] pt-24 md:pt-40">
              <Fade left>
                <h1 className=" text-[#ffffff] md:text-white font-bold text-[45px] text-center md:text-left leading-[1] md:text-6xl lg:text-7xl md:w-1/2 ">
                  Des solutions de financements à court terme
                </h1>
              </Fade>
              <Fade bottom>
                <p className="hidden lg:block text-white md:text-lg mt-10 md:w-2/5">
                  Grâce à leurs durées inférieure à un an. Nos solutions de
                  financement vont vous permettre de financer vos activités
                  quotidiennes ...
                </p>
              </Fade>
            </div>
          </div>

          <div className="bg-hero-pattern2 bg-no-repeat bg-cover h-[400px] md:h-[635px]">
            <div className="container mx-auto w-[85%] pt-24 md:pt-40">
              <Fade left>
                <h1 className=" text-[#ffffff] md:text-white font-bold text-[45px] text-center md:text-left leading-[1] md:text-6xl lg:text-7xl md:w-1/2 ">
                  Encore plus de possibilité chez nous
                </h1>
              </Fade>
              <Fade bottom>
                <p className="hidden lg:block text-white md:text-lg mt-10 md:w-2/5">
                  Dans un monde qui change, nous accompagnons tous nos clients
                  et nos collaborateurs dans la construction d’un futur durable.
                </p>
              </Fade>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
