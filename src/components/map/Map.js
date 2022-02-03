import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { useSelector } from "react-redux";
import {
  getDetails,
  selectCountries,
} from "../../features/countries/countrieSlice";
import { ShowDataOnMap, ShowSingleCountryDataOnMap } from "../../utils/utils";
import "./map.css";
const Map = ({ caseType }) => {
  const country = useSelector(getDetails);
  const countries = useSelector(selectCountries);

  const [mapCenter, setMapCenter] = useState([0, 0]);

  useEffect(() => {
    if (country.countryInfo !== undefined) {
      setMapCenter([country.countryInfo.lat, country.countryInfo.long]);
    } else {
      setMapCenter([0, 0]);
    }
  }, [country]);

  function UpdateMapCentre(props) {
    const map = useMap();
    map.setMinZoom(2);

    if (country.countryInfo !== undefined) {
      map.setView(props.mapCentre, 5);
      // map.setZoom(4);
    } else {
      map.setView([10, 18], 2);
      // map.setZoom(2);
    }

    return null;
  }

  return (
    <div className="map">
      <MapContainer>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <UpdateMapCentre mapCentre={mapCenter} />
        {country.countryInfo === undefined
          ? ShowDataOnMap(countries, caseType)
          : ShowSingleCountryDataOnMap(country, caseType)}
      </MapContainer>
    </div>
  );
};

export default Map;
