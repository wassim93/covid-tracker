import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { useSelector } from "react-redux";
import {
  getDetails,
  selectCountries,
} from "../../features/countries/countrieSlice";
import { ShowDataOnMap, ShowSingleCountryDataOnMap } from "../../utils/utils";
import "./map.css";
const Map = () => {
  const country = useSelector(getDetails);
  const countries = useSelector(selectCountries);
  //console.log(ShowDataOnMap(countries));

  const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    if (country.countryInfo !== undefined) {
      setMapCenter([country.countryInfo.lat, country.countryInfo.long]);
    } else {
      setMapCenter({ lat: 0, lng: 0 });
    }
  }, [country]);

  function UpdateMapCentre(props) {
    //ShowDataOnMap(countries);

    const map = useMap();
    map.setMinZoom(2);

    if (country.countryInfo !== undefined) {
      map.panTo(props.mapCentre);
      map.setZoom(5);
    } else {
      map.setView([10, 18]);
      map.setZoom(2);
    }

    return null;
  }

  return (
    <div className="map">
      <MapContainer>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          noWrap="true"
        />

        <UpdateMapCentre mapCentre={mapCenter}></UpdateMapCentre>
        {country.countryInfo === undefined
          ? ShowDataOnMap(countries)
          : ShowSingleCountryDataOnMap(country)}
      </MapContainer>
    </div>
  );
};

export default Map;
