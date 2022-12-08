import React from "react";
import map from "../img/icons/map.svg";
import "mapbox-gl/dist/mapbox-gl.css";

import Map, {
  Marker,
  NavigationControl,
  FullscreenControl,
  GeolocateControl,
} from "react-map-gl";
import { useState } from "react";

function Mapbox() {
  // douala
  const [lng, setLng] = useState(9.696536930830325);
  const [lat, setLat] = useState(4.051807752792534);
  const [zoom, setZoom] = useState(6);

  // yaounde
  const [lng1, setLng1] = useState(11.516120265390196);
  const [lat1, setLat1] = useState(3.86519988132557);

  // kribi
  const [lng2, setLng2] = useState(9.912503199280733);
  const [lat2, setLat2] = useState(2.9430159296634453);

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
          longitude1: lng1,
          latitude1: lat1,
          longitude1: lng2,
          latitude1: lat2,
          zoom: zoom,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        <NavigationControl position="bottom-right" />
        <FullscreenControl />
        <Marker longitude={lng} latitude={lat} />
        <Marker longitude={lng1} latitude={lat1} />
        <Marker longitude={lng2} latitude={lat2} />
      </Map>
    </div>
  );
}

export default Mapbox;
