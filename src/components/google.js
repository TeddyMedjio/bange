import React from "react";
import mapboxgl from "mapbox-gl";
import map from "../img/icons/map.svg";

mapboxgl.accessToken =
  "pk.eyJ1IjoidGVkZHkyMzciLCJhIjoiY2xiNm9mbGUwMDE1cDNxcGxrZjBiZjNkcSJ9.-3FE1VXQRQAkc2sIiTg8jg";

class Mapp extends React.Component {
  // Set up states for updating map
  constructor(props) {
    super(props);
    this.state = {
      lng: 9.696536930830325,
      lat: 4.051807752792534,
      zoom: 6,
    };
  }

  // Create map and lay over markers
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/teddy237/clbc89taf000c14moitsiwd83",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });
  }

  render() {
    return (
      <div>
        <div className="z-50 absolute container w-[2%]">
          <div className="bg-[#018539] rounded-b-md w-80 pb-16">
            <h3 className="text-white font-semibold text-4xl w-3/4 pl-10 pt-10">
              Notre réseau au Cameroun
            </h3>
            <div className="pl-10 mt-5 flex items-start w-3/5">
              <img src={map} className="w-5 mr-3 pt-1" />
              <p className="text-white text-sm font-bold uppercase">
                carte des implatations
              </p>
            </div>
          </div>
        </div>
        <div
          ref={(el) => (this.mapContainer = el)}
          style={{ width: "100%", height: "100vh" }}
        />
      </div>
    );
  }
}

export default Mapp;
