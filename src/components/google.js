import React from "react";
import mapboxgl from "mapbox-gl";
import map from "../img/icons/map.svg";

mapboxgl.accessToken =
  "pk.eyJ1IjoidGVkZHkyMzciLCJhIjoiY2xiNm9raHl4MDMxdjN2bGVqcjkxazNvNiJ9.eOKv2XPQi-AG_USX4rMreg";

export default class Mapp extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      lng: 9.696536930830325,
      lat: 4.051807752792534,
      zoom: 15,
    };
    this.mapContainer = React.createRef();
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;
    const map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/teddy237/clbc89taf000c14moitsiwd83",
      center: [lng, lat],
      zoom: zoom,
    });

    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });
  }
  render() {
    const { lng, lat, zoom } = this.state;
    return (
      <div className="relative">
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
        {/* <div className="sidebar">
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div> */}
        <div
          ref={this.mapContainer}
          className="map-container"
          style={{ width: "100%", height: "671px" }}
        />
      </div>
    );
  }
}
