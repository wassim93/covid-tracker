import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "./map.css";
const Map = () => {
  const center = { lat: 34.80746, lng: -40.4796 };
  return (
    <div className="map">
      <MapContainer zoom="3" center={center}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
};

export default Map;
