import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banca from "../img/banca.png";
import delubac from "../img/delubac.png";
import aktif from "../img/aktif.png";
import sib from "../img/SIB.png";

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
      <div className="w-[302px]">
        <Slider {...settings}>
          <div>
            <img src={banca} />
          </div>
          <div>
            <img src={delubac} />
          </div>
          <div>
            <img src={aktif} />
          </div>
          <div>
            <img src={sib} />
          </div>
        </Slider>
      </div>
    );
  }
}
