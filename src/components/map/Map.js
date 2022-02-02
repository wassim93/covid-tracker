import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { useSelector } from "react-redux";
import {
  getCaseType,
  getDetails,
  selectCountries,
} from "../../features/countries/countrieSlice";
import { ShowDataOnMap, ShowSingleCountryDataOnMap } from "../../utils/utils";
import "./map.css";
const Map = () => {
  const country = useSelector(getDetails);
  const countries = useSelector(selectCountries);
  const caseType = useSelector(getCaseType);
  //console.log(caseType);

  //console.log(ShowDataOnMap(countries));

  const [mapCenter, setMapCenter] = useState([0, 0]);
  const circleRefs = useRef();
  //console.log(circleRefs);

  useEffect(() => {
    if (country.countryInfo !== undefined) {
      setMapCenter([country.countryInfo.lat, country.countryInfo.long]);
    } else {
      setMapCenter([0, 0]);
    }
  }, [country]);

  function UpdateMapCentre(props) {
    //ShowDataOnMap(countries);

    const map = useMap();
    map.setMinZoom(2);

    if (country.countryInfo !== undefined) {
      map.setView(props.mapCentre, 4);
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
          noWrap="true"
        />

        <UpdateMapCentre mapCentre={mapCenter} />
        {country.countryInfo === undefined
          ? ShowDataOnMap(countries, caseType, circleRefs)
          : ShowSingleCountryDataOnMap(country, caseType, circleRefs)}
      </MapContainer>
    </div>
  );
};

export default Map;
