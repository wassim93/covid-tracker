import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { useSelector } from "react-redux";
import { getDetails } from "../../features/countries/countrieSlice";
import "./map.css";
const Map = () => {
  const country = useSelector(getDetails);

  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });

  useEffect(() => {
    if (country.countryInfo !== undefined) {
      setMapCenter([country.countryInfo.lat, country.countryInfo.long]);
    } else {
      setMapCenter({ lat: 34.80746, lng: -40.4796 });
    }
  }, [country]);

  function UpdateMapCentre(props) {
    const map = useMap();
    map.panTo(props.mapCentre);
    country.countryInfo !== undefined ? map.setZoom(6) : map.setZoom(2);
    return null;
  }

  return (
    <div className="map">
      <MapContainer zoomControl="false">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <UpdateMapCentre mapCentre={mapCenter} />
      </MapContainer>
    </div>
  );
};

export default Map;
