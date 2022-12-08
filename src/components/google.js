import React from "react";
import map from "../img/icons/map.svg";
import "mapbox-gl/dist/mapbox-gl.css";

import Map, {
  Marker,
  NavigationControl,
  Popup,
  FullscreenControl,
  GeolocateControl,
} from "react-map-gl";
import { useState } from "react";

function Mapp() {
  const [lng, setLng] = useState(9.696536930830325);
  const [lat, setLat] = useState(4.051807752792534);
  const [zoom, setZoom] = useState(15);

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
      <Map
        mapboxAccessToken="pk.eyJ1IjoidGVkZHkyMzciLCJhIjoiY2xiZWphYWRwMDA0bzQwdXl1eDQwd25obCJ9.MB_Y-EUBwf7lnkB4qTfL-A"
        style={{
          width: "100%",
          height: "600px",
        }}
        initialViewState={{
          longitude: lng,
          latitude: lat,
          zoom: zoom,
        }}
        mapStyle="mapbox://styles/teddy237/clbc89taf000c14moitsiwd83"
      >
        {/* <Marker longitude={lng} latitude={lat} /> */}
        <NavigationControl position="bottom-right" />
        <FullscreenControl />

        <GeolocateControl />
      </Map>
    </div>
  );
}

export default Mapp;
